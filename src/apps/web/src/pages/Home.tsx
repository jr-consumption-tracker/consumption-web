import { PageLayout } from "@web/app/layouts/PageLayout";
import { Features } from "@web/widgets/home/Features/Features";
import { Hero } from "@web/widgets/home/Hero/Hero";
import { HowItWorks } from "@web/widgets/home/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      <HowItWorks />
      <Features />

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
                  ✓ Ruční zápis a historie odečtů
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
