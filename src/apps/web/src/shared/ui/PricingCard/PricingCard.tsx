import { CheckIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@repo/utils";

import { ButtonLink } from "../ButtonLink";

import type { PricingPlan } from "@web/shared/model/types";
interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricingCardProps) => {
  const { t } = useTranslation("home");
  const {
    name,
    price,
    interval,
    features,
    cta,
    ctaLink,
    badge,
    highlighted,
    summary,
  } = plan;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl p-8 lg:p-10 transition-all duration-500 group",
        highlighted
          ? "bg-[#2b2620] shadow-2xl overflow-hidden scale-[1.02] hover:scale-[1.04] hover:-translate-y-2"
          : "bg-surface-alt ring-1 ring-border shadow-sm hover:shadow-xl hover:-translate-y-1 hover:ring-primary/30",
      )}
    >
      {badge && (
        <div className="absolute top-0 right-0 bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest text-text-main rounded-bl-xl">
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

      <p
        className={cn(
          "mt-4 text-sm leading-6",
          highlighted ? "text-[#f5f0e6]/70" : "text-text-muted",
        )}
      >
        {highlighted
          ? t("pricing.card.highlightedDescription")
          : t("pricing.card.defaultDescription")}
      </p>

      <p className="mt-6 flex items-baseline gap-x-1">
        <span
          className={cn(
            "text-5xl font-black tracking-tight",
            highlighted ? "text-primary" : "text-text-main",
          )}
        >
          {price === 0
            ? t("pricing.card.currencyFree")
            : t("pricing.card.currency", { price })}
        </span>
        <span
          className={cn(
            "text-sm font-semibold leading-6",
            highlighted ? "text-[#f5f0e6]/70" : "text-text-muted",
          )}
        >
          /{interval || t("pricing.card.forever")}
        </span>
      </p>

      <ul
        className={cn(
          "mt-8 space-y-4 text-sm leading-6 grow",
          highlighted ? "text-[#f5f0e6]" : "text-text-muted",
        )}
      >
        {features?.map((feature, idx) => (
          <li
            key={idx}
            className={cn(
              "flex gap-x-3 font-medium",
              highlighted ? "text-primary font-bold" : "text-text-muted",
            )}
          >
            <CheckIcon className="h-6 w-5 flex-none" aria-hidden="true" />
            {feature}
          </li>
        ))}

        <span>{summary}</span>
      </ul>

      <ButtonLink
        to={ctaLink}
        variant={highlighted ? "primary" : "outline"}
        className={cn(
          "mt-10 flex w-full items-center justify-center rounded-2xl px-6 py-4 text-center text-sm uppercase tracking-widest transition-all duration-300 outline-none focus-visible:focus-ring",
          highlighted
            ? "bg-primary font-black text-text-main shadow-xl shadow-primary/40 hover:bg-primary/90 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/60 group-hover:bg-primary/90"
            : "font-bold text-text-main ring-1 ring-inset ring-border hover:ring-primary hover:text-primary hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-md",
        )}
      >
        {cta}
      </ButtonLink>
    </div>
  );
};
