import { FooterLinkSection } from "./FooterLinkSection";

const links = [
  { to: "/" as const, labelKey: "footer.legal.privacy" },
  { to: "/" as const, labelKey: "footer.legal.terms" },
  { to: "/" as const, labelKey: "footer.legal.cookies" },
];

/**
 * Legal — legal links section in footer
 */
export const Legal = () => {
  return <FooterLinkSection titleKey="footer.legal.title2" links={links} />;
};
