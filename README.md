<div align="center">

<img src="https://i.postimg.cc/h4ywJ1vt/Codexprompt-line-removebg-preview.png" alt="Sentra Prompt" width="320" />

# Sentra Prompt

**Multi-LLM prompt transformation platform.**

*Transform raw ideas into precision prompts — across xAI, Anthropic, OpenAI, and Mistral.*

<br/>

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Electron](https://img.shields.io/badge/Electron-desktop-47848F)
![License](https://img.shields.io/badge/license-MIT-green)

**Built by** [Dr. Ferdi Iskandar](https://github.com/drferdii) · Sentra Artificial Intelligence

</div>

---

## What this is

Sentra Prompt is a prompt engineering platform that turns rough ideas into well-structured, LLM-optimized prompts. It runs as a web app and a native desktop shell (Electron), supports multiple providers, and ships a real-time streaming optimizer with two speed lanes.

---

## Features

### Optimizer
Transforms any raw input into a structured super-prompt using a 6-heading format: `ROLE / TASK / CONTEXT / APPROACH / CONSTRAINTS / OUTPUT FORMAT`.

Two lanes:
- **INTERACTIVE** — fast, low-latency results for everyday prompts
- **DEEP** — richer, retrieval-aware optimization for complex or technical prompts

### Transformer
Rewrites prompts for tone, persona, and intent — casual, professional, creative, technical.

### Evaluator
Scores prompts across clarity, specificity, actionability, and output quality dimensions.

### Desktop Shell (Electron)
Console-style terminal interface for running Optimizer and Transformer locally — no browser needed. Streams output in real time.

### Provider Support
| Provider | Mode |
|----------|------|
| Anthropic (Claude) | API key |
| OpenAI | API key |
| xAI (Grok) | API key |
| Mistral | API key |
| OpenAI-compatible | Custom base URL (OpenRouter, Pioneer, etc.) |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Frontend | React 19, Tailwind CSS v3, Radix UI |
| Language | TypeScript (strict) |
| Database | Prisma + Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Desktop | Electron |
| Error Tracking | Sentry |
| Testing | Vitest |
| Package Manager | pnpm |

---

## Quickstart

**Requirements:** Node.js ≥ 22, pnpm 9.x, Supabase project

```bash
git clone https://github.com/drferdii/Myprompt.git
cd Myprompt

pnpm install
```

**Environment:**

```bash
cp .env.example .env
```

Key variables:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Supabase PostgreSQL connection string |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `ANTHROPIC_API_KEY` | Anthropic API key (optional) |
| `OPENAI_API_KEY` | OpenAI API key (optional) |
| `XAI_API_KEY` | xAI Grok API key (optional) |
| `MISTRAL_API_KEY` | Mistral API key (optional) |
| `OPENAI_BASE_URL` | Custom OpenAI-compatible endpoint (optional) |

**Run web app:**

```bash
pnpm dev          # http://localhost:3013
```

**Run desktop shell:**

```bash
pnpm desktop:build
pnpm desktop:start
```

**Database setup:**

```bash
pnpm db:generate
pnpm db:migrate
```

---

## Project Structure

```
app/              Next.js App Router — pages and API routes
components/       UI components — editor, dashboard, shared
lib/
  optimizer/      Prompt optimization engine (INTERACTIVE + DEEP lanes)
  transformer/    Prompt transformation engine
  evaluator/      Prompt evaluation engine
  llm/            Provider adapters — Anthropic, OpenAI, xAI, Mistral
  prompt-quality/ Quality contracts and scoring
desktop/
  main.ts         Electron main process
  renderer/       Desktop shell UI
  ipc/            IPC bridge between main and renderer
  preload.ts      Context bridge
prisma/           Database schema and migrations
__tests__/        Vitest test suites
scripts/          Acceptance harness and utilities
```

---

## Commands

```bash
pnpm dev                    # start web app (port 3013)
pnpm build                  # build for production
pnpm test                   # run all tests
pnpm test:desktop           # run desktop-specific tests
pnpm desktop:build          # compile Electron shell
pnpm desktop:start          # launch desktop app
pnpm db:generate            # generate Prisma client
pnpm db:migrate             # apply migrations
pnpm optimizer:acceptance   # run live acceptance harness
```

---

## How the Optimizer Works

```
Raw input → lane selection (INTERACTIVE / DEEP)
         → prompt builder (system + user prompt)
         → LLM streaming (provider of choice)
         → parser → SuperPrompt structure
         → formatted output
```

INTERACTIVE skips semantic template retrieval for lower latency. DEEP uses embedding-based template matching for richer results.

Both lanes emit real-time status events: `preparing → waiting → streaming`.

---

## Security

- All API keys in `.env` — never hardcoded, never logged
- Sentry active on all environments — error payloads contain no PII or API keys
- No patient data — this is a prompt engineering tool, not a medical records system

---

## License

MIT — see [LICENSE](LICENSE)

---

<div align="center">

*Simple prompts. Powerful results.*

</div>
