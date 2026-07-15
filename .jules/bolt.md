# Bolt's Journal ⚡

## 2026-06-15 - [Pre-computation of Static Template Metadata in Matcher]
**Learning:** During template matching (both keyword and embedding-based), the application splits, lowercases, and runs regular expressions on the static properties (`slug`, `name`, `description`) of every candidate template. This O(N) work occurs on every request. Lazy-caching these parsed tokens once per template eliminates redundant regex overhead, string allocations, and lowercasing.
**Action:** Pre-compute and cache normalized token sets and normalized phrases for all candidates on first template matching, reducing template matching latency.
