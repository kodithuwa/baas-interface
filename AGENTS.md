# Repository Instructions for Codex

## Purpose
Build and maintain the UI of this application using supplied interface screenshots, design references, and written requirements. Treat screenshots as visual references, not as permission to invent missing functionality.

## Before editing
- Inspect the existing repository, package manager, scripts, framework versions, routing, styling system, component library, assets, and current conventions.
- Do not assume the project uses Tailwind, shadcn/ui, CSS Modules, a particular router, or a particular state library. Verify first.
- Read the relevant feature/screen specification and inspect all supplied reference images before implementing.
- If an essential interaction, responsive behaviour, asset, or design detail cannot be inferred, state the uncertainty and ask one focused question rather than silently inventing it.
- Do not replace project architecture or dependencies without approval.

## Screenshot fidelity
- Treat supplied screenshots as the primary visual source of truth for the visible screen.
- Match layout, hierarchy, spacing, sizing, typography, colours, borders, radii, shadows, icons, imagery, and alignment as closely as practical.
- Preserve the existing application shell and shared components unless the reference explicitly changes them.
- Do not use a screenshot as a flat page background or embed it as the UI. Recreate the interface with semantic, responsive HTML and React components.
- Do not use emoji as substitutes for supplied icons. Reuse existing assets or the project's icon library.
- Do not fabricate logos, product imagery, or text that is visible in the reference. Use supplied assets where available.
- If exact font, colour, spacing, or asset details are unknown, inspect project tokens/assets first and document any approximation.

## Implementation rules
- Follow existing React, TypeScript, Vite, routing, styling, and component patterns.
- Prefer reusable components where the design genuinely repeats; avoid over-abstraction for a single screen.
- Keep components focused and maintainable.
- Use semantic HTML, accessible labels, keyboard-operable controls, visible focus states, and appropriate ARIA only where needed.
- Implement actual interactions only when requirements or the reference define them. Do not create inert controls that appear interactive.
- Support responsive layouts. If only a desktop screenshot is supplied, preserve its desktop composition and propose sensible smaller-screen behaviour; clearly distinguish inferred behaviour from reference-defined behaviour.
- Reuse existing design tokens. Avoid introducing arbitrary one-off values when shared tokens exist.
- Avoid unnecessary dependencies and broad refactoring.
- Do not modify unrelated screens or files.

## Quality checks
- Run the repository's relevant lint, type-check, test, and build scripts where available.
- Use the project's existing browser/e2e/visual testing setup if present.
- Compare the rendered screen with the reference at the same viewport dimensions.
- Report what was checked, exact commands, results, and known visual differences.
- Do not claim pixel-perfect matching unless a comparison was actually performed.

## Safety
- Never expose secrets, API keys, tokens, or private configuration in code or screenshots.
- Do not run destructive commands, delete assets, change production settings, or deploy without explicit approval.
- Do not commit or push unless explicitly asked.
