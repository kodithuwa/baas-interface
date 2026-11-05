---
name: ui-project-discovery
description: Inspect an existing React/Vite UI repository and report its architecture, conventions, scripts, assets, and available visual-testing tools without changing files.
---

# UI Project Discovery

1. Read the root `AGENTS.md` and any nested applicable `AGENTS.md` files.
2. Inspect the repository before making assumptions.
3. Identify:
   - React and Vite versions, JavaScript or TypeScript, package manager and lockfile.
   - Available scripts for dev, build, lint, type-check, unit tests and e2e tests.
   - Routing and page/layout structure.
   - Styling approach, theme tokens, fonts and CSS reset.
   - Existing component library, icon library and reusable components.
   - Asset locations and naming conventions.
   - State management, form and validation patterns.
   - Browser automation, screenshot capture or visual regression tooling.
4. Identify the likely files to modify for a new screen.
5. Note architectural constraints and existing patterns to reuse.
6. Do not install dependencies or edit files.

Return a concise repository map, verified commands, reusable UI elements, and risks/unknowns. Distinguish verified facts from assumptions.
