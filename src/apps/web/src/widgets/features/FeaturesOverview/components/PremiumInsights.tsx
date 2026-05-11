import { useTranslation } from "react-i18next";
import { AlertCircle, Lightbulb, TrendingDown } from "lucide-react";

import { cn } from "@repo/utils";
import { InsightItem } from "./InsightItem";

/**
 * PremiumInsights - Vizuální prvek pro prémiovou sekci.
 * Zobrazuje ukázky upozornění a doporučení v moderním UI.
 */
export const PremiumInsights = ({ className }: { className?: string }) => {
  const { t } = useTranslation("features");

  return (
    <div
      className={cn(
        "flex flex-col gap-4 w-full h-full justify-center max-w-lg mx-auto",
        className,
      )}
    >
      <InsightItem
        icon={AlertCircle}
        title={t("list.premium.insights.usage.title")}
        description={t("list.premium.insights.usage.description")}
        value={t("list.premium.insights.usage.value")}
        variant="warning"
      />
      <InsightItem
        icon={Lightbulb}
        title={t("list.premium.insights.optimization.title")}
        description={t("list.premium.insights.optimization.description")}
        value={t("list.premium.insights.optimization.value")}
        variant="info"
      />
      <InsightItem
        icon={TrendingDown}
        title={t("list.premium.insights.savings.title")}
        description={t("list.premium.insights.savings.description")}
        value={t("list.premium.insights.savings.value")}
        variant="success"
      />
    </div>
  );
};

PremiumInsights.displayName = "PremiumInsights";
