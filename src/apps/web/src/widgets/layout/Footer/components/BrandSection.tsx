import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import { siteConfig } from "@web/app/config/site";
import { Logo } from "@web/shared/components/Logo";

import type { LucideIcon } from "lucide-react";

const contactClass =
  "flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 group";

const iconClass =
  "w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-200";

interface ContactLinkProps {
  href: string;
  icon: LucideIcon;
  children: string;
}

const ContactLink = ({ href, icon: Icon, children }: ContactLinkProps) => (
  <a
    href={href}
    {...(href.startsWith("http")
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {})}
    className={contactClass}
  >
    <Icon className={iconClass} />
    <span>{children}</span>
  </a>
);

/**
 * BrandSection - Brand and contact information section
 * Contains logo, description, contact details, and social links
 */
export const BrandSection = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col items-center gap-6 md:items-start">
      <Logo
        size="lg"
        disableHover={true}
        className="justify-center md:justify-start"
      />

      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md text-center md:text-left">
        {t("footer.description")}
      </p>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-3 md:items-start">
        <ContactLink href="mailto:kucharuv.denik@gmail.com" icon={Mail}>
          {siteConfig.contact.email}
        </ContactLink>
        <ContactLink href="tel:+420777811790" icon={Phone}>
          {siteConfig.contact.phone}
        </ContactLink>
        <ContactLink href={siteConfig.contact.location.mapLink} icon={MapPin}>
          {siteConfig.contact.location.display}
        </ContactLink>
      </div>
    </div>
  );
};
