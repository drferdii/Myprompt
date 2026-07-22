# Sentra Prompt Theme

## Canonical files

- Markup: `desktop/renderer/index.html`
- Complete stylesheet: `desktop/renderer/index.css`
- Fonts: Inter and JetBrains Mono loaded from Google Fonts in the renderer
  document.

## Current root tokens

```css
:root {
  --bg: #050505;
  --surface: #0f1012;
  --inset: #0a0a0c;
  --text: #ededed;
  --muted: #737373;
  --accent: #5b8def;
  --accent-soft: rgba(91, 141, 239, 0.08);
  --accent-glow: rgba(91, 141, 239, 0.35);
  --signal: #e85d3a;
  --signal-soft: rgba(232, 93, 58, 0.08);
  --warning: #f6ad55;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  --font-stack:
    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## Existing visual conventions

- Physical enclosure rendered with layered gradients, inset highlights, vents,
  feet, ports, and deep shadows.
- Recessed console display uses near-black surfaces and subtle scanline texture.
- Inter serves labels and controls; JetBrains Mono serves console output and
  telemetry.
- Blue communicates active/ready/system state.
- Orange-red communicates power, warning, destructive action, and temperature.
- Small uppercase labels, restrained rounding, and compact density establish the
  industrial console language.
- The full canonical CSS is passed directly as `desktop/renderer/index.css` in
  all draft commands.
