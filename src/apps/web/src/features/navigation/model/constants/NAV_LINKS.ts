export const NAV_LINKS = [
  { href: "/", labelKey: "navigation.home" },
  { href: "/vlastnosti", labelKey: "navigation.features" },
  { href: "/cenik", labelKey: "navigation.pricing" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
