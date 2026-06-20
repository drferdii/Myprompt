# CONTEXT.md — sentra-prompt
<!-- Static. Update only when stack or architecture changes. -->
<!-- Last updated: 2026-06-04 -->

## Project Identity

| Field | Value |
|-------|-------|
| Name | Sentra Prompt |
| Package | `@the-abyss/sentra-prompt` |
| Division | apps/internal |
| Purpose | Multi-LLM prompt transformation and optimization platform (Anthropic, OpenAI, Mistral, xAI) |
| Owner | Dr. Ferdi Iskandar (Chief) |
| Status | Active |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Frontend | React 19, Tailwind CSS v3, Radix UI |
| Language | TypeScript (strict) |
| Database | Prisma + Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Error Tracking | Sentry (`@sentry/nextjs`) |
| Testing | Vitest |
| Package Manager | pnpm |
| Port | 3013 (dev) |

## Architecture

Modular Monolith: `website/`, `extension/`, `app/` (API + Dashboard).
Data flow: `Raw Prompt → Transformer Engine → Optimized Prompt → Provider LLM`

Key modules: `lib/transformers/`, `app/api/transform/`, `components/editor/`, `prisma/`

## Critical Files

| File/Folder | Rule |
|-------------|------|
| `prisma/schema.prisma` | Do NOT modify without running migration and Chief approval |
| `next.config.mjs` | Do NOT modify without Chief approval |
| `middleware.ts` | Auth middleware — review carefully before changes |
| `sentry.*.config.ts` | Sentry config — ensure no PII in error payloads |

## Hard Constraints

- All LLM API keys (Anthropic, OpenAI, Mistral, xAI) in `.env` — NEVER hardcode
- Sentry active on all environments — ensure error payloads contain NO PII or API keys
- No PHI in any prompt input — this is a prompt engineering tool, not a medical records system
- Prisma schema changes require `pnpm db:generate` + migration review before PR
