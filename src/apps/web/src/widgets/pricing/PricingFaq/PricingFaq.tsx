import { useTranslation } from "react-i18next";

import { Accordion } from "@web/shared/ui/Accordion";
import { Section } from "@web/shared/ui/Section";

import type { AccordionItem } from "@web/shared/ui/Accordion";
import type { TFunction } from "i18next";

const getFaqItems = (t: TFunction<"pricing">): AccordionItem[] => {
  const items = t("faq.items", { returnObjects: true }) as {
    question: string;
    answer: string;
  }[];

  return items.map((item) => ({
    title: item.question,
    content: item.answer,
  }));
};

export const PricingFaq = () => {
  const { t } = useTranslation("pricing");

  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-text-main text-center sm:text-4xl">
          {t("faq.title")}
        </h2>

        <Accordion items={getFaqItems(t)} />
      </div>
    </Section>
  );
};

PricingFaq.displayName = "PricingFaq";
