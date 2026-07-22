# Sentra Prompt Routes

Sentra Prompt desktop uses a single Electron renderer document rather than
file-based web routing.

| Surface        | Entry                         | Layout                     | State trigger          |
| -------------- | ----------------------------- | -------------------------- | ---------------------- |
| Full console   | `desktop/renderer/index.html` | `#consoleRig`              | Default desktop mode   |
| Mini expanded  | `desktop/renderer/index.html` | `#miniWidget > #miniPanel` | Desktop mini mode      |
| Mini collapsed | `desktop/renderer/index.html` | `#miniWidget > #miniBar`   | Desktop minimized mode |

The shared interaction controller is `desktop/renderer/renderer.ts`. The design
task targets the default full console while preserving equivalent material
treatment for both mini states.
