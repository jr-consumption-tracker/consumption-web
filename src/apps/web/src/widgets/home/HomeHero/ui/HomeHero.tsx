import { MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useIsAuthenticated } from "@web/features/auth/model/store/authStore";
import { ButtonLink } from "@web/shared/ui/ButtonLink";
import { Section } from "@web/shared/ui/Section";

/**
 * HomeHero - Hero sekce homepage
 * Skládá nadpis, mission text a CTA tlačítka.
 *
 * @example <HomeHero />
 */
export const HomeHero = () => {
  const { t } = useTranslation("home");
  const isAuthenticated = useIsAuthenticated();

  return (
    <Section
      className="relative overflow-hidden bg-surface"
      background={
        <div className="absolute top-0 z-0 h-full w-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-20 h-125 w-125 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 -right-20 h-125 w-125 rounded-full bg-accent-soft blur-[120px]" />
        </div>
      }
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-text-main md:text-7xl">
          {t("hero.header.title_main")} <br />
          <span className="bg-linear-to-r from-primary via-primary via-35% to-accent bg-clip-text text-transparent">
            {t("hero.header.title_highlight")}
          </span>
        </h1>

        <div className="mx-auto mt-12 max-w-7xl animate-fade-in-up">
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light italic">
            {t("hero.mission.text")}
          </p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-x-8">
          <ButtonLink
            to="/"
            variant="primary"
            size="lg"
            className="bg-primary px-6 py-3 text-base md:px-8 md:py-4 md:text-lg font-bold rounded-full shadow-2xl shadow-primary/40 transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-primary/60 active:scale-95 outline-none focus-visible:focus-ring"
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
      </div>
    </Section>
  );
};

HomeHero.displayName = "HomeHero";
