import { CheckIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { ButtonLink } from "@repo/components";
import { cn } from "@repo/utils";

import type { PricingPlan } from "@web/entities/pricing";
interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricingCardProps) => {
  const { t } = useTranslation("home");
  const { name, price, interval, features, cta, ctaLink, badge, highlighted } =
    plan;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl p-8 lg:p-10 transition-all duration-500 group",
        highlighted
          ? "bg-primary/5 ring-2 ring-primary shadow-2xl shadow-primary/20 overflow-hidden scale-[1.02] hover:scale-[1.04] hover:-translate-y-2 hover:shadow-primary/70 hover:bg-primary/10"
          : "bg-surface ring-1 ring-border shadow-sm hover:shadow-xl hover:-translate-y-1 hover:ring-primary/30",
      )}
    >
      {badge && (
        <div className="absolute top-0 right-0 bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white rounded-bl-xl">
          {badge}
        </div>
      )}

      <h3
        className={cn(
          "text-lg font-bold leading-8 uppercase tracking-widest",
          highlighted ? "text-primary" : "text-text-main",
        )}
      >
        {name}
      </h3>

      <p className="mt-4 text-sm leading-6 text-text-muted">
        {highlighted
          ? t("pricing.card.highlightedDescription")
          : t("pricing.card.defaultDescription")}
      </p>

      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-5xl font-black tracking-tight text-text-main">
          {price === 0
            ? t("pricing.card.currencyFree")
            : t("pricing.card.currency", { price })}
        </span>
        <span className="text-sm font-semibold leading-6 text-text-muted">
          /{interval || t("pricing.card.forever")}
        </span>
      </p>

      <ul
        className={cn(
          "mt-8 space-y-4 text-sm leading-6 grow",
          highlighted ? "text-text-main" : "text-text-muted",
        )}
      >
        {features.map((feature, idx) => (
          <li
            key={idx}
            className={cn(
              "flex gap-x-3 font-medium",
              highlighted ? "text-primary font-bold" : "text-primary",
            )}
          >
            <CheckIcon className="h-6 w-5 flex-none" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <ButtonLink
        to={ctaLink}
        variant={highlighted ? "primary" : "outline"}
        className={cn(
          "mt-10 flex w-full items-center justify-center rounded-2xl px-6 py-4 text-center text-sm uppercase tracking-widest transition-all duration-300",
          highlighted
            ? "bg-primary font-black text-white shadow-xl shadow-primary/40 hover:bg-primary/90 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/60 group-hover:bg-primary/90"
            : "font-bold text-text-main ring-1 ring-inset ring-border hover:ring-primary hover:text-primary hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-md",
        )}
      >
        {cta}
      </ButtonLink>
    </div>
  );
};

PricingCard.displayName = "PricingCard";
