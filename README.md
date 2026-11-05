# Codex UI Screenshot-to-React Workflow Kit

A reusable workflow for implementing React/Vite interfaces from supplied screenshots.

## Install

1. Extract this folder.
2. Copy `AGENTS.md` into the root of your existing React/Vite repository.
3. Copy `.agents/` into the same repository root.
4. Keep your existing source code, package files, configuration, and assets. Do not replace them with this kit.
5. Open the repository root in VS Code and start/restart Codex so it can discover the instructions and skills.

## Included files

```text
AGENTS.md
.agents/
  skills/
    ui-project-discovery/SKILL.md
    screenshot-analysis/SKILL.md
    ui-screen-planning/SKILL.md
    ui-implementation/SKILL.md
    visual-validation/SKILL.md
    responsive-accessibility-review/SKILL.md
docs/
  ui/
    SCREEN-SPEC-TEMPLATE.md
    README-TEMPLATE.md
```

## What each skill does

| Skill                              | Purpose                                                               |
| ---------------------------------- | --------------------------------------------------------------------- |
| `$ui-project-discovery`            | Inspect the existing app and its conventions without editing          |
| `$screenshot-analysis`             | Analyse reference images and record measurable design observations    |
| `$ui-screen-planning`              | Turn a screen specification into a file-by-file implementation plan   |
| `$ui-implementation`               | Implement the approved screen using the existing stack                |
| `$visual-validation`               | Run the app and compare the result with the reference                 |
| `$responsive-accessibility-review` | Check responsive behaviour, semantics, keyboard use and accessibility |

Skill availability and invocation syntax can vary by Codex client/version. If a skill name is not recognised, open its `SKILL.md` and ask Codex to follow it directly.

## Recommended workflow for each screen

1. Put reference screenshots in a stable project folder, for example:
   `docs/ui/dashboard/desktop.png`
2. Create a screen specification using `docs/ui/SCREEN-SPEC-TEMPLATE.md`.
3. Run project discovery once when starting in an unfamiliar repository.
4. Run screenshot analysis for the current screen.
5. Run screen planning. Review the plan before allowing edits.
6. Approve and run UI implementation.
7. Run visual validation at the same viewport size as the reference.
8. Run responsive/accessibility review.
9. Review the Git diff and manually approve the result.

## Example Codex prompts

### Discover the project

```text
$ui-project-discovery
Inspect this repository for the UI implementation workflow.
Do not modify files. Report framework, package manager, scripts,
routing, styling, component library, assets, and conventions.
```

### Analyse a screenshot

```text
$screenshot-analysis
Analyse docs/ui/dashboard/desktop.png.
Read docs/ui/screens/dashboard.md if it exists.
Do not modify files. Produce a structured visual specification,
including layout, regions, dimensions, spacing, typography,
colours, assets, and interactions that can/cannot be inferred.
```

### Plan the screen

```text
$ui-screen-planning
Use the screenshot analysis and docs/ui/dashboard/dashboard-design.md.
Inspect the existing project. Prepare a file-by-file plan,
component breakdown, responsive assumptions, and validation plan.
Do not modify files. Wait for approval.
```

### Implement after approval

```text
$ui-implementation
Implement the approved dashboard screen.

Read:
- AGENTS.md
- The relevant UI implementation skill
- docs/ui/dashboard/dashboard-design.md
- The screenshot analysis and reference image

Requirements:
1. Inspect the existing React/Vite project before coding.
2. Create the actual React components and supporting files.
3. Reuse existing components, styles, design tokens and dependencies.
4. Follow the component breakdown in the approved screen plan.
5. Match the desktop screenshot as closely as possible.
6. Implement responsive behaviour based on the approved assumptions.
7. Implement the required interactions using realistic mock data
   where backend APIs are not available.
8. Do not create unnecessary placeholder components.
9. Do not modify unrelated application functionality.
10. Run the build and resolve implementation errors.

Do not stop after producing a plan. Implement the working UI.
Report all files created or modified and any remaining issues.
```

### Validate

```text
$visual-validation
Run the application and compare the dashboard with its reference
at the same viewport dimensions. Report exact differences.
Fix only visual issues within the approved scope.
```

### Final review

```text
$responsive-accessibility-review
Review the implemented dashboard for mobile/tablet behaviour,
semantic HTML, keyboard navigation, focus states, labels,
contrast and responsive overflow. Fix issues within scope.
```

## Important working practice

- One screen or tightly related group of screens per implementation task.
- One specification per screen or screen family.
- Reuse a shared design system when several screens share the same shell, navigation, controls, and tokens.
- Do not ask Codex to read every screen specification for a single-screen task. Load the current screen and its relevant shared-shell/design-system references.
- A screenshot usually shows only one state. Provide separate references or written rules for loading, empty, error, hover, selected, modal, and mobile states when those states matter.
- Keep the screenshot files available to Codex in the workspace and explicitly reference their paths in the prompt.
- Visual comparison requires a running app and a screenshot/browser capture capability. If unavailable, Codex must say so and provide manual verification steps rather than claiming it compared images.
