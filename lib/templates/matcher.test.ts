import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { matchTemplate, matchTemplateWithEmbeddings, _clearEmbeddingCacheForTest } from './matcher'
import { allTemplates, templatesByCategory } from '@/data/templates'
import type { TemplateDefinition } from '@/types'

// Mock generator embeddings
vi.mock('@/lib/embeddings/generator', () => {
  return {
    generateEmbedding: vi.fn(async (text: string) => {
      if (text.includes('kode') || text.includes('code') || text.includes('coding')) return [1, 0, 0]
      if (text.includes('surat') || text.includes('email')) return [0, 1, 0]
      return [0, 0, 1]
    }),
    generateEmbeddings: vi.fn(async (texts: string[]) => {
      return texts.map((t) => {
        if (t.includes('kode') || t.includes('code') || t.includes('Coding')) return [1, 0, 0]
        if (t.includes('surat') || t.includes('email') || t.includes('Email')) return [0, 1, 0]
        return [0, 0, 1]
      })
    })
  }
})

describe('matcher', () => {
  const sampleCodingTemplate: TemplateDefinition = {
    slug: 'coding-standard',
    name: 'Coding Standard Template',
    description: 'Use this template to format and standardise your programming codes and scripts.',
    category: 'CODING',
    template: {
      role: 'Senior developer',
      taskStructure: 'Write clean code',
      cotGuidance: 'Think step-by-step',
      constraints: ['Use ESLint'],
      formatSpec: 'Markdown code block',
      qualityChecklist: ['Is it readable?']
    },
    variables: []
  }

  const sampleEmailTemplate: TemplateDefinition = {
    slug: 'email-outreach',
    name: 'Email Outreach',
    description: 'Write effective emails or messages to prospect clients.',
    category: 'EMAIL',
    template: {
      role: 'Sales representative',
      taskStructure: 'Write sales email',
      cotGuidance: 'Understand user pain point',
      constraints: ['Keep under 200 words'],
      formatSpec: 'Email draft',
      qualityChecklist: ['Clear CTA?']
    },
    variables: []
  }

  beforeEach(() => {
    _clearEmbeddingCacheForTest()
    allTemplates.length = 0
    allTemplates.push(sampleCodingTemplate, sampleEmailTemplate)

    templatesByCategory.CODING = [sampleCodingTemplate]
    templatesByCategory.EMAIL = [sampleEmailTemplate]
  })

  afterEach(() => {
    allTemplates.length = 0
    templatesByCategory.CODING = []
    templatesByCategory.EMAIL = []
    _clearEmbeddingCacheForTest()
  })

  describe('matchTemplate (Keyword Matcher)', () => {
    it('should find best match in specific category based on synonyms', () => {
      // "kode" should map to sampleCodingTemplate in CODING category
      const matched = matchTemplate('tolong bikinkan kode python', 'CODING')
      expect(matched).toBeDefined()
      expect(matched?.slug).toBe('coding-standard')
    })

    it('should find best match in GENERAL category across all templates', () => {
      const matched = matchTemplate('surat penawaran kerja', 'GENERAL')
      expect(matched).toBeDefined()
      expect(matched?.slug).toBe('email-outreach')
    })

    it('should return undefined if no template matches above threshold', () => {
      const matched = matchTemplate('some completely unrelated query with no overlap', 'GENERAL')
      expect(matched).toBeUndefined()
    })
  })

  describe('matchTemplateWithEmbeddings (Hybrid Matcher)', () => {
    it('should fall back to keyword matching or return best match semantic-wise', async () => {
      const matched = await matchTemplateWithEmbeddings('buatkan coding python terbaik', 'CODING')
      expect(matched).toBeDefined()
      expect(matched?.slug).toBe('coding-standard')
    })

    it('should handle category candidate filtering correctly', async () => {
      const matched = await matchTemplateWithEmbeddings('email penawaran', 'EMAIL')
      expect(matched).toBeDefined()
      expect(matched?.slug).toBe('email-outreach')
    })
  })
})
