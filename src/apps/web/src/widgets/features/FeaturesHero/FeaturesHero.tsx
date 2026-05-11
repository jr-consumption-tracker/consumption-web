import { useTranslation } from "react-i18next";

import { Section } from "@web/shared/components/Section";

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
    <Section className="text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl md:text-6xl">
        {t("hero.title")}
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-text-muted sm:text-xl">
        {t("hero.subtitle")}
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-base text-text-secondary">
        {t("hero.description")}
      </p>
    </Section>
  );
};

FeaturesHero.displayName = "FeaturesHero";
