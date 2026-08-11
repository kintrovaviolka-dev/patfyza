## 2024-08-07 - Fixing DOM XSS
 **Learning:** When fixing a vulnerability using an external security library (like DOMPurify), always ensure a fail-secure fallback is implemented in case the library fails to load. Do not fall back to the insecure behavior.
 **Action:** Always include fail-closed mechanisms when relying on `typeof Library !== 'undefined'` checks for sanitization.
## 2024-08-08 - Translation Consistency in Data Structure
**Learning:** Found literal English-to-Czech translations (e.g., "ulcerativní kolitida" instead of "ulcerózní kolitida") present in root-level data array mappings (`data_core.js`, `data.js`) while being correctly translated in nested explanation text (`data_special2.js`).
**Action:** When updating incorrect terminology, globally search the codebase (including array strings, not just JSON properties) to ensure the terminology is consistent across both high-level topic arrays and detailed explanation keys.
## 2024-08-09 - Hyphenation and Terminology Consistency
**Learning:** Found inconsistent terminology usage ("locked-in syndrome" vs. "locked-in syndrom") and missing hyphens in dual-name eponyms ("Zollinger Ellisonův" vs. "Zollinger-Ellisonův").
**Action:** Always verify proper Czech spelling of medical syndromes (using "syndrom" instead of "syndrome") and ensure hyphenation between multiple surnames in eponymous diseases (e.g., "Zollinger-Ellisonův") during content audits.
