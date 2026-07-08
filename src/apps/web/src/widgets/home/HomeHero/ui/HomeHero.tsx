import { MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useIsAuthenticated } from "@web/features/auth/model/store/authStore";
import { useCountUpOnView } from "@web/shared/model/hooks/useCountUpOnView";
import { ButtonLink } from "@web/shared/ui/ButtonLink";
import { Section } from "@web/shared/ui/Section";

const TRUST_HOUSEHOLDS_COUNT = 2400;

/**
 * HomeHero - Hero sekce homepage
 * Skládá nadpis, mission text a CTA tlačítka.
 *
 * @example <HomeHero />
 */
export const HomeHero = () => {
  const { t } = useTranslation("home");
  const isAuthenticated = useIsAuthenticated();
  const { ref: trustRef, value: trustCount } = useCountUpOnView(
    TRUST_HOUSEHOLDS_COUNT,
  );

  return (
    <Section className="relative overflow-hidden bg-surface">
      <div className="relative mx-auto max-w-384">
        <div className="pointer-events-none absolute top-0 right-0 z-0 h-full w-full overflow-hidden">
          <div
            className="absolute -top-32 -right-12 h-60 w-60 md:right-0 md:h-105 md:w-105 bg-primary"
            style={{ borderRadius: "62% 38% 55% 45% / 48% 42% 58% 52%" }}
          />
          <div
            className="absolute top-72 right-100 hidden h-65 w-65 bg-sage-light md:block"
            style={{ borderRadius: "42% 58% 40% 60% / 55% 45% 55% 45%" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-text-main px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-widest text-surface-alt">
            {t("hero.header.title_highlight")}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-main md:text-7xl">
            {t("hero.header.title_main")} <br />
            <span className="relative inline-block px-2">
              <span className="absolute inset-x-0 bottom-[0.05em] h-[0.35em] bg-accent/25" />
              <span className="relative">
                {t("hero.header.title_highlight")}
              </span>
            </span>
          </h1>

          <div className="mt-12 animate-fade-in-up">
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light italic">
              {t("hero.mission.text")}
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-x-8">
            <ButtonLink
              to="/"
              variant="primary"
              size="lg"
              className="bg-primary px-8 py-4 text-base md:px-10 md:text-lg font-bold rounded-full text-text-main shadow-2xl shadow-primary/40 transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-primary/60 active:scale-95 outline-none focus-visible:focus-ring"
            >
              {isAuthenticated
                ? t("hero.actions.goToApp")
                : t("hero.actions.startFree")}
            </ButtonLink>

            <ButtonLink
              to={"/vlastnosti"}
              variant="ghost"
              size="lg"
              className="text-xl font-bold leading-6 transition-all hover:text-primary hover:bg-transparent group outline-none focus-visible:focus-ring"
            >
              {t("hero.actions.moreInfo")}
              <span className="inline-block transition-transform group-hover:translate-x-2">
                <MoveRight />
              </span>
            </ButtonLink>
          </div>

          <div
            ref={trustRef}
            className="mt-10 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="text-4xl font-black tracking-tight text-text-main md:text-5xl">
              {trustCount.toLocaleString("cs-CZ")}
            </span>
            <p className="text-sm font-medium leading-tight whitespace-pre-line text-text-muted">
              {t("hero.trust.label")}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

HomeHero.displayName = "HomeHero";
