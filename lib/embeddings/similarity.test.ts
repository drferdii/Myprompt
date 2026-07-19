import { describe, it, expect } from 'vitest'
import { cosineSimilarity } from './similarity'

describe('cosineSimilarity', () => {
  it('should return 1 for identical vectors', () => {
    const a = [1, 2, 3]
    const b = [1, 2, 3]
    expect(cosineSimilarity(a, b)).toBeCloseTo(1, 5)
  })

  it('should return -1 for opposite vectors', () => {
    const a = [1, 2, 3]
    const b = [-1, -2, -3]
    expect(cosineSimilarity(a, b)).toBeCloseTo(-1, 5)
  })

  it('should return 0 for orthogonal vectors', () => {
    const a = [1, 0]
    const b = [0, 1]
    expect(cosineSimilarity(a, b)).toBeCloseTo(0, 5)
  })

  it('should correctly compute similarity for arbitrary vectors', () => {
    const a = [3, 4, 0]
    const b = [1, 1, 0]
    // dot = 3*1 + 4*1 = 7
    // normA = sqrt(3^2 + 4^2) = 5
    // normB = sqrt(1^2 + 1^2) = sqrt(2) ~ 1.41421356
    // similarity = 7 / (5 * sqrt(2)) ~ 7 / 7.07106781 ~ 0.989949
    expect(cosineSimilarity(a, b)).toBeCloseTo(0.989949, 5)
  })

  it('should handle zero vectors by returning 0 (avoiding division by zero)', () => {
    const a = [0, 0, 0]
    const b = [1, 2, 3]
    expect(cosineSimilarity(a, b)).toBe(0)
    expect(cosineSimilarity(b, a)).toBe(0)
    expect(cosineSimilarity(a, a)).toBe(0)
  })

  it('should handle empty vectors by returning 0', () => {
    expect(cosineSimilarity([], [])).toBe(0)
  })

  it('should handle mismatched length vectors by using the smaller length', () => {
    const a = [1, 2, 3]
    const b = [1, 2]
    // Should compute similarity using [1, 2] vs [1, 2], which is 1
    expect(cosineSimilarity(a, b)).toBeCloseTo(1, 5)
  })
})
