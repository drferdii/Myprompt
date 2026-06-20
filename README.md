<!--
  Sentra Prompt — Repository README
  Multi-LLM Prompt Transformation Platform
  Built by Dr. Ferdi Iskandar · Sentra Artificial Intelligence
-->

<table width="100%">
<tr>
<td width="36%" align="center" valign="middle">
<img src="https://i.postimg.cc/h4ywJ1vt/Codexprompt-line-removebg-preview.png" alt="Sentra Prompt" width="280">
  <br />
  <sub><b>Sentra Prompt</b> · Multi-LLM Prompt Transformation Platform</sub>
</td>
<td width="64%" valign="middle">

# Sentra Prompt
### Multi-LLM Optimization · Desktop Shell · Real-Time Streaming

<p>
  <b>Built by Dr. Ferdi Iskandar · Sentra Artificial Intelligence</b><br />
  Prompt Engineering · LLM Infrastructure · Kediri, Indonesia · UTC+7
</p>

<p>
  <img src="https://img.shields.io/badge/Next.js-15-111111?style=flat-square" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square" />
  <img src="https://img.shields.io/badge/TypeScript-strict-2f4f4f?style=flat-square" />
  <img src="https://img.shields.io/badge/Electron-desktop-47848F?style=flat-square" />
  <img src="https://img.shields.io/badge/Providers-4_LLMs-1a1a1a?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-c41e3a?style=flat-square" />
  <img src="https://img.shields.io/badge/version-0.1.0-orange?style=flat-square" />
</p>
</td>
</tr>
</table>

---

## ── FRONT PAGE · WHAT THIS IS

Sentra Prompt is a multi-LLM prompt transformation platform. It takes raw, unstructured ideas and turns them into precision-crafted, structured super-prompts — optimized for clarity, specificity, and LLM performance across any provider.

It runs as a web application (port 3013) and as a native desktop shell built on Electron, with real-time streaming output, two optimizer speed lanes, and full provider flexibility.

<table>
<tr>
<td width="33%" valign="top">

### THE PROBLEM

Raw prompts are vague. Vague prompts produce mediocre LLM output. Most engineers and clinicians write prompts the same way they write messages — without structure, without role clarity, and without thinking about how a model actually parses intent.

</td>
<td width="33%" valign="top">

### THE APPROACH

Every raw input passes through a transformation engine that restructures it into a six-heading super-prompt: **ROLE · TASK · CONTEXT · APPROACH · CONSTRAINTS · OUTPUT FORMAT**. This structure is model-agnostic, provider-agnostic, and reproducible.

</td>
<td width="33%" valign="top">

### THE OUTPUT

A production-ready prompt with clear persona assignment, explicit task scoping, contextual grounding, methodological approach, hard constraints, and output format specification — ready to paste into any LLM interface.

</td>
</tr>
</table>

---

## ── CORE MECHANICS · HOW THE OPTIMIZER WORKS

The optimizer is the central engine. It does not just reword your input — it structurally transforms it.

### Step-by-Step Flow

```text
USER INPUT
    │
    ▼
LANE SELECTION
    │   INTERACTIVE — fast, low-latency, ideal for everyday prompts
    │   DEEP        — richer, template-matched, ideal for complex or technical prompts
    ▼
PROMPT BUILDER
    │   Assembles a system prompt + formatted user prompt
    │   DEEP: also runs embedding-based template retrieval
    │   Template matcher finds the closest semantic match from a curated library
    ▼
LLM STREAMING
    │   Sends assembled prompt to selected provider
    │   Stream opened — tokens arrive in real time
    │   Status events emitted: preparing → waiting → streaming
    ▼
PARSER
    │   Extracts the six super-prompt headings from streamed output
    │   Validates structure — regenerates if headings are missing
    ▼
SUPER-PROMPT OUTPUT
        ROLE            ← Who the LLM should be
        TASK            ← What it must do (precise, scoped)
        CONTEXT         ← Background, domain, constraints
        APPROACH        ← Methodology, reasoning style
        CONSTRAINTS     ← What to avoid, limits, format rules
        OUTPUT FORMAT   ← Structure, length, tone, rendering
```

### INTERACTIVE vs DEEP

<table>
<tr>
<th align="left">Dimension</th>
<th align="left">INTERACTIVE</th>
<th align="left">DEEP</th>
</tr>
<tr>
<td><b>Speed</b></td>
<td>Fast — direct prompt build, no retrieval</td>
<td>Slower — adds embedding + template matching</td>
</tr>
<tr>
<td><b>Template retrieval</b></td>
<td>None</td>
<td>Semantic cosine similarity against prompt library</td>
</tr>
<tr>
<td><b>Best for</b></td>
<td>Everyday prompts, quick iterations</td>
<td>Complex, technical, or high-stakes prompts</td>
</tr>
<tr>
<td><b>Status events</b></td>
<td>preparing → streaming</td>
<td>preparing → waiting → streaming</td>
</tr>
<tr>
<td><b>Output depth</b></td>
<td>Standard structured super-prompt</td>
<td>Richer super-prompt with retrieval-informed context</td>
</tr>
</table>

---

## ── FULL FEATURE MAP · WHAT IT SHIPS

<table>
<tr>
<td width="50%" valign="top">

### 01 · OPTIMIZER
**Raw Idea → Structured Super-Prompt**

Takes any raw input — a sentence, a fragment, a rough idea — and produces a six-heading super-prompt. Two lanes: INTERACTIVE for speed, DEEP for depth. Real-time streaming with live status display.

**Format enforced:** ROLE · TASK · CONTEXT · APPROACH · CONSTRAINTS · OUTPUT FORMAT

</td>
<td width="50%" valign="top">

### 02 · TRANSFORMER
**Prompt Rewriting Engine**

Rewrites existing prompts across tone, persona, and intent dimensions. Switch between casual, professional, creative, and technical modes. Preserves the core meaning while restructuring delivery for a specific LLM audience.

**Use case:** adapting a prompt written for GPT-4 to work better with Claude, or shifting from technical to plain language.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 03 · EVALUATOR
**Prompt Quality Scoring**

Scores any prompt across four dimensions: clarity, specificity, actionability, and output quality. Surfaces weak spots with structured feedback. Does not rewrite — it diagnoses.

**Dimensions:** Clarity · Specificity · Actionability · Output Quality

</td>
<td width="50%" valign="top">

### 04 · DESKTOP SHELL
**Native Electron Terminal Interface**

A console-style desktop application for running Optimizer and Transformer locally. No browser required. Full real-time streaming. Keyboard-driven, dark-themed, purpose-built for prompt engineering sessions.

**Platform:** Windows, macOS, Linux · IPC bridge for main–renderer communication

</td>
</tr>
</table>

---

## ── PROVIDER MATRIX · LLM SUPPORT

<table>
<tr>
<th align="left">Provider</th>
<th align="left">Models Available</th>
<th align="left">Mode</th>
</tr>
<tr>
<td><b>Anthropic</b></td>
<td>Claude Opus 4, Sonnet 4.6, Haiku 4.5</td>
<td>API key (BYOK)</td>
</tr>
<tr>
<td><b>OpenAI</b></td>
<td>GPT-4o, GPT-4o mini, GPT-4 Turbo</td>
<td>API key (BYOK)</td>
</tr>
<tr>
<td><b>xAI</b></td>
<td>Grok-2, Grok-2 Vision</td>
<td>API key (BYOK)</td>
</tr>
<tr>
<td><b>Mistral</b></td>
<td>Mistral Large, Mistral Nemo</td>
<td>API key (BYOK)</td>
</tr>
<tr>
<td><b>OpenAI-compatible</b></td>
<td>Any model via custom base URL</td>
<td>OpenRouter, Pioneer, local endpoint</td>
</tr>
</table>

BYOK = Bring Your Own Key. No keys are stored server-side. All provider credentials are encrypted client-side and never logged.

---

## ── SYSTEM ARCHITECTURE

```text
WEB UI / DESKTOP SHELL
    │
    ▼
API ROUTES (Next.js App Router)
    │   /api/optimize   → Optimizer engine (INTERACTIVE / DEEP)
    │   /api/transform  → Transformer engine
    │   /api/evaluate   → Evaluator engine
    │   /api/auth/*     → Supabase Auth handlers
    ▼
ENGINE LAYER (lib/)
    │
    ├── optimizer/
    │       engine.ts       ← lane dispatch, prompt build, stream control
    │       strategies.ts   ← INTERACTIVE vs DEEP strategy implementations
    │       super-prompt-format.ts ← heading parser and formatter
    │
    ├── transform/
    │       engine.ts       ← transformation logic
    │       schemas.ts      ← Zod contracts for transform requests
    │
    ├── evaluator/
    │       engine.ts       ← scoring orchestration
    │       dimensions.ts   ← per-dimension scoring logic
    │       scoring.ts      ← aggregate score computation
    │
    ├── llm/
    │       provider-registry.ts   ← runtime provider selection
    │       providers/             ← per-provider adapters (streaming)
    │       prompt-builder.ts      ← system + user prompt assembly
    │
    ├── templates/
    │       loader.ts       ← reads curated template library
    │       matcher.ts      ← cosine similarity matching
    │       renderer.ts     ← injects template into DEEP prompt
    │
    └── embeddings/
            generator.ts    ← text → embedding vector
            similarity.ts   ← cosine distance computation
    ▼
SUPABASE (PostgreSQL)
    │   Auth, user data, API key vault (encrypted), usage records
    ▼
ELECTRON (Desktop)
    │   main.ts      ← Electron main process, window manager
    │   preload.ts   ← context bridge (no nodeIntegration)
    │   ipc/         ← IPC handlers for each engine action
    │   renderer/    ← Terminal-style UI, streaming display
```

---

## ── SETUP · STEP BY STEP

**Requirements**

- Node.js ≥ 22
- pnpm 9.x
- Supabase project (free tier works)
- At least one LLM provider API key

**Step 1 — Clone and install**

```bash
git clone https://github.com/drferdii/Myprompt.git
cd Myprompt
pnpm install
```

**Step 2 — Configure environment**

```bash
cp .env.example .env
```

Open `.env` and fill in:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Supabase PostgreSQL connection string | ✅ |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | ✅ |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server-side only) | ✅ |
| `ANTHROPIC_API_KEY` | Anthropic (Claude) | optional |
| `OPENAI_API_KEY` | OpenAI | optional |
| `XAI_API_KEY` | xAI Grok | optional |
| `MISTRAL_API_KEY` | Mistral | optional |
| `OPENAI_BASE_URL` | Custom OpenAI-compatible endpoint | optional |

**Step 3 — Initialize database**

```bash
pnpm db:generate     # generate Prisma client from schema
pnpm db:migrate      # apply migrations to Supabase
```

**Step 4 — Start the web app**

```bash
pnpm dev             # starts at http://localhost:3013
```

**Step 5 — (Optional) Run the desktop shell**

```bash
pnpm desktop:build   # compile Electron renderer + main process
pnpm desktop:start   # launch the desktop app
```

---

## ── PROJECT STRUCTURE

```text
Myprompt/
│
├── app/                        Next.js App Router
│   ├── api/                    API routes (optimize, transform, evaluate, auth)
│   └── (pages)/                Web UI pages
│
├── components/                 Shared UI components
│
├── lib/                        Core engine layer
│   ├── optimizer/              Prompt optimization engine
│   ├── transformer/            Prompt rewriting engine
│   ├── evaluator/              Prompt scoring engine
│   ├── llm/                    LLM provider adapters + registry
│   ├── templates/              Template library loader + matcher
│   ├── embeddings/             Vector generation + similarity
│   ├── auth/                   Auth guards and rate limiting
│   ├── billing/                Plan enforcement and subscription
│   ├── db/                     Prisma client singleton
│   ├── supabase/               Supabase client variants (server, browser, admin)
│   └── prompt-quality/         Quality scoring contracts
│
├── desktop/                    Electron desktop shell
│   ├── main.ts                 Electron main process
│   ├── preload.ts              Context bridge
│   ├── ipc/                    IPC handlers per feature
│   └── renderer/               Terminal-style console UI
│
├── prisma/                     Database schema + migrations
│   ├── schema.prisma
│   └── migrations/
│
├── __tests__/                  Vitest test suites
├── scripts/                    Acceptance harness and utilities
├── public/                     Static assets
├── types/                      Global TypeScript types
│
├── .agent/                     Agent governance SSOT
│   ├── CONTEXT.md
│   ├── PROGRESS.md
│   ├── HANDOFF.md
│   ├── LESSONS.md
│   └── DECISIONS.md
│
├── AGENTS.md                   Agent workflow and task protocol
├── CLAUDE.md                   Claude Code project instructions
├── .env.example                Environment variable template
└── package.json
```

---

## ── COMMANDS REFERENCE

```bash
# Development
pnpm dev                    # web app on http://localhost:3013
pnpm build                  # production build

# Testing
pnpm test                   # run all Vitest tests
pnpm test:desktop           # desktop-specific tests

# Desktop
pnpm desktop:build          # compile Electron shell
pnpm desktop:start          # launch desktop app

# Database
pnpm db:generate            # generate Prisma client
pnpm db:migrate             # apply migrations
pnpm db:studio              # open Prisma Studio

# Quality
pnpm lint                   # ESLint
pnpm typecheck              # TypeScript strict check

# Optimizer acceptance harness
pnpm optimizer:acceptance   # live end-to-end test with real provider
```

---

## ── TECH STACK

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Electron](https://img.shields.io/badge/Electron-desktop-47848F?style=for-the-badge&logo=electron&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-testing-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-package_manager-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

---

## ── SECURITY

<table>
<tr>
<td width="50%" valign="top">

### API KEY SAFETY

All provider API keys are stored encrypted. They are never logged, never included in Sentry payloads, and never transmitted outside the local session context. BYOK by design — no server-side key storage.

</td>
<td width="50%" valign="top">

### NO PHI / NO PII

This is a prompt engineering tool. It does not process patient data, clinical records, or personally identifiable information. Error tracking via Sentry is scoped to technical errors only.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### ENVIRONMENT ISOLATION

`.env` files are gitignored at all levels. The `.env.example` contains only placeholder keys. Service role credentials are server-side only and never exposed to the browser.

</td>
<td width="50%" valign="top">

### ELECTRON CONTEXT BRIDGE

The desktop shell uses a strict preload context bridge. `nodeIntegration` is disabled. All IPC communication is typed and validated at the boundary before reaching the main process.

</td>
</tr>
</table>

---

## ── THE OPERATING STANDARD

```text
No prompt output without structure.
No provider switch without explicit user selection.
No API key in any log, error payload, or Sentry event.
No feature without a failing test to define it first.
No desktop action without IPC validation at the boundary.
```

<table>
<tr>
<th align="left">Question</th>
<th align="left">Required answer</th>
</tr>
<tr>
<td><b>What is the prompt trying to do?</b></td>
<td>Specific task with clear ROLE and OUTPUT FORMAT — not a vague instruction.</td>
</tr>
<tr>
<td><b>Which lane is appropriate?</b></td>
<td>INTERACTIVE for speed; DEEP for complex or high-stakes prompts.</td>
</tr>
<tr>
<td><b>Which provider is handling it?</b></td>
<td>Explicit user selection — no silent fallback to a default model.</td>
</tr>
<tr>
<td><b>What can go wrong?</b></td>
<td>Stream timeout, heading parse failure, provider rate limit — all handled explicitly.</td>
</tr>
<tr>
<td><b>How is it verified?</b></td>
<td>Acceptance harness runs against real provider endpoints. No fabricated test output.</td>
</tr>
</table>

---

## ── LETS CONNECT

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/dr-ferdi-iskandar-1b620a3b5)
[![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/ClaudesyI81047)
[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white)](https://discord.gg/1511829076313374745)
[![Medium](https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white)](https://medium.com/@codieverse)
[![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?logo=TikTok&logoColor=white)](https://tiktok.com/@drferdii)
[![email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:drferdiiskandar@gmail.com)

---

<p align="center">
  <b>Sentra Prompt — built to make every prompt count.</b><br />
  <sub>Sentra Artificial Intelligence · Dr. Ferdi Iskandar · Indonesia</sub>
</p>
