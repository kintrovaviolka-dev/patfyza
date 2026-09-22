## 2024-05-19 - EKG SVG Rendering Optimization
**Learning:** O(N^2) loops in SVG generation functions called on animation frames cause major performance bottlenecks.
**Action:** Use a two-pointer sliding window approach to track array indices and early-break from inner loops where geometry guarantees out-of-bounds calculations.
