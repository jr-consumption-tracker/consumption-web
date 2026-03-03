import { Section } from "@web/shared/components/Section";

import { HeroActions } from "./components/HeroActions";
import { HeroHeader } from "./components/HeroHeader";
import { HeroMission } from "./components/HeroMission";
import HeroBg from "./components/HeroBg";

/**
 * Hero - Hlavní orchestrátor pro Hero sekci
 * Koordinuje data a subkomponenty (zde čistě UI).
 *
 * @example
 * <Hero />
 */
export const Hero = () => {
  return (
    <Section
      className="relative overflow-hidden bg-surface"
      background={<HeroBg />}
    >
      <div className="text-center">
        <HeroHeader />
        <HeroMission />
        <HeroActions />
      </div>
    </Section>
  );
};

Hero.displayName = "Hero";
