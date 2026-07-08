import {
  BarChart3,
  Bell,
  Clock,
  DollarSign,
  FileBarChart,
  Home,
} from "lucide-react";
import { useTranslation } from "react-i18next";

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
      <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-sage-deep px-6 py-16 mx-2 sm:mx-6 lg:mx-8 lg:py-24">
        <div
          className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 md:h-112 md:w-md bg-sage-mid/25 blur-3xl -z-10"
          style={{ borderRadius: "48% 52% 40% 60% / 55% 45% 60% 40%" }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-sage-content/60 block mb-4">
            {t("features.subtitle")}
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight text-sage-content sm:text-5xl lg:text-7xl">
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
