---
name: ui-screen-planning
description: Create a safe, file-by-file implementation plan for one UI screen using its screenshot analysis and the existing React/Vite project conventions.
---

# UI Screen Planning

1. Read `AGENTS.md`, the current screen specification, screenshot-analysis output, and relevant shared UI/design-system documentation.
2. Inspect existing source files and identify the correct route, layout, components, styles, assets and tests to reuse.
3. Define the screen scope and explicitly list out-of-scope work.
4. Propose component boundaries and data/interaction responsibilities.
5. Map each proposed change to existing or new files. Avoid speculative file creation.
6. Explain styling choices using the repository's existing styling approach and tokens.
7. List any missing information that blocks faithful implementation. Ask only essential questions.
8. Define responsive behaviour. Label behaviour inferred from a desktop-only screenshot as an assumption.
9. Define visual, functional, responsive and accessibility acceptance criteria.
10. Define exact validation commands and how the screen will be captured at the reference viewport.
11. Do not edit files, install packages, or run migrations.

Return a plan with: scope, existing patterns to reuse, proposed components, file-by-file changes, interaction behaviour, responsive assumptions, risks, tests and acceptance criteria. Wait for explicit approval.
