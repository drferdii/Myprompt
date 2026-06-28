# AGENTS.md — Sentra Prompt

Last updated: 2026-06-28 | Owner: Chief

> Inherits root [`AGENTS.md`](../../../AGENTS.md) governance; this file may only
> ADD scoped context. **Root wins** on conflict.

## Identity

- Name: Sentra Prompt
- Package: `@the-abyss/sentra-prompt`
- Type: Next.js 15 multi-LLM prompt optimization platform (+ desktop/electron
  paths)
- Domain: Prompt transformation across Anthropic, OpenAI, Mistral, xAI
- Stack: Next.js 15, React 19, Prisma, TypeScript strict
- Owner: Chief (Dr. Ferdi Iskandar)

## Run

```powershell
pnpm --filter @the-abyss/sentra-prompt format:check
pnpm --filter @the-abyss/sentra-prompt lint
pnpm --filter @the-abyss/sentra-prompt typecheck
pnpm --filter @the-abyss/sentra-prompt test
pnpm --filter @the-abyss/sentra-prompt build
pnpm --filter @the-abyss/sentra-prompt dev
```

## Operating Rules (scoped)

- Safety: never commit API keys; use env injection only.
- Task class: A trivial -> proceed · B standard -> plan, do, verify · C
  (auth/db/infra) -> Chief GO.
- Memory: read `.agent/` first; update `HANDOFF.md`/`PROGRESS.md` after
  meaningful work.

## Boundaries

- Database migrations are Class C — stop for Chief GO.
- Desktop and web surfaces share contracts — coordinate breaking changes.

## SSOT

- `.agent/`: `CONTEXT.md`, `HANDOFF.md`, `VALIDATION.md` (required);
  `PROGRESS.md`, `DECISIONS.md` (optional).
