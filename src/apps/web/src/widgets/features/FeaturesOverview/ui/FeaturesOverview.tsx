import { useTranslation } from "react-i18next";

import { FeatureSection } from "@web/shared/ui/FeatureSection";

import { ConsumptionDashboard } from "./ConsumptionDashboard";
import { FeatureChart } from "./FeatureChart";
import { PremiumInsights } from "./PremiumInsights";

import type { ChartData } from "./FeatureChart";

import type { PropertyConsumption } from "./ConsumptionDashboard";

const DASHBOARD_DATA: PropertyConsumption[] = [
  {
    name: "Rodinný dům",
    items: [
      { type: "electricity", label: "Elektřina", value: "245", unit: "kWh" },
      { type: "gas", label: "Plyn", value: "12", unit: "m³" },
      { type: "water", label: "Voda", value: "0.8", unit: "m³" },
    ],
  },
  {
    name: "Chalupa",
    items: [
      { type: "electricity", label: "Elektřina", value: "48", unit: "kWh" },
      { type: "water", label: "Voda", value: "0.2", unit: "m³" },
    ],
  },
];

const ANALYTICS_DATA: ChartData[] = [
  { name: "Led", current: 420, previous: 480 },
  { name: "Úno", current: 380, previous: 420 },
  { name: "Bře", current: 510, previous: 490 },
  { name: "Dub", current: 290, previous: 350 },
  { name: "Kvě", current: 340, previous: 330 },
  { name: "Čer", current: 410, previous: 440 },
];

const COSTS_DATA: ChartData[] = [
  { name: "Elektřina", value: 1450 },
  { name: "Plyn", value: 920 },
  { name: "Voda", value: 380 },
  { name: "Odpad", value: 150 },
];

/**
 * FeaturesOverview - Widget zobrazující detailní přehled funkcí aplikace.
 * Skládá jednotlivé FeatureSections a doplňuje je o vizuální grafy.
 */
export const FeaturesOverview = () => {
  const { t } = useTranslation("features");

  return (
    <div className="flex flex-col">
      <FeatureSection
        title={t("list.tracking.title")}
        description={t("list.tracking.description")}
        visual={<ConsumptionDashboard properties={DASHBOARD_DATA} />}
      />

      <FeatureSection
        title={t("list.analytics.title")}
        description={t("list.analytics.description")}
        visual={
          <FeatureChart
            data={ANALYTICS_DATA}
            type="area"
            color="var(--color-brand-500)"
            dataKey="current"
            secondaryDataKey="previous"
          />
        }
        reverse
        className="bg-surface"
      />

      <FeatureSection
        title={t("list.costs.title")}
        description={t("list.costs.description")}
        visual={
          <FeatureChart
            data={COSTS_DATA}
            color="var(--color-brand-500)"
            unit="Kč"
          />
        }
      />

      <FeatureSection
        title={t("list.premium.title")}
        description={t("list.premium.description")}
        visual={<PremiumInsights />}
        reverse
        className="bg-surface py-14 lg:py-20"
      />
    </div>
  );
};

FeaturesOverview.displayName = "FeaturesOverview";
