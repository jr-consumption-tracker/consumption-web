import { tv } from "tailwind-variants";

/** Color/gradient variants for the logo icon container */
export const logoColorVariants = tv({
  base: "bg-gradient-to-br shadow-xl transition-all duration-500 flex items-center justify-center",
  variants: {
    variant: {
      default:
        "from-primary via-primary-dark to-primary-dark shadow-primary/25 rounded-2xl",
      light:
        "from-primary-light via-primary to-primary-dark shadow-primary-light/25 rounded-2xl",
      dark: "from-primary-dark via-primary-dark to-slate-900 shadow-primary-dark/25 rounded-2xl",
    },
    size: {
      sm: "w-10 h-10 lg:w-12 lg:h-12",
      md: "w-12 h-12 lg:w-14 lg:h-14",
      lg: "w-14 h-14 lg:w-16 lg:h-16",
      xl: "w-18 h-18 lg:w-20 lg:h-20",
    },
    scrolled: {
      true: {},
      false: {},
    },
    disableHover: {
      true: "",
      false:
        "transform group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/40",
    },
  },
  compoundVariants: [
    { size: "sm", scrolled: true, class: "w-8 h-8 lg:w-10 lg:h-10" },
    { size: "md", scrolled: true, class: "w-10 h-10 lg:w-12 lg:h-12" },
    { size: "lg", scrolled: true, class: "w-12 h-12 lg:w-14 lg:h-14" },
    { size: "xl", scrolled: true, class: "w-16 h-16 lg:w-18 lg:h-18" },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    scrolled: false,
    disableHover: false,
  },
});

/** Size for the energy icons (Flame, Droplet, Zap) */
export const logoEnergyIconVariants = tv({
  base: "transition-all duration-500 drop-shadow-lg",
  variants: {
    size: {
      xs: "w-3 h-3 lg:w-4 lg:h-4",
      sm: "w-4 h-4 lg:w-5 lg:h-5",
      md: "w-[22px] h-[22px] lg:w-6 lg:h-6",
      lg: "w-6 h-6 lg:w-7 lg:h-7",
      xl: "w-8 h-8 lg:w-9 lg:h-9",
    },
    scrolled: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    { size: "xs", scrolled: true, class: "w-2.5 h-2.5 lg:w-3 h-3" },
    { size: "sm", scrolled: true, class: "w-3.5 h-3.5 lg:w-4 h-4" },
    { size: "md", scrolled: true, class: "w-4 h-4 lg:w-5 h-5" },
    { size: "lg", scrolled: true, class: "w-5 h-5 lg:w-[22px] h-[22px]" },
    { size: "xl", scrolled: true, class: "w-7 h-7 lg:w-8 h-8" },
  ],
  defaultVariants: {
    size: "md",
    scrolled: false,
  },
});

/** Glow effect sizes for the logo icon */
export const logoGlowSizeVariants = tv({
  base: "absolute inset-0 bg-gradient-to-br rounded-2xl blur-xl opacity-30 transition-opacity duration-500 -z-10 animate-glow-pulse",
  variants: {
    variant: {
      default: "from-primary to-primary-dark",
      light: "from-primary-light to-primary",
      dark: "from-primary-dark to-slate-900",
    },
    size: {
      sm: "w-10 h-10 lg:w-12 lg:h-12",
      md: "w-12 h-12 lg:w-14 lg:h-14",
      lg: "w-14 h-14 lg:w-16 lg:h-16",
      xl: "w-18 h-18 lg:w-20 lg:h-20",
    },
    scrolled: {
      true: {},
      false: {},
    },
    disableHover: {
      true: "",
      false: "group-hover:opacity-50",
    },
  },
  compoundVariants: [
    { size: "sm", scrolled: true, class: "w-8 h-8 lg:w-10 lg:h-10" },
    { size: "md", scrolled: true, class: "w-10 h-10 lg:w-12 lg:h-12" },
    { size: "lg", scrolled: true, class: "w-12 h-12 lg:w-14 lg:h-14" },
    { size: "xl", scrolled: true, class: "w-16 h-16 lg:w-18 lg:h-18" },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    scrolled: false,
    disableHover: false,
  },
});
