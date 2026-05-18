import type { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

export type FooterTranslationKey =
  | "footer.product.title"
  | "footer.product.features"
  | "footer.product.pricing"
  | "footer.company.title"
  | "footer.company.about"
  | "footer.company.contact"
  | "footer.legal.title"
  | "footer.legal.privacy"
  | "footer.legal.terms"
  | "footer.legal.cookies";

export interface FooterLink {
  to: ComponentProps<typeof Link>["to"];
  labelKey: FooterTranslationKey;
}
