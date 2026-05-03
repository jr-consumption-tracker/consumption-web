# Visual Pattern

Tento dokument definuje výchozí vizuální směr pro nově přidávané komponenty v aplikacích D3S CRM Leo.

Hlavní referenční obrazovka:
- stránka `Profil` v aplikaci `implementer`

Tento pattern navazuje na:
- `docs/ui-coding-rules.md`
- `docs/mui-styling.md`

## Cíl

Nové komponenty mají působit jako součást jednoho systému:
- klidná vizuální hierarchie
- konzistentní spacing a radius
- čitelné card layouty
- střídmá práce s barvou
- stejné chování headerů, summary stripů a seznamů

Nechceme, aby každá nová stránka nebo widget působily jako samostatná miniaplikace.

## Hlavní Referenční Pattern

Jako výchozí vzor bereme:
- sticky page header jako na `Profil`
- obsah složený z `SectionCard`
- kompaktní summary strip pod headerem sekce
- klidné listy a řádky bez agresivních highlightů
- akce až po obsahu, ne jako dominantní vizuální prvek

## Page Pattern

Každá nová stránka by měla mít tento základ:

1. Sticky header
- název stránky
- krátký podtitulek nebo kontext
- `OfflineIndicator`, pokud je pro danou část appky relevantní

2. Content area
- `background.default`
- vnitřní odsazení `p: 2`
- obsah rozdělený do sekčních karet

3. Section rhythm
- karta
- případně summary strip
- hlavní obsah
- případně footer nebo akce

## Section Pattern

Sekce mají vycházet z `SectionCard`.

Každá sekce typicky obsahuje:
- `title`
- `icon`
- volitelný `count`
- volitelnou akci vpravo
- obsah nebo seznam

Preferovaný rytmus:
- header sekce
- summary strip
- obsah

## Header Pattern

Header sekce musí být konzistentní:
- vlevo `title + icon`
- vpravo primární akce
- sekundární akce patří do overflow menu

Pravidla:
- primární akce má být přímo viditelná, ne schovaná v menu
- overflow používat jen pro méně časté akce
- pokud sekce nemá create akci, může být vpravo jen overflow

Příklady:
- `Absence`: `Přidat` + overflow
- `Pracovní doba`: `Adresy` + overflow

## Summary Strip

Summary strip je krátký informační řádek pod headerem sekce.

Pravidla:
- používá se pro rychlou orientaci
- má jen jednu větu nebo krátký souhrn
- používá `Typography variant="caption"`
- má jemný spodní divider
- neslouží jako alert ani jako výrazný callout

Typické příklady:
- počet položek
- stručný stav sekce
- časové období

## Content Pattern

Obsah sekce má být scanovatelný během 2-3 sekund.

Pravidla:
- každý řádek musí odpovědět na otázku "co tu mám nastavené?"
- důležité informace patří do první řádky
- druhá řádka je pro doplňující kontext
- badge a chipy jsou pomocné, ne hlavní nositel informace
- dlouhé texty neořezávat agresivně, pokud nesou význam

Preferovaný row pattern:
- hlavní hodnota
- sekundární popis
- stavový chip
- jasná affordance editace

## Klikatelnost

Platí jednoduché pravidlo:
- pokud je řádek hlavní vstup do editace, klikací je celý řádek
- malá ikonka sama o sobě nestačí jako jediný způsob editace

Výjimka:
- samostatné inline akce jako `smazat`, `duplikovat`, `více`

## Cards

Karty mají být klidné a systémové.

Pravidla:
- používat `SectionCard` nebo card stejného charakteru
- radius držet podle appky
- border přes `divider`
- bez agresivních shadow efektů
- bez silně barevných background bloků, pokud to není opravdu nutné

Nepreferujeme:
- hero bannery
- silné barevné panely
- více konkurenčních CTA v jednom bloku bez jasné hierarchie

## Drawer Pattern

Drawer je výchozí forma editace sekcí, pokud je potřeba editace nad obsahem karty.

Pravidla:
- standardně používáme `bottom drawer`
- stejný shape a spacing napříč sekcemi
- nadpis vždy říká, co se upravuje
- formulář jde shora dolů v logickém pořadí
- nejdřív typ nebo režim
- pak hlavní data
- pak volitelná data
- nakonec akce

Tlačítka:
- vlevo `Zrušit`
- vpravo primární CTA
- stejný wording napříč appkou

Preferovaný wording:
- create: `Přidat`
- edit: `Uložit` nebo `Uložit změny`

## Form Pattern

Formuláře mají být co nejméně tabulkové.

Pravidla:
- neskládat 4 malá pole do jedné řady na mobilu
- pole seskupovat podle významu, ne podle technické struktury dat
- používat krátké skupinové labely
- helper text ukazovat jen tam, kde uživatel bez něj neví proč něco nejde
- disabled stav musí být vysvětlený

Preferujeme:
- `Začátek / Konec`
- `Typ / Kategorie`
- `Výjezdní bod`
- `Platnost od / do`

## Lists And Rows

Seznamy mají být scanovatelné během 2-3 sekund.

Pravidla:
- hlavní informace v první řádce
- doplňující informace ve druhé řádce
- badge a chipy jen jako pomocná orientace
- divider mezi položkami, pokud to pomůže čitelnosti
- klikací je celý hlavní řádek, pokud je to hlavní vstup

## Actions

Akce mají být viditelné, ale ne agresivní.

Pravidla:
- primární akce jen jedna na sekci
- sekundární akce do menu nebo jako outlined button
- CTA texty krátké a věcné
- nepřehánět důraz přes barvu, border a velikost najednou

Preferovaný tón:
- `Přidat`
- `Uložit`
- `Zrušit`
- `Spravovat`
- `Seřadit`

## Mikrocopy

Mikrocopy napříč aplikací musí být jednotná.

Pravidla:
- krátké, přímé věty
- bez interního technického jazyka
- bez zbytečně dlouhých instrukcí
- helper text jen pokud odstraňuje nejistotu

Preferovaný tón:
- stručný
- věcný
- lidský

Příklady:
- dobré: `Vyber, odkud standardně vyrážíš v daný den.`
- dobré: `Pro uložení nejdřív vyber kategorii absence.`
- slabé: dlouhé vysvětlovací odstavce v každém draweru

## Chips And Status

Chipy mají být pomocná orientace, ne hlavní vizuální nosič informace.

Pravidla:
- používat theme tokeny
- vyhýbat se hardcoded hex barvám
- velikost držet malou a konzistentní
- zvýraznění používat střídmě

Preferujeme:
- `success`, `warning`, `error`, `primary`
- lehce tónované pozadí přes alpha

## Loading Empty Error Saving

Každá sekce i stránka má řešit základní stavy stejně:

### Loading
- jednoduchý loader uvnitř sekce
- bez skákání layoutu, pokud to jde

### Empty
- krátký text
- jednoduchá ikona
- pokud je to vhodné, CTA na vytvoření první položky

### Error
- inline `Alert` nebo krátké sdělení přímo v místě problému
- chyba má být co nejblíž místu, kde vznikla

### Saving
- primární tlačítko ukazuje loading
- nenechá uživatele tápat, zda se něco děje

## Override A Dědění

Pokud sekce pracuje s firemními a vlastními hodnotami, musí to být vždy srozumitelné.

Pravidla:
- uživatel má poznat, co je převzaté a co je jeho vlastní
- chipy `Firemní` a `Vlastní` jsou povolené, ale nestačí samy o sobě
- v editaci má být vidět referenční firemní hodnota, pokud existuje
- akce typu `Převzít z firemního` patří do sekundárních akcí

## Barvy

Barvy mají vycházet z theme, ne z lokálních rozhodnutí.

Pravidla:
- používat `primary.main`, `text.secondary`, `divider`, `background.paper`, `background.default`
- hardcoded hex barvy jsou výjimka, ne standard
- výraznou barvu používat jen tam, kde je opravdu potřeba upozornit

## Typography

Typografie má být konzistentní s profilem.

Pravidla:
- page title: `h5`
- section title: `subtitle2`
- summary strip: `caption`
- běžný obsah: `body2`

Vyhýbáme se:
- vlastnímu ručnímu nastavování font-size bez důvodu
- příliš mnoha různým vahám písma na jedné obrazovce

## Kdy Se Odchýlit

Odchylka od tohoto patternu je v pořádku jen když:
- komponenta řeší mimořádný stav
- jde o primární pracovní flow, který opravdu potřebuje vyšší důraz
- existuje jasný UX důvod

Odchylka nesmí vzniknout jen historicky nebo náhodou.

## Checklist Pro Novou Komponentu

- Vychází layout z `Profil` patternu?
- Používá komponenta `SectionCard`, pokud je to sekční obsah?
- Má stránka klidný sticky header?
- Je summary strip stručný a užitečný?
- Má sekce jasnou primární akci?
- Je hlavní akce viditelná bez otevření menu?
- Jsou barvy přes theme tokeny?
- Nejsou akce přehnaně dominantní?
- Je seznam čitelný bez otevření detailu?
- Je editace řešená stejně jako ve zbytku aplikace?
- Je celý hlavní řádek klikací, pokud je to hlavní vstup?
- Jsou empty/loading/error/saving stavy konzistentní?
- Je mikrocopy stejně stručná jako ve zbytku aplikace?
- Je zřejmé, co je firemní a co vlastní?
- Nepůsobí komponenta jako jiný produkt než zbytek aplikace?

## Doporučení

Pokud si nejsme jistí, jak má nová komponenta vypadat:

1. podívat se nejdřív na `ProfilPage`
2. použít `SectionCard`
3. držet summary strip + content rhythm
4. až pak přidávat vlastní odchylky
