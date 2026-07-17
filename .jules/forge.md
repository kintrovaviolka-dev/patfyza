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
## 2024-07-17 - Environment Pollution with Playwright
**Learning:** Installing Playwright in a static repository without a `package.json` generates massive amounts of tracked files (like `node_modules/`, `package-lock.json`) that can clutter `git status` or trigger "diff size is unusually large" warnings, hiding actual code changes.
**Action:** When installing ephemeral dependencies like Playwright for local frontend verification, temporarily add them to `.gitignore` during the test, then forcefully remove the generated files (`rm -rf node_modules package.json package-lock.json`) before proceeding with any git commits.
