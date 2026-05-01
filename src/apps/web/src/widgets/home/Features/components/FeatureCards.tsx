import { useTranslation } from "react-i18next";

import {
  Bell,
  BarChart3,
  Clock,
  DollarSign,
  FileBarChart,
  Home,
} from "lucide-react";

import { FeatureCard } from "./FeatureCard";

export const FeatureCards = () => {
  const { t } = useTranslation("home");

  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={BarChart3}
        title={t("features.items.charts.title")}
        description={t("features.items.charts.description")}
        isPremium={false}
        accentColor="blue"
      />
      <FeatureCard
        icon={DollarSign}
        title={t("features.items.costs.title")}
        description={t("features.items.costs.description")}
        isPremium={false}
        accentColor="yellow"
      />
      <FeatureCard
        icon={Home}
        title={t("features.items.properties.title")}
        description={t("features.items.properties.description")}
        isPremium={true}
        accentColor="blue"
      />
      <FeatureCard
        icon={FileBarChart}
        title={t("features.items.reports.title")}
        description={t("features.items.reports.description")}
        isPremium={true}
        accentColor="blue"
      />
      <FeatureCard
        icon={Bell}
        title={t("features.items.notifications.title")}
        description={t("features.items.notifications.description")}
        isPremium={true}
        accentColor="yellow"
      />
      <FeatureCard
        icon={Clock}
        title={t("features.items.history.title")}
        description={t("features.items.history.description")}
        isPremium={false}
        accentColor="blue"
      />
    </div>
  );
};

FeatureCards.displayName = "FeatureCards";
