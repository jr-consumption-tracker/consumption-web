import { FooterLinkSection } from "./FooterLinkSection";
import type { FooterLink } from "../types/FooterLink";

/**
 * Product — product links section in footer
 */
export const Product = () => {
  const links = [
    { to: "/" as const, labelKey: "footer.product.features" },
    { to: "/" as const, labelKey: "footer.product.pricing" },
  ] satisfies readonly FooterLink[];
  return (
    <FooterLinkSection titleKey="footer.product.title" links={links} animated />
  );
};
