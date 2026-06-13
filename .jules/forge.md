## 2024-06-01 - Content Typo Fixes in HTML and JS
**Learning:** Fixed multiple typos in static HTML and JS files (e.g., "Havička" to "Hlavička", "Hissov" to "Hisov", "Extrasytoly" to "Extrasystoly"). Remember that text search and replace should be careful with case sensitivity and word boundaries. A stray file `check_systems.js` was accidentally left behind from debugging, highlighting the need to clean up intermediate scripts.
**Action:** Always verify with `git status` or `ls` that no accidental scratch files are left behind before finalizing the plan and submitting.
## 2026-06-07 - Typo fix and file cleanup
**Learning:** Found several old scratch files (fix_data*.py) left in the repository. It's important to keep the directory clean. Also learned that changing a string in 'data_core.js' often requires updating identical strings in 'data_general.js' to maintain structural safety and quiz validation.
**Action:** Always clean up temporary files and ensure cross-file string integrity when fixing typos.
## 2024-06-11 - JSON Parse Security Vulnerability
**Learning:** Parsing user-provided JSON files using FileReader and simply assigning their values to the application state without strict type and structure validation opens up risks of Prototype Pollution, state corruption, and runtime crashes.
**Action:** Always validate the structure and type of data imported from untrusted JSON strings before merging it with internal application state.
## 2026-06-13 - Data formatting fixes and referential integrity
**Learning:** Found inconsistencies with spaces around hyphens in `data_core.js`, `data.js` and `data_general.js`. Modifying questions strings inside core structure requires precise identical updates across explanations and dictionary keys or referential integrity in static javascript will be broken.
**Action:** Always verify all usages of a string key using `grep` before replacing it to avoid broken mapping or logic errors.
