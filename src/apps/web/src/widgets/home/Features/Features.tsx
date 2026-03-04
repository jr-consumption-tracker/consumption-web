import { Section } from "@web/shared/components/Section";

import { FeatureCards } from "./components/FeatureCards";
import { FeaturesBackground } from "./components/FeaturesBackground";
import { FeaturesHeader } from "./components/FeaturesHeader";

/**
 * Features - Main section orchestrator for home page features.
 * This component follows the Pure Orchestration Pattern, coordinating specialized
 * components and data constants to build the interactive features grid.
 *
 * @example
 * <Features />
 */
export const Features = () => {
  return (
    <Section
      id="features"
      className="isolate overflow-hidden bg-primary dark:bg-primary transition-colors duration-700"
      background={<FeaturesBackground />}
    >
      <FeaturesHeader />
      <FeatureCards />
    </Section>
  );
};

Features.displayName = "Features";
