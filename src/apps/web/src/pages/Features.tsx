import { FeaturesHero } from "@web/widgets/features/FeaturesHero";
import { FeaturesOverview } from "@web/widgets/features/FeaturesOverview";

const Features = () => {
  return (
    <>
      <FeaturesHero />
      <FeaturesOverview />
    </>
  );
};

Features.displayName = "Features";

export default Features;
