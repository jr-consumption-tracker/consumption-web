# CLAUDE.md — Consumptions Web

## Rules

Load the appropriate skill before generating code:

| Task                                   | Skill                                     |
| -------------------------------------- | ----------------------------------------- |
| Component structure, logic, FSD layers | `.claude/skills/ui-coding/SKILL.md`       |
| Page layout, sections, composition     | `.claude/skills/visual-pattern/SKILL.md`  |
| Styling, Tailwind, Hero UI             | `.claude/skills/tailwind/SKILL.md`        |
| Routing, navigation, lazy loading      | `.claude/skills/tanstack-router/SKILL.md` |
| Forms, validation                      | `.claude/skills/forms/SKILL.md`           |

If rules conflict: UI Coding decides structure, Visual Pattern decides layout.

## Architecture

- FSD layers: `app → pages → widgets → features → entities → shared`
- Imports flow downward only
- `app/` is composition root — top-level only
- No coupling between layers

## Default behavior

- Follow UI Coding skill for logic
- Reuse layout from reference page (`Home.tsx`) — do not invent new patterns
- Prefer simpler solution, avoid unnecessary abstraction
- Keep logic close to usage
- Do not duplicate existing logic
- When unsure — analyze existing code and follow established patterns

## Agents

When asked to write tests, use the `test-writer` subagent.
When asked to review code, use the `code-reviewer` subagent.
When asked to create a component, use the `component-generator` subagent.
