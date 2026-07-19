import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { processEmailQueue } from './queue'
import { prisma } from '@/lib/db/prisma'
import { sendWelcomeEmail } from '@/lib/email/welcome'

vi.mock('@/lib/db/prisma', () => {
  return {
    prisma: {
      emailJob: {
        findMany: vi.fn(),
        updateMany: vi.fn(),
        update: vi.fn(),
        deleteMany: vi.fn(),
      },
    },
  }
})

vi.mock('@/lib/email/welcome', () => {
  return {
    sendWelcomeEmail: vi.fn(),
  }
})

describe('processEmailQueue', () => {
  const originalEnv = process.env

  beforeEach(() => {
    vi.clearAllMocks()
    process.env = { ...originalEnv, RESEND_API_KEY: 'mock_key' }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('should return empty summary if no due jobs', async () => {
    vi.mocked(prisma.emailJob.findMany).mockResolvedValueOnce([])

    const result = await processEmailQueue()

    expect(result).toEqual({
      claimed: 0,
      sent: 0,
      failed: 0,
      retried: 0,
      skipped: 0,
    })
    expect(prisma.emailJob.findMany).toHaveBeenCalledTimes(1)
    expect(prisma.emailJob.updateMany).not.toHaveBeenCalled()
  })

  it('should process due jobs successfully', async () => {
    const mockNow = new Date()
    const mockJobs = [
      {
        id: 'job-1',
        type: 'WELCOME' as const,
        toEmail: 'test@example.com',
        payload: { name: 'Alice' },
        status: 'PENDING' as const,
        attempts: 0,
        maxAttempts: 5,
        nextAttemptAt: mockNow,
        lastAttemptAt: null,
        sentAt: null,
        lastError: null,
        idempotencyKey: null,
        createdAt: mockNow,
        updatedAt: mockNow,
      },
    ]

    vi.mocked(prisma.emailJob.findMany).mockResolvedValueOnce(mockJobs)
    vi.mocked(prisma.emailJob.updateMany).mockResolvedValueOnce({ count: 1 })
    vi.mocked(prisma.emailJob.findMany).mockResolvedValueOnce([
      { ...mockJobs[0], status: 'PROCESSING', attempts: 1, lastAttemptAt: mockNow },
    ])
    vi.mocked(sendWelcomeEmail).mockResolvedValueOnce()
    vi.mocked(prisma.emailJob.update).mockResolvedValueOnce({} as any)

    const result = await processEmailQueue({ now: mockNow })

    expect(result).toEqual({
      claimed: 1,
      sent: 1,
      failed: 0,
      retried: 0,
      skipped: 0,
    })

    expect(prisma.emailJob.findMany).toHaveBeenNthCalledWith(1, {
      where: {
        status: { in: ['PENDING', 'RETRYING'] },
        nextAttemptAt: { lte: mockNow },
      },
      orderBy: [{ nextAttemptAt: 'asc' }, { createdAt: 'asc' }],
      take: 10,
    })

    expect(prisma.emailJob.updateMany).toHaveBeenCalledWith({
      where: {
        id: { in: ['job-1'] },
        status: { in: ['PENDING', 'RETRYING'] },
      },
      data: {
        status: 'PROCESSING',
        attempts: { increment: 1 },
        lastAttemptAt: mockNow,
        lastError: null,
      },
    })

    expect(prisma.emailJob.findMany).toHaveBeenNthCalledWith(2, {
      where: {
        id: { in: ['job-1'] },
        status: 'PROCESSING',
        lastAttemptAt: mockNow,
      },
    })

    expect(sendWelcomeEmail).toHaveBeenCalledWith('test@example.com', 'Alice')
    expect(prisma.emailJob.update).toHaveBeenCalledWith({
      where: { id: 'job-1' },
      data: {
        status: 'SENT',
        sentAt: mockNow,
        lastError: null,
      },
    })
  })

  it('should handle delivery failure and retry if attempts < maxAttempts', async () => {
    const mockNow = new Date()
    const mockJobs = [
      {
        id: 'job-2',
        type: 'WELCOME' as const,
        toEmail: 'fail@example.com',
        payload: { name: 'Bob' },
        status: 'PENDING' as const,
        attempts: 0,
        maxAttempts: 5,
        nextAttemptAt: mockNow,
        lastAttemptAt: null,
        sentAt: null,
        lastError: null,
        idempotencyKey: null,
        createdAt: mockNow,
        updatedAt: mockNow,
      },
    ]

    vi.mocked(prisma.emailJob.findMany).mockResolvedValueOnce(mockJobs)
    vi.mocked(prisma.emailJob.updateMany).mockResolvedValueOnce({ count: 1 })
    vi.mocked(prisma.emailJob.findMany).mockResolvedValueOnce([
      { ...mockJobs[0], status: 'PROCESSING', attempts: 1, lastAttemptAt: mockNow },
    ])
    vi.mocked(sendWelcomeEmail).mockRejectedValueOnce(new Error('Connection timed out'))
    vi.mocked(prisma.emailJob.update).mockResolvedValueOnce({} as any)

    const result = await processEmailQueue({ now: mockNow })

    expect(result).toEqual({
      claimed: 1,
      sent: 0,
      failed: 0,
      retried: 1,
      skipped: 0,
    })

    expect(prisma.emailJob.update).toHaveBeenCalledWith({
      where: { id: 'job-2' },
      data: {
        status: 'RETRYING',
        nextAttemptAt: expect.any(Date),
        lastError: 'Connection timed out',
      },
    })
  })

  it('should handle delivery failure and mark as FAILED if attempts >= maxAttempts', async () => {
    const mockNow = new Date()
    const mockJobs = [
      {
        id: 'job-3',
        type: 'WELCOME' as const,
        toEmail: 'fail-last@example.com',
        payload: { name: 'Charlie' },
        status: 'RETRYING' as const,
        attempts: 4,
        maxAttempts: 5,
        nextAttemptAt: mockNow,
        lastAttemptAt: null,
        sentAt: null,
        lastError: null,
        idempotencyKey: null,
        createdAt: mockNow,
        updatedAt: mockNow,
      },
    ]

    vi.mocked(prisma.emailJob.findMany).mockResolvedValueOnce(mockJobs)
    vi.mocked(prisma.emailJob.updateMany).mockResolvedValueOnce({ count: 1 })
    vi.mocked(prisma.emailJob.findMany).mockResolvedValueOnce([
      { ...mockJobs[0], status: 'PROCESSING', attempts: 5, lastAttemptAt: mockNow },
    ])
    vi.mocked(sendWelcomeEmail).mockRejectedValueOnce(new Error('SMTP Rejected'))
    vi.mocked(prisma.emailJob.update).mockResolvedValueOnce({} as any)

    const result = await processEmailQueue({ now: mockNow })

    expect(result).toEqual({
      claimed: 1,
      sent: 0,
      failed: 1,
      retried: 0,
      skipped: 0,
    })

    expect(prisma.emailJob.update).toHaveBeenCalledWith({
      where: { id: 'job-3' },
      data: {
        status: 'FAILED',
        lastError: 'SMTP Rejected',
      },
    })
  })
})
