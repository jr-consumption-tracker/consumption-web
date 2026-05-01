import { Features } from "@web/widgets/home/Features";
import { Hero } from "@web/widgets/home/Hero";
import { HowItWorks } from "@web/widgets/home/HowItWorks";
import { Pricing } from "@web/widgets/home/Pricing";

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
    </>
  );
};

Home.displayName = "Home";

export default Home;
