# UI Coding Rules — Core

Tento dokument definuje, jak dělat rozhodnutí při psaní UI kódu.
Pokud se pravidla dostanou do konfliktu, řiď se prioritou níže.

---

## Priorita pravidel

1. Simplicity first
2. Developer ergonomics (čitelnost, nízký cognitive load)
3. Správná architektura (FSD, vrstvy)

---

## Simplicity first

- Preferuj co nejjednodušší řešení.
- Nevytvářej abstrakci, pokud nepřináší jasný a okamžitý přínos.
- Preferuj čitelnost před znovupoužitelností.
- Vyhýbej se předčasné abstrakci.
- Jednoduchá duplicita je v pořádku, pokud zlepšuje čitelnost.

---

## Developer ergonomics (DX)

- Drž související logiku pohromadě.
- Minimalizuj „file hopping“ (počet souborů pro pochopení).
- Preferuj čitelnost před strukturou.
- Vyhýbej se zbytečným mezivrstvám.
- Pokud musíš otevřít více než 2–3 soubory → struktura je pravděpodobně špatně.

---

## Simple vs Complex (rozhodovací pravidla)

### Ber jako SIMPLE pokud:

- maximálně jeden API/query (nebo žádný)
- pouze lokální state (`useState`)
- používá se jen na jednom místě
- neobsahuje orchestrace logiku
- má jednu hlavní UI odpovědnost

→ Postup:

- nech vše v jednom souboru
- drž logiku inline
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

Pokud si nejsi jistý → ber jako SIMPLE

---

## Feature hooks

- Feature hook patří pouze do `features/`
- Reprezentuje chování (use-case), ne data

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
  - existuje reuse

---

## Vyhýbej se zbytečné abstrakci

### NE:

- nevytvářej hook pro jednoduchý `useState`
- nevytahuj logiku použitou jednou
- nevytvářej utils pro triviální funkce
- nevytvářej constants pro jednorázové hodnoty
- nevytvářej generická řešení bez reuse
- nevytvářej mezivrstvy bez hodnoty

### Heuristika:

- pokud si nejsi jistý → zvol jednodušší řešení
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

- Feature hook není povinný
- Komponenta může používat query hook přímo

---

## Struktura

- Složky jsou volitelné, ne povinné
- Nevytvářej prázdné nebo triviální složky
- Struktura roste s komplexitou

---

## Soubory

- 1 hlavní odpovědnost na soubor (guideline)
- Pokud konflikt → preferuj čitelnost před rozdělením

### Component structure

- Default: one component = one file
- If unsure, extract the component into its own file
- Do not keep multiple components in one file unless it is a trivial inline UI fragment

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
