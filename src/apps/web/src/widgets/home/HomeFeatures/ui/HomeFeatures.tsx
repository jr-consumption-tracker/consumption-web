import {
  BarChart3,
  Bell,
  Clock,
  DollarSign,
  FileBarChart,
  Home,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { OrganicBlob } from "@web/shared/ui/OrganicBlob";
import { Section } from "@web/shared/ui/Section";

import { FeatureCard } from "./FeatureCard";

/**
 * HomeFeatures - Home page section displaying a grid overview of features.
 * Pure UI composition block.
 */
export const HomeFeatures = () => {
  const { t } = useTranslation("home");

  return (
    <Section id="features">
      <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-dark-block-surface px-6 py-16 mx-2 sm:mx-6 lg:mx-8 lg:py-24">
        <OrganicBlob className="pointer-events-none -top-12 -left-16 z-0 h-56 w-56 opacity-12 md:-top-20 md:-left-20 md:h-96 md:w-96" />
        <OrganicBlob className="pointer-events-none -bottom-16 -right-14 z-0 h-48 w-48 opacity-10 md:-bottom-24 md:-right-20 md:h-80 md:w-80" />

        <div className="relative z-10 mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-dark-block-text-muted/80 block mb-4">
            {t("features.subtitle")}
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight text-dark-block-text sm:text-5xl lg:text-7xl">
            {t("features.title")}
          </h2>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={BarChart3}
            title={t("features.items.charts.title")}
            description={t("features.items.charts.description")}
            isPremium={false}
          />
          <FeatureCard
            icon={DollarSign}
            title={t("features.items.costs.title")}
            description={t("features.items.costs.description")}
            isPremium={false}
          />
          <FeatureCard
            icon={Home}
            title={t("features.items.properties.title")}
            description={t("features.items.properties.description")}
            isPremium={true}
          />
          <FeatureCard
            icon={FileBarChart}
            title={t("features.items.reports.title")}
            description={t("features.items.reports.description")}
            isPremium={true}
          />
          <FeatureCard
            icon={Bell}
            title={t("features.items.notifications.title")}
            description={t("features.items.notifications.description")}
            isPremium={true}
          />
          <FeatureCard
            icon={Clock}
            title={t("features.items.history.title")}
            description={t("features.items.history.description")}
            isPremium={false}
          />
        </div>
      </div>
    </Section>
  );
};

HomeFeatures.displayName = "HomeFeatures";
