# Sentra Prompt UI Components

The desktop renderer is a custom HTML/CSS interface without a standalone
component library. Reusable patterns are defined as semantic class groups inside
`desktop/renderer/index.html` and styled in `desktop/renderer/index.css`.

## Mode Button

- Source: `desktop/renderer/index.html`
- Purpose: Switch between Transform and Optimizer workflows.

```html
<div class="mode-bar">
  <button class="mode-btn active" id="transformModeBtn" data-mode="transform">
    <strong>Transform</strong>
  </button>
  <button class="mode-btn" id="optimizeModeBtn" data-mode="optimize">
    <strong>Optimizer</strong>
  </button>
</div>
```

## Status Panel

- Source: `desktop/renderer/index.html`
- Purpose: Explain the active workflow and expose the optimizer lane selector.

```html
<div class="status-panel">
  <div class="status-panel-header">
    <strong id="statusTitle">Transform</strong>
    <span class="status-label" id="statusTag">Default Mode</span>
  </div>
  <div class="status-copy" id="statusCopy">
    Wrap raw prompts into a deterministic prompt-engineering scaffold.
  </div>
  <div class="optimizer-lane-row" id="optimizerLaneControls" hidden>
    <span class="optimizer-lane-label">Codieverse Algorithme</span>
    <div class="optimizer-lane-switch">
      <button
        class="optimizer-lane-btn active"
        type="button"
        data-lane="INTERACTIVE"
      >
        Interactive
      </button>
      <button class="optimizer-lane-btn" type="button" data-lane="DEEP">
        Deep
      </button>
    </div>
  </div>
</div>
```

## Command Bar

- Source: `desktop/renderer/index.html`
- Purpose: Primary prompt input and execution controls.

```html
<div class="command-bar">
  <input
    type="text"
    id="cmdInput"
    class="cmd-input"
    placeholder="Masukkan prompt atau command..."
    autofocus
    autocomplete="off"
  />
  <button class="secondary-btn" id="clearBtn">CLR</button>
  <button class="action-btn" id="runBtn">EXEC</button>
  <button class="secondary-btn" id="copyLastBtn" disabled>COPY</button>
</div>
```

## System HUD

- Source: `desktop/renderer/index.html`
- Purpose: Device-like operational telemetry.

```html
<div class="footer-hud" id="systemHud">
  <div class="hud-item">
    <span class="hud-label">SoC Temp</span>
    <span class="hud-value" id="hudTemp">42&deg;C</span>
    <div class="hud-bar">
      <div class="hud-bar-fill temp" id="hudTempBar" style="width:35%"></div>
    </div>
  </div>
  <div class="hud-item">
    <span class="hud-label">CPU Load</span>
    <span class="hud-value" id="hudLoad">12%</span>
    <div class="hud-bar">
      <div class="hud-bar-fill load" id="hudLoadBar" style="width:12%"></div>
    </div>
  </div>
</div>
```

## Mini Console Controls

- Source: `desktop/renderer/index.html`
- Purpose: Compact prompt workflow with the same Transform/Optimizer model.

```html
<div class="mini-cmd-bar">
  <input
    type="text"
    id="mCmdInput"
    class="mini-cmd-input"
    placeholder="Prompt atau command..."
    autocomplete="off"
  />
  <button class="mini-btn-sm mini-btn-sec" id="mClearBtn" type="button">
    CLR
  </button>
  <button class="mini-btn-sm mini-btn-exec" id="mRunBtn" type="button">
    EXEC
  </button>
</div>
```
