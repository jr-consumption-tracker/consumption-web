import { tv } from "tailwind-variants";

export const logoVariants = tv({
  slots: {
    container:
      "group relative flex items-center transition-all duration-700 hover:scale-105",
    iconWrapper:
      "relative flex items-center justify-center rounded-full text-white overflow-hidden transition-all duration-700",
    glowBase:
      "absolute inset-0 blur-xl opacity-40 animate-glow transition-opacity duration-700 group-hover:opacity-70",
    spinRing:
      "absolute inset-0 rounded-full border border-transparent bg-gradient-to-tr transition-all duration-500",
    iconPrimary:
      "relative z-10 transition-transform duration-500 group-hover:scale-110",
    iconSecondary:
      "absolute z-0 opacity-40 blur-[1px] transition-all duration-500 group-hover:opacity-80",
    textContainer:
      "ml-3 flex flex-col justify-center overflow-hidden transition-all duration-500",
    textLine1:
      "font-black tracking-widest text-text-main leading-none transition-colors duration-300 group-hover:text-primary",
    textLine2:
      "font-bold tracking-[0.2em] text-text-muted leading-tight uppercase relative inline-flex",
    textUnderline:
      "absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full",
  },
  variants: {
    size: {
      sm: {
        container: "gap-2",
        iconWrapper: "h-8 w-8",
        iconPrimary: "h-4 w-4",
        iconSecondary: "h-4 w-4",
        textLine1: "text-xs",
        textLine2: "text-[10px]",
      },
      md: {
        container: "gap-3",
        iconWrapper: "h-11 w-11 shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]",
        iconPrimary: "h-5 w-5",
        iconSecondary: "h-5 w-5",
        textLine1: "text-sm",
        textLine2: "text-[11px]",
      },
      lg: {
        container: "gap-4",
        iconWrapper: "h-14 w-14 shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)]",
        iconPrimary: "h-7 w-7",
        iconSecondary: "h-7 w-7",
        textLine1: "text-lg",
        textLine2: "text-[13px]",
      },
    },
    variant: {
      default: {
        iconWrapper: "bg-primary",
        glowBase: "bg-primary",
        spinRing:
          "from-white/10 via-white/5 to-white/30 group-hover:from-white/40 group-hover:to-white/10",
      },
      light: {
        iconWrapper: "bg-white text-primary",
        glowBase: "bg-white",
        spinRing:
          "from-primary/10 via-transparent to-primary/30 group-hover:from-primary/40 group-hover:to-primary/10",
        textLine1: "text-white group-hover:text-white/90",
        textLine2: "text-white/70",
      },
      dark: {
        iconWrapper: "bg-surface text-primary border border-white/10",
        glowBase: "bg-primary",
        spinRing:
          "from-primary/20 via-transparent to-primary/50 group-hover:from-primary/60 group-hover:to-primary/20",
        textLine1: "text-white group-hover:text-primary-light",
        textLine2: "text-white/60",
      },
    },
    scrolled: {
      true: {
        container: "scale-90 opacity-90",
        textContainer: "hidden lg:flex origin-left",
      },
      false: {
        container: "scale-100",
        textContainer: "hidden lg:flex",
      },
    },
    showText: {
      true: {},
      false: {
        textContainer: "!hidden",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
    scrolled: false,
    showText: true,
  },
});
