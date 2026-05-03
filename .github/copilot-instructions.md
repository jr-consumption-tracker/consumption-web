# GitHub Copilot Instructions — Consumptions Web

Follow project conventions:

### UI Coding

- Core rules (decision making): `docs/ui-coding-rules-core.md`
- Full reference: `docs/ui-coding-rules.md`

### Styling

- Core rules (decision making): `docs/tailwind-styling-rules-core.md`
- Full reference: `docs/tailwind-styling.md`

<!-- ### Other guides

- Forms: `docs/forms-guide.md` -->

---

## How to approach code generation

- Always follow **ui-coding-rules-core.md** for decision making
- Use **ui-coding-rules.md** only as reference
- If rules conflict → follow rule priority (Simplicity → Developer ergonomics → Architecture)

---

## Decision responsibility

- Use **UI Coding rules** for:
  - component structure
  - logic
  - data flow
  - abstraction decisions

- Use **Styling rules** for:
  - layout
  - visual appearance
  - Tailwind usage
  - CSS vs `className` decisions

---

## Key principles

- Prefer the simplest possible solution
- Do NOT introduce abstraction unless it provides clear and immediate benefit
- Do NOT create hooks, utils or extra layers by default
- Structure grows with complexity (do not use predefined templates)
- Reuse existing solutions ONLY if they match use-case and complexity

---

## Default behavior

If unsure:

- choose simpler solution
- avoid new abstraction
- avoid extra layers
- keep logic close to usage

---

<!-- ## Forms and dialogs

See: docs/forms-guide.md

- Do not introduce custom form patterns
- Follow existing form architecture (TanStack Form + Zod)

--- -->

## Important

- Do not invent new patterns unless explicitly requested
- Do not overengineer
- Favor clarity over flexibility
