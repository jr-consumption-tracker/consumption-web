import { useTranslation } from "react-i18next";

import {
  ChartBarIcon,
  HomeIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { Section } from "@web/shared/components/Section";

import { StepCard } from "./components/StepCard";

export const HowItWorks = () => {
  const { t } = useTranslation("home");

  return (
    <Section id="how-it-works" className="bg-surface">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-base font-bold uppercase tracking-widest text-primary block mb-2">
          {t("hero.howItWorks.subtitle")}
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl">
          {t("hero.howItWorks.title")}
        </h2>
        <p className="mt-6 text-lg leading-8 text-text-muted">
          {t("hero.howItWorks.description")}
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <StepCard
            number={1}
            variant="primary"
            icon={UserPlusIcon}
            title={t("hero.howItWorks.steps.step1.title")}
            description={t("hero.howItWorks.steps.step1.description")}
          />
          <StepCard
            number={2}
            variant="mixed"
            icon={HomeIcon}
            title={t("hero.howItWorks.steps.step2.title")}
            description={t("hero.howItWorks.steps.step2.description")}
          />
          <StepCard
            number={3}
            variant="electricity"
            icon={ChartBarIcon}
            title={t("hero.howItWorks.steps.step3.title")}
            description={t("hero.howItWorks.steps.step3.description")}
          />
        </dl>
      </div>
    </Section>
  );
};

HowItWorks.displayName = "HowItWorks";
