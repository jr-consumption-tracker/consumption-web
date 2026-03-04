import { useTranslation } from "react-i18next";

/**
 * FeaturesHeader - Header section of the Features widget, including a themed subtitle and main title.
 * It coordinates localization strings for both themes using i18next.
 *
 * @example
 * <FeaturesHeader />
 */
export const FeaturesHeader = () => {
  const { t } = useTranslation("home");

  return (
    <div className="relative z-10 mx-auto max-w-2xl text-center mb-16 lg:mb-24">
      <span className="text-sm font-black uppercase tracking-[0.3em] text-white/60 dark:text-black/60 block mb-4">
        {t("hero.features.subtitle")}
      </span>

      <h2 className="text-4xl font-extrabold tracking-tight text-white dark:text-black sm:text-5xl lg:text-7xl transition-colors duration-700">
        {t("hero.features.title")}
      </h2>
    </div>
  );
};

FeaturesHeader.displayName = "FeaturesHeader";
