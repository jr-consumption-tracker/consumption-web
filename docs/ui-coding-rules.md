# UI Coding Rules — JR Consumptions - Web

Tento dokument je referenční.
Pro rozhodování používej: ui-coding-rules-core.md

Pravidla platí pro `implementer` i `dispatcher`.
Slouží jako závazný standard pro vývojáře i GitHub Copilot.

## Jak používat tato pravidla

Projekt používá dvě vrstvy pravidel:

- **Core rules (ui-coding-rules-core.md)**  
  → používají se pro rozhodování (co udělat)

- **Reference rules (tento dokument)**  
  → používají se pro vysvětlení, příklady a detaily

### Použití

- Pro implementaci a generování kódu → řiď se **core rules**
- Pro hlubší pochopení → používej tento dokument jako referenci
- Při code review → ověřuj rozhodnutí proti core rules

### Fallback

Pokud si nejsi jistý:

- řiď se core rules
- zvol jednodušší řešení
- vyhýbej se zbytečné abstrakci

---

## Obsah

- [Jak používat tato pravidla](#jak-používat-tato-pravidla)
- [Priorita pravidel](#priorita-pravidel)
- [Technologie](#technologie)
- [Struktura monorepa](#struktura-monorepa)
- [Vrstvy aplikace](#vrstvy-aplikace)
- [Struktura slicu](#struktura-slicu)
- [Struktura komponenty](#struktura-komponenty)
- [Feature hooks](#feature-hooks)
- [Granularita](#granularita)
- [Pravidla pro komponenty](#pravidla-pro-komponenty)
- [Simplicity first](#simplicity-first)
- [Developer ergonomics](#developer-ergonomics)
- [Simple vs Complex components](#simple-vs-complex-components)
- [Vyhýbej se zbytečné abstrakci](#vyhýbej-se-zbytečné-abstrakci)
- [Lazy loading pages](#lazy-loading-pages)
- [DRY — Don't Repeat Yourself](#dry--dont-repeat-yourself)
- [Reuse a umístění](#reuse-a-umístění)
- [Pravidla pro TypeScript](#pravidla-pro-typescript)
- [Správa stavu](#správa-stavu)
- [API a data fetching](#api-a-data-fetching)
- [Formuláře a dialogy](#formuláře-a-dialogy)
- [Pojmenování](#pojmenování)
- [Importy](#importy)

---

## Priorita pravidel

1. Simplicity first
2. Developer ergonomics (`čitelnost`, nízká `kognitivní zátěž`)
3. Správná architektura (`FSD`, vrstvy)

Pokud jsou pravidla v konfliktu, řiď se tímto pořadím.

Výchozí chování:

- Pokud si nejsi jistý, preferuj:
  - jednodušší řešení
  - méně vrstev
  - méně abstrakce

---

## Technologie

- React + TypeScript: UI framework, strict mode
- MUI: komponenty a styling, see `docs/mui-styling.md`
- TanStack Router: routing
- TanStack Query: server state
- TanStack Form: formuláře
- Zustand: client state
- Zod: validace a schémata
- pnpm: package manager
- Vizuální muster: `docs/visual-pattern.md`

---

## Struktura monorepa

Projekt je monorepo. Každá aplikace má vlastní `package.json`.

```text
/
├── apps/
│   ├── implementer/
│   └── dispatcher/
├── packages/
│   ├── components/
│   ├── utils/
│   ├── types/
│   ├── hooks/
│   └── validators/
└── package.json
```

- Každý package má jasný název podle obsahu.
- Každá věc má vlastní adresář s `index.ts`.
- Nové packages přidávej podle potřeby.
- Importuj přes veřejné API package.

```ts
import { DataGrid } from "@leo/components";
import { formatDate } from "@leo/utils";
```

---

## Vrstvy aplikace

Používej FSD vrstvy. Importy směřují jen dolů.

```text
app → pages → widgets → features → entities → shared
```

```text
src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
└── shared/
```

### Doménové členění uvnitř vrstev

- `pages/`, `widgets/` a `features/` seskupuj primárně podle business oblasti.
- Nepoužívej zbytečně plochou strukturu u větší aplikace.
- Nemapuj mechanicky backend controllery do UI struktury.
- Nemapuj mechanicky plnou URL hloubku do složek.
- Udržuj rozumnou hloubku adresářů.

### Doporučený příklad struktury

```text
src/
├── pages/administration/operational/partner/
├── widgets/administration/partner/
├── features/administration/operational/partner/
└── entities/
```

### Směr importů

- Každá vrstva může importovat pouze z nižších vrstev.
- Import z vyšší vrstvy je striktně zakázán.
- Nižší vrstvy nesmí importovat z `app/`.
- Slice nesmí importovat jiný slice ze stejné vrstvy přímo.
- Komunikace mezi slicy probíhá přes `index.ts`.

### `app/`

- `app/` obsahuje pouze globální inicializaci.
- Patří sem `layouts/`, `providers/`, `router/`, `localization/`, `styles/`.
- Nepatří sem feature providers, feature layouts ani business logika.

### Role `app/`

- `app/` je composition root aplikace.
- Skládá providers, router a globální konfiguraci.
- Je to nejvyšší vrstva.

### Co patří do `app/`

- globální providers (`QueryClient`, `Theme`, apod.)
- router konfigurace
- globální layouty
- localization a globální styly
- bootstrap aplikace (`App.tsx`, `main.tsx`)

### Co NEpatří do `app/`

- business logika
- reusable komponenty používané nižšími vrstvami
- feature logika nebo use-casy
- hooky určené pro reuse v jiných vrstvách

### Pravidla pro importy

- `app/` může importovat z libovolné nižší vrstvy.
- Žádná jiná vrstva nesmí importovat z `app/`.
- Nepoužívej `app/` jako zdroj znovupoužitelné logiky.

#### Pravidla pro layouts

```text
Obaluje celou aplikaci nebo skupinu stránek? → app/layouts/
Komplexní blok UI používaný na více místech? → widgets/
Specifický pouze pro jednu feature?          → features/<Feature>/
```

#### `main.tsx` a `App.tsx`

- `main.tsx` je čistý entry point.
- Providers, router a theme patří do `App.tsx`.

### `pages/`

- `pages/` jsou routovatelné obrazovky.
- Stránka skládá widgety a připojuje routing context.
- Neobsahuje reusable business logiku ani vlastní API strukturu.
- Logika, která dává smysl i mimo route, patří níž.
- Stránka nemá být zrcadlem backend API.

```tsx
const BasicInformation = () => <PartnerSummaryPanel />;
export default BasicInformation;
```

### `widgets/`

- Widget je větší UI sekce nebo page block.
- Kombinuje více features nebo entit.
- Má vlastní layout a kompozici.
- Business logiku deleguje do `features/` a `entities/`.
- Nekopíruje mechanicky plnou route hloubku.

### `entities/`

- Entita říká, co objekt je a jak vypadá.
- Patří sem reprezentace business objektu, read modely, mappers, selectors, typy, schémata a menší UI reprezentace.
- Mohou zde být jednoduché read hooky jako `usePartner(id)`.
- Neřeší use-case logiku, workflow ani orchestrace více zdrojů.
- Create/edit/delete use-casy obvykle patří do `features/`.

### `features/`

- Feature reprezentuje konkrétní uživatelskou akci nebo use-case.
- Pokud má vlastní API volání, formulář, mutaci, workflow nebo store pro danou akci, patří do `features/`.
- Seskupuj features nejdřív podle domény, potom podle akce.
- Název feature popisuje akci nebo use-case.
- Vizualní blok bez samostatného use-casu patří spíš do `widgets/`.
- Reprezentace business objektu patří spíš do `entities/`.
- Nepoužívej kompletní strukturu jako šablonu pro každou feature.

### Struktura roste s komplexitou

Struktura roste s komplexitou.
Viz [Simple vs Complex components](#simple-vs-complex-components).

### Feature hooks

Feature hook patří výhradně do `features/`.

- Není to povinná vrstva.
- Reprezentuje use-case nebo UI orchestraci.
- Může skládat `api/*Api.ts`, `use*Api.ts`, formulářovou logiku, derived state a side effects.

#### Kdy vytvořit feature hook ve feature slicu

- Když skládáš více API callů, query nebo mutation do jednoho use-casu.
- Když vytváříš odvozený UI stav pro workflow.
- Když řešíš side effects nebo lifecycle logiku feature.
- Když jde o znovupoužitelný use-case.

#### Kdy NEvytvářet feature hook ve feature slicu

- Když pouze voláš jeden query hook.
- Když pouze přeposíláš data bez transformace.
- Když přidáváš jen jednoduchý fallback jako `data ?? []`.
- Když jde o jednoduchý lokální use-case v komponentě.

#### Wrapper hook shape

- query wrapper: `data`, `loading`, `refetch`
- mutation wrapper: `loading`, `mutateAsync`
- `data` má mít bezpečný default podle typu dat.
- `loading` sjednocuj jako `query.isLoading || query.isFetching` nebo `mutation.isPending`.
- `useDeferredValue` používej jen když řeší stabilitu nebo výkon UI.

### Entities vs Features (hooks)

- `entities/`: reprezentace dat a business objektu, jednoduché read hooky
- `features/`: chování nad daty, workflow, orchestrace, kombinace zdrojů

### `shared/`

- `shared/` obsahuje kód bez business logiky.
- Patří sem reusable UI, utility, helpery, base hooky, generic form/table infrastructure a base API.
- Komponenty v `shared/components/` nevolají API ani nepoužívají business store.
- Doménově specifická logika sem nepatří jen proto, že se opakuje.

---

## Struktura slicu

Každý slice dodržuje stejné konvence.

### Hlavní komponenta slicu

- U větších sliců skládá dílčí komponenty.
- U jednoduchých sliců může část lokální UI logiky zůstat přímo v hlavní komponentě.

```text
contactList/
├── components/
├── ContactList.tsx
└── index.ts
```

### `index.ts` jako veřejné API

- `index.ts` je veřejné API slicu nebo komponenty.
- Přímý import ze souboru komponenty zvenku je zakázán.

```ts
export { ContactList } from "./ContactList";
```

---

## Struktura komponenty

- Každá komponenta má vlastní adresář v `camelCase`.
- Soubor komponenty je v `PascalCase`.
- Preferuj jeden soubor = jedna hlavní věc.
- Složky `components/`, `hooks/`, `utils/`, `constants/`, `types/`, `schemas/` jsou volitelné.
- Nevytvářej prázdné nebo triviální složky.

```text
contactCard/
├── hooks/
├── types/
├── constants/
├── utils/
├── ContactCard.tsx
└── index.ts
```

### Jedna komponenta na soubor

Výchozí pravidlo:

- Každá komponenta má být definovaná ve vlastním souboru.
- Výjimky se řídí core rules (ui-coding-rules-core.md).

Zlepšuje to:

- čitelnost
- konzistenci
- udržovatelnost
- předvídatelnost pro AI nástroje

### Povolené výjimky (vzácné)

Komponenta může zůstat ve stejném souboru POUZE pokud:

- jde o velmi malý vložený UI fragment (cca ≤ 10 řádků)
- nemá významné props nebo má pouze triviální props
- nemá reuse potenciál
- nereprezentuje významný UI blok (např. Card, Row, Item)

### Nenechávej komponentu ve stejném souboru, pokud:

- má vlastní props interface
- reprezentuje významný UI element
- obsahuje netriviální JSX
- mohla by být rozumně znovupoužitá
- extrakce zlepšuje srozumitelnost

### Pravidla pro soubory

- Preferuj, aby každý soubor obsahoval jednu hlavní věc.
- Ber to jako vodítko, ne absolutní pravidlo.
- Pokud jsou tato pravidla v konfliktu, preferuj čitelnost a minimalizaci přepínání mezi soubory před striktním oddělením souborů.
- Soubor pojmenuj stejně jako to, co exportuje.
- Složku pojmenuj v `camelCase` podle komponenty nebo use-casu.
- Konstanty používají `SCREAMING_SNAKE_CASE`.
- Pokud vznikne `constants/`, preferuj samostatný soubor pro každou významnou konstantu.
- `utils/`, `hooks/` a `api/` nejsou místo pro definici typů ani konstant.
- Typy patří do `types/`, konstanty do `constants/`.
- Malé, lokální a úzce související věci mohou zůstat v jednom souboru.
- Nerozděluj kód mechanicky jen kvůli struktuře.

## Granularita

Rozhodovací pravidla viz [Simple vs Complex components](#simple-vs-complex-components).

- Nerozděluj kód preventivně jen kvůli struktuře.
- Drž malé, lokální a úzce související části pohromadě, pokud je to čitelnější.
- Rozděl kód do více souborů pouze pokud tím roste čitelnost.
- Rozděl ho, pokud je logika větší nebo nepřehledná.
- Rozděl ho, pokud má část samostatnou odpovědnost.
- Rozděl ho, pokud se část znovu používá nebo dává smysl ji testovat samostatně.
- Neslučuj vše do jednoho souboru jen kvůli simplicity pravidlům.
- Vyvažuj jednoduchost s čitelností a oddělením odpovědností.
- Snížení počtu souborů není cíl.
- Snížení komplexity je cíl.
- Nenahrazuj více malých problémů jednou velkou abstrakcí.
- Konkrétní zákazy zbytečné abstrakce viz [Vyhýbej se zbytečné abstrakci](#vyhýbej-se-zbytečné-abstrakci).

---

## Pravidla pro komponenty

### Arrow funkce, žádné React.FC

- Komponenty jsou vždy arrow funkce.
- Nepoužívej `React.FC`.
- Props definuj přímo v parametrech komponenty.

```tsx
export const ContactCard = ({ contact }: ContactCardProps) => (
  <div>{contact.name}</div>
);
```

### Named export vs default export

- Komponenty, hooky a utility používají named export.
- Pages používají default export.
- See also [Lazy loading pages](#lazy-loading-pages).

```tsx
const Contacts = () => <ContactList />;
export default Contacts;
```

### ref jako běžná prop

- Projekt používá React 19.
- `ref` je běžná prop.
- `forwardRef` nepoužívej.

### Lazy loading pages

- Použij u větších stránek a stránek, které se nezobrazují hned po startu.
- Nepoužívej ho automaticky u malé jednoduché stránky nebo první obrazovky typu login.
- Preferuj nativní lazy loading TanStack Routeru.

```tsx
export const Route = createLazyRoute("/contacts")({ component: Contacts });
```

### displayName

- Přidávej `displayName` pouze u HOC.
- U běžných komponent a komponent s `ref` propou není potřeba.

### Memoizace

- Projekt používá React Compiler.
- Memoizaci nepoužívej plošně.
- `useMemo` používej pro drahé výpočty nebo stabilní provider value.
- `React.memo` jen při prokazatelném problému s rendery.
- `useCallback` nepoužívej bez reálného důvodu.

```tsx
const groupedRows = useMemo(() => groupLargeDataset(rows), [rows]);
```

### Simplicity first

- Preferuj nejjednodušší implementaci, která správně řeší use-case.
- Preferuj jednoduchost před chytrou abstrakcí.
- Nezaváděj abstrakci, pokud nepřináší jasný a okamžitý přínos.
- Simplicity first má vyšší prioritu než strukturální konvence.

### Developer ergonomics

Developer ergonomics je praktická aplikace pravidla Simplicity first.

- Drž kontext pohromadě.
- Minimalizuj přepínání mezi soubory.
- Preferuj čitelnost před strukturou.
- Vyhýbej se zbytečné nepřímosti.
- Neopakuj stejnou logiku ve více vrstvách, pokud to nepřidává jasnou hodnotu.
- Pokud pro pochopení komponenty potřebuješ více než `2–3` soubory, zvaž zjednodušení struktury.

### Single Responsibility

- Každá komponenta, hook, util a soubor má mít jednu hlavní odpovědnost.
- Ber to jako vodítko pro přehlednost, ne důvod k mechanickému rozsekávání kódu.

#### Hlavní komponenta je orchestrátor

- U komplexních feature, widgetů a větších UI celků hlavní komponenta primárně skládá sub-komponenty.
- U menších komponent může jednoduchá UI logika zůstat přímo v komponentě.
- Nevytvářej mikro-komponentu jen kvůli několika řádkům JSX.
- Novou komponentu vytvářej až když má samostatnou UI odpovědnost, vlastní props kontrakt, vlastní podmíněné renderování nebo reuse.
- Stejné pravidlo platí i pro styled wrappery.

### Simple vs Complex components

Tato sekce je zdroj pravdy pro rozhodovací pravidla.

#### Simple komponenta

- Může mít lokální state.
- Může mít jednoduché handlery.
- Může mít krátké mapování nebo odvození dat pro render.

#### Simple neznamená jeden soubor

- Simple komponenty mají zůstat jednoduché, ale nemusí být nutně v jednom souboru.
- Rozděl je, když to zlepší čitelnost nebo oddělí odpovědnost.
- Vyhýbej se oběma extrémům:
  - přílišné rozdělování
  - přílišné slučování

#### Complex komponenta

- Řeší více odpovědností nebo větší UI celek.
- Obsahuje komplexní React logiku, side effects nebo znovupoužitelný use-case.
- Kombinuje více částí UI nebo více zdrojů dat.

#### Jak rozhodnout

Ber komponentu jako `SIMPLE`, pokud:

- používá maximálně jeden query nebo API call, případně žádný
- obsahuje pouze lokální UI state jako `useState`
- není znovupoužitelná napříč více částmi aplikace
- neobsahuje komplexní logiku nebo orchestrace
- má jeden hlavní UI celek

Pro simple komponentu:

- nepoužívej orchestrator pattern
- nerozděluj ji do více souborů bez důvodu
- pro rozhodovací pravidla feature hooků viz [Feature hooks](#feature-hooks)

Ber komponentu jako `COMPLEX`, pokud:

- skládá více query nebo mutation dohromady
- obsahuje orchestrace logiku jako kombinace dat nebo derived state
- má více nezávislých částí UI
- je znovupoužitelná nebo představuje samostatný use-case

Pro complex komponentu:

- můžeš použít orchestrator pattern
- můžeš ji rozdělit do více souborů
- pro rozhodovací pravidla feature hooků viz [Feature hooks](#feature-hooks)

Pokud si nejsi jistý, ber komponentu jako simple.

#### Drž logiku blízko použití

- Logiku drž co nejblíže místu použití.
- Jednoduchá, jednorázová logika může zůstat v komponentě.
- Přesun do `hooks/`, `utils/` nebo sub-komponenty má smysl až když tím roste srozumitelnost, reuse nebo testovatelnost.

#### Logika a hooky

- Hook není defaultní místo pro logiku.
- Použij ho při složitosti, side effects nebo reuse.
- Čisté výpočty a transformace bez React závislostí patří do `utils/`, pokud jsou samostatné nebo znovupoužitelné.
- Krátké a lokální výpočty mohou zůstat v komponentě.
- Do `hooks/` nepatří typy ani konstanty.
- Viz [Vyhýbej se zbytečné abstrakci](#vyhýbej-se-zbytečné-abstrakci) a [Feature hooks](#feature-hooks).

## Vyhýbej se zbytečné abstrakci

Tato sekce je source of truth pro pravidla kdy neabstrahovat.

- Abstrakce musí mít jasný důvod: `reuse`, komplexita nebo oddělení odpovědnosti.
- Pokud tento důvod neexistuje, zvol jednodušší implementaci.

### Nereorganizuj abstrakci při refactoringu

- Refactoring má kód zjednodušit, ne přesunout komplexitu jinam.
- Nevytvářej `variants`, `styles` nebo podobné soubory bez reálného reuse.
- Preferuj odstranění abstrakce před její restrukturalizací.

### Vyhýbej se předčasné abstrakci

- Neabstrahuj při prvním výskytu.
- Neabstrahuj při druhém výskytu bez jistoty stabilního patternu.
- Neabstrahuj pro budoucí použití.
- Neabstrahuj jen proto, že se kód podobá.

### Nedělej

- Nevytvářej custom hook pro jednoduchý lokální state.
- Nevytahuj krátkou logiku do hooku, pokud je použitá na jednom místě.
- Nevytvářej `utils/` pro jednu krátkou funkci.
- Nevytvářej `constants/` pro jednorázovou hodnotu bez doménového významu.
- Nevytvářej `types/` pro triviální lokální typ.
- Nevytvářej generické řešení bez reálného reuse.
- Nevytvářej mezivrstvy jako feature hook, pokud jen přeposílají data.

### Kdy neabstrahovat

- Neabstrahuj krátkou inline logiku.
- Neabstrahuj jednorázový use-case.
- Neabstrahuj, když je podobnost pouze povrchová.
- Neabstrahuj, když by abstrakce zhoršila čitelnost.

### Existující patterny používej opatrně

- Použij existující pattern jen pokud odpovídá stejnému use-casu, stejné úrovni komplexity a stejnému účelu i chování.
- Nepoužívej existující pattern pro jiný use-case.
- Nepoužívej ho, když má výrazně vyšší komplexitu než potřebuješ.
- Nepoužívej ho, když vyžaduje výrazné přizpůsobení.
- Nepoužívej ho, když by zhoršil čitelnost.

### Heuristika

- Pokud si nejsi jistý, zvol jednodušší řešení.
- Nech logiku co nejblíže místu použití.
- Abstrahuj až ve chvíli, kdy vznikne reálný problém.

#### Kam co patří

- Jednoduchý lokální state a UI handlery: přímo v komponentě
- Komplexní React orchestrace a side effects: `hooks/use<NázevKomponenty>.ts`
- Čisté výpočty a transformace dat: `utils/` nebo přímo v komponentě
- Konstanty: `constants/`
- TypeScript typy: `types/`

#### Zákaz inline funkcí v JSX

- Nepoužívej inline arrow funkce mechanicky.
- U běžných handlerů preferuj pojmenovanou funkci.
- Krátké a jednorázové inline callbacky jsou přijatelné, pokud nezhoršují srozumitelnost.

```tsx
return <input onChange={(e) => setValue(e.target.value)} />;
```

#### Konstanty a utility patří mimo komponentu

- Konstanty a utility vytahuj mimo komponentu, pokud jsou samostatné nebo znovupoužitelné.
- U jednoduchého lokálního případu mohou krátké helpery a malé konstanty zůstat přímo v komponentě.
- Hodnota použitá jednou zůstává inline.
- Konstantu vytvářej až když se hodnota opakuje nebo má doménový význam.
- `utils/` neobsahuje typy ani konstanty.
- Při vytváření nebo úpravě utility vytvoř nebo aktualizuj JSDoc.

### Props interface

- Každá komponenta má explicitní props interface `<NázevKomponenty>Props`.
- Pokud není sdílená, může zůstat v souboru komponenty.

---

## DRY — neopakuj se

Tato sekce je source of truth pro pravidla kdy abstrahovat.

- Nejdřív navrhni správné lokální řešení.
- DRY neznamená automatickou abstrakci.
- Viz [Vyhýbej se zbytečné abstrakci](#vyhýbej-se-zbytečné-abstrakci).

### Rule of 3

- Při prvním výskytu napiš jednoduché lokální řešení.
- Při druhém výskytu si všimni opakování, ale ještě neabstrahuj automaticky.
- Až při třetím výskytu zvaž sdílení, pokud jde o stejný pattern se stejnou odpovědností.
- Preferuj malou duplicitu před příliš obecnou abstrakcí.

### Kdy abstrahovat

- Abstrahuj když se logika opakuje alespoň 3×.
- Abstrahuj když má stejný význam a odpovědnost.
- Abstrahuj když pro ni umíš navrhnout smysluplné a stabilní API.
- Abstrahuj když tím roste čitelnost.

---

## Reuse a umístění

- Když se rozhodneš abstrahovat nebo něco sdílet, nejdřív určuj co je skutečně znovupoužitelné a kam to patří.

### Kde hledat než začneš vytvářet

```text
1. Ve stejné komponentě nebo feature kde pracuješ
2. V shared/ dané aplikace
3. V packages/ monorepa
```

### Reuse napříč doménami

- Generické UI patří do `shared/`.
- Reprezentace business objektu patří do `entities/`.
- Skutečně znovupoužitelný use-case může vzniknout jako samostatný feature slice jen pokud má ve všech kontextech stejný business význam.
- Reuse mezi doménami řeš primárně přes `shared/` nebo `entities/`.
- Vyhýbej se silnému cross-domain coupling.

### Kde sdílet komponentu

```text
Pouze v jedné feature?                 → features/<Feature>/components/
Ve více features nebo widgetech?      → shared/components/
Ve více aplikacích?                   → packages/components/
```

### Kde sdílet hook

```text
Pouze v jedné feature?            → features/<Feature>/hooks/
Ve více features v jedné appce?   → shared/hooks/
Ve více aplikacích?               → packages/hooks/
```

### Kde sdílet util, konstantu, typ

```text
Specifické pro jednu komponentu?  → komponenta
Sdílené v rámci feature?          → features/<Feature>/utils|constants|types/
Sdílené v rámci aplikace?         → shared/utils|constants|types/
Sdílené napříč aplikacemi?        → packages/utils|types|validators/
```

---

## Pravidla pro TypeScript

- Projekt používá TypeScript v strict módu.
- `any` je zakázáno.

```ts
const data: Contact[] = fetchData();
```

### Typy a modely

- Platí pro `type`, `interface` i utility typy.
- Sdílené, větší nebo samostatně významné typy přesouvej do `types/`.
- Jednoduchý lokální typ může zůstat v souboru komponenty nebo hooku.
- Typy se nedefinují v `utils/`, `api/` ani `hooks/`.
- Pokud je typ v `types/`, preferuj vlastní soubor pro samostatně významnou definici.
- Nesekej mechanicky jednoduché a úzce související typy.
- Typy pro komponentu nebo hook patří do jejich `types/`.
- Typy sdílené v rámci feature patří do `types/` feature slicu.
- Globální typy patří do `shared/types/`.
- `Props interface` komponenty může být přímo v souboru komponenty, pokud není sdílená.

**Enums nepatří do `types/`.**

- Enum je runtime hodnota.
- Patří do `enums/` na příslušné úrovni nebo do `@leo/enums`.

### Zod schémata

- Používej Zod pro validaci API dat i formulářů.
- Typy odvozuj pomocí `z.infer`.

```ts
export type Contact = z.infer<typeof contactSchema>;
```

---

## Správa stavu

- Data ze serveru: TanStack Query
- Lokální UI stav komponenty: `useState`
- Sdílený client state napříč komponentami: Zustand

### Zustand store

- Každá feature má vlastní store v `store/`.
- Store řeší pouze client state.
- Nikdy neukládá data ze serveru.

---

## API a data fetching

Používej tento pattern:

1. `shared/api/axiosMainApi`
2. `features/<Feature>/api/*Api.ts`
3. `features/<Feature>/api/use*Api.ts`
4. `features/<Feature>/hooks/use*.ts` _(volitelné)_

### Pravidla

- `axiosMainApi` patří pouze do `shared/api/`.
- Endpoint funkce patří do `api/*Api.ts`.
- TanStack Query patří do `api/use*Api.ts`.
- Hooky ve `features/<Feature>/hooks` nevolají Axios napřímo.
- V `hooks/` neduplikuj endpointy ani query definice.
- V `api/` nedefinuj typy ani konstanty.
- `hooks/` je volitelné a nemá se vytvářet automaticky. Hooky používej pouze tehdy, když přidávají reálnou hodnotu. Viz sekce [Feature hooks](#feature-hooks).
- Pojmenování: viz [Pojmenování](#pojmenování).

### Příklad struktury

```text
features/requestManagement/contactList/
├── api/
│   ├── contactsApi.ts
│   └── useContactsApi.ts
└── hooks/
```

---

## Formuláře a dialogy

- Formuláře používají TanStack Form + Zod.
- Řiď se `docs/forms-guide.md`.
- Nevytvářej vlastní formulářové patterny.

---

## Pojmenování

### Komponenty podle vrstvy

- Název komponenty popisuje co dělá nebo co reprezentuje.
- Název nesmí obsahovat vrstvu: `Page`, `Widget`, `Component`, `Hook`.
- `pages/`: entita nebo oblast
- `widgets/`: entita + co zobrazuje
- `features/`: entita + akce nebo funkce
- `shared/components/`: název UI elementu

### Pojmenování složek podle domény

- Složky uvnitř `pages/`, `widgets/` a `features/` pojmenovávej podle business oblasti a use-casu.
- Nepoužívej backend controllery jako hlavní naming UI struktury.
- Nemapuj mechanicky plnou route strukturu do názvů složek.

### Konvence pro názvy složek

- Všechny složky pojmenovávej konzistentně pomocí `camelCase`.
- Nezaváděj `snake_case`.
- Nezaváděj `kebab-case`.
- Nemíchej více konvencí v jedné aplikaci.
- Jednoslovné názvy vrstev a technických adresářů zůstávají lowercase.
- Doménové a use-case složky používají tvary jako `basicInformation/`, `summaryPanel/`, `editBasicInformation/`, `eventType/`.

### Pravidla pro názvy komponent

- Seznam: entita + `List` nebo `Table`
- Jeden záznam: entita + popis
- Formulář: entita + `Form`
- Create/edit rozlišuj přes props, ne názvem

```tsx
export const ContactForm = () => null;
```

### Ostatní konvence pojmenování

- Komponenta: `PascalCase`
- Soubor komponenty: `PascalCase`
- Hook: `camelCase` s `use` prefixem, klasická `function` deklarace
- `api/*Api.ts` soubor: `camelCase` podle controlleru nebo endpoint skupiny
- Funkce v `api/*Api.ts`: `camelCase` podle backend operace
- `api/use*Api.ts` hook: `use` + backend operace + `Query/Mutation`
- Store: `camelCase` s `use` prefixem
- Zod schéma: `camelCase` s `Schema` suffixem
- TypeScript typ/interface: `PascalCase`
- Soubor s typy: `PascalCase`
- Utility funkce: `camelCase`
- Složka slicu/komponenty: `camelCase`
- Složka vrstvy: `lowercase`
- Složky uvnitř slicu: lowercase pro technické adresáře

### Pojmenování pro `api`, `useApi` a `hooks`

Viz [Feature hooks](#feature-hooks).

- `api/*Api.ts` obsahuje pouze nízkoúrovňové funkce pro volání endpointů.
- `api/use*Api.ts` obsahuje pouze TanStack Query hooky nad konkrétními API funkcemi.
- `hooks/` je volitelná vrstva.
- Vyšší UI/business hooky pojmenovávej podle use-casu, ne nutně podle názvu endpointu.
- Pokud helper neodpovídá jednomu endpointu, nesmí určovat hlavní naming pattern pro API vrstvu.

---

## Importy

- Importy organizuj ve třech skupinách: externí knihovny, interní moduly, relativní importy.
- Používej path aliasy definované v `tsconfig.json`.
- Relativní cesty delší než 2 úrovně (`../../..`) jsou zakázány.

```ts
import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@shared/api";

import { ContactCard } from "./components/ContactCard";
```

### Barrel vs. path import

- `index.ts` slouží jako veřejné API slicu.
- Nepoužívej obecné barrel soubory re-exportující více nesouvisejících modulů.
- Importuj přímo z konkrétního souboru, pokud nejde o veřejné API slicu nebo externí package.
- Importy z externích packages a interních monorepo packages používej přes jejich veřejné API.

```ts
import { DataGrid } from "@leo/components";
```

---

_Pravidla pro stylování pomocí MUI jsou v samostatném dokumentu: [`docs/mui-styling.md`](./mui-styling.md)_

---

## Styling

Styling decisions follow Tailwind Styling Rules:
docs/tailwind-styling-rules.md
