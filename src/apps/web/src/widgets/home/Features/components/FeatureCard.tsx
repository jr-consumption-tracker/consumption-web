import { useTranslation } from "react-i18next";
import type { LucideIcon } from "lucide-react";

import { featureCardVariants } from "../styles/featureCardVariants";

type FeatureColor = "blue" | "yellow";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isPremium: boolean;
  accentColor?: FeatureColor;
}

/**
 * FeatureCard - Karta zobrazující jednu feature s ikonou a popisem.
 */
export const FeatureCard = ({
  icon,
  title,
  description,
  isPremium,
  accentColor,
}: FeatureCardProps) => {
  const { t } = useTranslation("home");
  const {
    container,
    glow,
    blurBlob,
    iconWrapper,
    icon: iconStyles,
    content,
    title: titleStyles,
    description: descriptionStyles,
    accentBar,
    premiumBadge,
    premiumSpan,
  } = featureCardVariants({ accentColor });

  const Icon = icon;

  return (
    <div className={container()}>
      <div className={glow()} />
      <div className={blurBlob()} />

      {isPremium && (
        <div className={premiumBadge()}>
          <span className={premiumSpan()}>{t("features.premium")}</span>
        </div>
      )}

      <div className={iconWrapper()}>
        <Icon className={iconStyles()} aria-hidden="true" />
      </div>

      <div className={content()}>
        <h3 className={titleStyles()}>{title}</h3>
        <p className={descriptionStyles()}>{description}</p>
      </div>

      <div className={accentBar()} />
    </div>
  );
};

FeatureCard.displayName = "FeatureCard";
