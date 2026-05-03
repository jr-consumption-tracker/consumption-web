import { FooterLinkSection } from "./FooterLinkSection";

const links = [
  { to: "/" as const, labelKey: "footer.company.about" },
  { to: "/" as const, labelKey: "footer.company.contact" },
];
/**
 * Company — company links section in footer
 */
export const Company = () => {
  return <FooterLinkSection titleKey="footer.company.title" links={links} />;
};
