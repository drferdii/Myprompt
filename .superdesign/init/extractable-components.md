# Extractable Components

The current renderer is intentionally monolithic HTML/CSS. No standalone
React/Vue layout components exist, so component extraction is skipped for this
design pass.

## ConsoleShell

- Source: `desktop/renderer/index.html`
- Category: layout
- Description: Physical full-console enclosure and recessed operational display.
- Extractable props: none for this pass.
- Hardcoded: enclosure geometry, vents, feet, ports, screen, labels, and
  controls.

## MiniConsoleShell

- Source: `desktop/renderer/index.html`
- Category: layout
- Description: Collapsed and expanded compact desktop console.
- Extractable props: `isExpanded` (boolean, default: false).
- Hardcoded: title, status LED, mode controls, HUD, command controls, and
  footer.

These patterns remain inline in Superdesign drafts because their markup shares a
single source file and is tightly coupled to desktop renderer IDs.
