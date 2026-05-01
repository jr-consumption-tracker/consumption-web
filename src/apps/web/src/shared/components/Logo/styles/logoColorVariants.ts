import { tv } from "tailwind-variants";

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
