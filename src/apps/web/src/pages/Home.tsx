import { PageLayout } from "@web/app/layouts/PageLayout";
import { Hero } from "@web/widgets/home/Hero/Hero";

const Home = () => {
  return (
    <PageLayout>
      <Hero />

      {/* Features Section */}
      <section id="features" className="bg-surface py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-bold uppercase tracking-widest text-primary">
              Chytrý monitoring
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl">
              Cesta ke skutečné úspoře
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="group flex flex-col rounded-3xl border border-border bg-surface p-10 transition-all hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2">
                <dt className="flex items-center gap-x-4 text-xl font-bold leading-7 text-text-main">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:rotate-12">
                    ⚡
                  </div>
                  Přehledné odečty
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-lg leading-7 text-text-muted">
                  <p className="mt-2">
                    Neztrácejte čas tabulkami. Sledujte všechny typy energií v
                    jednoduchém a přehledném rozhraní.
                  </p>
                </dd>
              </div>

              <div className="group flex flex-col rounded-3xl border border-border bg-surface p-10 transition-all hover:border-accent/50 hover:shadow-2xl hover:-translate-y-2">
                <dt className="flex items-center gap-x-4 text-xl font-bold leading-7 text-text-main">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    📈
                  </div>
                  Předpověď výdajů
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-lg leading-7 text-text-muted">
                  <p className="mt-2">
                    Náš systém analyzuje vaši historii a včas vás upozorní na
                    hrozící nedoplatky za energie.
                  </p>
                </dd>
              </div>

              <div className="group flex flex-col rounded-3xl border border-border bg-surface p-10 transition-all hover:border-brand-500/50 hover:shadow-2xl hover:-translate-y-2">
                <dt className="flex items-center gap-x-4 text-xl font-bold leading-7 text-text-main">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 transition-transform group-hover:-rotate-12">
                    💡
                  </div>
                  Tipy na úsporu
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-lg leading-7 text-text-muted">
                  <p className="mt-2">
                    Díky datům vám poradíme, kdy a kde můžete reálně ušetřit,
                    aniž byste museli slevit ze svého pohodlí.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section
        id="motivation"
        className="relative isolate overflow-hidden bg-primary px-6 py-24 sm:py-32 lg:px-8"
      >
        <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl opacity-20"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Proč zvolit právě Consumptions?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100 italic">
            "Díky aplikaci jsem ušetřil 15 % na měsíčních zálohách jen tím, že
            jsem si uvědomil zbytečné odběry v noci."
          </p>
          <p className="mt-4 text-sm font-semibold text-white">
            — Spokojený uživatel Jan
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-surface py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl">
              Plány pro každou domácnost
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Vyberte si úroveň kontroly, kterou potřebujete pro své energie.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
            <div className="flex flex-col rounded-3xl p-8 ring-1 ring-border bg-surface lg:p-10 transition-shadow hover:shadow-lg">
              <h3 className="text-lg font-bold leading-8 text-text-main uppercase tracking-widest">
                Základ zdarma
              </h3>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                Vše potřebné pro start vaší cesty k úsporám.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-5xl font-black tracking-tight text-text-main">
                  0 Kč
                </span>
                <span className="text-sm font-semibold leading-6 text-text-muted">
                  /navždy
                </span>
              </p>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-text-muted flex-grow">
                <li className="flex gap-x-3 text-primary font-medium">
                  ✓ Sledování jakékoliv energie
                </li>
                <li className="flex gap-x-3 text-primary font-medium">
                  ✓ Ruční zápis i fotoodpočty
                </li>
                <li className="flex gap-x-3 text-primary font-medium">
                  ✓ Historie 12 měsíců
                </li>
              </ul>
            </div>
            <div className="flex flex-col rounded-3xl p-8 ring-2 ring-primary bg-primary/5 lg:p-10 shadow-2xl shadow-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary px-4 py-1 text-[10px] font-black uppercase text-white tracking-widest rounded-bl-xl">
                Doporučeno
              </div>
              <h3 className="text-lg font-bold leading-8 text-primary uppercase tracking-widest">
                Premium
              </h3>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                Energetická inteligence pro maximální úsporu.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-5xl font-black tracking-tight text-text-main">
                  99 Kč
                </span>
                <span className="text-sm font-semibold leading-6 text-text-muted">
                  /měsíc
                </span>
              </p>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-text-main flex-grow">
                <li className="flex gap-x-3 text-primary font-bold">
                  ✓ AI Predikce faktur a anomálií
                </li>
                <li className="flex gap-x-3 text-primary font-bold">
                  ✓ Neomezená historie srovnání
                </li>
                <li className="flex gap-x-3 text-primary font-bold">
                  ✓ Chytré notifikace při růstu ceny
                </li>
                <li className="flex gap-x-3 text-primary font-bold">
                  ✓ Pokročilé exporty do Excelu
                </li>
              </ul>
              <button className="mt-10 block w-full rounded-2xl bg-primary px-6 py-4 text-center text-sm font-black uppercase tracking-widest text-white shadow-xl hover:bg-primary/90 hover:scale-[1.02] transition-all">
                Chci Premium
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

Home.displayName = "Home";

export default Home;
