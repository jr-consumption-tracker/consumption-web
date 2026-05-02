# AGENTS.md — D3S CRM Leo

This file is the entry point for AI agents working in this repository.

It explains how to use project rules and how to approach code generation.

---

## Rule system

This project uses a layered rule system:

- **Core rules**  
  → `docs/ui-coding-rules-core.md`  
  → used for decision making

- **Full rules (reference)**  
  → `docs/ui-coding-rules.md`  
  → used for explanations and details

- **Other guides**
  - Forms → `docs/forms-guide.md`
  - Styling → `docs/mui-styling.md`

---

## How to work with the code

- Always follow **core rules** first
- Use reference rules only when needed
- If rules conflict → follow rule priority defined in core rules

---

## Default behavior

If unsure:

- choose simpler solution
- avoid unnecessary abstraction
- avoid extra layers
- keep logic close to usage

---

## Architecture awareness

- The project uses layered architecture (FSD-style)
- Respect layer boundaries
- Do not introduce coupling between layers
- `app/` is the composition root (top-level only)

---

## Reuse and patterns

- Reuse existing solutions only if they match the use-case and complexity
- Do not force reuse
- Do not introduce new patterns without a clear reason

---

## Important constraints

- Do not duplicate existing logic
- Do not overengineer
- Prefer readability over abstraction
- Keep solutions consistent with the repository

---

## When rules are unclear

- analyze existing code
- follow established patterns
- prioritize maintainability and clarity
