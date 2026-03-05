import { useTranslation } from "react-i18next";

import { ButtonLink } from "@repo/components";
import { Section } from "@web/shared/components/Section";

import { PricingCard } from "./components/PricingCard";
import { getPricingPlans } from "./data/pricingPlans";

export const Pricing = () => {
  const { t } = useTranslation("home");
  const plans = getPricingPlans(t);

  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl">
          {t("pricing.title")}
        </h2>
        <p className="mt-6 text-lg leading-8 text-text-muted">
          {t("pricing.description")}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <ButtonLink
          //@ts-expect-error  Link zatím neexistuje
          to="/pricing"
          variant="outline"
          className="inline-flex items-center gap-x-2 text-sm font-semibold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
        >
          {t("pricing.comparePlans")} &rarr;
        </ButtonLink>
      </div>
    </Section>
  );
};

Pricing.displayName = "Pricing";
