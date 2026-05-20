import { HomeFeatures } from "@web/widgets/home/HomeFeatures";
import { HomeHero } from "@web/widgets/home/HomeHero";
import { HomeHowItWorks } from "@web/widgets/home/HomeHowItWorks";
import { HomePricing } from "@web/widgets/home/HomePricing";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeHowItWorks />
      <HomeFeatures />
      <HomePricing />
    </>
  );
};

Home.displayName = "Home";

export default Home;
