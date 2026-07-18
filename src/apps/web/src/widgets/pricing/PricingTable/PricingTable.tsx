import { CheckIcon, MinusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@repo/utils";
import { Section } from "@web/shared/ui/Section";

type RowValue = boolean | string;

interface TableRow {
  label: string;
  free: RowValue;
  premium: RowValue;
}

const useTableRows = (): TableRow[] => {
  const { t } = useTranslation("pricing");

  const rowKeys = [
    "energyTypes",
    "supplyPoints",
    "readingHistory",
    "manualEntry",
    "advancedCharts",
    "aiPredictions",
    "smartAlerts",
    "excelExports",
    "prioritySupport",
  ] as const;

  return rowKeys.map((key) => ({
    label: t(`table.rows.${key}.label`),
    free: t(`table.rows.${key}.free`, { defaultValue: "" }),
    premium: t(`table.rows.${key}.premium`, { defaultValue: "" }),
  }));
};

const CellValue = ({ value }: { value: RowValue }) => {
  if (value === "true" || value === true) {
    return <CheckIcon className="mx-auto h-5 w-5 text-primary-accessible" aria-hidden="true" />;
  }
  if (value === "false" || value === false || value === "") {
    return <MinusIcon className="mx-auto h-5 w-5 text-text-muted/40" aria-hidden="true" />;
  }
  return <span className="text-sm text-text-muted">{String(value)}</span>;
};

export const PricingTable = () => {
  const { t } = useTranslation("pricing");
  const rows = useTableRows();

  return (
    <Section id="compare" className="bg-surface">
      <div className="mx-auto max-w-4xl overflow-x-auto rounded-2xl ring-1 ring-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-alt">
              <th className="py-5 pl-6 pr-4 text-left font-semibold text-text-main">
                {t("table.planColumn")}
              </th>
              <th className="py-5 px-6 text-center font-semibold text-text-muted">
                {t("plans.free.name")}
              </th>
              <th className="py-5 px-6 text-center font-bold text-primary-accessible bg-primary/7">
                {t("plans.premium.name")}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={cn(
                  "border-b border-border last:border-0",
                  idx % 2 === 0 ? "bg-background" : "bg-row-alt dark:bg-row-alt-2",
                )}
              >
                <td className="py-4 pl-6 pr-4 font-medium text-text-main">
                  {row.label}
                </td>
                <td className="py-4 px-6 text-center">
                  <CellValue value={row.free} />
                </td>
                <td className="py-4 px-6 text-center bg-primary/6">
                  <CellValue value={row.premium} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

PricingTable.displayName = "PricingTable";
