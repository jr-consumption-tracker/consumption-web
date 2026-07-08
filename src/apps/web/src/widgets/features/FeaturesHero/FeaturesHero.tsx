import { useTranslation } from "react-i18next";

import { Section } from "@web/shared/ui/Section";

/**
 * FeaturesHero - Hero sekce stránky /features
 * Prezentuje přehled funkcí aplikace informativním tónem.
 * Žádné CTA – pouze uvádí uživatele do obsahu stránky.
 *
 * @example <FeaturesHero />
 */
export const FeaturesHero = () => {
  const { t } = useTranslation("features");

  return (
    <Section className="relative overflow-hidden text-center">
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-48 w-48 -translate-x-1/2 bg-sage-light/20 md:-top-20 md:h-72 md:w-72"
        style={{ borderRadius: "58% 42% 45% 55% / 45% 55% 45% 55%" }}
      />

      <h1 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl md:text-6xl">
        {t("hero.title")}
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-text-muted sm:text-xl">
        {t("hero.subtitle")}
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-base text-text-muted">
        {t("hero.description")}
      </p>
    </Section>
  );
};

FeaturesHero.displayName = "FeaturesHero";
