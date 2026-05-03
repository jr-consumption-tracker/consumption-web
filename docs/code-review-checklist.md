# Code Review Checklist — UI (JR Consumptions - Web)

Používej tento checklist při review UI kódu.
Primárně vychází z `ui-coding-rules-core.md`.

---

## 🧠 1. Simplicity first

- Je řešení co nejjednodušší?
- Nevznikla zbytečná abstrakce?
- Dá se kód zjednodušit bez ztráty funkčnosti?

❗ Red flag:

- hook bez logiky
- wrapper bez přidané hodnoty
- zbytečné vrstvy

---

## 🧩 2. Simple vs Complex

- Je správně zvolená úroveň komplexity?

### Pokud SIMPLE:

- není zbytečně rozděleno do více souborů?
- není použit orchestrator pattern?
- není použit feature hook?

### Pokud COMPLEX:

- je kód rozdělený smysluplně?
- jsou oddělené odpovědnosti?

---

## 🔌 3. Feature hooks

- Existuje feature hook jen pokud dává smysl?
- Kombinuje více zdrojů / řeší orchestrace?

❗ Red flag:

- hook jen volá jeden query
- hook jen přeposílá data
- hook jen přidává `loading`

---

## 🧱 4. Vrstvy (FSD)

- Je logika ve správné vrstvě?

| Typ logiky               | Správná vrstva |
| ------------------------ | -------------- |
| data (co to je)          | entities       |
| chování (co s tím dělám) | features       |
| UI kompozice             | widgets/pages  |

❗ Red flag:

- business logika v komponentě
- use-case logika v entities

---

## 📦 5. Struktura a granularita

- Není struktura zbytečně složitá?
- Nevznikly prázdné nebo triviální složky?

❗ Red flag:

- `hooks/`, `utils/`, `types/` pro 1 věc
- příliš mnoho souborů pro jednoduchý use-case

---

## 🔁 6. DRY vs overengineering

- Není zde předčasná abstrakce?
- Je abstrakce vytvořena až po opakování (rule of 3)?

❗ Red flag:

- generické řešení bez reuse
- „pro jistotu“ abstrakce

---

## 🔍 7. Reuse

- Používá se existující řešení správně?

✔ Použít když:

- stejný use-case
- stejná komplexita

❗ Red flag:

- použití komplexního patternu pro jednoduchý problém
- ohýbání existujícího řešení

---

## 🧑‍💻 8. Developer ergonomics (DX)

- Je kód snadno pochopitelný?
- Kolik souborů musím otevřít?

❗ Red flag:

- potřeba otevřít 3+ soubory pro pochopení
- roztrhaná logika

---

## 🧠 9. Logika a umístění

- Je logika blízko místa použití?
- Není zbytečně přesunutá do hooku nebo utils?

---

## 🏷️ 10. Naming

- Odpovídají názvy konvencím?
- Neobsahují zbytečné suffixy (`Component`, `Hook`, ...)?

---

## 🔌 11. API usage

- Je správně použita API vrstva?

✔ Správně:

- `api/*Api.ts`
- `use*Api.ts`
- feature hook jen pokud je potřeba

❗ Red flag:

- duplicita query
- Axios mimo `api/`

---

## 🧾 12. TypeScript

- Není použit `any`?
- Jsou typy na správném místě?
- Nejsou zbytečně vytažené jednoduché typy?

---

## ⚡ 13. Performance (jen pokud relevantní)

- Není použita zbytečná memoizace?
- Je memoizace použita jen tam, kde dává smysl?

---

## 🧪 14. Finální kontrola

- Je kód čitelný bez kontextu?
- Dával by smysl za 6 měsíců?
- Udělal bys to dnes znovu stejně?

---

## 🧠 Fallback pravidlo

Pokud si nejsi jistý:

👉 zvol jednodušší řešení
👉 méně vrstev
👉 méně abstrakce
