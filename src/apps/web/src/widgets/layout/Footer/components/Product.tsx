import { FooterLinkSection } from "./FooterLinkSection";

/**
 * Product — product links section in footer
 */
export const Product = () => {
  const links = [
    { to: "/" as const, labelKey: "footer.product.features" },
    { to: "/" as const, labelKey: "footer.product.pricing" },
  ];
  return (
    <FooterLinkSection titleKey="footer.product.title" links={links} animated />
  );
};
