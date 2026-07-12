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
## 2026-07-12 - Intentional grammatical distractors in quiz options
**Learning:** In quiz data (e.g., `data_general.js`), grammatical errors in option strings (such as incorrect gender/case agreement like 'chronickáho') may be intentional distractors designed to test knowledge.
**Action:** Verify the intent of the question and all other options before correcting such grammatical 'typos' to avoid creating duplicate options or breaking the quiz logic.
