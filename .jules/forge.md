## 2024-06-01 - Content Typo Fixes in HTML and JS
**Learning:** Fixed multiple typos in static HTML and JS files (e.g., "Havička" to "Hlavička", "Hissov" to "Hisov", "Extrasytoly" to "Extrasystoly"). Remember that text search and replace should be careful with case sensitivity and word boundaries. A stray file `check_systems.js` was accidentally left behind from debugging, highlighting the need to clean up intermediate scripts.
**Action:** Always verify with `git status` or `ls` that no accidental scratch files are left behind before finalizing the plan and submitting.
## 2026-06-07 - Typo fix and file cleanup
**Learning:** Found several old scratch files (fix_data*.py) left in the repository. It's important to keep the directory clean. Also learned that changing a string in 'data_core.js' often requires updating identical strings in 'data_general.js' to maintain structural safety and quiz validation.
**Action:** Always clean up temporary files and ensure cross-file string integrity when fixing typos.
## 2024-06-11 - JSON Parse Security Vulnerability
**Learning:** Parsing user-provided JSON files using FileReader and simply assigning their values to the application state without strict type and structure validation opens up risks of Prototype Pollution, state corruption, and runtime crashes.
**Action:** Always validate the structure and type of data imported from untrusted JSON strings before merging it with internal application state.
## 2026-06-27 - Referential Integrity in Data Files
**Learning:** Modifying string data in `RAW_QUESTIONS_SPECIAL_1` (or similar arrays) without simultaneously updating the identical string used as a key in `SPECIFIC_RICH_DATA` (or similar detail objects) completely breaks the UI logic for that topic, resulting in un-renderable content.
**Action:** When standardizing formatting or making string corrections in a topic title, ALWAYS trace the string across the codebase and apply identical changes to its corresponding dictionary keys or reference strings to maintain referential integrity.
## 2026-11-20 - Missing Hyphens and Referential Integrity
**Learning:** Found several strings in `RAW_QUESTIONS_SPECIAL_1` (e.g. "Základní charakteristika plicních onemocnění: obstrukce a restrikce etiopatogeneze") missing a hyphen before "etiopatogeneze", deviating from the established convention. Fixing these required identical updates to both `data.js` and `data_core.js`, including the keys in `window.COMPLETE_QUESTIONS` generation block, highlighting the risk of breaking structural linkages when making simple typo fixes.
**Action:** Always run a full text search (e.g., `grep -rn <string> .`) before making any string formatting changes in arrays, and identically update all references, especially object keys mapping to those strings, to ensure referential integrity.

## 2024-05-18 - [Typo fixes in medical strings]
**Learning:** Medical typos like 'hyperokalcémii' and 'neatnofují' often slip into lengthy text blocks in data objects without syntax tools catching them.
**Action:** Regular expressions and substring search over specific properties (e.g. `quiz` or `clinicalManifestation`) are necessary to hunt for specific typographical mistakes in complex static datasets.
## 2024-07-26 - Anatomical terminology accuracy
**Learning:** Found an inaccurate medical phrase "systémového plicního oběhu" (systemic pulmonary circulation) describing left-sided heart failure. Systemic and pulmonary circulations are separate. Left heart pumps from the pulmonary to the systemic.
**Action:** When updating medical definitions, ensure that physiological concepts (like circulation pathways) are completely accurate and do not conflate terms like "systemic" and "pulmonary".
## 2026-08-01 - Intentional distractors in quiz data
**Learning:** Found a grammatical error ('chronickáho') in `data_general.js`. However, upon closer inspection of the context (quiz options), it became apparent that this error was an intentional distractor to test the user's knowledge, and correcting it would alter the quiz's difficulty/intent.
**Action:** Always verify the context of a typo, especially in quiz options or similar testing scenarios, before attempting to correct it.
