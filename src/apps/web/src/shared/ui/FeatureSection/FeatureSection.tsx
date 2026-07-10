import type { ReactNode } from "react";
import { cn } from "@repo/utils";

import { Section } from "../Section";

interface FeatureSectionProps {
  title: string;
  description: string;
  visual: ReactNode;
  eyebrow?: string;
  reverse?: boolean;
  className?: string;
  background?: ReactNode;
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
  eyebrow,
  reverse = false,
  className,
  background,
}: FeatureSectionProps) => {
  return (
    <Section className={cn("overflow-hidden", className)} background={background}>
      <div
        className={cn(
          "grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-24 items-center",
          reverse && "xl:direction-rtl", // This is a trick to reverse row, but flex-row-reverse is better for flex
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-center",
            reverse ? "xl:order-2" : "xl:order-1",
          )}
        >
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              {eyebrow}
            </p>
          )}
          <h3 className="text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl mb-6">
            {title}
          </h3>
          <p className="text-lg leading-8 text-text-muted max-w-xl">
            {description}
          </p>
        </div>

        <div
          className={cn(
            "relative w-full aspect-video flex items-center justify-center bg-surface-soft rounded-3xl p-4 xl:p-8",
            reverse ? "xl:order-1" : "xl:order-2",
          )}
        >
          {visual}
        </div>
      </div>
    </Section>
  );
};

FeatureSection.displayName = "FeatureSection";
