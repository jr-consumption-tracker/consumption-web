import { tv } from "tailwind-variants";

export const logoTextVariants = tv({
  variants: {
    position: {
      top: "tracking-tight uppercase font-semibold opacity-95 text-left bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:from-primary group-hover:to-foreground transition-all duration-700",
      bottom:
        "font-extrabold tracking-tight -mt-1 flex items-center gap-2 text-left relative bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:from-foreground group-hover:via-primary group-hover:to-foreground transition-all duration-700",
    },
    variant: {
      default: "",
      light: "",
      dark: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    scrolled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    // Top text sizes
    { position: "top", size: "sm", scrolled: false, class: "text-sm" },
    { position: "top", size: "md", scrolled: false, class: "text-sm" },
    { position: "top", size: "lg", scrolled: false, class: "text-base" },
    { position: "top", size: "xl", scrolled: false, class: "text-lg" },
    { position: "top", size: "sm", scrolled: true, class: "text-xs" },
    { position: "top", size: "md", scrolled: true, class: "text-xs" },
    { position: "top", size: "lg", scrolled: true, class: "text-sm" },
    { position: "top", size: "xl", scrolled: true, class: "text-base" },
    // Bottom text sizes
    {
      position: "bottom",
      size: "sm",
      scrolled: false,
      class: "text-xl lg:text-2xl",
    },
    {
      position: "bottom",
      size: "md",
      scrolled: false,
      class: "text-2xl lg:text-3xl",
    },
    {
      position: "bottom",
      size: "lg",
      scrolled: false,
      class: "text-3xl lg:text-4xl",
    },
    {
      position: "bottom",
      size: "xl",
      scrolled: false,
      class: "text-4xl lg:text-5xl",
    },
    {
      position: "bottom",
      size: "sm",
      scrolled: true,
      class: "text-lg lg:text-xl",
    },
    {
      position: "bottom",
      size: "md",
      scrolled: true,
      class: "text-xl lg:text-2xl",
    },
    {
      position: "bottom",
      size: "lg",
      scrolled: true,
      class: "text-2xl lg:text-3xl",
    },
    {
      position: "bottom",
      size: "xl",
      scrolled: true,
      class: "text-3xl lg:text-4xl",
    },
  ],
  defaultVariants: {
    position: "top",
    variant: "default",
    size: "md",
    scrolled: false,
  },
});
