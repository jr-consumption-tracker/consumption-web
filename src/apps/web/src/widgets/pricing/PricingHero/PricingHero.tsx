import { useTranslation } from "react-i18next";

import { Section } from "@web/shared/ui/Section";

export const PricingHero = () => {
  const { t } = useTranslation("pricing");

  return (
    <Section className="text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        {t("hero.subtitle")}
      </p>

      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl md:text-6xl">
        {t("hero.title")}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted sm:text-xl">
        {t("hero.description")}
      </p>
    </Section>
  );
};

PricingHero.displayName = "PricingHero";
