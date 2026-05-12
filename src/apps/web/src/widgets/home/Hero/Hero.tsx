import { MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { ButtonLink } from "@repo/components";
import { useIsAuthenticated } from "@web/features/auth/hooks/useIsAuthenticated";
import { Section } from "@web/shared/components/Section";

/**
 * Hero - Hero sekce homepage
 * Skládá nadpis, mission text a CTA tlačítka.
 *
 * @example <Hero />
 */
export const Hero = () => {
  const { t } = useTranslation("home");
  const isAuthenticated = useIsAuthenticated();

  return (
    <Section
      className="relative overflow-hidden bg-surface"
      background={
        <div className="absolute top-0 z-0 h-full w-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-20 h-125 w-125 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 -right-20 h-125 w-125 rounded-full bg-accent-soft-hover blur-[120px]" />
        </div>
      }
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-text-main sm:text-7xl md:text-8xl">
          {t("hero.header.title_main")} <br />
          <span className="bg-linear-to-r from-primary via-brand-500 to-accent bg-clip-text text-transparent drop-shadow-sm">
            {t("hero.header.title_highlight")}
          </span>
        </h1>

        <div className="mx-auto mt-12 max-w-7xl animate-fade-in-up">
          <div className="relative inline-block text-center px-4 md:px-10 py-8">
            <div className="absolute top-0 left-0 -mt-2 -ml-2 md:-ml-6 text-8xl md:text-9xl text-primary/10 select-none font-serif hover:text-primary/20 transition-colors pointer-events-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10 text-xl md:text-2xl lg:text-3xl text-text-muted leading-relaxed font-light italic">
              {t("hero.mission.text")}
            </blockquote>

            <div className="absolute bottom-0 right-0 -mb-10 -mr-2 md:-mr-6 text-8xl md:text-9xl text-primary/10 select-none font-serif hover:text-primary/20 transition-colors pointer-events-none">
              &rdquo;
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-x-8">
          <ButtonLink
            to="/"
            variant="primary"
            size="lg"
            className="bg-primary px-10 py-8 text-xl font-bold rounded-full shadow-2xl shadow-primary/40 transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-primary/60 active:scale-95"
          >
            {isAuthenticated
              ? t("hero.actions.goToApp")
              : t("hero.actions.startFree")}
          </ButtonLink>

          <ButtonLink
            to={"/features"}
            variant="ghost"
            size="lg"
            className="text-xl font-bold leading-6 transition-all hover:text-primary hover:bg-transparent group"
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

Hero.displayName = "Hero";
