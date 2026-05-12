# UI Visual Pattern Rules (Strict)

Prefer copying exact implementation from the reference page over interpreting these rules.

This document defines binding rules for UI generation.  
The main authority is the **real implementation in the reference page**.

Follow Implementation Priority and Generation Procedure first.  
Do not interpret, optimize, improve, or refactor copied layouts.

---

## Source of Truth

Reference page:

`src/apps/web/src/pages/Home.tsx`

All UI must follow structure, spacing, and composition of this page.

---

## Implementation Priority

When generating UI:

1. Find a similar section in the reference page (Home.tsx)
2. Copy its structure exactly:
   - section
   - container
   - grid
   - cards
3. Replace content only (text, data)
4. Do not change spacing, layout, or structure

If there is any conflict:
- Always follow the reference page implementation

---

## Generation Procedure

When generating UI:

1. Locate a similar section in Home.tsx  
2. Copy it exactly  
3. Use exactly one layout pattern per section  
4. Do not combine multiple section structures  
5. Replace content only  
6. Do not modify spacing, grid, radius, or layout  

If no identical section exists:
- reuse the closest existing section
- adapt content only
- do not create a new layout pattern

---

## Core Rules

- Consistency > creativity  
- Reuse patterns from the reference page only  
- Do not create new layout patterns  
- Do not modify existing spacing, grid, or radius  
- Do not introduce new component structures  

---

## Layout Rules

- Pages = sequence of full-width sections  
- Do not add custom page-level layout wrappers  
- Use one layout pattern per section  
- Do not mix layout types  

---

## Section Rules

- Copy section structure, spacing, and decoration from the reference page  
- Do not create nested layout systems  
- Background elements must behave like in reference (absolute, non-interactive)  

---

## Components

Always reuse structures from the reference page:

- Hero section  
- Feature cards  
- Pricing cards  
- CTA sections  

Do not invent new component structures.

---

## Interaction Rules

- Copy hover states and transitions exactly  
- Follow accessibility patterns from the reference page  
- Do not add new interaction patterns  

---

## Restrictions

- Do not change spacing, grid, radius, or structure  
- Do not refactor copied layouts  
- Do not create new layout or component patterns  
- Do not combine multiple layout patterns in one section  

---

## Priority Rules

1. Copy reference page > create new patterns  
2. Reuse existing structures > modify layout  
3. Replace content only > rewrite structure  
4. Readability > visual effects  
