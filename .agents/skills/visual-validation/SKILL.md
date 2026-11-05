---
name: visual-validation
description: Validate a running UI against supplied screenshots at matching viewport dimensions and correct visual differences without broad refactoring.
---

# Visual Validation

1. Read the approved plan, screen specification and screenshot-analysis notes.
2. Confirm the reference screenshot dimensions and target viewport.
3. Discover the project's existing run and browser/screenshot tooling. Do not assume a particular browser automation tool is installed.
4. Start the app using the documented project command if permitted. Do not alter environment secrets or production configuration.
5. Capture the implemented screen at the same viewport dimensions and comparable browser zoom/device scale as the reference.
6. Compare the reference and rendered output region by region:
   - Overall shell and content bounds
   - Position, dimensions, alignment and spacing
   - Typography and line wrapping
   - Colours, borders, radii and shadows
   - Icons, images and cropping
   - Overflow, clipping and scroll behaviour
7. If image comparison tooling is available, use it; otherwise perform a careful side-by-side inspection. Do not claim pixel-diff or pixel-perfect validation unless actually performed.
8. Fix clear visual mismatches within the approved scope. Avoid unrelated refactoring.
9. Re-run relevant checks and capture the final state.
10. Report viewport, tooling, exact commands, findings fixed, remaining differences and any limitations.

If the app cannot be run or screenshots cannot be captured, state that clearly and provide manual verification steps.
