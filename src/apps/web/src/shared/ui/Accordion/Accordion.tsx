import { ChevronDown } from "lucide-react";

import { Accordion as HeroAccordion } from "@heroui/react";

import type { AccordionProps as HeroAccordionProps } from "@heroui/react";
import type { AccordionItem } from "./model/types";

interface AccordionProps extends HeroAccordionProps {
  items: AccordionItem[];
}

export const Accordion = (props: AccordionProps) => {
  const { items, ...restProps } = props;

  return (
    <HeroAccordion {...restProps}>
      {items.map((item, index) => (
        <HeroAccordion.Item key={`accordion-item-${index}`}>
          <HeroAccordion.Heading>
            <HeroAccordion.Trigger>
              {item.icon ? (
                <span className="mr-3 size-4 shrink-0 text-muted">
                  <item.icon />
                </span>
              ) : null}
              {item.title}
              <HeroAccordion.Indicator>
                <ChevronDown />
              </HeroAccordion.Indicator>
            </HeroAccordion.Trigger>
          </HeroAccordion.Heading>

          <HeroAccordion.Panel>
            <HeroAccordion.Body>{item.content}</HeroAccordion.Body>
          </HeroAccordion.Panel>
        </HeroAccordion.Item>
      ))}
    </HeroAccordion>
  );
};
