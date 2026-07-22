# Sentra Prompt — Studio Rack Console Design System

## Draft-mode priority

- When a draft prompt requests a current-state or pixel-perfect reproduction,
  the current renderer HTML/CSS is authoritative. Use only the existing baseline
  colors and exact source geometry; do not apply any approved target colors or
  Studio Rack refinements.
- Apply the approved target colors and Studio Rack refinements only when an
  iteration prompt explicitly requests the redesign.

## Product context

Sentra Prompt is a desktop prompt transformation and optimization console. It
deliberately presents as a compact professional processing appliance rather than
a conventional SaaS dashboard. The redesign must improve readability and
material realism without changing the Transform/Optimizer workflow or renderer
behavior.

## Approved direction

- Direction: Studio Rack Console.
- Brightness strategy: Graphite Lift; dark-first, but no crushed black surfaces.
- Physical metaphor: professional studio/rack processing hardware with a
  graphite metal enclosure, recessed display, functional ventilation, tactile
  controls, and restrained status illumination.
- Preserve: enclosure silhouette, front power area, top/side vents, screen
  geometry, feet, rear ports, mode flow, status panel, console output, command
  bar, HUD, mini widget, and draggable surfaces.

## Color system

### Existing baseline colors

- Baseline black: `#050505`
- Baseline surface: `#0F1012`
- Baseline inset: `#0A0A0C`
- Baseline text: `#EDEDED`
- Baseline muted: `#737373`
- Baseline blue: `#5B8DEF`
- Baseline signal orange-red: `#E85D3A`
- Baseline warning amber: `#F6AD55`

### Approved target colors

- App void/background: `#111318`
- Chassis high plane: `#393E46`
- Chassis base plane: `#252A31`
- Chassis low plane: `#1B1F25`
- Recessed screen frame: `#151A20`
- Console display: `#090F15`
- Panel surface: `#20262D`
- Panel raised surface: `#2B323A`
- Border strong: `#505A65`
- Border subtle: `rgba(190,205,220,0.14)`
- Primary text: `#E8EDF2`
- Secondary text: `#AAB5C0`
- Muted text: `#7E8A96`
- Active blue: `#6F9FEF`
- Active blue bright: `#AFCBFA`
- Active blue soft: `rgba(111,159,239,0.16)`
- Signal orange-red: `#D7654B`
- Warning amber: `#D9A158`
- Success green: `#75B68A`

No purple, pink, cyan neon, or decorative gradients.

## Typography

- UI labels and controls: Inter, weights 400–700.
- Console, metrics, and command content: JetBrains Mono, weights 400–600.
- Labels remain compact and uppercase with controlled tracking.
- Increase secondary-copy contrast before increasing font size.

## Geometry and spacing

- Preserve the existing desktop window footprint and responsive/mini states.
- Chassis corner radius: 18–20px.
- Recessed screen radius: 10–12px.
- Internal panels: 6–8px.
- Controls: 4–6px.
- Use the existing spacing rhythm; only normalize inconsistent gaps around
  status, console, command bar, and HUD.

## Materials and lighting

- Main light originates from upper-left.
- Chassis uses subtle cool graphite gradients with a narrow top highlight.
- Lower-right cast shadow establishes weight; inset shadows establish recess.
- Use realistic micro-contrast instead of bloom.
- Blue LEDs may glow locally; text and panel edges must not glow.
- Vents, feet, ports, power control, and bezel remain visibly functional.

## Component rules

- Active mode: filled blue-soft background, visible border, high-contrast label.
- Inactive mode: raised graphite control with clear hover affordance.
- Status panel: readable secondary copy and restrained hierarchy.
- Console output: darkest plane, crisp mono text, subtle scanline texture only.
- EXEC: physically raised light-metal primary key with dark label.
- CLR/COPY: secondary graphite keys; signal color appears on destructive hover
  only.
- HUD: secondary information, visually quieter than prompt content.
- Window controls: remain compact and distinct from workflow buttons.
- Mini widget: same material system at reduced density; no separate visual
  theme.

## Motion and interaction

- Preserve all current behavior and IPC contracts.
- Hover: 120–160ms material lift or contrast change.
- Active press: 0.5–1px downward movement and reduced highlight.
- Status LEDs may pulse subtly; avoid continuous decorative motion.
- Preserve reduced-motion compatibility where animations exist.

## Accessibility and realism constraints

- Primary and secondary text must remain legible on their final backgrounds.
- Controls must retain visible focus states.
- Do not fake controls that have no behavior.
- Decorative hardware must stay outside interactive regions.
- Drag behavior must remain available on passive chassis/panel backgrounds and
  excluded from controls, inputs, console output, and overlays.
