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
 * Features - Home page section displaying a grid overview of features.
 * Pure UI composition block.
 */
export const Features = () => {
  const { t } = useTranslation("home");

  return (
    <Section
      id="features"
      className="isolate overflow-hidden bg-primary dark:bg-primary transition-colors duration-700"
      background={
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-white/10 dark:bg-white/5 blur-[120px] rounded-full opacity-70 transition-colors duration-700"
            aria-hidden="true"
          />
          <div
            className="absolute top-[20%] right-[5%] w-[40%] h-[40%] bg-blue-300/20 dark:bg-primary-200/10 blur-[130px] rounded-full opacity-50 transition-colors duration-700"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-indigo-400/20 dark:bg-indigo-500/10 blur-[120px] rounded-full opacity-60 transition-colors duration-700"
            aria-hidden="true"
          />

          <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1.5px, transparent 1.5px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      }
    >
      <div className="relative z-10 mx-auto max-w-2xl text-center mb-16 lg:mb-24">
        <span className="text-sm font-black uppercase tracking-[0.3em] text-white/60 dark:text-black/60 block mb-4">
          {t("features.subtitle")}
        </span>

        <h2 className="text-4xl font-extrabold tracking-tight text-white dark:text-black sm:text-5xl lg:text-7xl transition-colors duration-700">
          {t("features.title")}
        </h2>
      </div>

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
    </Section>
  );
};

Features.displayName = "Features";
