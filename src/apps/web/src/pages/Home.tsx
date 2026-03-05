import { PageLayout } from "@web/app/layouts/PageLayout";
import { Features } from "@web/widgets/home/Features/Features";
import { Hero } from "@web/widgets/home/Hero/Hero";
import { HowItWorks } from "@web/widgets/home/HowItWorks/HowItWorks";
import { Pricing } from "@web/widgets/home/Pricing/Pricing";

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
    </PageLayout>
  );
};

Home.displayName = "Home";

export default Home;
