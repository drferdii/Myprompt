# Sentinel Journal - Security Learnings

## 2026-07-18 - NIST-Compliant AES-256-GCM IV Size & Hardened Decryption Error Propagation
**Vulnerability:** AES-256-GCM key encryption in `lib/crypto.ts` was using a non-standard 16-byte initialization vector (IV) rather than the standard 12-byte IV recommended by NIST SP 800-38D. Additionally, decryption errors in `decrypt` bubbled up raw exceptions without secure try-catch handling, risking leakage of internal decryption/decipher engine details or stack traces to caller environments (e.g. desktop console output or remote clients).
**Learning:** Standard AES-GCM implementations optimize for a 12-byte IV (96 bits) to directly set the initial counter block. Other lengths require a GHASH hashing operation internally, introducing potential timing attacks, performance degradation, and collision vulnerabilities. Errors during decrypt can expose internal decipher states if left unhandled.
**Prevention:** Always use exactly 12-byte IVs for AES-256-GCM, and wrap block cipher decryptions in try-catch structures to fail securely, converting internal engine exceptions into generic, safe, non-leaking user error messages.
