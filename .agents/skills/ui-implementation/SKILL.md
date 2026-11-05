---
name: ui-implementation
description: Implement an approved screenshot-based UI plan in an existing React/Vite project while preserving its architecture and visual reference fidelity.
---

# UI Implementation

Preconditions: an approved screen plan, relevant screenshot(s), and screen specification are available.

1. Re-read the applicable `AGENTS.md`, screen specification, screenshot analysis and approved plan.
2. Confirm the reference image paths are accessible in the workspace.
3. Inspect the exact files to be changed and nearby components before editing.
4. Implement the approved scope only. Reuse the existing router, design tokens, component library, icon library, assets and conventions.
5. Build semantic React components. Keep components focused and avoid both monolithic pages and unnecessary abstraction.
6. Match the screenshot's visual hierarchy, geometry, spacing, typography, colours, borders, radii, shadows and alignment.
7. Use supplied assets where appropriate. Do not substitute screenshots for actual UI, invent logos, or use emoji in place of icons.
8. Implement only interactions defined by requirements or clearly evidenced by the reference. If behaviour is ambiguous, preserve the visual affordance and report the question instead of inventing backend behaviour.
9. Ensure controls have labels, keyboard support and visible focus styles. Use responsive CSS and avoid horizontal overflow.
10. Do not add packages, alter global architecture, change unrelated screens, or modify API contracts unless the approved plan explicitly requires it.
11. Run relevant lint/type-check/test/build commands available in the repository.
12. Report files changed, implementation summary, commands/results, deviations from reference, and unresolved assumptions.

If implementation reveals a necessary scope change, stop and explain it before proceeding.
