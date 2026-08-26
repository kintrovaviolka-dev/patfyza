## 2024-08-07 - Fixing DOM XSS
 **Learning:** When fixing a vulnerability using an external security library (like DOMPurify), always ensure a fail-secure fallback is implemented in case the library fails to load. Do not fall back to the insecure behavior.
 **Action:** Always include fail-closed mechanisms when relying on `typeof Library !== 'undefined'` checks for sanitization.
## 2024-08-08 - Translation Consistency in Data Structure
**Learning:** Found literal English-to-Czech translations (e.g., "ulcerativní kolitida" instead of "ulcerózní kolitida") present in root-level data array mappings (`data_core.js`, `data.js`) while being correctly translated in nested explanation text (`data_special2.js`).
**Action:** When updating incorrect terminology, globally search the codebase (including array strings, not just JSON properties) to ensure the terminology is consistent across both high-level topic arrays and detailed explanation keys.
## 2026-08-14 - Consistent Hyphenation for Eponymous Syndromes
**Learning:** Two-name eponymous syndromes (like Zollinger-Ellisonův syndrom) must be consistently hyphenated across both main and core data arrays.
**Action:** Ensure to search across both `data.js` and `data_core.js` for missing hyphens when updating terminology formatting.
## 2024-11-20 - Ensure Safe Fallbacks for Chatbot UI
**Learning:** Found insecure fallback when rendering chatbot markdown if DOMPurify is not available.
**Action:** Always use `textContent` instead of `innerHTML` when DOMPurify or other HTML sanitization libraries fail to load.
