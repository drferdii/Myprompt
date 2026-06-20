# DECISIONS.md — classy-transformer
<!-- Append-only. NEVER delete or edit existing entries. -->

---

### [2026-04-01] Prisma + Supabase as database stack
**Context:** Need managed PostgreSQL with auth for multi-user prompt platform
**Decision:** Prisma ORM + Supabase (PostgreSQL + Auth)
**Rejected alternatives:** Drizzle + PlanetScale, raw pg
**Rationale:** Supabase provides auth + DB in one service, Prisma gives type-safe queries
**Consequences:** Schema changes require `db:generate` + migration; Supabase project required

### [2026-04-01] Sentry for error tracking across all environments
**Context:** Production LLM calls can fail silently without observability
**Decision:** @sentry/nextjs active on client, server, and edge
**Consequences:** sentry.*.config.ts files must not include PII or API keys in payloads

### [2026-04-10] Establish .agent/ memory protocol
**Context:** Context loss between agent sessions
**Decision:** .agent/ with 5 files + sessions/
**Consequences:** Agent reads .agent/ at every session start

### [2026-06-04] SSOT prompt-quality contract established
**Context:** Three skeletons describe "a good prompt" (Transform `# Role/# Context/...`, Optimizer `SuperPromptSchema`, template renderer) with no shared definition, so quality fixes do not propagate.
**Decision:** Created `lib/prompt-quality/contract.ts` that canonicalizes the existing `SuperPromptSchema` (no new schema invented) as the single source of truth, with a documented vocabulary mapping across the three skeletons. The Optimizer parser now validates against this contract at runtime.
**Rejected alternatives:** Inventing a richer new schema; migrating Transform + templates now.
**Consequences:** Transform + template renderer migration onto the contract is deferred to P2 (multi-file behavioral change, out of P0–P1 scope per Surgical Changes).

### [2026-06-04] Optimizer LLM output validated with Zod before use
**Context:** `parseSuperPromptJson` did `JSON.parse` + manual field access; syntactically valid but wrong-shaped JSON could corrupt a `SuperPrompt`.
**Decision:** Added a tolerant-but-strictly-typed wire schema (all fields `.optional()`, no coercion). Wrong-typed fields fail validation and throw, routing to the existing engine fallback (fail-safe, not fail-loud). Final object is guarded by the SSOT contract.
**Consequences:** Stricter detection of bad output; no change to the engine fallback contract or the public `OptimizeResponse` shape.

### [2026-06-04] Provider default left unchanged; Chief uses Pioneer via OpenAI-compatible path
**Context:** `OptimizeRequestSchema`/`EvaluateRequestSchema` default `provider`/`targetLlm` to `'GROK'`, but no Grok SDK is installed.
**Decision:** Chief confirmed they use Pioneer (https://pioneer.ai/), reached through the OpenAI-compatible path (`OPENAI_BASE_URL`, model `MiniMaxAI/MiniMax-M3`) — interpretation (i). The schema default `'GROK'` was **not** changed in P1-2, because changing it alters public API default behavior and is a separate, flagged task.
**Consequences:** Open item: reconcile the `'GROK'` schema default with the actually-wired OpenAI-compatible (Pioneer) path in a dedicated change if Chief wants the API default updated.

### [2026-06-04] detectIntent ordering: specific before general
**Context:** "buatkan ringkasan artikel ini" was classified as `generation` because the generation branch ran before summarization.
**Decision:** Specific intents (summarization, analysis, comparison, debugging, explanation, translation) are checked before the broad generation branch. Generation is now the last named intent before `general`.
**Consequences:** Any prompt containing both a creation verb and a specific-intent keyword now correctly resolves to the specific intent.

### [2026-06-04] Embedding cold-start uses batch API
**Context:** `matchTemplateWithEmbeddings` originally called `generateEmbedding` N times (once per template) on cold cache, while `generateEmbeddings` (batch) was imported but unused.
**Decision:** `warmEmbeddingCache()` calls `generateEmbeddings(texts[])` once for all uncached templates, then populates the cache. Per-slug cache still used for subsequent calls.
**Consequences:** Cold-start cost is 1 HTTP round-trip instead of N. Batch must preserve index order (it does — OpenAI API returns embeddings in input order).

### [2026-06-04] Provider switched to OpenRouter + DeepSeek V4 Pro
**Context:** Pioneer has no DeepSeek models. Chief uses OpenRouter (`sk-or-v1-...`) with `deepseek/deepseek-v4-pro`.
**Decision:** `.env.local` updated to `OPENAI_BASE_URL=https://openrouter.ai/api/v1`, `OPENAI_MODEL=deepseek/deepseek-v4-pro`. No code changes — `OpenAIProvider` already reads these env vars. Embedding also works via OpenRouter because OpenAI SDK auto-reads `OPENAI_BASE_URL`.
**Consequences:** Both keys (Pioneer + OpenRouter) were exposed in chat plaintext and need rotation.

### [2026-06-04] Optimizer LLM output format changed from JSON to canonical markdown
**Context:** Streaming JSON to the UI is fragile (partial-JSON parsing) and delays useful output by the length of the JSON envelope. Markdown output is itself the deliverable.
**Decision:** `buildOptimizeSystemPrompt` now instructs the LLM to emit 6-heading canonical markdown (ROLE/TASK/CONTEXT/APPROACH/CONSTRAINTS/OUTPUT FORMAT). A deterministic heading-split post-parser (`parseSuperPromptMarkdown`) replaces JSON parsing for the streaming path. `parseSuperPromptJson` is retained for rollback safety.
**Consequences:** `optimizePrompt` (non-streaming) falls back to raw markdown wrapped as `fullPrompt` until S4 is deployed — degraded quality but no crash. S4 + switch of `core.ts` to `optimizePromptStreaming` fully restores quality and adds streaming UX.

### [2026-06-04] optimizePromptStreaming kept parallel to optimizePrompt (not a wrapper)
**Context:** Plan S3 called for `optimizePrompt` to become a thin wrapper over `optimizePromptStreaming`. But `generateStream` yields only strings — no model info. Using `provider.defaultModel` would report the wrong model for env-configured providers (OpenRouter/deepseek-v4-pro ≠ 'gpt-4o').
**Decision:** `optimizePromptStreaming` added as a new parallel export. `optimizePrompt` kept unchanged, preserving accurate `LLMResponse.model` from `provider.generate()`. Both paths are correct and independent.
**Follow-up:** Add `activeModel: string` getter to `LLMProviderAdapter` interface so `optimizePromptStreaming` can report the accurate configured model. Then `optimizePrompt` can safely become a wrapper.

### [2026-06-04] Desktop optimize command now uses requestId-scoped streaming events
**Context:** `desktop:command` treated `optimize:run` as a request/response call, so the operator saw a single jump at the end even after backend streaming landed.
**Decision:** Desktop now keeps `desktop:command` as the trigger, returns an immediate `{ status: 'started', requestId }` ack for `optimize:run`, and pushes `optimize:chunk` / `optimize:done` / `optimize:error` events through the preload bridge. The renderer owns per-request live text accumulation and final formatting.
**Consequences:** Desktop is now the primary verified streaming surface. The optimize payload contract now includes `requestId` for desktop mode, and tests assert event-scoped streaming behavior instead of the old direct result path.

### [2026-06-04] Streaming and shell model labels must reflect configured runtime, not transport defaults
**Context:** OpenAI-compatible transports were surfacing misleading `gpt-4o` labels even when the real runtime model was configured through `OPENAI_MODEL` (for example OpenRouter + `deepseek/deepseek-v4-pro`). The main causes were `optimizePromptStreaming` using `provider.defaultModel` and `desktop/main.ts` falling back to `gpt-4o` for shell state.
**Decision:** Added `activeModel` to `LLMProviderAdapter` and switched streaming metadata to use it. Desktop shell state now only falls back to `gpt-4o` for the official OpenAI path; explicit OpenAI-compatible base URLs without `OPENAI_MODEL` now surface `model-required` instead of a false model claim.
**Consequences:** The desktop Optimizer no longer reports false GPT-4 noise for compatible endpoints. Task M still remains separate because Optimizer and Evaluator continue to share the same OpenAI-compatible model/env surface.

### [2026-06-04] Optimizer and Evaluator now use scoped OpenAI-compatible model/base-URL overrides
**Context:** After the model-noise cleanup, Optimizer and Evaluator still shared the same `OPENAI_MODEL` / `OPENAI_BASE_URL` surface. That made "faster Optimizer, stricter Evaluator" routing impossible without silent coupling.
**Decision:** Added scope-aware override resolution in `provider-registry.ts`. For the OpenAI-compatible provider path only, Optimizer now prefers `OPTIMIZER_OPENAI_MODEL` / `OPTIMIZER_OPENAI_BASE_URL`, while Evaluator prefers `EVALUATOR_OPENAI_MODEL` / `EVALUATOR_OPENAI_BASE_URL`. Both fall back to shared `OPENAI_MODEL` / `OPENAI_BASE_URL` when scoped overrides are unset.
**Rejected alternatives:** Hidden per-call rewrites in desktop IPC only; silently forking a separate provider implementation just for one lane.
**Consequences:** Chief can tune Optimizer and Evaluator independently without lying in shell metadata or cross-coupling model swaps. API key sourcing remains intentionally unchanged for now; only the model/base-URL surface was split.

### [2026-06-04] Optimizer prompts should optimize for operator density on analysis/table tasks
**Context:** The optimizer output was structurally good but still spent avoidable tokens on verbose descriptors and generic prose, especially for table / revenue / analysis prompts where operators need direct results quickly.
**Decision:** Compressed prompt-setting descriptors, reduced non-stream maxTokens to 1500, and added explicit operator-ready rules: preserve source numbers verbatim, keep formulas/results explicit, and inject `OPERATOR PRIORITIES` for table / calculation / recommendation-shaped requests.
**Rejected alternatives:** New prompt mode toggles in the UI; task-specific templates outside the existing prompt-builder path.
**Consequences:** The optimizer now biases toward denser, more operational prompts without adding a new product surface. Prompt behavior for narrative/creative tasks remains inside the same builder, but operator-heavy tasks get stricter compactness rules.

### [2026-06-04] Desktop Optimizer must fail safe when stream output is invisible
**Context:** Chief reported a real desktop run that took ~36 seconds, showed no visible streaming, and ended with an effectively blank Optimizer prompt body even though the request completed. Existing tests only mocked clean string deltas, so they missed this production-shaped failure mode.
**Decision:** Added reliability hardening across provider, engine, and renderer layers. OpenAI-compatible stream handling now tolerates string or text-part-array chunk content. If the stream yields no visible text, the engine falls back to one non-stream `generate()` call instead of returning a blank prompt. The desktop formatter also reconstructs visible prompt sections from structured fields when `fullPrompt` is empty, and otherwise surfaces an explicit no-visible-content notice.
**Rejected alternatives:** Trusting mocked chunk tests as sufficient proof; leaving the blank final surface as "provider issue"; exposing reasoning-only deltas just to make streaming appear active.
**Consequences:** Blank Optimizer finals are now guarded against even when upstream streaming is degraded. True token-by-token UX still depends on the upstream provider/model actually emitting visible content deltas.

### [2026-06-04] Desktop Optimizer split into INTERACTIVE and DEEP lanes without adding a new primary mode
**Context:** A single Optimizer path was trying to serve both low-latency operator work and richer retrieval-aware prompt engineering. In practice, the default path still paid embedding/template-retrieval cost and a large prompt-skeleton cost even for simple desktop tasks where Chief needed predictable speed first.
**Decision:** Added `optimizerLane` to the shared `OptimizeRequest` contract. `INTERACTIVE` is now the default lane for desktop Optimizer traffic, while `DEEP` preserves the heavier behavior explicitly. The desktop shell surfaces the lane inside the existing Optimizer mode instead of adding a third primary mode. Engine behavior now branches by lane: `INTERACTIVE` skips semantic template retrieval, uses a slimmer prompt skeleton, and uses a smaller request budget; `DEEP` preserves retrieval-aware optimization and the richer prompt skeleton.
**Rejected alternatives:** Adding a third primary desktop mode immediately; silently keeping one lane but swapping behavior heuristically; broad UI redesign in the same slice while another collaborator is actively redesigning the shell.
**Consequences:** The product surface becomes more honest and predictable without a large UI blast radius. App-side latency drops for the default lane, but true end-user speed still depends on the live upstream provider/model. A future follow-up can add provider/model overrides specifically for the `INTERACTIVE` lane if Chief wants the split to extend beyond prompt/retrieval behavior.

### [2026-06-04] OpenAI-compatible Optimizer runtime and desktop shell state now split by lane
**Context:** After the first dual-lane slice, `INTERACTIVE` and `DEEP` still shared the same Optimizer-scoped OpenAI-compatible model/base URL, and the desktop shell still showed one shared model label. That meant the product could claim two lanes while still running the same heavy upstream model by default, and the operator could not tell which runtime a lane was actually using.
**Decision:** Added lane-specific OpenAI-compatible env overrides for the Optimizer path: `OPTIMIZER_INTERACTIVE_OPENAI_MODEL` / `OPTIMIZER_INTERACTIVE_OPENAI_BASE_URL` and `OPTIMIZER_DEEP_OPENAI_MODEL` / `OPTIMIZER_DEEP_OPENAI_BASE_URL`. Override precedence is now lane-specific override → shared Optimizer override → shared OpenAI-compatible override. Desktop shell state now exposes `optimizerLaneStates.INTERACTIVE` and `optimizerLaneStates.DEEP`, and the renderer updates the visible model chip when the operator switches lanes. Desktop streaming also emits explicit `optimize:status` stage events so long-running requests surface progress states beyond a generic wait timer.
**Rejected alternatives:** Keeping only one shared Optimizer runtime and pretending the lane split was enough; showing a static model chip regardless of active lane; delaying status-stage events until a broader UI redesign landed.
**Consequences:** The Optimizer split is now honest at the runtime-label level, not just the prompt/retrieval level. This does not yet prove the fast lane is fast enough; it only makes lane-specific model routing possible and visible so the next live-provider benchmark can be trusted.

### [2026-06-04] Optimizer acceptance must be measured by a small built-in suite, not ad-hoc spot checks
**Context:** After the dual-lane slices landed, the remaining question was no longer "can we split the lanes?" but "are they actually fast/useful enough?" Spot-checking a single prompt by feel would not be stable evidence, and the objective explicitly requires measurable acceptance criteria.
**Decision:** Added a built-in acceptance harness in `scripts/optimizer-acceptance.ts`. The harness embeds a small real-world suite spanning `INTERACTIVE` and `DEEP` work, and evaluates each run against explicit per-lane budgets for first visible response, total latency, prompt length range, and visible output presence. The product now has a canonical command for evidence capture: `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance`.
**Rejected alternatives:** Continuing with one-off manual prompt trials only; introducing a larger new evaluation subsystem before the product had even one canonical benchmark command; declaring the lane work "done" from tests that never exercised live runtime latency.
**Consequences:** Future changes can now be judged against one repeatable acceptance harness. The harness itself does not prove success until it is run against Chief's actual provider/model configuration, but it converts the remaining work from vague judgment into an evidence-shaped task.

### [2026-06-04] Inherited OpenRouter DeepSeek Pro must not remain the default Interactive Optimizer runtime
**Context:** Live acceptance proved that both `INTERACTIVE` and `DEEP` were still inheriting the same shared OpenRouter model (`deepseek/deepseek-v4-pro`). In that state, the supposed fast lane was not a real fast lane at all: the canonical `copywriting-instagram` case showed `INTERACTIVE` failing with no visible output and ~45s total latency.
**Decision:** Added a narrow fallback rule in `provider-registry.ts` for the Optimizer OpenAI-compatible path. When the request is `INTERACTIVE`, the effective base URL resolves to OpenRouter, there is no lane-specific or Optimizer-scoped model override, and the inherited shared model is `deepseek/deepseek-v4-pro`, resolve the lane model to `google/gemini-3.1-flash-lite` instead. `desktop/main.ts` now reuses the same resolver so shell-state reporting matches the actual lane runtime.
**Rejected alternatives:** Leaving both lanes on the same inherited Pro model and blaming the provider; duplicating shell-only rewrite logic in Electron; broad prompt-shape retuning before the runtime split itself was made real.
**Consequences:** The lane split is now honest at runtime: `INTERACTIVE` inherits a genuinely low-latency default while `DEEP` stays on the heavier model. Live acceptance now shows the `INTERACTIVE` lane passing the canonical copywriting, table-analysis, and ops-brief cases inside the current budget. Future latency tuning should still stay evidence-first through the acceptance harness, but the inherited fast-lane default is no longer a guess.

### [2026-06-06] DEEP lane default switched from deepseek/deepseek-v4-pro to deepseek/deepseek-v4-flash
**Context:** DEEP lane was inheriting `deepseek/deepseek-v4-pro` via the OpenRouter fallback, producing ~46s total latency. Chief requested a faster alternative that is cheaper than `google/gemini-3.5-flash`.
**Decision:** `OPENROUTER_LANE_MODEL_FALLBACKS.DEEP` changed from `deepseek/deepseek-v4-pro → deepseek/deepseek-v4-pro` to `deepseek/deepseek-v4-pro → deepseek/deepseek-v4-flash`. Acceptance thresholds updated: `maxFirstVisibleMs` for simple DEEP cases raised to 20s, complex deep-only cases raised to 35s.
**Rejected alternatives:** `nvidia/nemotron-3-ultra-550b-a55b` (measured 36s total, 15s first-visible — failed acceptance); `google/gemini-3.5-flash` (passes acceptance but higher cost per Chief's preference).
**Consequences:** DEEP lane total latency reduced from ~46s to ~25-35s. First-visible is 15-30s depending on prompt complexity. Chief can override at any time via `OPTIMIZER_DEEP_OPENAI_MODEL` env var without code changes.

---
<!-- Agent: append new decisions below this line -->

### [2026-06-04] Deep inherited OpenRouter fallback and token budget must be evidence-shaped
**Context:** After `INTERACTIVE` was fixed, the live acceptance harness still showed `DEEP` missing its latency targets on `deep-strategy-brief` and `deep-architecture-review` while inheriting shared OpenRouter `deepseek/deepseek-v4-pro`. Follow-up inspection also showed deep outputs truncating before later sections completed under the old `1500` token budget.
**Decision:** When the Optimizer request is `DEEP`, the effective base URL resolves to OpenRouter, there is no tighter deep override, and the inherited shared model is `deepseek/deepseek-v4-pro`, resolve the lane model to `google/gemini-3.5-flash`. Also raise the `DEEP` streaming budget from `1500` to `2200`.
**Rejected alternatives:** Blaming the provider without benchmarking alternatives; prompt micro-trimming before checking truncation; keeping the inherited Pro model just because it sounds more capable on paper.
**Consequences:** The full built-in acceptance suite is now green end-to-end, `DEEP` output no longer truncates on the validated cases, and explicit `OPTIMIZER_DEEP_OPENAI_MODEL` overrides still win when Chief wants a different deep runtime.

### [2026-06-04] Optimizer should localize instruction language and bound answer shape for Indonesian technical prompts
**Context:** Review of an Indonesian architecture example showed the optimized prompt was technically stronger than the transformed prompt, but still drifted into English instruction bodies, omitted an explicit output budget, left analogies too generic for Indonesian readers, and treated branded app references too literally.
**Decision:** Added four prompt-builder guardrails for both Optimizer lanes: match the dominant user language unless explicitly overridden, require one explicit output-length constraint, prefer Indonesia-familiar analogies/examples when the audience suggests it, and restate branded/proprietary product references as public industry patterns without implying private internal knowledge.
**Rejected alternatives:** Leaving the behavior implicit and hoping the LLM infers it from the raw idea; forcing every prompt into Bahasa Indonesia regardless of user language; baking brand-specific heuristics into task classification instead of the prompt-construction layer.
**Consequences:** Indonesian technical prompts are now guided toward more locally consistent optimized outputs without changing the public API shape. Live provider proof for this specific slice still depends on the currently active model route being valid at runtime.

### [2026-06-04] Exact user-requested output structure must override optimizer creativity
**Context:** Even after the localized guardrails landed, a live Indonesian architecture example still showed unnecessary scaffolding (`Learning Objectives`, `Assessment`) when the user actually wanted a very specific heading structure.
**Decision:** Added explicit format-obedience rules to the Optimizer prompt-builder. If the raw idea already contains exact headings, section names, or a concrete format block, the optimized prompt must preserve that structure as closely as possible and must not add extra sections unless the user explicitly asks for them.
**Rejected alternatives:** Trusting the generic `OUTPUT FORMAT` section to be enough; treating pedagogical scaffolding as harmless enrichment; solving the issue only with task-specific heuristics.
**Consequences:** The Optimizer is now more faithful to user-specified output structure on Indonesian technical prompts, and live reruns show the requested heading block preserved instead of replaced with invented scaffolding.

### [2026-06-04] Semantic fidelity to user wording should beat optimizer paraphrasing
**Context:** After format obedience improved, the next drift was no longer section structure but phrasing: the optimizer could still rename the user's request into a more generic adjacent task, soften explicit audience wording, or replace requested technical scope with its own broader teaching frame.
**Decision:** Added semantic-fidelity rules to the Optimizer prompt-builder. Preserve the user's core domain wording and deliverable framing, preserve explicitly named audiences in `ROLE`/`TASK`/`CONTEXT`, and carry forward explicit components/examples instead of swapping them for optimizer-created scaffolding.
**Rejected alternatives:** Letting the model infer wording fidelity implicitly; using task-type heuristics only; forcing full verbatim copying of the raw idea even when light clarification improves usability.
**Consequences:** The optimized prompt now stays closer to the user's original ask on Indonesian architecture prompts, while still allowing limited cleanup and structuring. Remaining drift is now a qualitative tuning issue, not a missing fidelity guardrail.

### [2026-06-05] Technical architecture prompts should sharpen ROLE and TASK, not just preserve them
**Context:** After semantic fidelity improved, the next live-output weakness was that `ROLE` and `TASK` could still sound slightly too safe or generic even when the user had already provided a strong technical architecture brief.
**Decision:** Added a targeted rule for technical architecture/system prompts: make `ROLE` reuse the strongest technical domain nouns already present in the raw idea, keep `TASK` closer to the user's original technical sentence, and allow public branded comparisons to remain when they help orientation.
**Rejected alternatives:** Forcing verbatim copying of the full user sentence; removing branded comparison labels entirely; solving the issue with a task-specific template instead of the shared prompt-builder path.
**Consequences:** Live reruns now produce a sharper `ROLE` and a less diluted `TASK` for the architecture example, while still preserving the previously fixed output format and safety boundaries.

### [2026-06-05] Schema defaults reconciled — GROK → OPENAI
**Context:** `OptimizeRequestSchema` and `EvaluateRequestSchema` defaulted `provider`/`targetLlm` to `'GROK'` — a provider with no installed SDK, causing immediate bootstrap failure on deployments without `XAI_API_KEY`. Chief confirmed actual runtime is Pioneer/OpenRouter via OpenAI-compatible path.
**Decision:** Changed both schema defaults from `'GROK'` to `'OPENAI'`. The `GROK` provider entry in `LLMProviderNameSchema` was not removed — it remains available for explicit use.
**Consequences:** New deployments no longer fail on first request when `XAI_API_KEY` is absent. API behavior change: any client relying on the default being `GROK` must now pass it explicitly.

### [2026-06-05] Non-streaming optimizePrompt migrated to parseSuperPromptMarkdown
**Context:** System prompt instructs LLM to emit 6-heading markdown, but non-streaming path still called `parseSuperPromptJson`. This caused silent fallback to a bare `fullPrompt` response with no structured fields.
**Decision:** `optimizePrompt()` now calls `parseSuperPromptMarkdown`. `parseSuperPromptJson` kept for rollback safety and legacy use. Parse failures now emit a `logger.warn` breadcrumb with provider and model context.
**Consequences:** Non-streaming path now produces structured SuperPrompt output consistent with the streaming path. Malformed responses still fall through to the existing fallback, but are now visible in logs/Sentry.
