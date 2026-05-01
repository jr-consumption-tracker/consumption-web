import { tv } from "tailwind-variants";

export const logoTextTopVariants = tv({
  base: "tracking-tight uppercase font-semibold opacity-95 text-left bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:from-primary group-hover:to-foreground transition-all duration-700",
  variants: {
    variant: {
      default: "text-slate-600 dark:text-slate-400",
      light: "text-slate-500 dark:text-slate-300",
      dark: "text-slate-800 dark:text-slate-500",
    },
    size: {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
    },
    scrolled: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    { size: "sm", scrolled: true, class: "text-xs" },
    { size: "md", scrolled: true, class: "text-xs" },
    { size: "lg", scrolled: true, class: "text-sm" },
    { size: "xl", scrolled: true, class: "text-base" },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    scrolled: false,
  },
});
