# Sentra Prompt Page Dependency Trees

## Desktop Full Console

Entry: `desktop/renderer/index.html`

Dependencies:

- `desktop/renderer/index.css`
- `desktop/renderer/renderer.ts`
  - `desktop/renderer/commands.ts`
  - `desktop/renderer/command-catalog.ts`
  - `desktop/renderer/console-view.ts`
  - `desktop/renderer/modes.ts`
- `desktop/preload.ts`
- `desktop/main.ts`

UI design context requires the complete HTML and CSS. Renderer TypeScript is
behavioral context; it does not define the static shell geometry.

## Desktop Mini Widget

Entry: `desktop/renderer/index.html#miniWidget`

Dependencies:

- `desktop/renderer/index.css`
- `desktop/renderer/renderer.ts`
  - `desktop/renderer/modes.ts`
- `desktop/preload.ts`
- `desktop/main.ts`
