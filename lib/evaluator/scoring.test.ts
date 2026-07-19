import { describe, expect, it } from 'vitest'
import {
  calculateOverallScore,
  normalizeScores,
  getScoreLabel,
  getScoreColor,
} from './scoring'
import type { EvaluationDimension } from '@/types'

describe('scoring', () => {
  describe('calculateOverallScore', () => {
    it('should calculate weighted average correctly for equally weighted dimensions', () => {
      const dimensions: EvaluationDimension[] = [
        { key: 'structure', label: 'Structure', score: 8, weight: 0.25, feedback: '' },
        { key: 'clarity', label: 'Clarity', score: 6, weight: 0.25, feedback: '' },
        { key: 'completeness', label: 'Completeness', score: 10, weight: 0.25, feedback: '' },
        { key: 'specificity', label: 'Specificity', score: 8, weight: 0.25, feedback: '' },
      ]
      // weighted sum: 8*0.25 + 6*0.25 + 10*0.25 + 8*0.25 = 2 + 1.5 + 2.5 + 2 = 8
      expect(calculateOverallScore(dimensions)).toBe(8)
    })

    it('should calculate weighted average correctly for unequally weighted dimensions', () => {
      const dimensions: EvaluationDimension[] = [
        { key: 'structure', label: 'Structure', score: 9, weight: 0.4, feedback: '' },
        { key: 'clarity', label: 'Clarity', score: 5, weight: 0.1, feedback: '' },
        { key: 'completeness', label: 'Completeness', score: 8, weight: 0.3, feedback: '' },
        { key: 'specificity', label: 'Specificity', score: 7, weight: 0.2, feedback: '' },
      ]
      // weighted sum: 9*0.4 + 5*0.1 + 8*0.3 + 7*0.2 = 3.6 + 0.5 + 2.4 + 1.4 = 7.9
      expect(calculateOverallScore(dimensions)).toBe(7.9)
    })

    it('should correctly round score to one decimal place', () => {
      const dimensions: EvaluationDimension[] = [
        { key: 'structure', label: 'Structure', score: 8.33, weight: 0.5, feedback: '' },
        { key: 'clarity', label: 'Clarity', score: 5.42, weight: 0.5, feedback: '' },
      ]
      // weighted sum: 8.33*0.5 + 5.42*0.5 = 4.165 + 2.71 = 6.875
      // 6.875 rounds to 6.9
      expect(calculateOverallScore(dimensions)).toBe(6.9)
    })

    it('should return 0 if total weight is 0', () => {
      const dimensions: EvaluationDimension[] = [
        { key: 'structure', label: 'Structure', score: 8, weight: 0, feedback: '' },
        { key: 'clarity', label: 'Clarity', score: 6, weight: 0, feedback: '' },
      ]
      expect(calculateOverallScore(dimensions)).toBe(0)
    })

    it('should return 0 for an empty dimensions array', () => {
      expect(calculateOverallScore([])).toBe(0)
    })
  })

  describe('normalizeScores', () => {
    it('should map and normalize raw scores correctly', () => {
      const raw = {
        structure: { score: 8, feedback: 'Good job' },
        clarity: { score: 9, feedback: 'Very clear' },
        completeness: { score: 7, feedback: 'Mostly complete' },
        specificity: { score: 6, feedback: 'Specific enough' },
      }

      const normalized = normalizeScores(raw)
      expect(normalized).toHaveLength(4)

      const structure = normalized.find((d) => d.key === 'structure')
      expect(structure).toBeDefined()
      expect(structure?.score).toBe(8)
      expect(structure?.feedback).toBe('Good job')
      expect(structure?.weight).toBeGreaterThan(0)

      const clarity = normalized.find((d) => d.key === 'clarity')
      expect(clarity?.score).toBe(9)
      expect(clarity?.feedback).toBe('Very clear')
    })

    it('should clamp scores between 0 and 10', () => {
      const raw = {
        structure: { score: 12, feedback: 'Way too high' },
        clarity: { score: -3, feedback: 'Way too low' },
      }

      const normalized = normalizeScores(raw)

      const structure = normalized.find((d) => d.key === 'structure')
      expect(structure?.score).toBe(10)

      const clarity = normalized.find((d) => d.key === 'clarity')
      expect(clarity?.score).toBe(0)
    })

    it('should fall back to default score and feedback if dimension is missing', () => {
      const raw = {
        structure: { score: 8, feedback: 'Good job' },
      }

      const normalized = normalizeScores(raw)

      // structure should be custom
      const structure = normalized.find((d) => d.key === 'structure')
      expect(structure?.score).toBe(8)
      expect(structure?.feedback).toBe('Good job')

      // clarity should be defaulted
      const clarity = normalized.find((d) => d.key === 'clarity')
      expect(clarity?.score).toBe(5)
      expect(clarity?.feedback).toBe('No feedback available')
    })
  })

  describe('getScoreLabel', () => {
    it('should return Exceptional for scores >= 9', () => {
      expect(getScoreLabel(10)).toBe('Exceptional')
      expect(getScoreLabel(9)).toBe('Exceptional')
      expect(getScoreLabel(9.1)).toBe('Exceptional')
    })

    it('should return Good for scores >= 7 and < 9', () => {
      expect(getScoreLabel(8.9)).toBe('Good')
      expect(getScoreLabel(7)).toBe('Good')
      expect(getScoreLabel(7.5)).toBe('Good')
    })

    it('should return Adequate for scores >= 5 and < 7', () => {
      expect(getScoreLabel(6.9)).toBe('Adequate')
      expect(getScoreLabel(5)).toBe('Adequate')
      expect(getScoreLabel(5.5)).toBe('Adequate')
    })

    it('should return Below Average for scores >= 3 and < 5', () => {
      expect(getScoreLabel(4.9)).toBe('Below Average')
      expect(getScoreLabel(3)).toBe('Below Average')
      expect(getScoreLabel(3.5)).toBe('Below Average')
    })

    it('should return Poor for scores < 3', () => {
      expect(getScoreLabel(2.9)).toBe('Poor')
      expect(getScoreLabel(0)).toBe('Poor')
      expect(getScoreLabel(-1)).toBe('Poor')
    })
  })

  describe('getScoreColor', () => {
    it('should return text-green-400 for scores >= 8', () => {
      expect(getScoreColor(10)).toBe('text-green-400')
      expect(getScoreColor(8)).toBe('text-green-400')
      expect(getScoreColor(8.5)).toBe('text-green-400')
    })

    it('should return text-yellow-400 for scores >= 6 and < 8', () => {
      expect(getScoreColor(7.9)).toBe('text-yellow-400')
      expect(getScoreColor(6)).toBe('text-yellow-400')
      expect(getScoreColor(6.5)).toBe('text-yellow-400')
    })

    it('should return text-orange-400 for scores >= 4 and < 6', () => {
      expect(getScoreColor(5.9)).toBe('text-orange-400')
      expect(getScoreColor(4)).toBe('text-orange-400')
      expect(getScoreColor(4.5)).toBe('text-orange-400')
    })

    it('should return text-red-400 for scores < 4', () => {
      expect(getScoreColor(3.9)).toBe('text-red-400')
      expect(getScoreColor(0)).toBe('text-red-400')
      expect(getScoreColor(-2)).toBe('text-red-400')
    })
  })
})
