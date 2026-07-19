import { describe, expect, it } from 'vitest'
import fs from 'fs'
import path from 'path'

describe('Security: XSS Prevention in buildCatalogItemMarkup', () => {
  it('should safely construct elements using DOM APIs and prevent HTML injection', () => {
    // Read and extract buildCatalogItemMarkup from renderer.ts
    const filePath = path.resolve(__dirname, '../../desktop/renderer/renderer.ts')
    const fileContent = fs.readFileSync(filePath, 'utf8')

    // Extract function body of buildCatalogItemMarkup
    const funcMatch = fileContent.match(/function buildCatalogItemMarkup\s*\((.*?)\)\s*\{([\s\S]*?)\n\}/)
    if (!funcMatch) {
      throw new Error('Could not find buildCatalogItemMarkup in renderer.ts')
    }

    // Construct the function dynamically
    const params = funcMatch[1].split(',').map(p => p.split(':')[0].trim())
    const body = funcMatch[2]
    const buildCatalogItemMarkup = new Function(params[0], params[1], body)

    // Test with benign inputs
    const benignFrag = buildCatalogItemMarkup('/help', 'Show help') as DocumentFragment
    const benignDiv = document.createElement('div')
    benignDiv.appendChild(benignFrag)
    expect(benignDiv.innerHTML).toBe('<strong>/help</strong><span>Show help</span>')

    // Test with malicious inputs containing XSS payloads
    const xssSlash = '</strong><script>alert("slash-xss")</script><strong>'
    const xssSummary = '</span><img src="x" onerror="alert(\'summary-xss\')"><span>'

    const maliciousFrag = buildCatalogItemMarkup(xssSlash, xssSummary) as DocumentFragment
    const maliciousDiv = document.createElement('div')
    maliciousDiv.appendChild(maliciousFrag)

    // Ensure the generated HTML is completely safe (i.e., tags are escaped as textContent)
    expect(maliciousDiv.querySelector('script')).toBeNull()
    expect(maliciousDiv.querySelector('img')).toBeNull()

    // The strong and span elements should contain the exact input strings as text
    const strongEl = maliciousDiv.querySelector('strong')
    const spanEl = maliciousDiv.querySelector('span')

    expect(strongEl).not.toBeNull()
    expect(strongEl!.textContent).toBe(xssSlash)

    expect(spanEl).not.toBeNull()
    expect(spanEl!.textContent).toBe(xssSummary)
  })
})
