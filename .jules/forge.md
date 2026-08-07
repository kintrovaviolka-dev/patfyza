## 2024-08-07 - Fixing DOM XSS
 **Learning:** When fixing a vulnerability using an external security library (like DOMPurify), always ensure a fail-secure fallback is implemented in case the library fails to load. Do not fall back to the insecure behavior.
 **Action:** Always include fail-closed mechanisms when relying on `typeof Library !== 'undefined'` checks for sanitization.
