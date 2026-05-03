# Tailwind Styling Rules — JR Consumptions - Web

## Scope

Tento dokument je jediný zdroj pravdy pro styling v projektu.

Pravidla platí pro:

- vývojáře
- GitHub Copilot
- všechny AI agenty

Porušení těchto pravidel je silný signál chyby a musí být při code review zdůvodněno nebo opraveno.

Každé nezdůvodněné porušení těchto pravidel musí být při code review opraveno, ne tolerováno.

---

## Styling Philosophy

Tailwind CSS v4 je primární styling systém projektu.

Styling musí vznikat pouze přes tuto hierarchii:

1. **Tailwind utility classes** pro layout, spacing, barvy, typografii, stavy a responzivitu.
2. **CSS layers (@theme, @layer base, @layer components)** pro design tokens, základní globální styly a odůvodněné reusable patterny.
3. **Hero UI components `className` / slot className API** pouze pro stylování použitých Hero UI components.

CSS `@theme` je jediný zdroj pravdy pro design tokens.

Hero UI components nejsou styling systém. Hero UI components neurčují styling architekturu projektu.

Projekt nepoužívá žádný CSS-in-JS ani runtime styling systém.

Styling je deklarativní vrstva a nesmí obsahovat aplikační logiku.

Rozhodování o layoutu nesmí být řízeno pomocí CSS nebo Tailwind variants.

Jakýkoliv styling přístup mimo tuto hierarchii je implementační chyba.

---

## Decision Tree

Každé styling rozhodnutí musí začít u Tailwind utility classes.

```text
Potřebuješ layout, spacing, barvu, velikost, typografii nebo stav?
→ Použij Tailwind utility classes přímo v className.

Styling je jednoduchý a čitelný?
→ Ponech ho jako Tailwind utility classes v className.

Styling je složitý nebo nečitelný?
→ Přesuň ho do @layer components nebo do slot className API.

Stejný vizuální pattern se opakuje na dvou nebo více místech a má reusable nebo doménovou odpovědnost?
→ Vytvoř pojmenovanou třídu v @layer components.

Styluješ Hero UI components se sloty?
→ Použij className nebo slot className API.

Žádná cesta výše neplatí?
→ Zastav implementaci a ověř návrh. Nevytvářej nový styling pattern.

If no rule clearly applies:
→ choose the simplest valid Tailwind-based solution.

Nejsi si jistý?
→ Preferuj jednoduché Tailwind utility classes.
→ Pokud se zhorší čitelnost, přejdi ke strukturovanějšímu přístupu.
```

### Rychlá pravidla

| Situace                           | Povinné řešení                         |
| --------------------------------- | -------------------------------------- |
| Lokální layout                    | Tailwind utility classes v `className` |
| Lokální spacing                   | Tailwind spacing design tokens         |
| Lokální barvy                     | Tailwind color design tokens           |
| Lokální responzivita              | Tailwind breakpoint varianty           |
| Lokální hover/focus/disabled stav | Tailwind state varianty                |
| Reusable aplikační pattern        | `@layer components`                    |
| Hero UI components slot           | `className` / slot className API       |

---

## Design Tokens

### Single Source of Truth

Tailwind utility classes jsou generované z design tokens definovaných v CSS `@theme`. Vývojáři musí používat tyto utility classes místo ručního definování hodnot.

Komponenty nesmí definovat vlastní design hodnoty pro barvy, spacing, typografii, radius, shadow, z-index ani jiné vizuální vlastnosti.

JavaScript nesmí definovat vizuální hodnoty, například barvy, spacing, typografii, radius, shadow nebo z-index.

JavaScript smí rozhodovat, které Tailwind utility classes se aplikují.

Duplikování hodnot design tokens mimo CSS `@theme` je zakázané.

Lokální přepisování design tokens v komponentách je zakázané.

### Definice design tokens

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", "Roboto", "Helvetica", "Arial", sans-serif;

  --color-surface: #ffffff;
  --color-surface-muted: #f6f7f9;
  --color-border: #d9dee7;

  --color-text: #172033;
  --color-text-muted: #667085;

  --color-primary: #1976d2;
  --color-primary-hover: #115293;
  --color-primary-foreground: #ffffff;

  --color-success: #2e7d32;
  --color-warning: #ed6c02;
  --color-error: #d32f2f;
  --color-info: #0288d1;

  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
}
```

### Použití design tokens

```tsx
// Správně
<section className="rounded-lg border border-border bg-surface p-4 text-text">
  ...
</section>

// Špatně
<section className="rounded-[8px] border-[#d9dee7] bg-[#ffffff] p-[16px] text-[#172033]">
  ...
</section>
```

### Pravidla

- Nový design token smí vzniknout pouze pro hodnotu, která je součástí design systému.
- Jednorázová hodnota musí použít existující design token.
- Hardcoded barvy, fonty, radiusy, shadow hodnoty a z-index hodnoty jsou v JSX zakázané.
- Arbitrary values jsou povolené pouze pro technické hodnoty, které nejsou design tokens, například `grid-cols-[auto_1fr]`.
- Design token nesmí vzniknout kvůli jednomu lokálnímu případu bez opakování nebo designového významu.

---

## CSS layers (@theme, @layer base, @layer components)

CSS layers (@theme, @layer base, @layer components) jsou jediný sdílený CSS mechanismus v projektu.

```css
@import "tailwindcss";

@theme {
  /* design tokens */
}

@layer base {
  /* základní globální styly */
}

@layer components {
  /* odůvodněné reusable aplikační třídy */
}
```

---

## `@theme`

CSS `@theme` definuje design tokens aplikace.

Design tokens musí být pojmenované podle významu, ne podle aktuální vizuální hodnoty.

```css
@theme {
  /* Správně */
  --color-surface: #ffffff;
  --color-text-muted: #667085;
  --color-primary: #1976d2;

  /* Špatně */
  --color-white: #ffffff;
  --color-gray-500: #667085;
  --color-blue: #1976d2;
}
```

### Pravidla

- Design token musí být definovaný v CSS `@theme`, pokud má být dostupný přes Tailwind utility classes.
- Design token musí používat sémantický název, například `surface`, `border`, `text-muted`, `primary`, `error`.
- Názvy odvozené pouze od barvy, například `blue`, `gray`, `red`, jsou zakázané.
- Lokální přepis design token v komponentě je zakázaný.

---

## `@layer base`

`@layer base` slouží pouze pro základní globální styly HTML elementů.

```css
@layer base {
  html {
    font-family: var(--font-sans);
  }

  body {
    @apply bg-surface-muted text-text antialiased;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }
}
```

### Pravidla

- `@layer base` smí upravovat pouze HTML elementy s globální platností.
- Komponentové styly v `@layer base` jsou zakázané.
- Layout konkrétních obrazovek v `@layer base` je zakázaný.
- Použití `@layer base` jako náhrady za `@layer components` je zakázané.

---

## `@layer components`

`@layer components` je sekundární nástroj pro reusable aplikační patterny.

`@layer components` není výchozí styling přístup.

Komponentová CSS třída smí vzniknout pouze tehdy, když se stejný pattern používá na dvou nebo více místech a má doménovou nebo reusable odpovědnost.

`@layer components` smí být použitý pouze tehdy, když ho ospravedlňuje styling komplexita nebo reuse.

Nadměrné používání komponentových tříd je design problém. Skrývá styling logiku mimo JSX a ruší výhody Tailwind utility classes.

```css
@layer components {
  .app-page {
    @apply flex min-h-full flex-col gap-4 p-4 md:p-6;
  }

  .app-panel {
    @apply rounded-lg border border-border bg-surface p-4 shadow-sm;
  }

  .app-toolbar {
    @apply flex flex-wrap items-center justify-between gap-3;
  }

  .app-field-grid {
    @apply grid gap-3 md:grid-cols-2 xl:grid-cols-3;
  }

  .app-status-badge {
    @apply inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium;
  }

  .app-status-badge[data-status="active"] {
    @apply border-success/20 bg-success/10 text-success;
  }
}
```

### Pravidla

- Třídy v `@layer components` musí mít stabilní pojmenování.
- Sdílené aplikační třídy musí používat prefix `app-`.
- `@apply` smí skládat pouze existující Tailwind utility classes.
- Jednorázové styly konkrétní stránky v `@layer components` jsou zakázané.
- Komponentová třída je zakázaná, pokud styl nereprezentuje sdílený reusable pattern.
- `@layer components` nesmí skrývat čitelné Tailwind utility classes.

### Kdy `@layer components` nepoužívat

Komponentovou CSS třídu nesmíš vytvořit, pokud:

- je použitá pouze na jednom místě;
- styl nereprezentuje sdílený reusable pattern;
- třída nereprezentuje doménový pattern pojmenovaný podle UI odpovědnosti;
- třída pouze skrývá běžné Tailwind utility classes bez snížení skutečné duplicity.

---

## Tailwind Utility Classes in JSX

Tailwind utility classes jsou výchozí způsob stylování komponent.

Tailwind variants reprezentují vizuální stavy UI a patří do styling vrstvy, ne do business logiky.

```tsx
// Správně
export const ContactCard = ({ name, email }: ContactCardProps) => {
  return (
    <article className="rounded-lg border border-border bg-surface p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-text">{name}</h3>
      <p className="mt-1 text-sm text-text-muted">{email}</p>
    </article>
  );
};
```

```tsx
// Špatně
export const ContactCard = ({ name, email }: ContactCardProps) => {
  return (
    <article style={{ padding: "16px", borderRadius: "8px" }}>
      <h3>{name}</h3>
      <p>{email}</p>
    </article>
  );
};
```

### Pravidla

- Běžné styly musí být zapsané přes Tailwind utility classes v `className`.
- Tailwind utility classes musí zůstat lokálně u elementu, dokud styl nereprezentuje sdílený reusable pattern.
- `className` musí být okamžitě srozumitelný bez dalšího kontextu.
- Čitelnost JSX má přednost před minimalizací počtu Tailwind utility classes.
- Čitelnost `className` má přednost před redukcí duplicity.
- Styly nesmí být přesunuté do CSS pouze kvůli zkrácení `className`.
- Jednoduchý styling musí zůstat v `className`.
- Složitý styling musí být přesunutý do `@layer components` nebo do slot className API.
- Styling nesmí měnit chování komponenty.
- Hover, focus, active a disabled stavy musí být implementované přes Tailwind utility classes.
- JavaScript a inline styles jsou zakázané pro hover, focus, active a disabled vizuální stavy.
- Tailwind variants jsou povolené pouze pro vizuální stavy UI.
- Povolené state varianty jsou `hover:`, `focus:`, `active:` a `disabled:`.
- Povolené component state varianty jsou `aria-*` a `data-*`, pokud reprezentují stav komponenty nebo Hero UI components.
- Povolené responsive varianty jsou `sm:`, `md:`, `lg:`, `xl:` a `2xl:`.
- Variants mají přednost před CSS, pokud zůstávají čitelné.
- Tailwind variants nesmí reprezentovat business logiku.
- Tailwind variants nesmí simulovat komplexní state logiku, která patří do Reactu.
- React state nesmí být nahrazený CSS-based stavem přes `data-*` nebo `aria-*` atributy pro business podmínky.
- Více než 3 varianty je silný signál ke zjednodušení.
- Pokud variants zhoršují čitelnost → použij `@layer components`.
- Pokud kombinace variant, podmínek nebo dlouhých řetězců znečitelní `className`, styl musí být přesunutý do `@layer components` nebo do slot className API.
- Podmíněné třídy musí používat existující helper v projektu.
- Pokud helper neexistuje, musí být použité jednoduché spojení řetězců bez nové abstrakce.
- Styling musí zůstat co nejblíže místu použití.
- Přepínání mezi JSX a CSS musí být minimalizované.
- Pokud pochopení stylingu vyžaduje otevření více souborů, návrh je chybný.

### Vyhýbej se `tv()` v jednoduchých komponentách

- Nevytvářej variant abstrakci pro komponenty použité pouze na jednom místě.
- Preferuj inline Tailwind utility classes.
- Drž styling blízko místa použití.
- Nepřidávej `tv()` při refactoringu, pokud neexistuje reálný reuse.

### Rozhodování o složitosti

Styling je jednoduchý, pokud:

- používá pouze několik Tailwind utility classes;
- používá maximálně 2–3 varianty na jeden styl;
- je použitý pouze na jednom místě.

Jednoduchý styling musí zůstat přímo v `className`.

Styling je složitý, pokud:

- `className` je dlouhý nebo obtížně čitelný;
- kombinuje více variant, například hover, data nebo responsive varianty;
- opakuje se na více místech.

Složitý styling musí být přesunutý do `@layer components` nebo do slot className API.

---

## Responsive Design

Responzivita musí používat Tailwind breakpoint varianty.

```tsx
// Správně
<div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
  ...
</div>

<aside className="w-full md:w-80 xl:w-96">
  ...
</aside>
```

```tsx
// Špatně
<div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
  ...
</div>
```

### Pravidla

- Povolené breakpointy jsou `sm`, `md`, `lg`, `xl`, `2xl`.
- Mobile-first zápis je povinný.
- Lokální media queries v komponentách jsou zakázané.
- Vlastní media query v CSS je povolená pouze pro globální technický případ, který Tailwind neumí vyjádřit.

---

## Typography

Typografie musí používat sémantické HTML elementy, Tailwind utility classes a design tokens z CSS `@theme`.

```tsx
// Správně
<h1 className="text-2xl font-semibold text-text">Kontakty</h1>
<p className="text-sm text-text-muted">Poslední aktualizace před 5 minutami</p>
```

```tsx
// Špatně
<h1 style={{ fontSize: "24px", fontWeight: 600 }}>Kontakty</h1>
```

### Pravidla

- HTML element musí odpovídat sémantice obsahu.
- Velikost, váha, barva a řádkování musí používat Tailwind utility classes.
- Hero UI components nesmí být použité pouze kvůli stylingu textu.
- Vlastní font hodnoty v komponentách jsou zakázané.

---

## Colors and Modes

Barvy musí vycházet z design tokens.

```tsx
// Správně
<div className="border border-border bg-surface text-text">
  ...
</div>

<p className="text-text-muted">Pomocný text</p>
```

```tsx
// Špatně
<div className="border-[#d9dee7] bg-white text-[#172033]">...</div>
```

### Dark / light mode

Dark a light mode musí používat design tokens, ne lokální podmínky v komponentách.

```css
@theme {
  --color-surface: #ffffff;
  --color-surface-muted: #f6f7f9;
  --color-text: #172033;
}

.dark {
  --color-surface: #161b22;
  --color-surface-muted: #0d1117;
  --color-text: #f0f3f8;
}
```

```tsx
// Správně
<section className="bg-surface text-text">...</section>
```

```tsx
// Špatně
<section
  className={isDark ? "bg-[#161b22] text-[#f0f3f8]" : "bg-white text-[#172033]"}
>
  ...
</section>
```

### Pravidla

- Podmíněné barvy podle mode v JSX jsou zakázané.
- Lokální dark mode pravidla pro jednotlivé komponenty jsou zakázané, pokud design tokens pokrývají požadovaný mode stav.

---

## Hero UI Components

Hero UI components nejsou styling systém.

Hero UI components smí být použité pouze tehdy, když komponenta zajišťuje chování, přístupnost nebo interakci, které HTML + Tailwind utility classes neposkytují.

Pokud jednoduchý HTML element + Tailwind utility classes pokrývá požadavek, musí být použité HTML + Tailwind utility classes řešení.

### Pravidla

- Hero UI components smí být použité pouze tam, kde přinášejí chování, přístupnost nebo interakci.
- Veškerý styling Hero UI components musí jít přes `className` nebo slot className API.
- Slot className API není výchozí styling přístup.
- Slot className API smí být použité pouze tehdy, když mají Hero UI components více stylovatelných částí nebo root `className` nestačí.
- Slot className API nesmí nahrazovat běžné Tailwind utility classes na jednoduchém elementu.
- Vizuální customizace mimo Tailwind utility classes a CSS layers (@theme, @layer base, @layer components) je zakázaná.
- Hero UI vlastní styling API mimo `className` a slot className API je zakázané, pokud stejný výsledek řeší Tailwind.
- Hero UI components nesmí být použité pro layout, wrappers ani spacing containers.
- Hero UI components nesmí být použité pro typografii běžného textu.
- Hero UI components nesmí být použité pro jednoduché UI elementy, jejichž požadavek pokrývá HTML + Tailwind utility classes.
- Použití Hero UI component jako wrapperu pouze kvůli vizuálnímu stylu je zakázané.

```tsx
// Správně
<Button className="rounded-md bg-primary px-3 py-2 text-primary-foreground">
  Uložit
</Button>
```

```tsx
// Špatně
<div style={{ padding: "16px" }}>
  <Button>Uložit</Button>
</div>
```

---

## Customer Configuration

Zákaznická konfigurace smí upravovat pouze design tokens.

Komponentový kód nesmí obsahovat zákaznické styling výjimky.

```css
:root {
  --color-primary: #1976d2;
  --color-primary-hover: #115293;
}

[data-customer="acme"] {
  --color-primary: #ff5722;
  --color-primary-hover: #d84315;
}
```

### Pravidla

- Zákaznické barvy musí mapovat na existující sémantické design tokens.
- Zákaznické styly přímo v React komponentách jsou zakázané.
- Zákaznická konfigurace nesmí být důvod pro hardcoded hodnoty.

---

## File Organization

Styling soubory musí být v této struktuře:

```text
src/
├── app/
│   └── styles/
│       ├── index.css          # Tailwind import, @theme, @layer base
│       └── components.css     # @layer components
└── ...
```

### Pravidla

- Design tokens musí být definované v hlavním CSS vstupu.
- Sdílené komponentové třídy musí být definované v `@layer components`.
- Lokální CSS soubor pro jednu komponentu je zakázaný, pokud Tailwind utility classes pokrývají požadovaný styl bez sdíleného reusable patternu.
- Nový styling adresář smí vzniknout pouze jako součást definované struktury výše.

---

## Naming

Názvy sdílených CSS tříd musí být sémantické, doménové a konzistentní.

Povinný prefix pro sdílené CSS třídy je `app-`.

Prefix `app-` platí pro všechny třídy definované v `@layer components`.

Tailwind utility classes v JSX prefix `app-` nepoužívají.

```css
/* Správně */
.app-panel {
}
.app-toolbar {
}
.app-status-badge {
}
.app-field-grid {
}

/* Špatně */
.blue-box {
}
.large-card {
}
.rounded-card {
}
.rounded-container {
}
.big-title {
}
.gray-wrapper {
}
.wrapper {
}
.container {
}
.box {
}
.content {
}
.item {
}
.section {
}
```

### Pravidla

- Sdílené aplikační třídy definované v `@layer components` musí začínat prefixem `app-`.
- Sdílené CSS třídy bez prefixu `app-` jsou zakázané.
- Prefixy `leo-`, `ui-`, `custom-` a jiné nedefinované prefixy jsou zakázané.
- Nový prefix nesmí vzniknout bez aktualizace tohoto dokumentu.
- Název třídy musí odrážet doménový význam nebo UI odpovědnost.
- Názvy bez doménového významu jsou zakázané.
- Generické názvy `.wrapper`, `.container`, `.box`, `.content`, `.item` jsou zakázané.
- Název `.section` je zakázaný, pokud není doménově specifický.
- Názvy založené na barvě, velikosti, tvaru nebo vizuálním vzhledu jsou zakázané.
- Třída, která pouze skrývá sadu Tailwind utility classes bez reusable významu, je zakázaná.

---

## Forbidden Practices

| Zakázáno                                                        | Povinná alternativa                                                                             |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `style={{ ... }}`                                               | Tailwind utility classes v `className`                                                          |
| CSS-in-JS nebo runtime styling systém                           | Tailwind utility classes v `className` nebo CSS layers (@theme, @layer base, @layer components) |
| Alternativní styling systém                                     | Tailwind CSS v4                                                                                 |
| Hardcoded hex barvy v JSX                                       | Design tokens z CSS `@theme`                                                                    |
| Hardcoded spacing hodnoty v JSX                                 | Tailwind spacing design tokens                                                                  |
| Styling definovaný mimo CSS `@theme` a Tailwind utility classes | CSS `@theme` a Tailwind utility classes                                                         |
| Hero UI components pro běžný layout                             | HTML element s Tailwind utility classes                                                         |
| Hero UI components pro typografii textu                         | Sémantický HTML element s Tailwind typography utility classes                                   |
| Lokální media queries v komponentě                              | Tailwind breakpoint varianty                                                                    |
| Podmíněné barvy pro dark/light mode v JSX                       | Design tokens přepsané podle mode                                                               |
| Komponentová CSS třída pro jednorázový styl                     | Tailwind utility classes přímo v JSX                                                            |
| Nový styling pattern bez dokumentace                            | Existující Decision Tree                                                                        |

### Zakázané příklady

```tsx
// Zakázáno
<div style={{ display: "flex", gap: 8, padding: 16 }} />

// Zakázáno
<div style={{ marginTop: 16, color: "#1976d2" }} />

// Zakázáno
<section className="bg-[#ffffff] p-[16px] text-[#172033]">
  ...
</section>
```

### Správné náhrady

```tsx
// Správně
<div className="flex gap-2 p-2" />

// Správně
<article className="rounded-lg border border-border bg-surface p-4" />

// Správně
<div className="mt-4 text-primary" />

// Správně
<div className="flex flex-col gap-2">
  ...
</div>
```

_Pravidla pro strukturu a komponenty jsou v [`docs/ui-coding-rules.md`](./ui-coding-rules.md)._
