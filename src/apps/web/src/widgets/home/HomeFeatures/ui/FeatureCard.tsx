import { useTranslation } from "react-i18next";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isPremium: boolean;
}

/**
 * FeatureCard - A card component displaying a feature with an icon, title, and description.
 * Styles are inlined to comply with project rules.
 */
export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  isPremium,
}: FeatureCardProps) => {
  const { t } = useTranslation("home");

  return (
    <div className="group relative flex flex-col rounded-3xl border border-dark-block-text/10 bg-dark-block-text/10 p-8 transition-all duration-500 hover:-translate-y-3 hover:bg-dark-block-text/15 backdrop-blur-xl overflow-hidden text-left">
      {isPremium && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-text-main shadow-sm">
            {t("features.premium")}
          </span>
        </div>
      )}

      {/* Icon Wrapper */}
      <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-text-main">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative flex flex-auto flex-col z-10 text-left">
        <h3 className="text-xl font-black tracking-tight text-dark-block-text transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-4 text-base leading-7 text-dark-block-text-muted transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

FeatureCard.displayName = "FeatureCard";
