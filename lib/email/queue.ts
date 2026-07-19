import { z } from 'zod'

import type { Prisma } from '@prisma/client'

import { prisma } from '@/lib/db/prisma'
import { logger } from '@/lib/logger'
import { sendWelcomeEmail } from '@/lib/email/welcome'

const welcomePayloadSchema = z.object({
  name: z.string().nullable(),
})

type EmailQueueClient = typeof prisma | Prisma.TransactionClient

export interface EmailQueueProcessingResult {
  claimed: number
  sent: number
  failed: number
  retried: number
  skipped: number
}

function computeRetryDelayMs(attempt: number): number {
  return Math.min(15 * 60_000, Math.max(60_000, 2 ** (attempt - 1) * 60_000))
}

async function maybePruneFinishedJobs(now: Date) {
  if (Math.random() > 0.02) {
    return
  }

  const cutoff = new Date(now.getTime() - 14 * 24 * 60 * 60_000)
  await prisma.emailJob.deleteMany({
    where: {
      status: {
        in: ['SENT', 'FAILED'],
      },
      updatedAt: {
        lt: cutoff,
      },
    },
  })
}

export async function enqueueWelcomeEmail(
  params: {
    userId: string
    email: string
    name: string | null
  },
  client: EmailQueueClient = prisma
) {
  return client.emailJob.upsert({
    where: {
      idempotencyKey: `welcome:${params.userId}`,
    },
    update: {
      toEmail: params.email,
      payload: { name: params.name },
      status: 'PENDING',
      attempts: 0,
      maxAttempts: 5,
      nextAttemptAt: new Date(),
      lastError: null,
    },
    create: {
      type: 'WELCOME',
      toEmail: params.email,
      payload: { name: params.name },
      idempotencyKey: `welcome:${params.userId}`,
      maxAttempts: 5,
    },
  })
}

async function deliverEmailJob(job: {
  type: 'WELCOME'
  toEmail: string
  payload: Prisma.JsonValue
}) {
  if (job.type === 'WELCOME') {
    const payload = welcomePayloadSchema.parse(job.payload)
    await sendWelcomeEmail(job.toEmail, payload.name)
  }
}

export async function processEmailQueue(
  options: { limit?: number; now?: Date } = {}
): Promise<EmailQueueProcessingResult> {
  const now = options.now ?? new Date()
  const limit = options.limit ?? 10

  await maybePruneFinishedJobs(now)

  if (!process.env.RESEND_API_KEY) {
    logger.warn({ route: '/lib/email/queue' }, 'Skipping email queue processing because RESEND_API_KEY is missing')
    return {
      claimed: 0,
      sent: 0,
      failed: 0,
      retried: 0,
      skipped: 0,
    }
  }

  const dueJobs = await prisma.emailJob.findMany({
    where: {
      status: {
        in: ['PENDING', 'RETRYING'],
      },
      nextAttemptAt: {
        lte: now,
      },
    },
    orderBy: [{ nextAttemptAt: 'asc' }, { createdAt: 'asc' }],
    take: limit,
  })

  const summary: EmailQueueProcessingResult = {
    claimed: 0,
    sent: 0,
    failed: 0,
    retried: 0,
    skipped: 0,
  }

  if (dueJobs.length === 0) {
    return summary
  }

  const jobIds = dueJobs.map((job) => job.id)

  // Batch claim all due jobs to minimize database roundtrips and eliminate N+1 claim queries
  await prisma.emailJob.updateMany({
    where: {
      id: {
        in: jobIds,
      },
      status: {
        in: ['PENDING', 'RETRYING'],
      },
    },
    data: {
      status: 'PROCESSING',
      attempts: {
        increment: 1,
      },
      lastAttemptAt: now,
      lastError: null,
    },
  })

  // Fetch the successfully claimed jobs to process them.
  // We filter on lastAttemptAt to guarantee we only retrieve jobs successfully claimed in this run.
  const claimedJobs = await prisma.emailJob.findMany({
    where: {
      id: {
        in: jobIds,
      },
      status: 'PROCESSING',
      lastAttemptAt: now,
    },
  })

  summary.skipped = dueJobs.length - claimedJobs.length

  for (const job of claimedJobs) {
    summary.claimed += 1
    const attemptNumber = job.attempts // attempts has already been incremented in the batch update

    try {
      await deliverEmailJob({
        type: job.type,
        toEmail: job.toEmail,
        payload: job.payload,
      })

      await prisma.emailJob.update({
        where: { id: job.id },
        data: {
          status: 'SENT',
          sentAt: now,
          lastError: null,
        },
      })

      summary.sent += 1
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unknown email delivery error'
      const shouldRetry = attemptNumber < job.maxAttempts

      await prisma.emailJob.update({
        where: { id: job.id },
        data: shouldRetry
          ? {
              status: 'RETRYING',
              nextAttemptAt: new Date(now.getTime() + computeRetryDelayMs(attemptNumber)),
              lastError: message,
            }
          : {
              status: 'FAILED',
              lastError: message,
            },
      })

      if (shouldRetry) {
        summary.retried += 1
      } else {
        summary.failed += 1
      }

      logger.error({ route: '/lib/email/queue', jobId: job.id, type: job.type }, error)
    }
  }

  return summary
}
