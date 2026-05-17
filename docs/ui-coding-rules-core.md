# UI Coding Rules — Core

Tento dokument definuje, jak dělat rozhodnutí při psaní UI kódu.
Pokud se pravidla dostanou do konfliktu, řiď se prioritou níže.

---

## Priorita pravidel

1. Simplicity first
2. Developer ergonomics (čitelnost, nízká kognitivní zátěž)
3. Správná architektura (FSD, vrstvy)

---

## Simplicity first

- Preferuj co nejjednodušší řešení.
- Nevytvářej abstrakci, pokud nepřináší jasný a okamžitý přínos.
- Preferuj čitelnost před znovupoužitelností.
- Vyhýbej se předčasné abstrakci.
- Jednoduchá duplicita je v pořádku, pokud zlepšuje čitelnost.
- Jednoduchost znamená snižovat počet konceptů, ne jen počet souborů.
- Nevytvářej sdílenou abstrakci bez reálného reuse.
- Pokud se něco používá jen v jedné komponentě, nech to lokální.
- Pokud si nejsi jistý → zvol jednodušší řešení.

---

## Developer ergonomics (DX)

- Drž související logiku pohromadě.
- Minimalizuj přepínání mezi soubory (počet souborů pro pochopení).
- Preferuj čitelnost před strukturou.
- Vyhýbej se zbytečným mezivrstvám.
- Pokud musíš otevřít více než 2–3 soubory → struktura je pravděpodobně špatně.
- Neslučuj logicky oddělené části do jednoho souboru jen kvůli snížení počtu souborů.
- Pokud je soubor příliš dlouhý nebo míchá více odpovědností → rozděl ho.
- Čitelnost má přednost před minimalizací počtu souborů.
- Nevytvářej centrální `variant` nebo `style` soubory pro jednorázové komponenty.
- Pokud pochopení vyžaduje skákání mezi více abstrakčními vrstvami → zjednoduš strukturu.
- Preferuj lokální jasnost před globální abstrakcí.

---

## Simple vs Complex (rozhodovací pravidla)

### Ber jako SIMPLE pokud:

- maximálně jeden API/query (nebo žádný)
- pouze lokální state (`useState`)
- používá se jen na jednom místě
- neobsahuje orchestrace logiku
- má jednu hlavní UI odpovědnost

### Simple neznamená jeden soubor

- Simple komponenty se mají vyhýbat zbytečné abstrakci, ale nemusí být implementované v jednom souboru
- Rozdělení je povolené, když:
  - část má vlastní jasnou odpovědnost
  - zlepšuje čitelnost
  - snižuje kognitivní zátěž
- Typické příklady:
  - ikonová část vs textová část
  - malý vizuální fragment (např. SVG dekorace)
  - jasně oddělená UI odpovědnost
- Neslučuj vše do jednoho souboru, pokud to zhorší čitelnost kódu

→ Postup:

- drž jednoduchou související logiku pohromadě
- drž jednoduchou logiku inline,
  pokud tím netrpí čitelnost nebo oddělení odpovědností
- nevytvářej hooky ani abstrakce

---

### Ber jako COMPLEX pokud:

- více query/mutation
- odvozený stav (derived state)
- více částí UI (toolbar, list, actions…)
- znovupoužitelný use-case

→ Postup:

- rozděl na komponenty
- použij hooky
- aplikuj strukturu

---

### Fallback:

Pokud si nejsi jistý:

- preferuj simple řešení
- ale pokud kód ztrácí čitelnost nebo míchá odpovědnosti → přejdi na complex

---

## Feature hooks

- Feature hooky (business logika) patří do feature layer
- Reprezentují chování (use-case), ne data
- Jsou volitelné

### Vytvářej pouze když:

- skládáš více zdrojů dat
- řešíš side effects
- vytváříš derived state
- jde o znovupoužitelný workflow

### Nevytvářej když:

- jen voláš jeden query hook
- jen přeposíláš data
- jde o jednoduchou lokální logiku

---

## Entities vs Features

- „Co to je?“ → `entities`
- „Co s tím dělám?“ → `features`

### Entities:

- reprezentace dat
- jednoduché read hooky
- žádná orchestrace

### Features:

- chování a workflow
- orchestrace
- feature hooky

---

## Granularita

- Nerozděluj kód automaticky
- Rozděluj pouze pokud:
  - je kód nepřehledný
  - část má vlastní odpovědnost
  - rozděl ho, pokud se část znovu používá nebo dává smysl ji testovat samostatně.

---

## Memoization (React Compiler)

Projekt používá React Compiler.

### Pravidla

- React Compiler je primární mechanismus optimalizace.
- Memoizace NENÍ výchozí přístup.
- Nepoužívej `useMemo`, `useCallback` ani `React.memo` bez jasného důvodu.

### Povolené použití

- `useMemo` pouze pro drahé výpočty (např. práce s velkým datasetem)
- `React.memo` pouze při prokazatelném problému s rendery

### Zakázané použití

- `useMemo` pro jednoduché hodnoty
- `useCallback` pro běžné handlery
- `React.memo` „pro jistotu“

### Heuristika

Pokud nedokážeš jasně zdůvodnit potřebu → memoizaci nepoužívej.

---

## Vyhýbej se zbytečné abstrakci

### Refactoring musí snižovat komplexitu

Při refactoringu existujícího kódu:

- Nereorganizuj abstrakci (např. přesun logiky do `*Variants.ts`, `styles/` nebo podobných souborů).
- Pokud je abstrakce zbytečná → odstraň ji místo přesouvání.
- Preferuj mazání vrstev před zaváděním nových sdílených souborů.

Špatný refactoring:

- přesun inline stylingu do centrálního `variants` souboru bez reálného reuse
- zachování staré abstrakce přes re-exporty místo jejího odstranění
- nahrazení více malých abstrakcí jedním velkým abstrakčním souborem

Správné chování:

- zjednoduš strukturu
- odstraň nepoužité vrstvy
- drž styling blízko použití
- snižuj počet konceptů, ne jen počet souborů

### NE:

- nevytvářej hook pro jednoduchý `useState`
- nevytahuj logiku použitou jednou
- nevytvářej abstrakci pro triviální funkce
- nevytvářej `constants/` pro jednorázové hodnoty
- nevytvářej generická řešení bez reuse
- nevytvářej mezivrstvy bez hodnoty

### Heuristika:

- drž logiku blízko použití

---

## DRY (Rule of 3)

- 1× → napiš inline
- 2× → všimni si patternu
- 3× → abstrahuj

Abstrahuj pouze když:

- má stejnou odpovědnost
- je stabilní pattern
- zlepšuje čitelnost

---

## Reuse pravidla

Použij existující řešení pouze pokud:

- řeší stejný use-case
- má stejnou komplexitu
- má stejné chování

Nepoužívej když:

- je podobnost jen povrchová
- vyžaduje velké úpravy
- zvyšuje komplexitu

---

## API vrstvy

1. API funkce (`api/*Api.ts`)
2. Query hook (`api/use*Api.ts`)
3. Feature hook (volitelný)

- Feature hook není povinný.
- Používá se pouze pro orchestraci (skládání více zdrojů, derived state).
- Komponenta může používat query hook přímo.

---

## Struktura

- Folder struktura je definována v referenčních pravidlech.
- Nevytvářej prázdné nebo triviální složky.
- Struktura roste s komplexitou. **Nezaváděj abstrakci předčasně.**
- Lokální hooky, utility a typy jsou povoleny pro izolovanou logiku.
- **Standalone typové složky nevytvářej bez jasného důvodu.**
- Typy definuj:
  - lokálně (uvnitř komponenty) — UI-only typy, props, malé typy
  - v odpovídající vrstvě — doménové nebo sdílené typy

---

## Soubory

- 1 hlavní odpovědnost na soubor (vodítko)
- Pokud konflikt → preferuj čitelnost před rozdělením

### Struktura komponent

- Výchozí pravidlo: jedna komponenta = jeden soubor
- Výjimka:
  - malé, triviální nebo úzce související komponenty mohou zůstat inline,
    pokud to zlepšuje čitelnost a snižuje počet souborů
- Nenechávej více komponent v jednom souboru, pokud:
  - má vlastní props interface (nejde o triviální fragment)
  - představuje významný UI celek (např. Card, Row, Item)

---

## Pojmenování

- Komponenta: `ContactCard`
- Hook: `useContactList`
- API: `getContacts`, `useGetContactsQuery`

Nepoužívej:

- `Component`, `Page`, `Hook` v názvu

---

## Importy

- Preferuj přímé importy
- `index.ts` používej jen jako veřejné API
- Nepoužívej obecné barrel soubory

---

## Styling

Styling decisions follow Tailwind Styling Rules:
docs/tailwind-styling-rules.md
