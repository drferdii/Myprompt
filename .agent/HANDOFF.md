# HANDOFF.md — sentra-prompt
<!-- Last updated: 2026-06-04 -->

## Active Task

Desktop workspace evolution is closed on the Electron shell. Tasks 1–9 from `docs/superpowers/plans/2026-06-05-desktop-workspace-evolution.md` are now landed and verified. There is no active continuation branch inside that plan anymore; the next move should be a fresh product decision or a new implementation slice.

### S4 Landed State (Session 2 completed)

**Files touched:**
1. `desktop/ipc/core.ts` — `desktop:command` now special-cases `optimize:run`, immediately returns `{ status: 'started', requestId }`, and runs `optimizePromptStreaming(...)` in the background while emitting `optimize:chunk` / `optimize:done` / `optimize:error`.
2. `desktop/renderer/renderer.ts` — `execute()` now generates a requestId for optimize mode, subscribes to streaming events, appends live deltas to a per-request line, then replaces the line with the formatted final response on completion.
3. `desktop/preload.ts` — `onStream(channel, cb)` / `offStream(channel, cb)` bridge added around `ipcRenderer.on/removeListener`.
4. `desktop/renderer/commands.ts` — helper payload updated to include optimize `requestId`.
5. `__tests__/desktop/ipc-core.test.ts`, `__tests__/desktop/settings-commands.test.ts` — updated to assert the streaming contract.

**Desktop event contract now live:**
- Trigger: existing `desktop:command` channel, `optimize:run` command, plus `requestId` (UUID) in the envelope.
- Push events: `optimize:chunk { requestId, delta }`, `optimize:done { requestId, response }`, `optimize:error { requestId, message }`.
- No API keys, no PII in any event payload (per LESSONS.md).

**S3 deviation from plan (still applies):**
`optimizePrompt` was NOT reimplemented as a thin wrapper over `optimizePromptStreaming`. Reason: `generateStream` does not return model info; using `provider.defaultModel` as the model value would silently report the wrong model for env-configured providers (e.g., OpenRouter/deepseek-v4-pro reports as 'gpt-4o'). The non-streaming path stays on `provider.generate()` which returns actual `LLMResponse.model`. Follow-up: add `activeModel` getter to `LLMProviderAdapter` interface so both paths can share accurate model reporting.

**Verification completed for S4:**
- `pnpm --filter @the-abyss/sentra-prompt test:desktop`
- `pnpm --filter @the-abyss/sentra-prompt desktop:build`
- `pnpm --filter @the-abyss/sentra-prompt desktop:smoke`

## Current State

- Desktop workspace-evolution slices now landed on top of the restored compact shell:
  - authenticated `library:save` path through the existing `Prompt` table
  - local `draft:save` path via the desktop workspace JSON store
  - local `benchmark:save` path plus acceptance-harness-backed `benchmark:run`
  - output action row on transform/optimize results: `Save to Library`, `Save as Draft`, `Save as Benchmark`, `Re-run`, `Evaluate`
  - trust-first evaluator result contract: parse failure returns `FAILED` with `EVALUATION_PARSE_FAILED` instead of fake `5/10` scores
  - explicit desktop formatter for evaluator failure blocks with retry guidance
  - shell badges container + slash palette + `/help` overlay panel
  - recent-runs persistence and `/recent` workbench overlay with compare-ready grouping for matching Transform/Optimizer inputs
  - workbench overlay also surfaces saved benchmark cards with one-click `Run Benchmark`
  - optimize-mode suggestion panel now shows inferred task type, recommended lane, and template hint before execution
  - post-launch regression fix: `desktop/renderer/renderer.ts` is self-contained again, so the browser-side shell no longer compiles to local `require(...)` calls that break all button handlers under `nodeIntegration: false`
- Additional guardrails landed during execution:
  - optimize streaming failure now removes stale blank/status artifacts from the console
  - lane fallback truth is now aligned across runtime + desktop tests: `INTERACTIVE -> deepseek/deepseek-v4-flash`, `DEEP -> deepseek/deepseek-v4-pro`

- Desktop runtime now boots through `desktop/bootstrap.ts` to resolve compiled `@/` imports at Electron runtime.
- Desktop runtime now loads `.env*` files through `@next/env`, so Electron reads environment variables with the same rules as the Next.js app.
- Desktop runtime now lets app-local `.env` / `.env.local` values override inherited workstation env for desktop LLM provider keys, base URL, and model selection.
- Desktop shell no longer depends on a transparent native window on Windows; the frameless shell now uses a solid background color so the mandatory console layout renders visibly.
- The browser-side renderer script is now self-contained so it can run with `nodeIntegration: false`; the previous CommonJS renderer bundle left the shell static and non-interactive.
- The restored compact desktop shell now keeps the output-copy affordance visible on agent responses by default, and the earlier decorative vertical `PROMPT` seal has been removed to avoid control-area overlap.
- Auth-gated desktop commands now translate raw `UnauthorizedError` / `User not found` failures into actionable console guidance instead of leaking internal auth errors directly.
- Desktop `Optimizer` and `Evaluator` now support guest execution without login; when no session is available, they bypass account quota/key resolution but keep the requested provider instead of silently rerouting.
- Electron boot no longer auto-starts a local Ollama/OpenAI-compatible runtime as an implicit fallback.
- Desktop optimizer output formatting now recovers from serialized JSON payloads and renders the final `fullPrompt` body with a short markdown metadata section instead of leaking raw `superPrompt.*` fields.
- Desktop `Optimizer` now streams incremental text into the console via `optimize:chunk` before finalizing with the formatted result on `optimize:done`.
- Streaming metadata now reports the provider's configured `activeModel`, not the transport default. This removes the false `gpt-4o` label for OpenAI-compatible paths such as OpenRouter + DeepSeek.
- Desktop shell state also stops claiming `gpt-4o` when `OPENAI_BASE_URL` points at an OpenAI-compatible endpoint but `OPENAI_MODEL` is missing; it now surfaces `model-required` instead.
- Optimizer prompt construction is now denser for token efficiency:
  - non-stream `optimizePrompt` uses `maxTokens: 1500`
  - prompt setting descriptors are shorter
  - table / calculation / recommendation tasks inject an `OPERATOR PRIORITIES` block
- The Optimizer quality bar now explicitly preserves source numbers verbatim and prefers direct operator-ready output over narrative padding for analysis-style tasks.
- Optimizer prompt generation now also guards four quality issues raised from Indonesian technical-prompt review:
  - generated instruction language should follow the dominant user language unless overridden
  - the optimized prompt should carry one explicit output-length budget even when the user omitted it
  - Indonesian audiences can receive Indonesia-familiar analogies/examples when that improves clarity
  - branded product references (for example `WhatsApp-like`) should be reframed as public industry patterns, not proprietary internals
- Optimizer now also enforces output-format obedience:
  - if the raw idea already provides exact headings / section order / a format block, preserve that structure as closely as possible
  - do not add extra scaffolding sections such as `Learning Objectives` or `Assessment` unless explicitly requested
- Optimizer now also enforces semantic fidelity for wording:
  - keep the user's core domain phrasing and deliverable framing close to the original request
  - preserve explicitly named audiences such as `engineer junior`
  - carry forward explicit components/examples instead of swapping them for optimizer-created framing
- Optimizer now also sharpens technical architecture phrasing:
  - `ROLE` should use the strongest technical domain nouns already present in the raw idea
  - `TASK` should stay close to the user's original technical sentence instead of broadening into a safer adjacent paraphrase
  - branded comparisons such as `WhatsApp` may stay as public orientation labels when they help, without implying proprietary internals
- Task M follow-up is landed for the OpenAI-compatible model/base URL surface:
  - Optimizer prefers `OPTIMIZER_OPENAI_MODEL` + `OPTIMIZER_OPENAI_BASE_URL`
  - Evaluator prefers `EVALUATOR_OPENAI_MODEL` + `EVALUATOR_OPENAI_BASE_URL`
  - both still fall back to shared `OPENAI_MODEL` + `OPENAI_BASE_URL` when scoped overrides are unset
- Desktop shell-state reporting now follows the Optimizer-scoped OpenAI-compatible settings, so the visible desktop label matches the Optimizer runtime Chief is actually using.
- OpenAI-compatible stream handling is now more defensive:
  - stream delta extraction accepts string and text-part-array chunk content
  - if stream completes with no visible text, Optimizer falls back to one non-stream generate call instead of returning an empty prompt
  - desktop formatter reconstructs visible prompt sections when `fullPrompt` is blank, rather than rendering an empty body
- Optimize-mode prompt classification now catches marketing/campaign/copywriting signals and routes them to `MARKETING` instead of `GENERAL`.
- Optimizer now has two explicit lanes without introducing a third primary desktop mode:
  - `INTERACTIVE` is the desktop default and is meant for low-latency operator work
  - `DEEP` preserves the richer retrieval-aware optimization path for slower/higher-touch requests
- Desktop Optimizer status now surfaces the active lane in the shell itself, and the selected lane is sent over the existing `optimize:run` contract as `optimizerLane`.
- Engine behavior now differs by lane:
  - `INTERACTIVE`
    - skips semantic template retrieval unless an explicit `templateSlug` is supplied
    - uses a shorter system/user prompt skeleton
    - uses `maxTokens: 900` and `temperature: 0.4`
  - `DEEP`
    - keeps semantic template retrieval when no explicit template is supplied
    - keeps the richer prompt skeleton
    - uses `maxTokens: 1500` and `temperature: 0.7`
- OpenAI-compatible runtime resolution now also differs by lane for the Optimizer path:
  - `OPTIMIZER_INTERACTIVE_OPENAI_MODEL` / `OPTIMIZER_INTERACTIVE_OPENAI_BASE_URL`
  - `OPTIMIZER_DEEP_OPENAI_MODEL` / `OPTIMIZER_DEEP_OPENAI_BASE_URL`
  - fallback order remains lane-specific override → shared Optimizer override → shared OpenAI-compatible override
- Desktop shell state now exposes `optimizerLaneStates.INTERACTIVE` and `optimizerLaneStates.DEEP`, so switching lanes updates the visible model chip instead of reusing one shared Optimizer model label.
- Desktop streaming now emits `optimize:status` stage events (`preparing`, `waiting`, `streaming`) and the renderer surfaces them as `[STATE] ...` console lines.
- The OpenAI-compatible `INTERACTIVE` lane now has one narrow inherited-model fallback:
  - when no lane-specific/shared Optimizer model override exists
  - and the effective OpenRouter model inherited from shared `OPENAI_MODEL` is `deepseek/deepseek-v4-pro`
  - `INTERACTIVE` resolves to `deepseek/deepseek-v4-flash`
  - `DEEP` resolves to `deepseek/deepseek-v4-pro`
- `desktop/main.ts` now uses that same resolver for shell-state reporting, so the visible `INTERACTIVE` chip and the actual engine runtime stay aligned.
- `DEEP` streaming output budget is now `maxTokens: 2200`, because the previous `1500` budget could truncate the deeper prompt before later sections completed.
- Acceptance harness now exists at `scripts/optimizer-acceptance.ts`.
  - Command: `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance`
  - Dry-run dataset preview: `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --dry-run`
  - JSON report mode for evidence capture: `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --json`
- The acceptance suite currently covers:
  - copywriting
  - table/revenue analysis
  - operational drafting
  - deep strategy
  - deep architecture review
- Measured contract per case/lane:
  - first visible response time
  - total latency
  - prompt length range
  - visible output presence
- Primary modes are `Transform` and `Optimizer`.
- Desktop auth/session foundation is in place.

## Verified

- `pnpm --filter @the-abyss/sentra-prompt test:desktop`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/desktop/ipc-core.test.ts __tests__/desktop/settings-commands.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts __tests__/desktop/ipc-core.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts __tests__/optimizer/engine.test.ts __tests__/desktop/ipc-core.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts __tests__/optimizer/engine.test.ts __tests__/desktop/ipc-core.test.ts __tests__/desktop/settings-commands.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts __tests__/optimizer/prompt-quality.test.ts __tests__/desktop/ipc-core.test.ts __tests__/desktop/settings-commands.test.ts __tests__/desktop/shell-renderer.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --dry-run`
- `pnpm --filter @the-abyss/sentra-prompt desktop:benchmark -- --dry-run`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/evaluator/engine.test.ts __tests__/optimizer/engine.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/desktop/shell-renderer.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt test`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts __tests__/desktop/settings-commands.test.ts __tests__/desktop/ipc-core.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts __tests__/optimizer/prompt-quality.test.ts __tests__/desktop/ipc-core.test.ts __tests__/desktop/settings-commands.test.ts __tests__/desktop/shell-renderer.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --case copywriting-instagram --json`
- `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --json`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts -t "aligns the prompt instruction language|adds local-context analogy guidance|always adds explicit output budget guidance|adds proprietary-brand abstraction guidance"`
- `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts __tests__/optimizer/engine.test.ts`
- `pnpm --filter @the-abyss/sentra-prompt desktop:build`
- `pnpm --filter @the-abyss/sentra-prompt desktop:smoke`

## P2 State (2026-06-04b)

- detectIntent, matchTemplate, matchTemplateWithEmbeddings, cosineSimilarity — all landed and green.
- Provider: OpenRouter + deepseek/deepseek-v4-pro via `.env.local` (not committed).
- `dist-electron` is now rebuilt, so the desktop bundle includes the current S4 stream path.
- Two exposed keys need rotation: Pioneer `pio_sk_...` + OpenRouter `sk-or-v1-...` (both sent in chat plaintext).

## Known Gaps

- 2026-06-06 latency lesson: if shared OpenRouter inheritance resolves `INTERACTIVE` to a reasoning-heavy DeepSeek fallback, desktop can regress from sub-10s to ~1 minute on real operator prompts. The validated fast fallback for inherited `deepseek/deepseek-v4-pro` is `google/gemini-3.1-flash-lite`, not `deepseek/deepseek-v4-flash`.
- `auth:register` still uses direct Supabase sign-up semantics and does not yet match the full web anti-abuse and redirect flow.
- Electron smoke still emits Windows cache warnings (`Access is denied`) despite exiting successfully.
- The legacy Next.js pages still exist for compatibility; desktop is now the primary local runtime, but the cleanup/removal pass is still separate work.
- Package-wide `typecheck` remains noisy from pre-existing `.next/types/**` and `archieved/**`; S4 verification stayed desktop-scoped on purpose.
- Provider API key sourcing is still shared by the existing request/env flow. Only the OpenAI-compatible model/base-URL surface was intentionally split in Task M.
- Some OpenAI-compatible upstream models may still buffer visible content late; current hardening prevents blank finals, but not every provider/model pair will feel token-by-token smooth without upstream support.
- The new `INTERACTIVE` lane removes app-side retrieval overhead, but a slow reasoning-heavy live model can still dominate total latency if Chief keeps the same upstream provider/model.
- Runtime replay lesson for this lane: direct ad-hoc `tsx` invocation can miss the app-local env path and produce false `model not found` failures. Reuse `loadAcceptanceEnv()` before calling `optimizePrompt(...)` if you want a live replay consistent with the accepted runtime.
- Live replay now succeeds for the Indonesian architecture example through the same env-loading path as the acceptance harness:
  - resolved runtime model: `google/gemini-3.1-flash-lite-20260507`
  - output includes Bahasa Indonesia instruction framing, explicit output budget, Indonesia-local analogy guidance, and general-pattern framing instead of proprietary WhatsApp internals
  - output format now also follows Chief's requested heading structure exactly in `## OUTPUT FORMAT`, without injecting unrequested sections like `Learning Objectives` or `Assessment`
  - semantic fidelity is improved as well: the audience stays explicitly `engineer junior`, and the optimized prompt stays closer to the original architecture brief instead of reframing it into a generic teaching scaffold
  - the latest polish also sharpens the visible phrasing:
    - `ROLE` now centers on large-scale real-time communication systems instead of a softer generic architect label
    - `TASK` now stays closer to `Jelaskan rancangan arsitektur tingkat tinggi untuk aplikasi chatting real-time (seperti WhatsApp)`
- Lane-specific model/base-URL routing and the acceptance harness now exist, and there is now one live-provider evidence pack from Chief's real prompt set:
  - `copywriting-instagram`
    - `INTERACTIVE` → `google/gemini-3.1-flash-lite`
      - `firstVisibleMs=1368`
      - `totalLatencyMs=4553`
      - `promptChars=1776`
      - pass
    - `DEEP` → `google/gemini-3.5-flash`
      - `firstVisibleMs=7498`
      - `totalLatencyMs=11326`
      - `promptChars=2815`
      - pass
  - `revenue-table-analysis`
    - `INTERACTIVE` → `google/gemini-3.1-flash-lite`
      - `firstVisibleMs=1256`
      - `totalLatencyMs=2508`
      - `promptChars=1481`
      - pass
    - `DEEP` → `google/gemini-3.5-flash`
      - `firstVisibleMs=10742`
      - `totalLatencyMs=14250`
      - `promptChars=2968`
      - pass
  - `ops-brief`
    - `INTERACTIVE` → `google/gemini-3.1-flash-lite`
      - `firstVisibleMs=1089`
      - `totalLatencyMs=2529`
      - `promptChars=1802`
      - pass
    - `DEEP` → `google/gemini-3.5-flash`
      - `firstVisibleMs=8646`
      - `totalLatencyMs=13038`
      - `promptChars=3237`
      - pass
  - `deep-strategy-brief`
    - `DEEP` → `google/gemini-3.5-flash`
      - `firstVisibleMs=8233`
      - `totalLatencyMs=12868`
      - `promptChars=3884`
      - pass
  - `deep-architecture-review`
    - `DEEP` → `google/gemini-3.5-flash`
      - `firstVisibleMs=7386`
      - `totalLatencyMs=17291`
      - `promptChars=5842`
      - pass
- A more aggressive `INTERACTIVE` trim experiment (optional APPROACH + `maxTokens: 700`) was tried earlier and reverted after live acceptance got worse (`firstVisibleMs: null`, `totalLatencyMs: 25576`). Do not re-apply it without stronger evidence.

## Next Steps

1. If Chief wants the benchmark lane productized further, add edit/delete affordances for saved benchmark cases instead of save-and-run only.
2. If Chief wants stronger confidence, add 1-2 canonical Chief prompts into the acceptance harness or mirror them into saved benchmark cases for repeated comparison.
3. Separate lane only after that product decision: revisit auth/register parity or broader SSE/web parity if Chief still wants them.
