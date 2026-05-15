import { useTranslation } from "react-i18next";

import { Link } from "@tanstack/react-router";

import type { FooterLink, FooterTranslationKey } from "../model/footer";

interface FooterLinkSectionProps {
  titleKey: FooterTranslationKey;
  links: readonly FooterLink[];
  /** Enable hover translate animation on links */
  animated?: boolean;
}

const linkBase =
  "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 whitespace-nowrap";

/**
 * FooterLinkSection — reusable section for link lists in footer.
 * Used by Product, Company, and Support sections.
 */
export const FooterLinkSection = ({
  titleKey,
  links,
  animated = false,
}: FooterLinkSectionProps) => {
  const { t } = useTranslation("common");

  const linkClass = animated
    ? `${linkBase} inline-block hover:translate-x-1 transform`
    : linkBase;

  return (
    <div className="text-center md:text-left">
      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-6 whitespace-nowrap">
        {t(titleKey)}
      </h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.labelKey}>
            <Link to={link.to} className={linkClass}>
              {t(link.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
