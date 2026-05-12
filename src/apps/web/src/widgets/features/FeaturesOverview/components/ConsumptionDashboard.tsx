import { Droplets, Flame, Zap } from "lucide-react";

import { cn } from "@repo/utils";

export interface ConsumptionItem {
  type: "electricity" | "gas" | "water";
  label: string;
  value: string;
  unit: string;
}

export interface PropertyConsumption {
  name: string;
  items: ConsumptionItem[];
}

interface ConsumptionDashboardProps {
  properties: PropertyConsumption[];
  className?: string;
}

const IconMap = {
  electricity: Zap,
  gas: Flame,
  water: Droplets,
};

const ColorMap = {
  electricity: "text-yellow-300",
  gas: "text-orange-300",
  water: "text-blue-300",
};

/**
 * ConsumptionDashboard - Vizuální prvek pro sekci sledování spotřeb.
 * Zobrazuje přehled nemovitostí a jejich odběrných míst v card-like designu.
 */
export const ConsumptionDashboard = ({
  properties,
  className,
}: ConsumptionDashboardProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full content-center",
        className,
      )}
    >
      {properties.map((property) => (
        <div
          key={property.name}
          className="bg-surface p-5 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h4 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
            {property.name}
          </h4>

          <div className="space-y-3">
            {property.items.map((item) => {
              const Icon = IconMap[item.type];
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "p-2 rounded-lg transition-colors",
                        ColorMap[item.type],
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-text-muted group-hover:text-text-main transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <span>
                    <span className="text-base font-bold text-text-main">
                      {item.value}
                    </span>
                    &nbsp;{item.unit}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

ConsumptionDashboard.displayName = "ConsumptionDashboard";
