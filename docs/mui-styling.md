# Styling Rules — Consumptions

## Scope

Tento dokument je jediný zdroj pravdy pro styling v projektu.

Pravidla platí pro:

- vývojáře
- GitHub Copilot
- všechny AI agenty

Porušení těchto pravidel je implementační chyba.

---

Tento dokument definuje závazná pravidla pro stylování React aplikace.
Slouží jako standard pro vývojáře i jako instrukce pro GitHub Copilot.

---

## Styling Philosophy

Tato sekce je primární zdroj pravidel pro rozhodování o stylingu.

Tailwind CSS v4 je primární styling systém projektu.

CSS `@theme` je zdroj design tokens.

Hero UI component library neurčuje styling architekturu projektu.

Styling musí vznikat pouze přes hierarchii níže. Jakýkoliv jiný styling přístup je implementační chyba.

### Povinná hierarchie

1. **Tailwind utility classes** pro layout, spacing, barvy, typografii, stavy a responzivitu.
2. **CSS layers (@theme, @layer base, @layer components)** pro opakované UI patterny.
3. **Hero UI components `className` / slot className API** pouze pro stylování použitých Hero UI components.
4. **CSS layers (@theme, @layer base, @layer components)** jako jediný sdílený styling základ.

---

## Technologie a role

| Technologie             | Role                                      |
| ----------------------- | ----------------------------------------- |
| Tailwind CSS v4         | Primární styling systém                   |
| CSS `@theme`            | Design tokens                             |
| CSS `@layer base`       | Základní globální styly                   |
| CSS `@layer components` | Znovupoužitelné aplikační třídy           |
| Hero UI component library | Hero UI component library, ne styling systém |

---

## Decision Tree

Použij tento rozhodovací strom vždy, když přidáváš nebo měníš styly.

Tailwind utility classes jsou výchozí řešení pro veškerý styling. Každé styling rozhodnutí musí začít u Tailwind utility classes.

```text
Potřebuješ layout, spacing, barvu, velikost, typografii nebo stav?
→ Musíš použít Tailwind utility classes přímo v className.

Tailwind utility classes nepokrývají požadavek bez duplicity, protože se stejný vizuální pattern opakuje na více místech?
→ Musíš vytvořit pojmenovanou třídu v CSS layers (@theme, @layer base, @layer components).

Tailwind utility classes na root elementu nepokrývají požadavek, protože styluješ Hero UI components se sloty?
→ Musíš ji stylovat přes className nebo slot className API.

Nejde požadavek vyřešit žádným pravidlem výše?
→ Musíš zastavit implementaci a ověřit návrh. Nesmíš vytvořit nový styling pattern.
```

### Rychlá pravidla

| Situace                           | Povinné řešení               |
| --------------------------------- | ---------------------------- |
| Lokální layout komponenty         | Tailwind utility classes v `className` |
| Lokální spacing                   | Tailwind spacing design tokens |
| Lokální barvy                     | Tailwind color design tokens |
| Lokální responzivita              | Tailwind breakpoint varianty |
| Lokální hover/focus/disabled stav | Tailwind state varianty      |
| Opakovaný aplikační pattern       | CSS layers (@theme, @layer base, @layer components) |
| Hero UI components                | `className` / slot className API |

---

## Design Tokens

Design tokens žijí v CSS `@theme`.

CSS `@theme` definuje design systém. JavaScript nesmí definovat ani duplikovat design tokens.

Design tokens jsou globální, centralizované hodnoty. Komponenty nesmí vytvářet vlastní lokální design hodnoty ani lokálně přepisovat design tokens.

### Single Source of Truth

CSS `@theme` je jediný zdroj pravdy pro design tokens.

Tailwind utility classes musí mapovat na design tokens definované v CSS `@theme`.

Komponenty nesmí definovat vlastní design hodnoty pro barvy, spacing, typografii, radius, shadow, z-index ani další vizuální vlastnosti.

JavaScript nesmí být zdroj design tokens.

Duplikování design token values mimo CSS `@theme` je zakázané.

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

### Pravidla pro design tokens

- Nový design token přidej pouze pro hodnotu, která je součástí design systému.
- Jednorázovou hodnotu nejdřív nahraď existujícím design token.
- Barvy, fonty, radiusy, shadow hodnoty a z-index hodnoty nesmí být hardcoded v JSX.
- Arbitrary values používej pouze pro technické hodnoty, které nejsou design tokens, například `grid-cols-[auto_1fr]`.
- Nepřidávej design token kvůli jednomu lokálnímu případu bez opakování nebo designového významu.

---

## CSS layers (@theme, @layer base, @layer components)

CSS layers (@theme, @layer base, @layer components) jsou jediné místo pro sdílené a znovupoužitelné styly.

```css
@import "tailwindcss";

@theme {
  /* design tokens */
}

@layer base {
  /* základní globální styly */
}

@layer components {
  /* znovupoužitelné aplikační komponentové třídy */
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

- Definuj design token v CSS `@theme`, pokud má být dostupný přes Tailwind utility classes.
- Používej sémantické názvy: `surface`, `border`, `text-muted`, `primary`, `error`.
- Nepoužívej názvy odvozené pouze od barvy: `blue`, `gray`, `red`.
- Nepřepisuj design token lokálně v komponentě.

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

- Upravuj pouze elementy, které mají platit globálně v celé aplikaci.
- Nepřidávej komponentové styly do `@layer base`.
- Nepřidávej layout konkrétních obrazovek do `@layer base`.
- Nepoužívej `@layer base` jako náhradu za komponentové třídy.

---

## `@layer components`

`@layer components` slouží pro opakované aplikační patterny.

`@layer components` není výchozí styling přístup. Je to sekundární nástroj pro reuse a abstrakci.

Vytvoř komponentovou CSS třídu pouze tehdy, když se stejný pattern používá na dvou nebo více místech a má doménovou nebo reusable odpovědnost.

Nadměrné používání komponentových tříd je design problém. Skrývá styling logiku mimo JSX, ruší výhody Tailwind utility classes a snižuje čitelnost i udržovatelnost.

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

  .app-status-badge[data-status="error"] {
    @apply border-error/20 bg-error/10 text-error;
  }
}
```

```tsx
// Správně
<main className="app-page">
  <section className="app-panel">
    <div className="app-toolbar">...</div>
  </section>
</main>
```

### Pravidla

- Třídy v `@layer components` musí mít stabilní pojmenování.
- Používej projektový prefix pro sdílené aplikační třídy.
- Používej `@apply` pouze pro skládání existujících Tailwind utility classes.
- Nepiš do `@layer components` jednorázové styly konkrétní stránky.
- Nepoužívej komponentovou třídu, pokud styl nereprezentuje sdílený reusable pattern.

### Kdy `@layer components` nepoužívat

Komponentovou CSS třídu nesmíš vytvořit, pokud:

- je použitá pouze na jednom místě;
- styl nereprezentuje sdílený reusable pattern;
- třída nereprezentuje doménový pattern pojmenovaný podle UI odpovědnosti;
- třída nereprezentuje reusable pattern;
- třída pouze skrývá běžné Tailwind utility classes bez snížení skutečné duplicity.

---

## Tailwind Utility Classes in JSX

Tailwind utility classes jsou výchozí způsob stylování komponent.

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

- Používej `className` pro všechny běžné styly.
- Drž Tailwind utility classes lokálně u elementu, dokud styl nereprezentuje sdílený reusable pattern.
- Vytvoř komponentovou třídu v `@layer components`, pokud se stejný pattern opakuje na dvou nebo více místech.
- Pro podmíněné třídy používej existující helper v projektu. Pokud helper neexistuje, použij jednoduché spojení řetězců bez nové abstrakce.

---

## Responsive Design

Responzivitu řeš přes Tailwind breakpoint varianty.

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

- Používej Tailwind breakpointy: `sm`, `md`, `lg`, `xl`, `2xl`.
- Mobile-first je povinný přístup.
- Nepiš vlastní media queries v komponentách.
- Vlastní media query v CSS je povolená pouze pro globální technický případ, který Tailwind neumí vyjádřit.

---

## Typography

Typografii řeš přes sémantické HTML elementy, Tailwind utility classes a design tokens z CSS `@theme`.

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

- Používej HTML element podle sémantiky obsahu.
- Používej Tailwind utility classes pro velikost, váhu, barvu a řádkování.
- Nepoužívej Hero UI component library pouze kvůli stylingu textu.
- Nepiš vlastní font hodnoty v komponentách.

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

Dark a light mode řeš přes design tokens, ne přes lokální podmínky v komponentách.

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

- Nepodmiňuj barvy podle mode v JSX.
- Nepřidávej lokální dark mode pravidla pro jednotlivé komponenty, pokud design tokens pokrývají požadovaný mode stav.

---

## Hero UI Component Library

Hero UI component library smí být použitá pouze v případech definovaných níže.

Hero UI component library není styling systém. Tailwind je vždy odpovědný za styling. Použití Hero UI component library místo Tailwindu pro styling je implementační chyba.

Hero UI component library smí být použitá pouze tehdy, když komponenta zajišťuje chování, přístupnost nebo interakci, které HTML + Tailwind utility classes neposkytují. Pokud jednoduchý HTML element + Tailwind utility classes pokrývá požadavek, musí být použité HTML + Tailwind utility classes řešení.

### Pravidla

- Hero UI components smí být použité pouze tam, kde Hero UI component library přináší chování, přístupnost nebo hotovou interakci.
- Veškerý styling Hero UI components musí jít přes `className` nebo slot className API.
- Vizuální customizace mimo Tailwind utility classes a CSS layers (@theme, @layer base, @layer components) je zakázaná.
- Hero UI component library-specific styling mechanismy jsou zakázané, pokud stejný výsledek řeší Tailwind.
- Hero UI components nesmí být použité pro layout, wrappers ani spacing containers.
- Hero UI components nesmí být použité pro typografii běžného textu.
- Hero UI components nesmí být použité pro jednoduché UI elementy, jejichž požadavek pokrývá HTML + Tailwind utility classes.
- Hero UI component wrapper pouze kvůli vizuálnímu stylu je zakázaný.

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

Zákaznická konfigurace musí upravovat design tokens, ne komponentový kód.

Primární forma konfigurace je design token konfigurace načtená do CSS `@theme`.

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

- Zákaznické barvy mapuj na existující sémantické design tokens.
- Nepřidávej zákaznické styly přímo do React komponent.
- Nepoužívej zákaznickou konfiguraci jako důvod pro hardcoded hodnoty.

---

## File Organization

Styling soubory musí být v definované struktuře níže.

```text
src/
├── app/
│   └── styles/
│       ├── index.css          # Tailwind import, @theme, @layer base
│       └── components.css     # @layer components
└── ...
```

### Pravidla

- Design tokens definuj v hlavním CSS vstupu.
- Sdílené komponentové třídy drž v CSS layers (@theme, @layer base, @layer components).
- Nevytvářej lokální CSS soubor pro jednu komponentu, pokud Tailwind utility classes pokrývají požadovaný styl bez sdíleného reusable patternu.
- Nový styling adresář smí vzniknout pouze jako součást definované struktury výše.

---

## Naming

Názvy tříd musí být sémantické, doménové a konzistentní.

Název třídy musí popisovat účel, roli nebo UI odpovědnost. Název třídy nesmí popisovat vzhled.

Všechny sdílené třídy v `@layer components` musí používat projektový prefix `app-`.

Povinný prefix pro sdílené CSS třídy je `app-`. Toto pravidlo platí pro všechny třídy definované v `@layer components`.

Všechny reusable nebo sdílené CSS třídy musí začínat prefixem `app-`. Sdílená CSS třída bez prefixu `app-` je neplatná.

Tailwind utility classes v JSX prefix `app-` nepoužívají. Prefix `app-` se vztahuje pouze na sdílené CSS třídy definované v `@layer components`.

Míchání prefixů je zakázané. Prefixy jako `leo-`, `ui-`, `custom-` nebo jiný nový prefix nesmí být použité bez aktualizace tohoto dokumentu.

Class names without domain meaning are forbidden.

Třída musí reprezentovat reusable koncept. Nevytvářej třídy, které pouze seskupují styly bez doménového nebo UI odpovědnostního významu.

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

- Název třídy musí odrážet doménový význam nebo UI odpovědnost.
- Sdílené aplikační třídy definované v `@layer components` musí začínat prefixem `app-`.
- Sdílené CSS třídy bez prefixu `app-` jsou zakázané.
- Tailwind utility classes v JSX nesmí dostávat projektový prefix.
- Prefixy `leo-`, `ui-`, `custom-` a jiné nedefinované prefixy jsou zakázané.
- Názvy bez doménového významu jsou zakázané.
- Generické názvy `.wrapper`, `.container`, `.box`, `.content`, `.item` jsou zakázané.
- Název `.section` je zakázaný, pokud není doménově specifický.
- Názvy založené na barvě, velikosti, tvaru nebo vizuálním vzhledu jsou zakázané.
- Zakázané jsou názvy jako `.blue-box`, `.large-card`, `.rounded-container`, `.rounded-card`, `.big-title`.
- Nevytvářej třídu, která pouze skrývá sadu Tailwind utility classes bez reusable významu.

---

## Forbidden Practices

Následující praktiky jsou zakázané.

| Zakázáno                                    | Povinná alternativa                           |
| ------------------------------------------- | --------------------------------------------- |
| `style={{ ... }}`                           | Tailwind utility classes v `className`        |
| CSS-in-JS nebo runtime styling systém       | Tailwind utility classes v `className` nebo CSS layers (@theme, @layer base, @layer components) |
| Alternativní styling systém                 | Tailwind CSS v4                               |
| Hardcoded hex barvy v JSX                   | Design tokens z CSS `@theme`                 |
| Hardcoded spacing hodnoty v JSX             | Tailwind spacing design tokens                |
| JavaScript jako primární styling zdroj      | CSS `@theme` a CSS layers (@theme, @layer base, @layer components) |
| Hero UI component library pro běžný layout  | HTML element s Tailwind utility classes       |
| Hero UI component library pro typografii textu | Sémantický HTML element s Tailwind typography utility classes |
| Lokální media queries v komponentě          | Tailwind breakpoint varianty                  |
| Podmíněné barvy pro dark/light mode v JSX   | Design tokens přepsané podle mode             |
| Komponentová CSS třída pro jednorázový styl | Tailwind utility classes přímo v JSX          |
| Nový styling pattern bez dokumentace        | Existující rozhodovací strom                  |

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
