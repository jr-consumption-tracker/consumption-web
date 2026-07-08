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
  electricity: "text-electricity-500",
  gas: "text-gas-500",
  water: "text-water-500",
};

/**
 * ConsumptionDashboard - Vizuální prvek pro sekci sledování spotřeb.
 * Zobrazuje přehled nemovitostí formou asymetrické, organické kompozice karet.
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
      {properties.map((property, index) => {
        const isPrimary = index === 0;

        return (
          <div
            key={property.name}
            className={cn(
              "p-5 shadow-sm hover:shadow-md transition-shadow duration-300",
              isPrimary
                ? "bg-sage-deep text-sage-content rounded-tl-md rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
                : "md:ml-6 bg-surface-alt rounded-tl-3xl rounded-tr-3xl rounded-br-md rounded-bl-3xl",
            )}
          >
            <h4
              className={cn(
                "text-lg font-bold mb-4 flex items-center gap-2",
                isPrimary ? "text-sage-content" : "text-text-main",
              )}
            >
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
                          "p-2 rounded-tl-lg rounded-tr-lg rounded-br-lg transition-colors",
                          ColorMap[item.type],
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={cn(
                          "text-sm font-medium transition-colors",
                          isPrimary
                            ? "text-sage-content/70 group-hover:text-sage-content"
                            : "text-text-muted group-hover:text-text-main",
                        )}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span
                      className={isPrimary ? "text-sage-content" : "text-text-main"}
                    >
                      <span className="text-base font-bold">{item.value}</span>
                      &nbsp;{item.unit}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

ConsumptionDashboard.displayName = "ConsumptionDashboard";
