const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-text-main sm:text-7xl md:text-8xl">
              Sledujte svou spotřebu <br />
              <span className="bg-gradient-to-r from-primary via-brand-500 to-accent bg-clip-text text-transparent drop-shadow-sm">
                jako profesionál
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl text-text-muted sm:text-2xl leading-relaxed">
              Mějte pod kontrolou výdaje za elektřinu a plyn. Moderní nástroj
              pro každodenní monitoring, analýzu a úsporu vašich energií.
            </p>
            <div className="mt-12 flex items-center justify-center gap-x-8">
              <button className="rounded-full bg-primary px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-primary/40 transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-primary/60 active:scale-95">
                Začít zdarma
              </button>
              <button className="text-xl font-bold leading-6 text-text-main transition-all hover:text-primary group">
                Více informací{" "}
                <span
                  className="inline-block transition-transform group-hover:translate-x-2"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Blurred decorative backgrounds */}
        <div className="absolute top-0 -z-10 h-full w-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-surface py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Vlastnosti
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Vše, co potřebujete k úspoře
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-text-main">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                    ⚡
                  </div>
                  Elektřina
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-text-muted">
                  <p className="flex-auto italic font-medium text-accent">
                    Sledujte každý watt
                  </p>
                  <p className="mt-2">
                    Detailní přehled o spotřebě v průběhu dne. Identifikujte
                    největší žrouty energie.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col rounded-2xl border border-border bg-surface p-8 transition-all hover:border-gas-500/50 hover:shadow-xl hover:shadow-gas-500/5">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-text-main">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gas-500/10 text-gas-500">
                    🔥
                  </div>
                  Plyn
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-text-muted">
                  <p className="flex-auto italic font-medium text-gas-500">
                    Teplo pod kontrolou
                  </p>
                  <p className="mt-2">
                    Optimalizujte vytápění na základě historických dat a počasí.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-text-main">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    📊
                  </div>
                  Analýzy
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-text-muted">
                  <p className="flex-auto italic font-medium text-primary">
                    Data mluví jasně
                  </p>
                  <p className="mt-2">
                    Krásné grafy a reporty, které vám pomohou pochopit vaše
                    návyky.
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
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Plány a prémiové funkce
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Vyberte si tarif, který vám nejlépe vyhovuje.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
            <div className="rounded-3xl p-8 ring-1 ring-border bg-surface lg:p-10">
              <h3 className="text-lg font-semibold leading-8 text-text-main">
                Základ zdarma
              </h3>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                Vše pro začátek vaší úsporné cesty.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-text-main">
                  0 Kč
                </span>
                <span className="text-sm font-semibold leading-6 text-text-muted">
                  /měsíc
                </span>
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-text-muted">
                <li className="flex gap-x-3 text-primary">
                  ✓ Ruční zápis odečtů
                </li>
                <li className="flex gap-x-3 text-primary">✓ Základní grafy</li>
                <li className="flex gap-x-3 text-primary">✓ Historie 1 rok</li>
              </ul>
            </div>
            <div className="rounded-3xl p-8 ring-2 ring-primary bg-primary/5 lg:p-10">
              <h3 className="text-lg font-semibold leading-8 text-primary">
                Premium
              </h3>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                Pro maximální úsporu a automatizaci.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-text-main">
                  99 Kč
                </span>
                <span className="text-sm font-semibold leading-6 text-text-muted">
                  /měsíc
                </span>
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-text-muted">
                <li className="flex gap-x-3 text-primary font-bold">
                  ✓ Predikce a AI analýza
                </li>
                <li className="flex gap-x-3 text-primary font-bold">
                  ✓ Exporty pro dodavatele
                </li>
                <li className="flex gap-x-3 text-primary font-bold">
                  ✓ Neomezená historie
                </li>
                <li className="flex gap-x-3 text-primary font-bold">
                  ✓ Notifikace na mobil
                </li>
              </ul>
              <button className="mt-8 block w-full rounded-xl bg-primary px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-all">
                Chci Premium
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
