export const NAV_LINKS = [
  { href: "/", labelKey: "navigation.home" },
  { href: "/features", labelKey: "navigation.features" },
  { href: "/", labelKey: "navigation.howItWorks" },
  { href: "/", labelKey: "navigation.pricing" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
