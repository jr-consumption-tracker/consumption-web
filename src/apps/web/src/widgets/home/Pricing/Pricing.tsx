import { MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { ButtonLink } from "@repo/components";
import { Section } from "@web/shared/components/Section";

import { PricingCard } from "./components/PricingCard";

import type { TFunction } from "i18next";

import type { PricingPlan } from "@web/entities/pricing";

const getPricingPlans = (t: TFunction<"home">): PricingPlan[] => [
  {
    name: t("pricing.plans.free.name"),
    price: 0,
    features: t("pricing.plans.free.features", { returnObjects: true }),
    cta: t("pricing.plans.free.cta"),
    ctaLink: "/auth/register",
  },
  {
    name: t("pricing.plans.premium.name"),
    price: 49,
    interval: t("pricing.plans.premium.interval"),
    features: t("pricing.plans.premium.features", { returnObjects: true }),
    cta: t("pricing.plans.premium.cta"),
    ctaLink: "/auth/register",
    badge: t("pricing.plans.premium.badge"),
    highlighted: true,
  },
];

export const Pricing = () => {
  const { t } = useTranslation("home");
  const plans = getPricingPlans(t);

  return (
    <Section id="pricing">
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
          variant="ghost"
          size="lg"
          className="text-xl font-bold leading-6 transition-all hover:text-primary hover:bg-transparent group"
        >
          {t("pricing.comparePlans")}
          <span className="inline-block transition-transform group-hover:translate-x-2">
            <MoveRight />
          </span>
        </ButtonLink>
      </div>
    </Section>
  );
};

Pricing.displayName = "Pricing";
