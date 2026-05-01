import type { TFunction } from "i18next";
import type { PricingPlan } from "@web/entities/pricing";

export const getPricingPlans = (t: TFunction<"home">): PricingPlan[] => [
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
