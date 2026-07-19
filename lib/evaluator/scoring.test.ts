import { describe, expect, it } from 'vitest'
import {
  getScoreLabel,
  getScoreColor,
  calculateOverallScore,
  normalizeScores
} from './scoring'
import type { EvaluationDimension } from '@/types'

describe('scoring', () => {
  describe('getScoreLabel', () => {
    it('should return "Exceptional" for scores >= 9', () => {
      expect(getScoreLabel(10)).toBe('Exceptional')
      expect(getScoreLabel(9.1)).toBe('Exceptional')
      expect(getScoreLabel(9.0)).toBe('Exceptional') // Boundary
    })

    it('should return "Good" for scores >= 7 and < 9', () => {
      expect(getScoreLabel(8.9)).toBe('Good') // Boundary
      expect(getScoreLabel(7.5)).toBe('Good')
      expect(getScoreLabel(7.0)).toBe('Good') // Boundary
    })

    it('should return "Adequate" for scores >= 5 and < 7', () => {
      expect(getScoreLabel(6.9)).toBe('Adequate') // Boundary
      expect(getScoreLabel(6.0)).toBe('Adequate')
      expect(getScoreLabel(5.0)).toBe('Adequate') // Boundary
    })

    it('should return "Below Average" for scores >= 3 and < 5', () => {
      expect(getScoreLabel(4.9)).toBe('Below Average') // Boundary
      expect(getScoreLabel(4.0)).toBe('Below Average')
      expect(getScoreLabel(3.0)).toBe('Below Average') // Boundary
    })

    it('should return "Poor" for scores < 3', () => {
      expect(getScoreLabel(2.9)).toBe('Poor') // Boundary
      expect(getScoreLabel(1.5)).toBe('Poor')
      expect(getScoreLabel(0)).toBe('Poor')
      expect(getScoreLabel(-5)).toBe('Poor') // Negative score
    })
  })

  describe('getScoreColor', () => {
    it('should return "text-green-400" for scores >= 8', () => {
      expect(getScoreColor(10)).toBe('text-green-400')
      expect(getScoreColor(8.0)).toBe('text-green-400') // Boundary
    })

    it('should return "text-yellow-400" for scores >= 6 and < 8', () => {
      expect(getScoreColor(7.9)).toBe('text-yellow-400') // Boundary
      expect(getScoreColor(6.0)).toBe('text-yellow-400') // Boundary
    })

    it('should return "text-orange-400" for scores >= 4 and < 6', () => {
      expect(getScoreColor(5.9)).toBe('text-orange-400') // Boundary
      expect(getScoreColor(4.0)).toBe('text-orange-400') // Boundary
    })

    it('should return "text-red-400" for scores < 4', () => {
      expect(getScoreColor(3.9)).toBe('text-red-400') // Boundary
      expect(getScoreColor(0)).toBe('text-red-400')
    })
  })

  describe('calculateOverallScore', () => {
    it('should return 0 when total weight is 0', () => {
      const dimensions: EvaluationDimension[] = [
        { key: 'a', label: 'A', score: 10, feedback: '', weight: 0 },
        { key: 'b', label: 'B', score: 5, feedback: '', weight: 0 }
      ]
      expect(calculateOverallScore(dimensions)).toBe(0)
    })

    it('should calculate weighted average and round to 1 decimal place', () => {
      const dimensions: EvaluationDimension[] = [
        { key: 'a', label: 'A', score: 10, feedback: '', weight: 3 },
        { key: 'b', label: 'B', score: 5, feedback: '', weight: 1 }
      ]
      // (10 * 3 + 5 * 1) / 4 = 35 / 4 = 8.75 -> rounded to 8.8
      expect(calculateOverallScore(dimensions)).toBe(8.8)
    })

    it('should handle equal weights correctly', () => {
      const dimensions: EvaluationDimension[] = [
        { key: 'a', label: 'A', score: 8, feedback: '', weight: 1 },
        { key: 'b', label: 'B', score: 6, feedback: '', weight: 1 }
      ]
      expect(calculateOverallScore(dimensions)).toBe(7.0)
    })
  })

  describe('normalizeScores', () => {
    it('should clamp scores between 0 and 10', () => {
      const raw = {
        structure: { score: 12, feedback: 'Great' },
        clarity: { score: -2, feedback: 'Vague' }
      }
      const normalized = normalizeScores(raw)

      const structureDim = normalized.find(d => d.key === 'structure')
      expect(structureDim?.score).toBe(10)

      const clarityDim = normalized.find(d => d.key === 'clarity')
      expect(clarityDim?.score).toBe(0)
    })

    it('should provide default score and feedback if dimension is missing in raw scores', () => {
      const raw = {}
      const normalized = normalizeScores(raw)

      for (const dim of normalized) {
        expect(dim.score).toBe(5)
        expect(dim.feedback).toBe('No feedback available')
      }
    })
  })
})
