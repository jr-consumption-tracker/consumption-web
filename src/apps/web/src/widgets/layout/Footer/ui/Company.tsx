import { FooterLinkSection } from "./FooterLinkSection";
import type { FooterLink } from "../model/footer";

const links = [
  { to: "/" as const, labelKey: "footer.company.about" },
  { to: "/" as const, labelKey: "footer.company.contact" },
] satisfies readonly FooterLink[];
/**
 * Company — company links section in footer
 */
export const Company = () => {
  return <FooterLinkSection titleKey="footer.company.title" links={links} />;
};
