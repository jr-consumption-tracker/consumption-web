import { PricingCta } from "@web/widgets/pricing/PricingCta";
import { PricingFaq } from "@web/widgets/pricing/PricingFaq";
import { PricingHero } from "@web/widgets/pricing/PricingHero";
import { PricingPlans } from "@web/widgets/pricing/PricingPlans";
import { PricingTable } from "@web/widgets/pricing/PricingTable";

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingTable />
      <PricingFaq />
      <PricingCta />
    </>
  );
};

Pricing.displayName = "Pricing";

export default Pricing;
