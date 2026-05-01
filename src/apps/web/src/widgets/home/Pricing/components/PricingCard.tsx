import { CheckIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { ButtonLink } from "@repo/components";

import type { PricingPlan } from "@web/entities/pricing";

import { pricingCardVariants } from "../styles/pricingCardVariants";

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricingCardProps) => {
  const { t } = useTranslation("home");
  const { name, price, interval, features, cta, ctaLink, badge, highlighted } =
    plan;

  const {
    container,
    badge: badgeStyles,
    title,
    description,
    priceContainer,
    priceAmount,
    priceInterval,
    featuresList,
    featureItem,
    featureIcon,
    ctaButton,
  } = pricingCardVariants({ highlighted: !!highlighted });

  return (
    <div className={container()}>
      {badge && <div className={badgeStyles()}>{badge}</div>}

      <h3 className={title()}>{name}</h3>

      <p className={description()}>
        {highlighted
          ? t("pricing.card.highlightedDescription")
          : t("pricing.card.defaultDescription")}
      </p>

      <p className={priceContainer()}>
        <span className={priceAmount()}>
          {price === 0
            ? t("pricing.card.currencyFree")
            : t("pricing.card.currency", { price })}
        </span>
        <span className={priceInterval()}>
          /{interval || t("pricing.card.forever")}
        </span>
      </p>

      <ul className={featuresList()}>
        {features.map((feature, idx) => (
          <li key={idx} className={featureItem()}>
            <CheckIcon className={featureIcon()} aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      {highlighted ? (
        <ButtonLink to={ctaLink} variant="primary" className={ctaButton()}>
          {cta}
        </ButtonLink>
      ) : (
        <ButtonLink to={ctaLink} variant="outline" className={ctaButton()}>
          {cta}
        </ButtonLink>
      )}
    </div>
  );
};
