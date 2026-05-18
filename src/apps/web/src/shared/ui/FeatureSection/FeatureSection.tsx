import type { ReactNode } from "react";
import { cn } from "@repo/utils";

import { Section } from "../Section";

interface FeatureSectionProps {
  title: string;
  description: string;
  visual: ReactNode;
  reverse?: boolean;
  className?: string;
}

/**
 * FeatureSection - Layout komponenta pro zobrazení funkce.
 * Obsahuje textový blok a vizuální prvek (např. graf, obrázek).
 * Podporuje prohození stran pomocí prop `reverse`.
 */
export const FeatureSection = ({
  title,
  description,
  visual,
  reverse = false,
  className,
}: FeatureSectionProps) => {
  return (
    <Section className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",
          reverse && "lg:direction-rtl", // This is a trick to reverse row, but flex-row-reverse is better for flex
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-center",
            reverse ? "lg:order-2" : "lg:order-1",
          )}
        >
          <h3 className="text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl mb-6">
            {title}
          </h3>
          <p className="text-lg leading-8 text-text-muted max-w-xl">
            {description}
          </p>
        </div>

        <div
          className={cn(
            "relative w-full aspect-square lg:aspect-video flex items-center justify-center bg-surface-soft rounded-3xl p-4 lg:p-8",
            reverse ? "lg:order-1" : "lg:order-2",
          )}
        >
          {visual}
        </div>
      </div>
    </Section>
  );
};

FeatureSection.displayName = "FeatureSection";
