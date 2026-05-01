import type { LucideIcon } from "lucide-react";
import type { FeatureColor } from "../types/FeatureColor";
import { useTranslation } from "react-i18next";

import { featureCardVariants } from "../styles/featureCardVariants";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isPremium: boolean;
  accentColor?: FeatureColor;
}

/**
 * FeatureCard - Individual card displaying a feature with icon and description.
 * It uses a glassmorphism effect and has hover animations to enhance the user experience.
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
      {/* Internal Glow Effect on border */}
      <div className={glow()} />

      {/* Decorative Blur Blob - Animates scale and opacity on hover */}
      <div className={blurBlob()} />

      {/* Premium Badge - Only visible if feature is premium */}
      {isPremium && (
        <div className={premiumBadge()}>
          <span className={premiumSpan()}>{t("features.premium")}</span>
        </div>
      )}

      {/* Icon Wrapper - Intensifies accent color on hover */}
      <div className={iconWrapper()}>
        <Icon className={iconStyles()} aria-hidden="true" />
      </div>

      <div className={content()}>
        <h3 className={titleStyles()}>{title}</h3>
        <p className={descriptionStyles()}>{description}</p>
      </div>

      {/* Bottom accent bar - Emerges on hover */}
      <div className={accentBar()} />
    </div>
  );
};

FeatureCard.displayName = "FeatureCard";
