## 2024-08-07 - Fixing DOM XSS
 **Learning:** When fixing a vulnerability using an external security library (like DOMPurify), always ensure a fail-secure fallback is implemented in case the library fails to load. Do not fall back to the insecure behavior.
 **Action:** Always include fail-closed mechanisms when relying on `typeof Library !== 'undefined'` checks for sanitization.
## 2024-08-08 - Translation Consistency in Data Structure
**Learning:** Found literal English-to-Czech translations (e.g., "ulcerativní kolitida" instead of "ulcerózní kolitida") present in root-level data array mappings (`data_core.js`, `data.js`) while being correctly translated in nested explanation text (`data_special2.js`).
**Action:** When updating incorrect terminology, globally search the codebase (including array strings, not just JSON properties) to ensure the terminology is consistent across both high-level topic arrays and detailed explanation keys.
## 2026-08-14 - Consistent Hyphenation for Eponymous Syndromes
**Learning:** Two-name eponymous syndromes (like Zollinger-Ellisonův syndrom) must be consistently hyphenated across both main and core data arrays.
**Action:** Ensure to search across both `data.js` and `data_core.js` for missing hyphens when updating terminology formatting.
## 2024-08-09 - Capitalization and English terminology
**Learning:** Found English capitalization and terminology (e.g., "Sick Sinus Syndrome" instead of "sick sinus syndrom") in Czech data strings, violating local medical phrasing conventions for non-proper medical syndromes.
**Action:** Always use lowercase for non-proper medical syndromes and translate to Czech ("syndrom" instead of "Syndrome") consistently across all data arrays.
## 2024-09-03 - Cross-Origin Request Errors in Local Environment
 **Learning:** When running the static application locally (e.g., using python3 -m http.server), the app attempts to fetch an external config (`https://verysadanyway.vercel.app/api/config`), which fails due to CORS. This does not block local static scripts or object instantiations like `window.PRACTICAL_DETAILS`.
 **Action:** Ignore CORS fetch errors in the Playwright console logs when evaluating static data in UI tests, as long as the necessary static objects populate correctly.
