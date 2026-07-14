# Sentra Prompt — Codebase Context

Welcome, Engineer. This document serves as the internal context baseline for **Sentra Prompt** (`@the-abyss/sentra-prompt`), a multi-LLM prompt transformation and optimization platform supporting Anthropic, OpenAI, Mistral, xAI, and other OpenAI-compatible endpoints (including OpenRouter and Pioneer).

---

## ── 1. CORE ARCHITECTURE PATTERNS

Sentra Prompt is structured as a **Modular Monolith** designed around an Electron-based native desktop shell and an independent, modular core domain engine library (`lib/`).

### 1.1 Desktop-Main Context & State-Driven UI
- **Process Separation:** The architecture follows Electron's standard process model. The **Main Process** (`desktop/main.ts`) manages native windows, application lifecycle, and securely interacts with backend services. The **Renderer Process** (`desktop/renderer/renderer.ts`) builds and controls the Terminal-style console UI.
- **Strict Preload Bridge:** Direct Node.js access is disabled in the renderer for security. Communication is established exclusively via typed IPC channels over the preload bridge (`desktop/preload.ts`), enforcing strict boundary validation.
- **Micro-Panel (Mini-Widget) Design:** Supports a toggleable compact simple layout (`mini-panel`) alongside the main Console layout. The main process handles window resizing and positioning dynamically on IPC signals.

### 1.2 Strategy Pattern in the Optimizer
- **Dual-Lane Optimization:** The Optimizer engine (`lib/optimizer/engine.ts`) separates requests into two distinct lanes:
  1. `INTERACTIVE` (Fast Lane): Designed for low-latency everyday tasks. It skips semantic template matching, uses a slim prompt skeleton, and operates on a smaller token budget (`maxTokens: 900`).
  2. `DEEP` (Deep Lane): Designed for complex or high-stakes reasoning. It uses embedding-based template retrieval, a rich prompt skeleton, and a larger token budget (`maxTokens: 1500–2200`).
- **Strategy Implementation:** These lanes are modeled as strategy implementations (`lib/optimizer/strategies.ts`) implementing a unified interface, ensuring extensible prompt composition rules.

### 1.3 Adapter Pattern for LLM Providers
- **Unified Adapter Contract:** The LLM client layer (`lib/llm/providers/`) unifies diverse third-party APIs (Anthropic, OpenAI, xAI, Mistral, local, Qwen) behind a single unified provider interface (`lib/llm/types.ts`).
- **Real-Time Streaming:** Adapters implement streaming response contracts, emitting status phases (`preparing` → `waiting` → `streaming`) and raw token chunks dynamically.

### 1.4 Semantic Search & Vector Embeddings
- **Cosine Similarity Template Matching:** The template matcher (`lib/templates/matcher.ts`) computes vector embeddings (`lib/embeddings/generator.ts`) of raw ideas and matches them against a curated library using Cosine Similarity (`lib/embeddings/similarity.ts`).
- **Failsafe Fallback:** If template match scores do not clear the confidence threshold, the engine gracefully fallbacks to standard optimization without breaking the flow.

### 1.5 Robust Heading Parser & Validation
- **Six-Heading Markdown Form:** Enforces a rigid six-heading markdown output: `ROLE` · `TASK` · `CONTEXT` · `APPROACH` · `CONSTRAINTS` · `OUTPUT FORMAT`.
- **Structural Validation:** The parser (`lib/optimizer/super-prompt-format.ts`) programmatically extracts these headings. If any heading is missing or malformed, the engine fires a single regeneration retry.

---

## ── 2. CODING CONVENTIONS & STYLE GUIDELINES

Every change must adhere strictly to the established **Classy Guidelines**:

### 2.1 Technical Constraints & Strict Validation
- **Strict English:** All code, inline documentation, comments, and agent logs must be written in English.
- **Type Safety and Strict Zod schemas:** Ensure total compile-time and runtime type safety. Zod is used as the Single Source of Truth (SSOT) for request validation, structured parameters, and configuration properties (`types/index.ts`).
- **API Key Safety (BYOK):** Under no circumstances should API keys, provider tokens, or user credentials be hardcoded or logged. Credentials must be isolated and loaded strictly from client-side state or environment configurations.
- **Sentry and PII/PHI Separation:** Error payloads captured by Sentry must never contain Patient Identifiable Information (PII), Protected Health Information (PHI), or plain-text API credentials.

### 2.2 Error Handling
- **No Silent Catches:** All try-catch blocks must handle exceptions explicitly, log failures using the logger (`lib/logger.ts`), and bubble clean errors or user-actionable instructions up to the UI.
- **Defensive Parsing:** Fallback parsing must always be provided (e.g., if LLM streaming fails or returns unparseable markdown, the engine falls back to non-streaming output or partial rendering rather than throwing raw errors).

### 2.3 Git & Workflow Etiquette
- **Conventional Commits:** Standardized commit headers are enforced (e.g., `feat:`, `fix:`, `docs:`, `chore:`).
- **Surgical Changes:** Modify only what is strictly necessary. Never perform adjacent formatting cleanups, refactors of working files, or code reorganization unless explicitly requested.
- **JET Task Classification Protocol:**
  - **Class A (Minimal):** Inspection, read-only tasks, rename variables. Auto-approved.
  - **Class B (Standard):** Feature additions, bug fixes, refactoring. Requires checkpointing.
  - **Class C (High):** DB migrations, infra changes, security configs. Requires strict risk gates and hard approval checkpoints.

---

## ── 3. KEY DIRECTORIES & ENTRY POINTS

```text
sentra-prompt/
├── desktop/                  ← Electron Native Shell
│   ├── main.ts               ← Application Core & Window Lifecycle (Main Entry Point)
│   ├── preload.ts            ← Context Bridge (Security Layer)
│   ├── bootstrap.ts          ← Module Alias Resolution Entry Point
│   └── renderer/             ← Vanilla DOM Renderer (HTML/CSS/TS)
│       ├── index.html        ← Sentra Console UI Frame
│       └── renderer.ts       ← Render UI controller (Renderer Entry Point)
│
├── lib/                      ← Core Domain Engines
│   ├── optimizer/            ← Super-Prompt Optimization Core
│   │   ├── engine.ts         ← Optimize flow dispatcher (Optimizer Entry Point)
│   │   └── strategies.ts     ← Lane Strategy Architectures
│   ├── transform/            ← Prompt Translation & Adapters
│   │   └── engine.ts         ← Tone, register, and style transformation
│   ├── evaluator/            ← Prompt Quality Diagnostic Engine
│   │   └── engine.ts         ← Orchestrates Clarity, Specificity, Actionability, Quality checks
│   ├── llm/                  ← LLM client registry and adapters
│   ├── templates/            ← Curated templates and matching logic
│   ├── embeddings/           ← Vector calculations & cosine distance
│   ├── supabase/             ← Supabase auth, storage, and database clients
│   └── db/                   ← Prisma client wrapper
│
├── types/                    ← Strict Contract & Wire Definitions
│   └── index.ts              ← Zod wire schemas and TypeScript typings (SSOT)
│
├── prisma/                   ← DB Schema and Client Generators
│   └── schema.prisma         ← Prisma Database Schema
│
└── scripts/                  ← Developer Utilities & Verification
    └── optimizer-acceptance.ts ← Live End-to-End Acceptance Harness
```

*Note on Next.js `app/` folder:* While Next.js package dependencies exist in `package.json`, there is no `app/` router or page rendering folder checked out in this workspace package. The native Electron shell is the primary frontend, importing logic directly from the typed `lib/` modules.

---

## ── 4. EXISTING TEST FRAMEWORKS & COMMAND RUNNERS

The testing and execution architecture relies on **Vitest** for unit validation and a custom **Acceptance Harness** for end-to-end LLM behavior verification.

### 4.1 Command Reference & Runners
- **Acceptance Harness:**
  ```bash
  # Execute dry-run case verification (offline mock compilation verification)
  pnpm pretest

  # Run live-provider end-to-end budget & acceptance verification
  pnpm optimizer:acceptance
  ```
- **Desktop Application Build:**
  ```bash
  # Compile Electron Main, Renderer, Preload files
  pnpm desktop:build

  # Run Desktop Smoke Verification
  pnpm desktop:smoke
  ```
- **Prisma Schema Generation:**
  ```bash
  # Generate local Prisma Client
  pnpm db:generate
  ```
- **Unit and Integration Testing:**
  ```bash
  # Run Vitest test suites (Unit validation)
  pnpm test
  pnpm test:desktop
  ```

### 4.2 Local Workspace Cache Constraints
- **Ignores and Data Cache:** The local data directory `data/` is excluded from git tracking (`.gitignore`). It acts as a local database cache for workspace states, saved drafts, and local benchmarks.
