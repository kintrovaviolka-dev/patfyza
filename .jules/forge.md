## 2024-06-01 - Content Typo Fixes in HTML and JS
**Learning:** Fixed multiple typos in static HTML and JS files (e.g., "Havička" to "Hlavička", "Hissov" to "Hisov", "Extrasytoly" to "Extrasystoly"). Remember that text search and replace should be careful with case sensitivity and word boundaries. A stray file `check_systems.js` was accidentally left behind from debugging, highlighting the need to clean up intermediate scripts.
**Action:** Always verify with `git status` or `ls` that no accidental scratch files are left behind before finalizing the plan and submitting.
## 2026-06-07 - Typo fix and file cleanup
**Learning:** Found several old scratch files (fix_data*.py) left in the repository. It's important to keep the directory clean. Also learned that changing a string in 'data_core.js' often requires updating identical strings in 'data_general.js' to maintain structural safety and quiz validation.
**Action:** Always clean up temporary files and ensure cross-file string integrity when fixing typos.
## 2026-06-11 - Typographical updates to string hyphenation
**Learning:** Found several strings with improper spacing around hyphens (e.g., `Šok-definice` instead of `Šok - definice`). The codebase convention requires consistent spacing around hyphens, particularly in topic definitions and medical terminology. It is critical to update identical strings across multiple data files (`data.js`, `data_core.js`, `data_general.js`) simultaneously to maintain cross-file data integrity.
**Action:** When performing copy changes to core topics, always search and replace across the entire repository to ensure identical string matching remains unbroken.
