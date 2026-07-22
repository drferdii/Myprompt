import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

const testDir = path.dirname(fileURLToPath(import.meta.url))
const rendererCss = readFileSync(path.resolve(testDir, '../../desktop/renderer/index.css'), 'utf8')
const rendererHtml = readFileSync(
  path.resolve(testDir, '../../desktop/renderer/index.html'),
  'utf8'
)

describe('Studio Rack visual contract', () => {
  it('uses the approved Graphite Lift material tokens', () => {
    expect(rendererCss).toContain('--bg: #0D0F13;')
    expect(rendererCss).toContain('--surface: #1D2127;')
    expect(rendererCss).toContain('--chassis-high: #2C3138;')
    expect(rendererCss).toContain('--chassis-low: #12161B;')
    expect(rendererCss).toContain('--console-display: #090F15;')
    expect(rendererCss).toContain('--text-secondary: #AAB5C0;')
    expect(rendererCss).toContain('--accent: #6F9FEF;')
  })

  it('renders functional rack hardware around a recessed display', () => {
    expect(rendererCss).toMatch(/\.front-panel\s*\{[\s\S]*?display:\s*flex/)
    expect(rendererCss).toMatch(/\.top-vent-section\s*\{[\s\S]*?display:\s*block/)
    expect(rendererCss).toMatch(/\.screen-area\s*\{[\s\S]*?margin:\s*28px 14px 48px/)
    expect(rendererCss).toMatch(
      /\.screen-content\s*\{[\s\S]*?background:\s*var\(--console-display\)/
    )
    expect(rendererCss).toMatch(/\.front-panel \.power-btn\s*\{[\s\S]*?position:\s*relative/)
  })

  it('preserves the existing workflow controls and drag exclusions', () => {
    for (const id of [
      'transformModeBtn',
      'optimizeModeBtn',
      'cmdInput',
      'clearBtn',
      'runBtn',
      'copyLastBtn',
      'miniToggleBtn',
      'powerBtn',
    ]) {
      expect(rendererHtml).toContain(`id="${id}"`)
    }

    expect(rendererCss).toMatch(
      /\.power-btn, \.mini-toggle-btn,[\s\S]*-webkit-app-region:\s*no-drag/
    )
  })
})
