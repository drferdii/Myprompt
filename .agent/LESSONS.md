# LESSONS.md — classy-transformer
<!-- Append-only. Agent MUST read before starting any work. -->

---

### [2026-04-10] Wrong .agent/ structure scaffolded
**Mistake:** Created memory/, rules/, workflows/, status.md instead of correct 5-file structure
**New rule:** .agent/ = CONTEXT.md, PROGRESS.md, HANDOFF.md, LESSONS.md, DECISIONS.md, sessions/ only
**Trigger:** Any .agent/ initialization

### [2026-04-10] LLM API keys logged or hardcoded
**Mistake:** Provider API keys (Anthropic, OpenAI, Google, Mistral) exposed in source or logs
**New rule:** All LLM provider keys MUST be in .env only. Never hardcode. Never log. Check Sentry payload before deploying.
**Trigger:** Any code touching LLM provider initialization or API calls

### [2026-06-03] Desktop provider intent was silently rerouted to local/OpenAI fallback
**Mistake:** Guest-mode desktop execution preserved feature flow by silently drifting from requested `GROK` to an available local/OpenAI-compatible provider.
**New rule:** Desktop provider requests must preserve operator intent. If the requested provider key is missing, fail honestly and surface the missing env/key instead of rerouting to another provider.
**Trigger:** Any desktop auth bypass, guest-mode provider selection, or local provider fallback work

### [2026-06-04] Mocked stream success is not enough for OpenAI-compatible desktop streaming
**Mistake:** Declared desktop streaming healthy from mocked chunk tests even though a real provider/model path could still yield no visible chunks and a blank final prompt body.
**New rule:** For desktop Optimizer streaming, mocked IPC chunk tests are necessary but not sufficient. Add a regression path for "no visible streamed text" and make the engine/formatter fail safe instead of returning a blank operator surface.
**Trigger:** Any streaming, provider-compatible, or renderer-formatting change in the desktop Optimizer lane

### [2026-06-04] Do not keep latency tuning that fails live acceptance
**Mistake:** Applied a more aggressive `INTERACTIVE` prompt trim (`maxTokens: 700` plus optional APPROACH omission) because it looked cleaner in unit tests, but the live canonical acceptance case got worse (`firstVisibleMs: null`, `totalLatencyMs: 25576`).
**New rule:** For Optimizer speed work, tests/builds are not enough. Keep or merge latency tuning only if the canonical live acceptance case at least preserves, and preferably improves, first visible response and total latency. If the live case regresses, roll the tuning back in the same session.
**Trigger:** Any prompt-shape or token-budget tuning meant to improve desktop Optimizer latency

### [2026-06-04] Benchmark candidate fast models with env overrides before changing the inherited fallback
**Mistake:** It is tempting to swap the Interactive fallback model directly in code because a provider page sounds faster, but that would still be guess-driven implementation.
**New rule:** When changing the inherited OpenRouter fast-lane model, first benchmark the candidates live using `OPTIMIZER_INTERACTIVE_OPENAI_MODEL` env overrides plus the acceptance harness. Only codify the winner after it passes the target cases on the real runtime.
**Trigger:** Any Interactive model-default or provider-model swap for desktop Optimizer speed work

---
<!-- Agent: append new lessons below this line -->

### [2026-06-04] When deep output feels weak or incomplete, check truncation before rewriting the prompt
**Mistake:** A failing deep lane can look like a prompt-quality or model-quality issue, but the real problem may be that later sections never had room to finish. In this lane, `deep-strategy-brief` looked underpowered until the raw output was inspected and the truncation pattern was confirmed.
**New rule:** When `DEEP` acceptance fails with partial-looking output, inspect the actual response body and token budget before retuning the prompt or swapping models. If sections tail off mid-structure, treat it as a budget/truncation investigation first.
**Trigger:** Any deep-lane acceptance failure, especially when the prompt skeleton is intact but later sections appear missing or thin.

### [2026-06-04] Do not leave instruction language, output budget, or proprietary framing implicit for Indonesian optimized prompts
**Mistake:** A technically strong optimized prompt can still feel wrong for Chief if the instruction body silently drifts into English, analogies stay too generic, no response budget is set, or a branded example is treated like hidden internal knowledge.
**New rule:** For Indonesian-facing Optimizer work, encode language alignment, explicit output-length budgeting, local-context analogy preference, and proprietary-brand abstraction directly in the prompt-builder rules. Do not assume the model will infer all four consistently from the raw idea alone.
**Trigger:** Any prompt-builder change for Indonesian technical/business/educational optimize flows.

### [2026-06-04] If the user already gives a heading structure, do not let the optimizer "improve" it with extra sections
**Mistake:** The optimizer can still look smart while being misaligned if it replaces a user-provided structure with its own scaffolding such as `Learning Objectives`, `Assessment`, or other teaching frames.
**New rule:** When the raw idea already contains explicit headings, section names, or a sample output structure, preserve that structure as closely as possible and block unrequested top-level sections. Format obedience beats optimizer creativity.
**Trigger:** Any Optimizer work involving `OUTPUT FORMAT`, section planning, educational prompts, or example-driven prompt shaping.

### [2026-06-04] After format obedience is fixed, watch for wording drift into adjacent tasks
**Mistake:** Even with the right heading structure, the optimizer can still misalign by paraphrasing the user's request into a broader or different task, softening the named audience, or replacing requested technical focus with its own generic teaching frame.
**New rule:** Preserve the user's core domain nouns, deliverable framing, explicitly named audience, and requested technical scope unless a safety or clarity reason truly requires change. Semantic fidelity matters separately from format fidelity.
**Trigger:** Any Optimizer polish work after format obedience is already under control.

### [2026-06-05] For technical architecture prompts, preserving wording is not enough if ROLE/TASK still sound watered down
**Mistake:** A prompt can pass semantic-fidelity checks yet still feel too safe if `ROLE` drops the strongest domain nouns or `TASK` paraphrases the user's architecture brief into something softer and more generic.
**New rule:** For technical architecture/system prompts, actively sharpen `ROLE` with the domain nouns the user already provided, and keep `TASK` structurally close to the user's original sentence. Do not confuse "cleaner wording" with "better wording" if it reduces technical specificity.
**Trigger:** Any Optimizer polish pass on architecture, systems, real-time, distributed, or infra-oriented prompts.

### [2026-06-15] Decorative full-surface shell overlays can silently break clickability in frameless Electron windows
**Mistake:** A desktop shell can still look visually correct while becoming effectively dead if decorative pseudo-elements sit above interactive content or if polished sections are not explicitly kept out of the draggable hit-test region.
**New rule:** For frameless Electron UI polish, keep full-surface pseudo-elements behind content and mark non-titlebar interactive surfaces as `-webkit-app-region: no-drag`. Do not trust visual rendering alone; re-check actual clickability after shell-layer CSS changes.
**Trigger:** Any `desktop/renderer/index.html` work that adds overlays, pseudo-elements, z-index changes, or titlebar/shell polish.

### [2026-06-15] If the Electron shell renders but the boot console stays blank, suspect renderer bootstrap failure before CSS hit-testing
**Mistake:** A visually rendered desktop shell can tempt a CSS-first diagnosis, but if the expected boot lines never appear, the renderer script may have died before event binding. In this case, browser-side `renderer.ts` emitted CommonJS `exports.*`, which crashes immediately under `nodeIntegration: false`.
**New rule:** For Electron browser-side scripts, avoid test-only `export` keywords in files loaded directly via `<script>` when the desktop build compiles to CommonJS. If the shell renders but no boot/default console lines appear, inspect the built `dist-electron/desktop/renderer/renderer.js` first for `exports`, `require`, or other Node-only globals.
**Trigger:** Any desktop shell bug where UI chrome appears but buttons, keyboard handlers, or boot console initialization are all dead at once.

### [2026-06-15] Desktop renderer fixes are not proven until the regular build path is checked without stale incremental output
**Mistake:** A source-level fix can appear correct while `pnpm desktop:build` still ships an older broken renderer bundle through desktop incremental cache behavior.
**New rule:** After changing browser-side Electron renderer code, verify the actual built artifact that the user runs, not just the source. For this app, keep the desktop TypeScript path non-incremental unless a safer artifact-level cache strategy is introduced.
**Trigger:** Any fix in `desktop/renderer/**` or any case where runtime behavior disagrees with the edited source.
