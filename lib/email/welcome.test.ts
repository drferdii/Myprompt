import { describe, expect, it } from 'vitest'
import { buildWelcomeHtml } from './templates/welcome'

describe('buildWelcomeHtml', () => {
  it('should build HTML with the provided custom name', () => {
    const html = buildWelcomeHtml('Jules')

    expect(html).toContain('Selamat datang, Jules! 🎉')
    expect(html).toContain('<!DOCTYPE html>')
    expect(html).toContain('Classy CTE')
    expect(html).toContain('Mulai Sekarang')
  })

  it('should fall back to default name "Sobat Classy" when name is empty', () => {
    const html = buildWelcomeHtml('')

    expect(html).toContain('Selamat datang, Sobat Classy! 🎉')
    expect(html).toContain('<!DOCTYPE html>')
  })
})
