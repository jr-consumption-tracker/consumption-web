import { Droplets, Flame, Zap } from "lucide-react";

import { cn } from "@repo/utils";

import { OrganicBlob } from "@web/shared/ui/OrganicBlob";

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
              "relative p-5 shadow-sm hover:shadow-md transition-shadow duration-300",
              isPrimary
                ? "overflow-hidden bg-dark-block-surface text-dark-block-text rounded-tl-md rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
                : "md:ml-6 bg-surface-alt rounded-tl-3xl rounded-tr-3xl rounded-br-md rounded-bl-3xl",
            )}
          >
            {isPrimary && (
              <OrganicBlob className="pointer-events-none -top-10 -right-10 z-0 h-32 w-32 opacity-12" />
            )}

            <h4
              className={cn(
                "relative z-10 text-lg font-bold mb-4 flex items-center gap-2",
                isPrimary ? "text-dark-block-text" : "text-text-main",
              )}
            >
              {property.name}
            </h4>

            <div className="relative z-10 space-y-3">
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
                            ? "text-dark-block-text-muted group-hover:text-dark-block-text"
                            : "text-text-muted group-hover:text-text-main",
                        )}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span
                      className={
                        isPrimary ? "text-dark-block-text" : "text-text-main"
                      }
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
