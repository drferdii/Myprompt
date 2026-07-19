# Bolt's Journal ⚡

## 2026-06-15 - [Pre-computation of Static Template Metadata in Matcher]
**Learning:** During template matching (both keyword and embedding-based), the application splits, lowercases, and runs regular expressions on the static properties (`slug`, `name`, `description`) of every candidate template. This O(N) work occurs on every request. Lazy-caching these parsed tokens once per template eliminates redundant regex overhead, string allocations, and lowercasing.
**Action:** Pre-compute and cache normalized token sets and normalized phrases for all candidates on first template matching, reducing template matching latency.

## 2026-06-18 - [Optimizing In-Memory Cosine Similarity for Static Embeddings]
**Learning:** During semantic hybrid template matching, the application computes `cosineSimilarity` on every query embedding and static candidate embedding vector pair. Standard cosine similarity calculates the L2 norm of both vector `a` (query) and vector `b` (template candidate) on every comparison. Since the template embeddings are static and the query embedding is constant across all comparisons, computing L2 norms inside the loop of candidate evaluations leads to redundant $O(\text{dim})$ operations. Caching the L2 norms of the static template embeddings and pre-computing the query embedding L2 norm outside the loop reduces the inner similarity calculations by 66%.
**Action:** When performing in-memory semantic searches against static embeddings, always pre-compute and cache vector L2 norms, passing them as optional arguments to avoid redundant calculations inside hot loops.
