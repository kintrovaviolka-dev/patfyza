## 2024-05-19 - EKG SVG Rendering Optimization
**Learning:** O(N^2) loops in SVG generation functions called on animation frames cause major performance bottlenecks.
**Action:** Use a two-pointer sliding window approach to track array indices and early-break from inner loops where geometry guarantees out-of-bounds calculations.

## 2024-05-30 - Intentional Quiz Distractors
**Learning:** In quiz data (e.g., `data_general.js`), grammatical, factual, or semantic 'errors' in option strings (such as incorrect gender/case agreement, or swapping terms like 'akutním' and 'chronickým') are often intentional distractors designed to test knowledge. Correcting them can make distractor options identical to correct options, breaking the quiz.
**Action:** Always verify the intent of a question and ensure a distractor isn't being modified to become identical to the correct answer before 'fixing' factual statements in quiz options.
