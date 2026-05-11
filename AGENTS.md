# AGENTS.md — Consumptions Web

This file is the entry point for AI agents working in this repository.

It explains how to use project rules and how to approach code generation.

---

## Rule system

This project uses a layered rule system:

### UI Coding

- **Core rules**  
  → `docs/ui-coding-rules-core.md`  
  → used for decision making

- **Full rules (reference)**  
  → `docs/ui-coding-rules.md`  
  → used for explanations and details

---

### Visual Pattern (UI layout)

- **Rules**  
  → `docs/ui-visual-pattern.md`  
  → defines layout, structure, and visual consistency

- Visual Pattern is **authoritative for UI layout**
- It must be followed when generating UI structure

---

### Styling

- **Core rules**  
  → `docs/tailwind-styling-rules-core.md`  
  → used for styling decision making

- **Full rules (reference)**  
  → `docs/tailwind-styling-rules.md`  
  → used for styling constraints and rules

---

## How to work with the code

- Always follow **core rules** first for decision making
- Apply **visual pattern rules** for UI layout and structure
- Use reference rules only when needed

If rules conflict:

- UI Coding rules decide **logic and structure**
- Visual Pattern decides **layout and composition**

---

## Decision responsibility

- Use **UI Coding rules** for:
  - component structure
  - logic
  - data flow
  - abstraction decisions

- Use **Visual Pattern rules** for:
  - page layout
  - section structure
  - grid and spacing consistency
  - component composition (cards, sections, CTA)

- Use **Styling rules** for:
  - visual details
  - Tailwind usage
  - CSS vs `className` decisions

---

## Default behavior

If unsure:

- follow UI Coding rules for logic
- reuse the closest layout from the reference page (`Home.tsx`)
- do not invent new layout patterns
- choose simpler solution for logic only
- avoid unnecessary abstraction
- keep logic close to usage

---

## Architecture awareness

- The project uses layered architecture (FSD-style)
- Respect layer boundaries
- Do not introduce coupling between layers
- `app/` is the composition root (top-level only)

---

## Reuse and patterns

- Reuse existing solutions if they match the use-case
- For UI layout, always prefer patterns from the reference page
- Do not introduce new layout patterns without a clear reason

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
- prefer reference page layout over inventing new UI structure
