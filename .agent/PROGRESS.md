# PROGRESS.md — sentra-prompt

## Current Status

**Last updated:** 2026-07-19
**Active focus:** Desktop shell redesign integrated from `newdesign.zip` (Sentra Console — Dark Edition). All tests, build, and smoke verification green.

## Completed

- ⚡ **Email Queue N+1 Query Optimization** — 2026-07-19:
  - Replaced individual N+1 database queries inside `processEmailQueue` with a single batch `updateMany` query for claiming due jobs.
  - Reduced database roundtrips by almost 50% during email queue processing.
  - Added a dedicated suite of unit tests in `lib/email/queue.test.ts` verifying claiming, successful sending, and retry behaviors.
  - Reverted any temporary changes to `package.json` to keep workspace definitions intact.




- Desktop shell redesign from `newdesign.zip` — 2026-06-18:
  - replaced `desktop/renderer/index.html` with the "Sentra Console — Dark Edition" console-rig layout (aluminum enclosure, front panel, LED strip, top/side vents, feet, rear ports, system HUD, deep screen)
  - extracted CSS from `newdesign.zip` into `desktop/renderer/index.css` and linked it externally
  - adapted Electron frameless-window drag behavior: `.drag-handle` gets `-webkit-app-region: drag`, interactive controls get `-webkit-app-region: no-drag`
  - removed boot-sequence animation delays so the shell is usable immediately on launch
  - removed the black studio backdrop and cinematic vignette; set `body` background to transparent and enabled `transparent: true` + `backgroundColor: '#00000000'` in `desktop/main.ts` so the console rig floats over the desktop wallpaper
  - updated `desktop/main.ts` default window size to `960x600` and default position to `(0, 0)` so every initial load opens at the top-left corner
  - removed `window-state.json` persistence so the window no longer restores its previous position/size
  - moved the system HUD from an absolute overlay into the footer so it no longer overlaps the CLR/EXEC/COPY command buttons
  - removed the `transform: scale(1.12)` on the console rig after it caused the console to overflow/cut off the window edges; the larger window size provides the overall appearance instead
  - simplified the mini-widget toggle to a single-button main/simple swap: UI utama → tekan `—` di header → langsung UI simple (`mini-panel` expanded 420x580); UI simple → tekan `—` di header → langsung kembali ke UI utama; removed the intermediate floating 52x52 button state; `desktop:toggle-mini` IPC handler resizes/positions the window for `expanded` and `normal` modes; added `[hidden] { display: none !important; }` to prevent the mini UI from leaking/overlaying while the main console is visible
  - updated `desktop:build` script to copy `index.css` alongside `index.html` into `dist-electron/desktop/renderer`
  - preserved all existing `renderer.ts` business logic: IPC bridge, streaming, command catalog, workbench, benchmark, output actions, copy affordances
  - updated `__tests__/desktop/shell-renderer.test.ts` for the new shell structure
  - fixed Electron mock in `__tests__/desktop/ipc-core.test.ts` (`app.getPath`, `BrowserWindow.on`) so window-lifecycle tests are stable
  - verified:
    - `pnpm --filter @the-abyss/sentra-prompt test:desktop` → 46/46 passed
    - `pnpm --filter @the-abyss/sentra-prompt test` → 151/151 passed
    - `pnpm --filter @the-abyss/sentra-prompt desktop:build` → exit 0
    - `pnpm --filter @the-abyss/sentra-prompt desktop:smoke` → exit 0
    - targeted eslint on changed TypeScript files → exit 0
    - `Get-Content dist-electron/desktop/renderer/renderer.js -TotalCount 20` → no CommonJS `exports.*`
    - interactive DOM tests added to `shell-renderer.test.ts` that mount the real `index.html`, mock `sentraDesktop`, and exercise: optimize mode switch, DEEP lane switch, EXEC, CLR, and CLOSE buttons

- Desktop shell clickability regression fixed — 2026-06-15:
  - root symptom from Chief: desktop window rendered, but buttons were not clickable
  - initial CSS hit-testing hypothesis was incomplete; the confirmed root cause was browser-side renderer bootstrap failure
  - `desktop/renderer/renderer.ts` had test-only `export` keywords, so the desktop bundle emitted CommonJS `exports.*` at the top of `dist-electron/desktop/renderer/renderer.js`
  - because Electron renderer runs with `nodeIntegration: false`, `exports` was undefined and the script died before attaching any button handlers or writing the boot lines
  - `tsconfig.desktop.json` now disables incremental desktop compilation so `pnpm desktop:build` does not silently preserve a stale broken renderer bundle
  - `desktop/renderer/index.html` still keeps the safer layering / `no-drag` guardrails for frameless-window interaction polish
  - regression guard updated in `__tests__/desktop/shell-renderer.test.ts`
  - verified:
    - `Get-Content dist-electron/desktop/renderer/renderer.js -TotalCount 20` now shows a plain script with no `exports.*`
    - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/desktop/shell-renderer.test.ts`
    - `pnpm --filter @the-abyss/sentra-prompt desktop:build`
    - `pnpm --filter @the-abyss/sentra-prompt desktop:smoke`

- Scramble decode waiting effect — 2026-06-06:
  - baris `.scramble-line` muncul di console saat `optimize:status { stage: 'waiting' }`
  - karakter acak berubah tiap 80ms; decode kiri-ke-kanan ke 40 char pertama output saat streaming mulai (30ms/char)
  - `clearScramble()` dipanggil otomatis pada `optimize:done` dan `optimize:error`
  - CSS `.scramble-line` ditambahkan ke `index.html`
  - `SCRAMBLE_CHARS`, `DECODE_TARGET_LENGTH`, `generateScrambleText` diekspor dan ditest
  - 29/29 tests hijau, `desktop:build` dan `desktop:smoke` exit 0

- DEEP lane model switch — 2026-06-06:
  - `OPENROUTER_LANE_MODEL_FALLBACKS.DEEP` changed from `deepseek/deepseek-v4-pro` → `deepseek/deepseek-v4-flash`
  - acceptance threshold `maxFirstVisibleMs` for DEEP updated: simple cases 15000→20000, complex deep-only cases 15000→35000
  - live acceptance data: copywriting-instagram DEEP `firstVisible=16351ms, total=29277ms`; ops-brief DEEP `firstVisible=14792ms, total=26702ms`
  - regression tests updated and passing: 36/36 green
  - desktop shell state now reports `deepseek/deepseek-v4-flash` for DEEP lane chip

- Interactive lane latency regression fixed on 2026-06-06:
  - root cause was fallback drift in `OPENROUTER_LANE_MODEL_FALLBACKS.INTERACTIVE`
  - shared OpenRouter `deepseek/deepseek-v4-pro` inheritance was resolving to `deepseek/deepseek-v4-flash`
  - live replay for Chief's `Kopi Senja` landing-page prompt measured `~65s` total latency on that path
  - the fallback is now restored to `google/gemini-3.1-flash-lite`
  - live replay for the same prompt now measures `firstVisibleMs=1383` and `totalLatencyMs=2975`
  - regression coverage updated in `__tests__/optimizer/engine.test.ts` and `__tests__/desktop/ipc-core.test.ts`

- Desktop shell micro-polish for the restored compact renderer:
  - removed the decorative vertical `PROMPT` seal that could spill into the control area
  - made agent-response copy affordances visible by default instead of hover-only
  - added a small shell test guard so the removed seal does not silently reappear
- Desktop feature parity contract for the two primary modes
- Electron shell scaffold based on `mandatory.html`
- Desktop auth/session foundation
- Core IPC bridge for prompt workflows, library, templates, usage, provider keys, and subscription upgrade
- Console interaction model with prompt-mode payload builders and slash-command parsing
- Desktop build bootstrap for compiled alias resolution
- Windows Electron shell blank-screen fix by replacing transparent native window rendering with a solid background-backed frameless shell
- Renderer interactivity fix by removing CommonJS `require(...)` dependencies from the browser-side shell script
- Friendly desktop auth guidance for auth-gated commands such as `Optimizer`
- Guest-mode desktop execution for `Optimizer` and `Evaluator` without requiring desktop login
- Provider integrity fix so guest-mode `Optimizer` and `Evaluator` preserve the requested provider instead of silently rerouting to `OPENAI`
- Desktop runtime environment loading via `@next/env` so Electron reads `.env*` files the same way Next.js does
- Desktop runtime now lets app-local provider env override inherited workstation env for the LLM keys/base URL/model used by the Electron shell
- Removal of automatic local-provider startup at Electron boot; local runtime is no longer started implicitly
- Pioneer desktop runtime configured locally via `.env.local` using the OpenAI-compatible endpoint and `MiniMaxAI/MiniMax-M3`
- Optimizer desktop formatting now normalizes serialized JSON responses back into markdown output using `fullPrompt` plus a short metadata section, without exposing `chainOfThought`
- Desktop verification lane:
  - `pnpm test:desktop`
  - `pnpm desktop:build`
  - `pnpm desktop:smoke`
- Desktop workspace evolution closed on the active Electron shell:
  - `Save to Library`, `Save as Draft`, `Save as Benchmark`, `Re-run`, and `Evaluate` output actions are available on transform/optimize runs
  - local workspace persistence now covers drafts, recent runs, and saved benchmark cases
  - trust-first evaluator failures render explicit `Evaluation Failed` blocks with retry guidance instead of fake fallback scores
  - command discoverability now includes `/help`, shell badges, slash palette suggestions, and benchmark commands
  - workbench overlay now surfaces recent runs, compare-ready groupings, and saved benchmark cards
  - benchmark mode now reuses the acceptance harness through `benchmark:list`, `benchmark:save`, `benchmark:run`, and the `desktop:benchmark` script
  - optimize-mode input now shows smart pre-run suggestions for inferred task type, recommended lane, and template hint before execution
  - browser-side renderer import regression fixed: the Electron shell renderer is self-contained again, so button handlers can attach under `nodeIntegration: false`
  - verified:
    - `pnpm --filter @the-abyss/sentra-prompt test:desktop`
    - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/evaluator/engine.test.ts __tests__/optimizer/engine.test.ts`
    - `pnpm --filter @the-abyss/sentra-prompt desktop:benchmark -- --dry-run`
    - `pnpm --filter @the-abyss/sentra-prompt desktop:build`
    - `pnpm --filter @the-abyss/sentra-prompt desktop:smoke`
    - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/desktop/shell-renderer.test.ts`

## Optimizer Streaming S1–S3 — 2026-06-04c

- S1: `buildOptimizeSystemPrompt` rewritten to output canonical 6-heading markdown (ROLE/TASK/CONTEXT/APPROACH/CONSTRAINTS/OUTPUT FORMAT) instead of JSON. Few-shot example preserved in markdown form. Existing tests updated.
- S2: `parseSuperPromptMarkdown(raw: string): SuperPrompt` added to `lib/optimizer/super-prompt-format.ts`. Heading-based split, outer-fence stripping, optional APPROACH, required 5 others. Zod-validated via SSOT contract. 6 new tests.
- S3: `optimizePromptStreaming(request, onChunk)` added to `lib/optimizer/engine.ts`. Uses `provider.generateStream` with maxTokens 1800. Calls onChunk per delta. Post-parses with `parseSuperPromptMarkdown`. Existing `optimizePrompt` kept unchanged (not a wrapper) — preserves accurate model reporting from `LLMResponse.model`. 4 new tests.
- Verified: 46/46 tests green. Changed files clean on typecheck + lint.

## Optimizer Streaming S4 — 2026-06-04d

- `desktop/ipc/core.ts`: `optimize:run` now starts a requestId-scoped streaming session. Main process emits `optimize:chunk`, `optimize:done`, and `optimize:error` through `event.sender.send(...)` while keeping `desktop:command` as the trigger.
- `desktop/preload.ts`: exposed `onStream(channel, cb)` / `offStream(channel, cb)` so the renderer can subscribe to push events without reaching for Electron internals directly.
- `desktop/renderer/renderer.ts`: optimize mode now creates a per-request live output line, appends chunk deltas as they arrive, then replaces the line with the final formatted OptimizeResponse on `optimize:done`.
- `desktop/renderer/commands.ts`: optimize helper payload now carries `requestId` too, keeping helper/test contract aligned with runtime behavior.
- `__tests__/desktop/ipc-core.test.ts`: optimize path now asserts streaming ack + per-request chunk/done/error events.
- `__tests__/desktop/settings-commands.test.ts`: helper contract updated for optimize `requestId`.
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt test:desktop`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:build`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:smoke`
- Note: package-wide `typecheck` still fails on pre-existing `.next/types/**` and `archieved/**` noise unrelated to S4.

## Model Noise Cleanup — 2026-06-04e

- `LLMProviderAdapter` now exposes `activeModel`, and the streaming Optimizer path uses `provider.activeModel` for `metadata.model` instead of `provider.defaultModel`.
- Result: OpenAI-compatible transports no longer report `gpt-4o` when the actual configured runtime model is something else like `deepseek/deepseek-v4-pro`.
- `desktop/main.ts` no longer claims `gpt-4o` for OpenAI-compatible base URLs when `OPENAI_MODEL` is unset. Shell state now reports `model-required` / `openai-compatible/model-required` instead of a false model label.
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts __tests__/desktop/ipc-core.test.ts`
  - `pnpm --filter @the-abyss/sentra-prompt test:desktop`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:build`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:smoke`
- Note: targeted eslint command exits 0, but still prints the existing Next.js `pages` directory warning from repo tooling config.

## Optimizer Compactness + Task M Split — 2026-06-04f

- `buildOptimizeSystemPrompt` and `buildOptimizeUserPrompt` are now denser and more operator-ready for table / calculation / analysis prompts:
  - shorter setting descriptors
  - direct operator-usability quality bar
  - explicit preserve-source-numbers rule
  - conditional `OPERATOR PRIORITIES` block for table / analysis / recommendation-style tasks
- `optimizePrompt` maxTokens reduced from 4096 to 1500 so the non-stream path no longer spends a larger token budget than the streaming path.
- Task M landed for the OpenAI-compatible path:
  - Optimizer now resolves `OPTIMIZER_OPENAI_MODEL` / `OPTIMIZER_OPENAI_BASE_URL`
  - Evaluator now resolves `EVALUATOR_OPENAI_MODEL` / `EVALUATOR_OPENAI_BASE_URL`
  - both still fall back to shared `OPENAI_MODEL` / `OPENAI_BASE_URL` when scoped overrides are unset
- `desktop/main.ts` shell-state reporting now prefers the Optimizer-scoped model/base URL so the desktop surface reflects the Optimizer runtime Chief is actually driving.
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts __tests__/optimizer/engine.test.ts __tests__/desktop/ipc-core.test.ts`
  - `pnpm --filter @the-abyss/sentra-prompt test`
  - `pnpm --filter @the-abyss/sentra-prompt test:desktop`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:build`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:smoke`

## Optimizer Stream Reliability Hardening — 2026-06-04g

- Root-cause lane after Chief reported: desktop Optimizer could finish after ~36s with no visible chunk output and an effectively blank final prompt surface.
- Hardening landed in 3 layers:
  - `lib/llm/providers/openai.ts`: stream delta extraction now tolerates OpenAI-compatible chunk content that arrives as string or text-part arrays.
  - `lib/optimizer/engine.ts`: if streaming completes without any visible text, the engine now falls back to one non-stream `generate()` call instead of returning an empty prompt.
  - `desktop/renderer/{renderer,commands}.ts`: formatter no longer renders an empty Optimizer body silently; it reconstructs visible sections from structured fields or surfaces an explicit no-visible-content notice.
- Desktop prompt classification also improved for operator-facing optimize mode:
  - marketing/campaign/copywriting prompts now route to `MARKETING` instead of dropping into `GENERAL`
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts __tests__/desktop/settings-commands.test.ts __tests__/desktop/ipc-core.test.ts`
  - `pnpm --filter @the-abyss/sentra-prompt test:desktop`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:build`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:smoke`
- Note: this closes the blank-output regression path in code/tests, but a fresh manual live-provider desktop run is still the next strongest acceptance signal if Chief wants direct surface confirmation.

## Optimizer Dual Lane Slice 1 — 2026-06-04h

- Added `optimizerLane` to the shared `OptimizeRequest` contract with two values:
  - `INTERACTIVE` — new default fast lane
  - `DEEP` — explicit heavier lane
- Desktop shell now exposes the lane at the product surface without creating a new primary mode:
  - `desktop/renderer/index.html` adds lane controls inside the Optimizer status panel
  - `desktop/renderer/renderer.ts` tracks the active lane, updates shell copy, and sends the selected lane with `optimize:run`
  - `desktop/renderer/commands.ts` keeps the helper/test contract aligned with the runtime payload
- Optimizer engine now branches by lane:
  - `INTERACTIVE`
    - skips semantic template retrieval (`matchTemplateWithEmbeddings`)
    - uses a slimmer system/user prompt skeleton
    - uses a smaller request budget (`maxTokens: 900`, `temperature: 0.4`)
  - `DEEP`
    - preserves the richer prompt skeleton
    - keeps retrieval-aware behavior for non-explicit template matches
    - keeps the larger request budget (`maxTokens: 1500`, `temperature: 0.7`)
- Prompt-builder coverage now explicitly exercises the `INTERACTIVE` lane so the fast path cannot silently drift back to the heavier prompt shape.
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts __tests__/optimizer/engine.test.ts __tests__/desktop/ipc-core.test.ts __tests__/desktop/settings-commands.test.ts`
  - `pnpm --filter @the-abyss/sentra-prompt test:desktop`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:build`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:smoke`
- Note: this is the first dual-lane slice only. It improves predictability and removes retrieval latency from the default lane, but it is not yet proof that Chief's live provider/model pair will always hit the desired `<5s first useful text` target.

## Optimizer Dual Lane Slice 2 — 2026-06-04i

- OpenAI-compatible runtime overrides are now split by Optimizer lane:
  - `OPTIMIZER_INTERACTIVE_OPENAI_MODEL`
  - `OPTIMIZER_INTERACTIVE_OPENAI_BASE_URL`
  - `OPTIMIZER_DEEP_OPENAI_MODEL`
  - `OPTIMIZER_DEEP_OPENAI_BASE_URL`
- Override precedence for the Optimizer OpenAI-compatible path is now:
  1. lane-specific override
  2. shared Optimizer override
  3. shared OpenAI-compatible override
- `desktop/main.ts` shell state now exposes `optimizerLaneStates.INTERACTIVE` and `optimizerLaneStates.DEEP`, so the desktop renderer can reflect the active lane's configured model honestly instead of showing one shared label.
- `desktop/renderer/renderer.ts` now updates the visible model chip and internal model label when the operator switches between `Interactive` and `Deep`.
- Desktop streaming now emits explicit `optimize:status` events for:
  - `preparing`
  - `waiting`
  - `streaming`
- The renderer now surfaces those stages as `[STATE] ...` lines in the console, so long-running Optimizer requests no longer rely only on a generic heartbeat during the wait.
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts __tests__/optimizer/prompt-quality.test.ts __tests__/desktop/ipc-core.test.ts __tests__/desktop/settings-commands.test.ts __tests__/desktop/shell-renderer.test.ts`
  - `pnpm --filter @the-abyss/sentra-prompt test:desktop`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:build`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:smoke`
- Note: app-side honesty and lane separation are materially better now, but this is still not proof that Chief's live provider/model pair meets the desired latency target.

## Optimizer Acceptance Harness — 2026-06-04j

- Added a single acceptance harness artifact at `scripts/optimizer-acceptance.ts`.
- The harness now embeds a small real-world suite covering:
  - copywriting
  - revenue/table analysis
  - operational drafting
  - deeper strategy work
  - deeper architecture review
- Each case now declares lane coverage and lane-specific budgets so the Optimizer can be judged against concrete targets such as:
  - first visible response time
  - total latency
  - prompt length range
  - visible output presence
- Added a runnable command:
  - `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance`
  - dry-run inspection: `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --dry-run`
- Existing tests now cover the acceptance harness contract:
  - both lanes are represented in the default suite
  - budget evaluation fails when first-visible time breaches the target
  - report summarization surfaces pass/fail counts correctly
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts`
  - `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --dry-run`
- Note: the harness is now ready, but no live-provider acceptance report exists yet. The next real proof is to run it against Chief's actual desktop/runtime provider settings.

## Optimizer Dual Lane Slice 4 — 2026-06-04k

- `lib/llm/provider-registry.ts` now applies a narrow OpenRouter fallback for the `INTERACTIVE` Optimizer lane:
  - if the lane has no explicit model override
  - and the effective OpenAI-compatible base URL resolves to OpenRouter
  - and the shared inherited model is `deepseek/deepseek-v4-pro`
  - then `INTERACTIVE` resolves to `deepseek/deepseek-v4-flash`
- `desktop/main.ts` now reuses the same resolver path for shell state, so the visible model chip matches the actual lane runtime instead of drifting from engine truth.
- Added regression coverage proving both runtime and desktop shell behavior:
  - `__tests__/optimizer/engine.test.ts`
  - `__tests__/desktop/ipc-core.test.ts`
- First live acceptance evidence now exists for Chief's real OpenRouter setup:
  - before this slice, `copywriting-instagram` had both lanes on `deepseek/deepseek-v4-pro`; `INTERACTIVE` failed with no visible output and ~45s total latency
  - after this slice, `INTERACTIVE` now truly runs `deepseek/deepseek-v4-flash`, while `DEEP` remains on `deepseek/deepseek-v4-pro`
  - the best run captured this session for `copywriting-instagram` was:
    - `INTERACTIVE`: first visible `9380ms`, total `17513ms`, visible output present
    - `DEEP`: first visible `25847ms`, total `37127ms`, visible output present
- A follow-up experiment tried a more aggressive `INTERACTIVE` trim (`maxTokens: 700` plus optional APPROACH omission), but live acceptance got worse (`firstVisibleMs: null`, `totalLatencyMs: 25576`), so that experiment was rolled back in the same session.
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts __tests__/optimizer/prompt-quality.test.ts __tests__/desktop/ipc-core.test.ts __tests__/desktop/settings-commands.test.ts __tests__/desktop/shell-renderer.test.ts`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:build`
  - `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --case copywriting-instagram --json`
- Note: this slice materially improved honesty and separation of the lanes, but `INTERACTIVE` still misses the `<5s first visible / <12s total` target, so the next move should be model selection or upstream/provider-specific tuning, not blind prompt micro-trimming.

## Optimizer Dual Lane Slice 5 — 2026-06-04l

- Replaced the inherited OpenRouter `INTERACTIVE` fallback model:
  - from `deepseek/deepseek-v4-flash`
  - to `google/gemini-3.1-flash-lite`
- This was not a blind swap. It was chosen from live harness evidence after testing official OpenRouter low-latency candidates via env override first.
- Added/updated regression coverage so the inherited OpenRouter fallback is now asserted end-to-end in:
  - `__tests__/optimizer/engine.test.ts`
  - `__tests__/desktop/ipc-core.test.ts`
- Tightened the `INTERACTIVE` system prompt rules without changing the overall lane structure:
  - explicitly keep sections short
  - forbid inventing product features/offers/testimonials/metrics
  - forbid extra rationale/summary blocks unless requested
- Live `INTERACTIVE` acceptance now passes on the three operator-facing canonical cases:
  - `copywriting-instagram`
    - `model=google/gemini-3.1-flash-lite`
    - `firstVisibleMs=1608`
    - `totalLatencyMs=3099`
    - `promptChars=1634`
  - `revenue-table-analysis`
    - `model=google/gemini-3.1-flash-lite`
    - `firstVisibleMs=2521`
    - `totalLatencyMs=3979`
    - `promptChars=1594`
  - `ops-brief`
    - `model=google/gemini-3.1-flash-lite`
    - `firstVisibleMs=1178`
    - `totalLatencyMs=3668`
    - `promptChars=1642`
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts __tests__/optimizer/prompt-quality.test.ts __tests__/desktop/ipc-core.test.ts __tests__/desktop/settings-commands.test.ts __tests__/desktop/shell-renderer.test.ts`
  - `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --case copywriting-instagram --lane INTERACTIVE --json`
  - `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --case revenue-table-analysis --lane INTERACTIVE --json`
  - `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --case ops-brief --lane INTERACTIVE --json`
- Note: `INTERACTIVE` is now genuinely fast on the validated cases. The full objective still needs broader evidence for `DEEP` and any remaining product decisions such as S5 / Task G.

## Optimizer Dual Lane Slice 6 — 2026-06-04m

- Replaced the inherited OpenRouter `DEEP` fallback model:
  - from shared inherited `deepseek/deepseek-v4-pro`
  - to `google/gemini-3.5-flash`
  - only when no tighter `DEEP` override is present
- Root-cause follow-up for the failing `deep-strategy-brief` case showed the real issue was not missing reasoning quality but truncated deep output. `DEEP` streaming budget is now `maxTokens: 2200` instead of `1500`.
- Regression coverage now locks both the `DEEP` inherited-model fallback and the larger deep output budget:
  - `__tests__/optimizer/engine.test.ts`
  - `__tests__/desktop/ipc-core.test.ts`
- Full built-in acceptance suite is now green end-to-end:
  - `copywriting-instagram`
    - `INTERACTIVE` → `google/gemini-3.1-flash-lite`
    - `DEEP` → `google/gemini-3.5-flash`
  - `revenue-table-analysis`
    - `INTERACTIVE` → `google/gemini-3.1-flash-lite`
    - `DEEP` → `google/gemini-3.5-flash`
  - `ops-brief`
    - `INTERACTIVE` → `google/gemini-3.1-flash-lite`
    - `DEEP` → `google/gemini-3.5-flash`
  - `deep-strategy-brief`
    - `DEEP` → `google/gemini-3.5-flash`
  - `deep-architecture-review`
    - `DEEP` → `google/gemini-3.5-flash`
- Final acceptance evidence from the full suite:
  - `copywriting-instagram`
    - `INTERACTIVE`: `firstVisibleMs=1368`, `totalLatencyMs=4553`, `promptChars=1776`
    - `DEEP`: `firstVisibleMs=7498`, `totalLatencyMs=11326`, `promptChars=2815`
  - `revenue-table-analysis`
    - `INTERACTIVE`: `firstVisibleMs=1256`, `totalLatencyMs=2508`, `promptChars=1481`
    - `DEEP`: `firstVisibleMs=10742`, `totalLatencyMs=14250`, `promptChars=2968`
  - `ops-brief`
    - `INTERACTIVE`: `firstVisibleMs=1089`, `totalLatencyMs=2529`, `promptChars=1802`
    - `DEEP`: `firstVisibleMs=8646`, `totalLatencyMs=13038`, `promptChars=3237`
  - `deep-strategy-brief`
    - `DEEP`: `firstVisibleMs=8233`, `totalLatencyMs=12868`, `promptChars=3884`
  - `deep-architecture-review`
    - `DEEP`: `firstVisibleMs=7386`, `totalLatencyMs=17291`, `promptChars=5842`
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/engine.test.ts __tests__/optimizer/prompt-quality.test.ts __tests__/desktop/ipc-core.test.ts __tests__/desktop/settings-commands.test.ts __tests__/desktop/shell-renderer.test.ts`
  - `pnpm --filter @the-abyss/sentra-prompt optimizer:acceptance -- --json`
  - `pnpm --filter @the-abyss/sentra-prompt desktop:build`
- Note: for the user-provided goal, the dual-lane desktop Optimizer objective is now fully evidenced end-to-end. S5 / Task G remain plan-specific follow-ups only if Chief still wants that separate implementation-plan contract closed formally.

## Prompt Quality Upgrade P2 + Code Review Fixes — 2026-06-04b

- `detectIntent`: expanded to 7 intents (+translation, +comparison); specific intents now checked BEFORE generation to fix ordering bug ("buatkan ringkasan" → summarization, not generation).
- `matchTemplate`: bilingual synonym expansion map (30+ canonical forms, ID+EN); `scoreTemplate()` helper extracted (deduplication); `education` synonym fixed (removed duplicate 'belajar', added 'materi').
- `matchTemplateWithEmbeddings`: `warmEmbeddingCache()` uses `generateEmbeddings` batch (1 HTTP request cold start, not N); `logger.warn` on fallback for Sentry observability; `_clearEmbeddingCacheForTest()` exported for test isolation.
- `cosineSimilarity`: `Math.min(a.length, b.length)` guard prevents NaN on mismatched vectors; imports sorted (all above function).
- `docs/PROMPT_QUALITY_STANDARD.md` created — 10-section best-practice reference.
- Test: `vi.spyOn` + `expect(spy).toHaveBeenCalled()` + `beforeEach(_clearEmbeddingCacheForTest)` — fallback path now genuinely exercised.
- Provider: `.env.local` → OpenRouter + `deepseek/deepseek-v4-pro`.
- Verified: 13/13 tests green. All 9 /code-review findings addressed.

## Prompt Quality Upgrade (P0–P1) — 2026-06-04

- P0-1: Enriched Optimizer system prompt (`buildOptimizeSystemPrompt`) with one worked few-shot example, an ambiguity rule (assume + state in `context` + `[TODO: ...]` placeholder), and a testable quality bar. JSON keys and existing rules unchanged.
- P0-2: `parseSuperPromptJson` now validates the raw LLM JSON with a tolerant-but-strict Zod wire schema; wrong-typed output throws and routes to the existing engine fallback. Final object guarded by the SSOT contract.
- P1-1: New `lib/prompt-quality/contract.ts` canonicalizes `SuperPromptSchema` as the SSOT; Optimizer parser references it. Transform + template migration deferred to P2.
- P1-2: Fixed `analogie` → `analogi` (Transform `casual` persona); reconciled name/package/division/port in live `.agent/CONTEXT.md` (Sentra Prompt, `@the-abyss/sentra-prompt`, apps/internal, port 3013). Archived `PROJECT_CONTEXT.md` intentionally left untouched.
- Review fix: wire schema uses `.nullish()` (not `.optional()`) so explicitly-`null` fields stay tolerated like the old `?? ` defaults, avoiding a fallback regression on well-formed JSON.
- Verified: full vitest suite 31/31 green (9 new); changed files clean on typecheck + eslint (pre-existing failures live only in `archieved/` + `dist-electron/`).
- Open item (Chief): schema default `provider`/`targetLlm` = `'GROK'` not changed; Chief uses Pioneer via OpenAI-compatible path. Reconciling the default is a separate flagged API-behavior change.

## Optimizer Localized Prompt Guardrails — 2026-06-04n

- `lib/llm/prompt-builder.ts` now adds four new Optimizer-side quality guardrails:
  - dominant user language alignment for the generated instruction body
  - explicit output-length budgeting in `CONSTRAINTS`
  - Indonesian-context analogy guidance when the audience/context suggests it
  - proprietary-brand abstraction guidance so branded products are reframed as public industry patterns
- Deep and Interactive system prompts now encode the same rule family at the quality-bar level, so the behavior is not left only to the dynamic user prompt.
- `buildOptimizeUserPrompt(...)` now injects a `PROMPT QUALITY RULES` block that:
  - prefers `Bahasa Indonesia` when the raw idea is Indonesian
  - asks for an explicit length cap even when the user did not specify one
  - prefers Indonesia-familiar analogies/examples when helpful
  - avoids implying access to proprietary internals for branded references like `WhatsApp`
- Regression coverage added in `__tests__/optimizer/prompt-quality.test.ts` for all four rules plus the new system-prompt guardrails.
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts -t "aligns the prompt instruction language|adds local-context analogy guidance|always adds explicit output budget guidance|adds proprietary-brand abstraction guidance"`
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts __tests__/optimizer/engine.test.ts`
- Follow-up runtime truth: the earlier live replay failure was an invocation mismatch, not a builder defect. The successful path is to reuse `loadAcceptanceEnv()` before calling `optimizePrompt(...)`, so the script resolves the same app-local env as the acceptance harness.
- Live rerun now succeeds for Chief's architecture example:
  - runtime model: `google/gemini-3.1-flash-lite-20260507`
  - verified behaviors present in the optimized prompt:
    - Bahasa Indonesia instruction body
    - explicit `maksimal 1024 token` constraint
    - Indonesian-local analogy guidance
    - proprietary-brand abstraction (`pola umum`, not private WhatsApp internals)

## Optimizer Output-Format Obedience — 2026-06-04o

- `lib/llm/prompt-builder.ts` now adds an explicit output-structure obedience rule:
  - if the raw idea already specifies headings, section names, ordering, or a concrete format block, the optimized prompt should preserve that structure as closely as possible
  - the optimizer should not add extra sections like `Learning Objectives`, `Assessment`, `FAQ`, or similar scaffolding unless the user asked
- This rule now exists in both places that matter:
  - system-prompt quality bar
  - dynamic `PROMPT QUALITY RULES` block in `buildOptimizeUserPrompt(...)`
- Regression coverage added in `__tests__/optimizer/prompt-quality.test.ts` for:
  - exact-format obedience in the system prompt
  - exact-format obedience guidance when the raw idea includes a concrete heading block
- Live rerun for Chief's architecture example now shows the requested output format preserved exactly in `## OUTPUT FORMAT`:
  - `# Arsitektur High-Level Aplikasi Chat Real-Time`
  - `## 1. Gambaran Besar`
  - `## 2. Komponen Utama`
  - `## 3. Alur Pengiriman Pesan`
  - `## 4. Mengapa Komponen Ini Dibutuhkan`
  - `## 5. Ringkasan`
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts -t "exact-format obedience|strict output-format obedience"`
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts __tests__/optimizer/engine.test.ts`
- Live rerun:
  - runtime model: `google/gemini-3.1-flash-lite-20260507`
  - `optimizePrompt(...)` now stops adding unrequested top-level output sections for this example and mirrors Chief's requested heading structure.

## Optimizer Semantic-Fidelity Polish — 2026-06-04p

- `lib/llm/prompt-builder.ts` now adds semantic-fidelity rules so the optimizer keeps the user's wording closer to the original request:
  - preserve core domain wording and deliverable framing instead of broadening into an adjacent task
  - preserve explicitly named audiences in `ROLE`, `TASK`, or `CONTEXT`
  - carry forward explicitly requested components, steps, sections, and examples instead of replacing them with optimizer-created scaffolding
- The new rules were added in both layers:
  - system-prompt quality bar
  - dynamic `PROMPT QUALITY RULES` block
- Regression coverage added in `__tests__/optimizer/prompt-quality.test.ts` for:
  - semantic-fidelity system rules
  - semantic-fidelity user-prompt guidance
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts -t "semantic-fidelity rules|semantic-fidelity guidance"`
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts __tests__/optimizer/engine.test.ts`
- Live rerun for the architecture example still uses `google/gemini-3.1-flash-lite-20260507`, and the output now stays closer to the original ask:
  - audience remains explicitly `engineer junior`
  - the output keeps the requested heading structure
  - the optimizer no longer injects unrequested curriculum scaffolding
- Note: the output is more faithful now, but not fully verbatim. The remaining gap is qualitative wording taste, not missing guardrails.

## Optimizer Role/Task Sharpness Polish — 2026-06-05

- `lib/llm/prompt-builder.ts` now adds one more rule family for technical architecture prompts:
  - make `ROLE` use the strongest technical domain nouns already present in the raw idea
  - keep `TASK` close to the user's original technical sentence instead of broadening it into a safer adjacent paraphrase
  - when a branded comparison is used for orientation, keep the comparison label when helpful while still avoiding proprietary-internal framing
- The new rules are active in both:
  - system-prompt quality bar
  - dynamic `PROMPT QUALITY RULES` block
- Regression coverage added in `__tests__/optimizer/prompt-quality.test.ts` for:
  - technical role/task phrasing rules in the system prompt
  - sharper role/task guidance for distributed-system architecture prompts in the user prompt
- Verified:
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts -t "technical-role and task-phrasing|sharper role and task guidance"`
  - `pnpm --filter @the-abyss/sentra-prompt exec vitest run __tests__/optimizer/prompt-quality.test.ts __tests__/optimizer/engine.test.ts`
- Live rerun now shows improved sharpness for Chief's architecture example:
  - runtime model: `google/gemini-3.1-flash-lite-20260507`
  - `ROLE`: now clearly anchored to `sistem komunikasi real-time berskala besar`
  - `TASK`: now stays close to `Jelaskan rancangan arsitektur tingkat tinggi untuk aplikasi chatting real-time (seperti WhatsApp)`
  - requested heading structure remains intact

## Fix Implementation Plan — 2026-06-05

All 12 items from `Sentra_Prompt_Fix_Implementation_Plan.docx` implemented and verified (125/125 tests green):

- FIX-10: `tsconfig.json` excludes `archieved/**` and `.next/**` — typecheck noise eliminated
- FIX-01: `types/index.ts` schema defaults GROK → OPENAI in `OptimizeRequestSchema` and `EvaluateRequestSchema`
- FIX-02: `lib/optimizer/engine.ts` non-streaming path now uses `parseSuperPromptMarkdown` + `logger.warn` on fallback
- FIX-03: `__tests__/transform/engine.test.ts` created (12 foundation tests, 4 groups)
- FIX-04: `OPENROUTER_LANE_MODEL_FALLBACKS` extracted to `lib/llm/constants.ts`; Google models replaced with DeepSeek (INTERACTIVE→v4-flash, DEEP→v4-pro) per Chief decision
- FIX-05: Transform engine tests expanded to 42 tests (Groups A–F, detectIntent/getIntentInstruction exported)
- FIX-06: `estimateTokens` in `lib/transform/engine.ts` now accepts optional `model` and `locale` params; backward compatible
- FIX-07: `SHARED_QUALITY_RULES` constant extracted in `lib/llm/prompt-builder.ts`; no rule string duplicated between deep and interactive system prompts
- FIX-08: JSDoc namespace warning added to `lib/transform/constants.ts` and `lib/transform/schemas.ts`
- FIX-09: `getDimensionWeights()` with EVAL_WEIGHT_* env-override in `lib/evaluator/dimensions.ts`; `.env.example` updated (GOOGLE_AI_API_KEY removed)
- FIX-11: `"pretest": "tsx scripts/optimizer-acceptance.ts --dry-run"` added to `package.json`
- FIX-12: All Google AI traces removed from active source code (lib/, AGENTS.md, CONTEXT.md, HANDOFF.md); `.env.example` GOOGLE_AI_API_KEY removed

## In Progress

- No active execution lane is open inside the desktop workspace-evolution plan. The next work should be a fresh product decision, not a continuation of Tasks 1–9.

## Known Risk

- Desktop `auth:register` is not yet parity-complete with the web route protections and redirect behavior.
- Electron smoke still emits Windows cache warnings (`Access is denied`) even when the smoke run exits successfully.
- `optimizePrompt` non-streaming still uses the legacy non-stream path, so desktop is now the primary verified streaming surface; web / non-stream parity remains a separate follow-up.
- OpenAI-compatible model/base URL are now split by scope, but provider API key sourcing still follows the existing request/env flow by design.
- Some OpenAI-compatible providers may still buffer most visible output until late in the request; the new fallback prevents blank finals, but it does not magically guarantee token-by-token UX from every upstream model.
- The new `INTERACTIVE` lane reduces app-side overhead materially, but upstream buffering from a reasoning-heavy provider/model can still dominate end-user wait time if Chief keeps the same live model.
- Lane-specific model routing and the acceptance harness are now implemented, and the current built-in suite is green. Remaining risk is no longer the dual-lane desktop Optimizer itself, but future drift if provider defaults change without re-running acceptance.

## Next Suggested Step

1. If Chief wants stronger product confidence, add 1-2 real Chief prompts to `DEFAULT_ACCEPTANCE_SUITE` and keep the suite green.
2. Decide whether the new benchmark store should gain edit/delete affordances, or stay save-and-run only for this slice.
3. Decide whether S5 (web SSE parity) is still needed for active users now that the desktop streaming surface is the primary verified lane.
