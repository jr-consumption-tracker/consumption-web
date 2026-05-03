import { FooterLinkSection } from "./FooterLinkSection";

import type { FooterLink } from "../types/FooterLink";

const links = [
  { to: "/" as const, labelKey: "footer.legal.privacy" },
  { to: "/" as const, labelKey: "footer.legal.terms" },
  { to: "/" as const, labelKey: "footer.legal.cookies" },
] satisfies readonly FooterLink[];

/**
 * Legal — legal links section in footer
 */
export const Legal = () => {
  return <FooterLinkSection titleKey="footer.legal.title" links={links} />;
};
