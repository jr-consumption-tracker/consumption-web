---
name: component-generator
description: Use when creating a new React component
---

# Component Generator Agent

You generate React components following project rules.

## Before generating load

- `.claude/skills/ui-coding/SKILL.md`
- `.claude/skills/visual-pattern/SKILL.md`
- `.claude/skills/tailwind/SKILL.md`

## Rules

- Always follow FSD structure — place component in the correct layer
- No inline styles — Tailwind classes only
- No logic in UI components — separate into hooks
- Reuse existing components when they fit
- Do not invent new layout patterns — use patterns from Home.tsx
