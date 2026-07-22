# Sentra Prompt Layouts

## Full Console Shell

- Source: `desktop/renderer/index.html`
- Root: `#consoleRig`
- Description: A physical console enclosure containing front power controls, top
  and side ventilation, a recessed screen, operational UI, feet, and rear ports.

```html
<div class="console-rig" id="consoleRig">
  <div class="console-body" id="consoleShell">
    <div class="front-panel">
      <div class="io-label">Sentra Console</div>
      <div class="led-strip"></div>
      <button class="power-btn" id="powerBtn" title="Power">
        <div class="power-led-ring standby" id="powerLedRing"></div>
      </button>
    </div>
    <div class="top-vent-section">
      <div class="vent-grille"></div>
      <div class="vent-highlight"></div>
    </div>
    <div class="side-vent"></div>
    <div class="screen-area">
      <div class="screen-content" id="screenContent">
        <div class="window-controls"></div>
        <div class="mode-bar"></div>
        <div class="status-panel"></div>
        <div class="shell-badges" id="shellBadges"></div>
        <div class="console-box" id="display"></div>
        <div class="command-bar"></div>
        <div class="footer"></div>
      </div>
    </div>
  </div>
  <div class="console-feet"></div>
  <div class="rear-ports"></div>
</div>
```

The complete canonical layout source is `desktop/renderer/index.html`; it is
passed directly to every Superdesign draft command.

## Mini Widget Shell

- Source: `desktop/renderer/index.html`
- Root: `#miniWidget`
- States: collapsed `.mini-bar`; expanded `.mini-panel`.

```html
<div class="mini-widget" id="miniWidget" hidden>
  <div class="mini-bar" id="miniBar" title="Sentra Console — Click to expand">
    <div class="mini-status ready" id="miniStatus"></div>
    <div class="mini-hint">Sentra &mdash; Click to expand</div>
  </div>
  <div class="mini-panel" id="miniPanel" hidden>
    <div class="panel-header" id="panelHeader"></div>
    <div class="mini-mode-bar"></div>
    <div class="mini-status-panel"></div>
    <div class="mini-console" id="mDisplay"></div>
    <div class="mini-hud"></div>
    <div class="mini-cmd-bar"></div>
    <div class="mini-footer"></div>
  </div>
</div>
```
