import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createWorkspaceStore } from './workspace-store'
import * as fsPromises from 'node:fs/promises'

vi.mock('node:fs', () => {
  return {
    existsSync: () => false,
    default: {
      existsSync: () => false,
    }
  }
})

vi.mock('node:fs/promises', () => {
  const mkdirMock = vi.fn().mockResolvedValue(undefined)
  const readFileMock = vi.fn().mockResolvedValue('')
  const renameMock = vi.fn().mockResolvedValue(undefined)
  const rmMock = vi.fn().mockResolvedValue(undefined)
  const writeFileMock = vi.fn().mockResolvedValue(undefined)

  return {
    mkdir: mkdirMock,
    readFile: readFileMock,
    rename: renameMock,
    rm: rmMock,
    writeFile: writeFileMock,
    default: {
      mkdir: mkdirMock,
      readFile: readFileMock,
      rename: renameMock,
      rm: rmMock,
      writeFile: writeFileMock,
    }
  }
})

describe('createWorkspaceStore', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('generates secure temporary file path with randomUUID', async () => {
    const store = createWorkspaceStore('/mock/path/workspace.json')
    await store.write({
      drafts: [],
      recentRuns: [],
      benchmarks: [],
    })

    // Match randomUUID length and structure: exactly 36 characters with hyphens
    // e.g. /mock/path/workspace.json.PID.TIMESTAMP.UUID.tmp
    // UUID format is: 8-4-4-4-12 hex chars (total 36 chars)
    expect(fsPromises.writeFile).toHaveBeenCalledWith(
      expect.stringMatching(/\/mock\/path\/workspace\.json\.\d+\.\d+\.[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\.tmp$/),
      expect.any(String),
      'utf8'
    )
  })
})
