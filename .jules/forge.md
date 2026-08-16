## 2024-08-07 - Fixing DOM XSS
 **Learning:** When fixing a vulnerability using an external security library (like DOMPurify), always ensure a fail-secure fallback is implemented in case the library fails to load. Do not fall back to the insecure behavior.
 **Action:** Always include fail-closed mechanisms when relying on `typeof Library !== 'undefined'` checks for sanitization.
## 2024-08-08 - Translation Consistency in Data Structure
**Learning:** Found literal English-to-Czech translations (e.g., "ulcerativní kolitida" instead of "ulcerózní kolitida") present in root-level data array mappings (`data_core.js`, `data.js`) while being correctly translated in nested explanation text (`data_special2.js`).
**Action:** When updating incorrect terminology, globally search the codebase (including array strings, not just JSON properties) to ensure the terminology is consistent across both high-level topic arrays and detailed explanation keys.
## 2026-08-14 - Consistent Hyphenation for Eponymous Syndromes
**Learning:** Two-name eponymous syndromes (like Zollinger-Ellisonův syndrom) must be consistently hyphenated across both main and core data arrays.
**Action:** Ensure to search across both `data.js` and `data_core.js` for missing hyphens when updating terminology formatting.
## 2024-08-16 - Do not abbreviate "syndrom"
**Learning:** Found instances where "syndrom" was abbreviated to "sy" or "sy)" (e.g., "Connův sy)").
**Action:** Avoid abbreviations like 'sy' or 'sy)' for 'syndrom'. Always write out the full word 'syndrom' to maintain consistency across the medical data files.

## 2024-08-16 - Czech case endings for eponymous syndromes
**Learning:** Declensions of eponymous syndromes ending with suffixes like '-ovým' (e.g., 's Goodpastureovým syndromem') represent the correct instrumental case in Czech grammar.
**Action:** These should not be mistakenly treated as typos or corrected to the nominative form.

## 2024-08-16 - Safe data access in Playwright evaluate
**Learning:** When writing Playwright evaluation scripts (`page.evaluate()`) to access nested static data objects (like `SPECIAL_1_DETAILS`), accessing properties blindly can lead to `TypeError: Cannot read properties of undefined`.
**Action:** Always use safe optional chaining or explicit existence checks (e.g., `if (detail && detail.richContent && detail.richContent.etiology)`) to prevent generic errors during UI testing.
