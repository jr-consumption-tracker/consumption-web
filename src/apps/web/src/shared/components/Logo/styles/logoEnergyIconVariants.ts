import { tv } from "tailwind-variants";

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
