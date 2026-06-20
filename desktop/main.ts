import { app, BrowserWindow, ipcMain, screen } from 'electron'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { parseEnv } from 'node:util'
import { loadEnvConfig } from '@next/env'
import { DEFAULT_MODEL_MAP } from '@/lib/constants'
import { loadDesktopSession } from '@/lib/desktop/session-store'
import { getScopedProviderOverrides } from '@/lib/llm/provider-registry'

import { registerAuthIpc } from './ipc/auth'
import { registerCoreIpc } from './ipc/core'
import { registerWorkspaceIpc } from './ipc/workspace'

let mainWindow: BrowserWindow | null = null
const isSmokeMode =
  process.env.SENTRA_DESKTOP_SMOKE === '1' ||
  process.argv.includes('--smoke') ||
  app.commandLine.hasSwitch('smoke')

function resolveDesktopProjectDir() {
  const sourceProjectDir = path.resolve(__dirname, '..')
  if (existsSync(path.join(sourceProjectDir, 'package.json'))) {
    return sourceProjectDir
  }

  const bundledProjectDir = path.resolve(__dirname, '..', '..')
  if (existsSync(path.join(bundledProjectDir, 'package.json'))) {
    return bundledProjectDir
  }

  return process.cwd()
}

const DESKTOP_ENV_OVERRIDE_KEYS = [
  'OPENAI_API_KEY',
  'OPENAI_BASE_URL',
  'OPENAI_MODEL',
  'OPTIMIZER_INTERACTIVE_OPENAI_BASE_URL',
  'OPTIMIZER_INTERACTIVE_OPENAI_MODEL',
  'OPTIMIZER_DEEP_OPENAI_BASE_URL',
  'OPTIMIZER_DEEP_OPENAI_MODEL',
  'OPTIMIZER_OPENAI_BASE_URL',
  'OPTIMIZER_OPENAI_MODEL',
  'EVALUATOR_OPENAI_BASE_URL',
  'EVALUATOR_OPENAI_MODEL',
  'XAI_API_KEY',
  'ANTHROPIC_API_KEY',
  'MISTRAL_API_KEY',
  'QWEN_API_KEY',
  'SENTRA_DESKTOP_PROVIDER',
] as const

function applyDesktopEnvOverrides(projectDir: string) {
  if (process.env.NODE_ENV === 'test') {
    return
  }

  for (const fileName of ['.env', '.env.local']) {
    const envPath = path.join(projectDir, fileName)

    if (!existsSync(envPath)) {
      continue
    }

    const parsedEnv = parseEnv(readFileSync(envPath, 'utf8'))

    for (const key of DESKTOP_ENV_OVERRIDE_KEYS) {
      const value = parsedEnv[key]
      if (typeof value === 'string' && value.trim()) {
        process.env[key] = value.trim()
      }
    }
  }
}

function loadDesktopEnv() {
  const projectDir = resolveDesktopProjectDir()
  loadEnvConfig(projectDir)
  applyDesktopEnvOverrides(projectDir)
}

loadDesktopEnv()

type DesktopProviderName =
  | 'CLAUDE'
  | 'OPENAI'
  | 'MISTRAL'
  | 'QWEN'
  | 'GROK'

interface DesktopShellProviderState {
  modelChip: string
  preferredModel: string
  preferredProvider: DesktopProviderName
  optimizerLaneStates?: Record<
    'INTERACTIVE' | 'DEEP',
    {
      modelChip: string
      preferredModel: string
    }
  >
}

interface DesktopShellBadge {
  id: string
  label: string
  tone: 'muted' | 'danger'
}

type DesktopOptimizerLane = 'INTERACTIVE' | 'DEEP'

function getOptimizerOpenAiOverrides(lane?: DesktopOptimizerLane) {
  return getScopedProviderOverrides('OPENAI', 'OPTIMIZER', lane)
}

function resolveOpenAiModel(lane?: DesktopOptimizerLane) {
  const { model: configuredModel, baseUrl } = getOptimizerOpenAiOverrides(lane)

  if (configuredModel) {
    return configuredModel
  }

  const usesExplicitCompatBaseUrl = Boolean(baseUrl)

  if (usesExplicitCompatBaseUrl) {
    return null
  }

  return DEFAULT_MODEL_MAP.OPENAI
}

function usesPioneerOpenAiCompat(lane?: DesktopOptimizerLane) {
  const baseUrl = getOptimizerOpenAiOverrides(lane).baseUrl || ''
  return /api\.pioneer\.ai\/v1\/?$/i.test(baseUrl)
}

function buildOpenAiLaneState(lane: DesktopOptimizerLane) {
  const model = resolveOpenAiModel(lane)
  const isPioneer = usesPioneerOpenAiCompat(lane)

  return {
    preferredModel: model ?? 'model-required',
    modelChip: model
      ? isPioneer
        ? `pioneer/${model.replace(/^MiniMaxAI\//, '').toLowerCase()}`
        : model
      : isPioneer
        ? 'pioneer/model-required'
        : 'openai-compatible/model-required',
  }
}

function getShellProviderState(): DesktopShellProviderState {
  if (process.env.OPENAI_API_KEY?.trim() && usesPioneerOpenAiCompat('INTERACTIVE')) {
    const interactiveLaneState = buildOpenAiLaneState('INTERACTIVE')
    const deepLaneState = buildOpenAiLaneState('DEEP')
    return {
      preferredProvider: 'OPENAI',
      preferredModel: interactiveLaneState.preferredModel,
      modelChip: interactiveLaneState.modelChip,
      optimizerLaneStates: {
        INTERACTIVE: interactiveLaneState,
        DEEP: deepLaneState,
      },
    }
  }

  if (process.env.XAI_API_KEY?.trim()) {
    return {
      preferredProvider: 'GROK',
      preferredModel: 'grok-3-fast',
      modelChip: 'grok-3-fast',
    }
  }

  if (process.env.OPENAI_API_KEY?.trim()) {
    const interactiveLaneState = buildOpenAiLaneState('INTERACTIVE')
    const deepLaneState = buildOpenAiLaneState('DEEP')
    return {
      preferredProvider: 'OPENAI',
      preferredModel: interactiveLaneState.preferredModel,
      modelChip: interactiveLaneState.modelChip,
      optimizerLaneStates: {
        INTERACTIVE: interactiveLaneState,
        DEEP: deepLaneState,
      },
    }
  }

  if (process.env.ANTHROPIC_API_KEY?.trim()) {
    return {
      preferredProvider: 'CLAUDE',
      preferredModel: 'claude-sonnet-4',
      modelChip: 'claude-ready',
    }
  }

  return {
    preferredProvider: 'GROK',
    preferredModel: 'grok-3-fast',
    modelChip: 'env-required',
  }
}

async function buildShellBadges(
  providerState: DesktopShellProviderState
): Promise<DesktopShellBadge[]> {
  const badges: DesktopShellBadge[] = []
  const session = await loadDesktopSession().catch(() => null)

  if (!session?.access_token) {
    badges.push({
      id: 'guest',
      label: 'Guest',
      tone: 'muted',
    })
  }

  if (providerState.modelChip.includes('required')) {
    badges.push({
      id: 'provider-missing',
      label: 'Provider Missing',
      tone: 'danger',
    })
  }

  return badges
}

function appendDesktopEnvWarning() {
  if (isSmokeMode) {
    return
  }

  const providerState = getShellProviderState()
  const hasAnyDesktopProvider =
    process.env.XAI_API_KEY?.trim() ||
    process.env.OPENAI_API_KEY?.trim() ||
    process.env.ANTHROPIC_API_KEY?.trim()

  if (hasAnyDesktopProvider) {
    return
  }

  console.warn(
    `[sentra-desktop] No desktop LLM provider key is loaded. ` +
      `Current fallback provider is ${providerState.preferredProvider}. ` +
      `Set the matching key in .env.local, process env, or OS env before using Optimizer/Evaluator.`
  )
}

const DEFAULT_WINDOW = { width: 460, height: 620, x: 0, y: 0 }

function loadWindowState(): typeof DEFAULT_WINDOW {
  // Position at top-right of primary display
  try {
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width: screenW } = primaryDisplay.workAreaSize
    return { width: 460, height: 620, x: screenW - 460 - 20, y: 20 }
  } catch {
    return { ...DEFAULT_WINDOW }
  }
}

function resolveDesktopWorkspaceFilePath() {
  const baseDir =
    typeof app.getPath === 'function'
      ? app.getPath('userData')
      : path.join(resolveDesktopProjectDir(), '.desktop-runtime')

  return path.join(baseDir, 'sentra-desktop-workspace.json')
}

function createWindow() {
  const winState = loadWindowState()

  mainWindow = new BrowserWindow({
    width: winState.width,
    height: winState.height,
    ...(winState.x !== undefined && winState.y !== undefined
      ? { x: winState.x, y: winState.y }
      : {}),
    resizable: true,
    minWidth: 320,
    minHeight: 480,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    show: !isSmokeMode,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'))

  if (isSmokeMode) {
    const exitSmokeMode = () => {
      setTimeout(() => {
        app.exit(0)
      }, 250)
    }

    mainWindow.webContents.once('did-finish-load', () => {
      exitSmokeMode()
    })
    setTimeout(exitSmokeMode, 2000)
    return
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow?.show()
  })

  mainWindow.on('close', () => {
    // No saved window state; initial load always resets to the default position.
  })
}

app.whenReady().then(() => {
  const providerState = getShellProviderState()
  registerWorkspaceIpc(resolveDesktopWorkspaceFilePath())

  ipcMain.handle('app:get-shell-state', async () => {
    const badges = await buildShellBadges(providerState)

    return {
      appName: 'Sentra Prompt Console',
      modelChip: providerState.modelChip,
      preferredModel: providerState.preferredModel,
      preferredProvider: providerState.preferredProvider,
      ...(providerState.optimizerLaneStates
        ? { optimizerLaneStates: providerState.optimizerLaneStates }
        : {}),
      ...(badges.length > 0 ? { badges } : {}),
    }
  })

  ipcMain.handle('desktop:toggle-mini', (_event, payload) => {
    if (!mainWindow || isSmokeMode) return
    const { mode } = payload as { mode?: 'expanded' | 'normal' }
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize

    if (mode === 'expanded') {
      const panelWidth = 452
      const panelHeight = 612
      mainWindow.setBounds({
        x: width - panelWidth - 16,
        y: 16,
        width: panelWidth,
        height: panelHeight,
      })
    } else {
      const { width: sw } = primaryDisplay.workAreaSize
      mainWindow.setBounds({ x: sw - 460 - 20, y: 20, width: 460, height: 620 })
    }
  })

  registerAuthIpc()
  registerCoreIpc()
  appendDesktopEnvWarning()
  createWindow()
})
