import { describe, expect, it, beforeAll } from 'vitest'
import { encrypt, decrypt } from './crypto'
import { createCipheriv, randomBytes, createHash } from 'crypto'

describe('Crypto Module Security & Functionality', () => {
  beforeAll(() => {
    if (!process.env.ENCRYPTION_KEY) {
      process.env.ENCRYPTION_KEY = 'test_encryption_key_thirty_two_bytes_long'
    }
  })

  it('should encrypt and decrypt plaintext correctly', () => {
    const secret = 'sk-live-secret-api-key-123456'
    const payload = encrypt(secret)

    expect(payload.encrypted).not.toBe(secret)
    expect(payload.iv).toBeDefined()
    expect(payload.authTag).toBeDefined()

    // NIST compliance check: standard GCM IV is 12 bytes = 24 hex characters
    expect(payload.iv.length).toBe(24)

    const decrypted = decrypt(payload.encrypted, payload.iv, payload.authTag)
    expect(decrypted).toBe(secret)
  })

  it('should support backward compatibility with legacy 16-byte IVs (32 hex characters)', () => {
    const secret = 'legacy-api-key-987654'
    const key = createHash('sha256').update(process.env.ENCRYPTION_KEY!, 'utf8').digest()
    const iv = randomBytes(16) // legacy 16-byte IV
    const cipher = createCipheriv('aes-256-gcm', key, iv)

    let encrypted = cipher.update(secret, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    const authTag = cipher.getAuthTag().toString('hex')

    const decrypted = decrypt(encrypted, iv.toString('hex'), authTag)
    expect(decrypted).toBe(secret)
  })

  it('should handle malformed, corrupted, or altered ciphertexts securely', () => {
    const secret = 'secure-key-to-protect'
    const payload = encrypt(secret)

    // Alter ciphertext
    const corruptedCiphertext = payload.encrypted.slice(0, -2) + '00'
    expect(() => {
      decrypt(corruptedCiphertext, payload.iv, payload.authTag)
    }).toThrow('Decryption failed: Integrity check failed or invalid payload')

    // Alter IV
    const corruptedIv = payload.iv.slice(0, -2) + '00'
    expect(() => {
      decrypt(payload.encrypted, corruptedIv, payload.authTag)
    }).toThrow('Decryption failed: Integrity check failed or invalid payload')

    // Alter auth tag
    const corruptedTag = payload.authTag.slice(0, -2) + '00'
    expect(() => {
      decrypt(payload.encrypted, payload.iv, corruptedTag)
    }).toThrow('Decryption failed: Integrity check failed or invalid payload')
  })
})