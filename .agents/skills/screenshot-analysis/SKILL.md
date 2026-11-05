---
name: screenshot-analysis
description: Analyse supplied UI screenshots and convert them into a structured, implementation-ready visual specification without editing application code.
---

# Screenshot Analysis

Inputs: one or more screenshot paths, optional screen specification, and target viewport details.

1. Open and inspect every supplied screenshot. Do not rely only on the filename or user's short description.
2. Record image dimensions and, when known, viewport dimensions, device scale, and whether the image is cropped.
3. Break the screen into regions: application shell, header, sidebar, main content, panels, cards, tables, forms, overlays and footer.
4. Describe hierarchy and alignment: container widths, columns, gaps, padding, element sizes, positioning and scrolling.
5. Record visible typography: font family if identifiable from project assets, approximate sizes, weights, line heights and text hierarchy.
6. Record colours, borders, radii, shadows, icon style and image treatment. Prefer existing project tokens after checking the repository. Do not invent exact hex values if they cannot be reliably sampled.
7. Identify visible content and controls. For each control, state what is visually clear and what behaviour remains unknown.
8. Identify reusable patterns and likely component boundaries.
9. If multiple screenshots show the same screen at different sizes or states, compare them and identify what changes.
10. Separate observations into:
    - Confirmed by screenshot
    - Confirmed by written requirements
    - Inferred recommendation
    - Unknown / needs clarification
11. Do not modify files or implement the UI.

Output a structured specification that another agent can follow. Include a checklist of visual acceptance criteria and explicitly list missing states/assets/behaviours. Never claim exact pixel measurements unless they were actually measured.
