import { useTranslation } from "react-i18next";

import {
  BellIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  DocumentChartBarIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

import { FeatureCard } from "./FeatureCard";

export const FeatureCards = () => {
  const { t } = useTranslation("home");

  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={ChartBarIcon}
        title={t("hero.features.items.charts.title")}
        description={t("hero.features.items.charts.description")}
        isPremium={false}
        accentColor="blue"
      />
      <FeatureCard
        icon={CurrencyDollarIcon}
        title={t("hero.features.items.costs.title")}
        description={t("hero.features.items.costs.description")}
        isPremium={false}
        accentColor="yellow"
      />
      <FeatureCard
        icon={HomeModernIcon}
        title={t("hero.features.items.properties.title")}
        description={t("hero.features.items.properties.description")}
        isPremium={true}
        accentColor="blue"
      />
      <FeatureCard
        icon={DocumentChartBarIcon}
        title={t("hero.features.items.reports.title")}
        description={t("hero.features.items.reports.description")}
        isPremium={true}
        accentColor="blue"
      />
      <FeatureCard
        icon={BellIcon}
        title={t("hero.features.items.notifications.title")}
        description={t("hero.features.items.notifications.description")}
        isPremium={true}
        accentColor="yellow"
      />
      <FeatureCard
        icon={ClockIcon}
        title={t("hero.features.items.history.title")}
        description={t("hero.features.items.history.description")}
        isPremium={false}
        accentColor="blue"
      />
    </div>
  );
};

FeatureCards.displayName = "FeatureCards";
