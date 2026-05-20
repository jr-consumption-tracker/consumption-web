import { useTranslation } from "react-i18next";

import { PricingCard } from "@web/shared/ui/PricingCard";
import { Section } from "@web/shared/ui/Section";

import type { TFunction } from "i18next";
import type { PricingPlan } from "@web/shared/model/types";

const getPlans = (t: TFunction<"pricing">): PricingPlan[] => [
  {
    name: t("plans.free.name"),
    price: 0,
    summary: t("plans.free.summary"),
    cta: t("plans.free.cta"),
    ctaLink: "/auth/register",
  },
  {
    name: t("plans.premium.name"),
    price: 49,
    interval: t("plans.premium.interval"),
    summary: t("plans.premium.summary"),
    cta: t("plans.premium.cta"),
    ctaLink: "/auth/register",
    badge: t("plans.premium.badge"),
    highlighted: true,
  },
];

export const PricingPlans = () => {
  const { t } = useTranslation("pricing");
  const plans = getPlans(t);

  return (
    <Section id="plans">
      <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-x-8 text-sm text-text-muted">
        <span className="flex items-center gap-x-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {t("trust.noCredit")}
        </span>
        <span className="flex items-center gap-x-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {t("trust.cancel")}
        </span>
        <span className="flex items-center gap-x-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {t("trust.secure")}
        </span>
      </div>
    </Section>
  );
};

PricingPlans.displayName = "PricingPlans";
