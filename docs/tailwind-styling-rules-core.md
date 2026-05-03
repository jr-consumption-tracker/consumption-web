# Tailwind Styling Rules — Core

Tento dokument definuje, jak dělat rozhodnutí při stylování UI.  
Pokud se pravidla dostanou do konfliktu, řiď se prioritou níže.

---

## Priorita pravidel

1. Simplicity first
2. Čitelnost (`className`, JSX)
3. Konzistence s design tokens

---

## Simplicity first

- Preferuj co nejjednodušší styling řešení.
- Preferuj Tailwind utility classes před jakoukoliv abstrakcí.
- Nevytvářej CSS třídu bez jasného reuse nebo zlepšení čitelnosti.
- Preferuj čitelnost před znovupoužitelností.
- Jednoduchá duplicita utility classes je v pořádku, pokud zlepšuje čitelnost.

---

## Čitelnost (DX)

- `className` musí být okamžitě pochopitelný bez dalšího kontextu.
- Čitelnost má přednost před minimalizací počtu tříd.
- Nepřesouvej styling do CSS pouze kvůli zkrácení `className`.
- Pokud je styling těžko pochopitelný, je pravděpodobně špatně navržený.
- Styling musí zůstat co nejblíže místu použití.
- Přepínání mezi JSX a CSS musí být minimalizované.
- Pokud pochopení stylingu vyžaduje otevření více souborů, návrh je chybný.

---

## Simple vs Complex (rozhodovací pravidla)

### Ber jako SIMPLE styling pokud:

- používá pouze několik Tailwind utility classes
- používá maximálně 2–3 varianty
- je použitý pouze na jednom místě
- neobsahuje složené kombinace stavů

→ Postup:

- drž styling přímo v `className`
- nevytvářej CSS třídy
- nepoužívej slot API

---

### Ber jako COMPLEX styling pokud:

- `className` je dlouhý nebo nečitelný
- kombinuje více variant (hover, data, responsive…)
- opakuje se na více místech
- reprezentuje reusable nebo doménový pattern

→ Postup:

- použij `@layer components`
- nebo slot className API

---

### Fallback:

Pokud si nejsi jistý:

- preferuj SIMPLE
- ale pokud `className` ztrácí čitelnost → ber jako COMPLEX

---

## Tailwind vs CSS (`@layer components`)

Tailwind utility classes jsou výchozí řešení.

CSS (`@layer components`) je fallback, ne výchozí přístup.

Použij Tailwind utility classes pokud:

- styl je lokální
- je čitelný
- nepředstavuje reusable pattern

Použij `@layer components` pouze pokud:

- styling se opakuje
- nebo `className` ztrácí čitelnost
- nebo reprezentuje doménový pattern

Nepoužívej `@layer components`:

- pro jednorázový styling
- pro zkrácení `className`
- pro skrytí čitelného Tailwind kódu

---

## Variants (stavy)

Použij Tailwind variants pokud:

- jde o vizuální UI stav (hover, focus, active, disabled)
- jde o stav komponenty (`data-*`, `aria-*`)
- variants mají přednost před CSS, pokud zůstávají čitelné

Nepoužívej variants pokud:

- reprezentují business logiku
- nahrazují React state
- simulují komplexní stavové chování
- nesmí ovlivňovat chování komponenty
- snižují čitelnost → použij `@layer components`

---

## `tv()` (tailwind-variants)

### Kdy `tv()` nepoužívat

Nepoužívej `tv()` pokud:

- komponenta je použitá pouze na jednom místě
- neexistuje reálné reuse variant
- styling je jednoduchý nebo specifický pro jednu komponentu
- jde o refactoring bez reálného reuse

V těchto případech použij inline `className` s `cn()`.

### `tv()` je pouze pro design system

Použij `tv()` pouze pokud:

- komponenta je reusable napříč aplikací
- má stabilní variant API
- reprezentuje sdílený UI primitive (např. Button, Input)

Nepoužívej `tv()` pro feature-specific komponenty.

---

## Komplexita variant

- maximálně 2–3 varianty na jeden styl
- více než 3 varianty je silný signál ke zjednodušení
- pokud varianty snižují čitelnost, přesuň styling do `@layer components` nebo slot className API

---

## Hero UI

Použij Hero UI pouze pokud:

- potřebuješ chování, přístupnost nebo interakci

Nepoužívej Hero UI:

- pro layout
- pro typografii
- pro jednoduché UI

---

## Slot API

Slot className API není výchozí styling přístup.

Použij slot className API pouze pokud:

- komponenta má více stylovatelných částí
- nebo root `className` nestačí

Nepoužívej slot API:

- pro jednoduchý styling
- jako náhradu za Tailwind utility classes

---

## Abstrakce

- Nevytvářej styling abstrakci při prvním použití.
- Duplicitní Tailwind kód je v pořádku.

---

## Reuse (Rule of 3)

- 1× → napiš inline
- 2× → všimni si patternu
- 3× → abstrahuj do `@layer components`

Abstrahuj pouze pokud:

- jde o stejný pattern
- má stabilní význam
- zlepšuje čitelnost

---

## Fallback

Pokud si nejsi jistý:

→ použij jednoduchý Tailwind styling v `className`
→ preferuj čitelnost před abstrakcí
