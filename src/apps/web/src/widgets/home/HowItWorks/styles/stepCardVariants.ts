import { tv } from "tailwind-variants";

export const stepCardVariants = tv({
  slots: {
    base: "group relative flex flex-col rounded-3xl border border-border bg-surface p-10 transition-all duration-500 cubic-bezier(.16,1,.3,1) hover:-translate-y-3 hover:scale-[1.02] overflow-hidden",
    iconWrapper:
      "h-14 w-14 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:text-white",
    numberBadge:
      "absolute -top-2 -right-2 bg-border text-text-muted text-[10px] font-black rounded-full h-6 w-6 flex items-center justify-center shadow-sm ring-4 ring-surface transition-all duration-500 group-hover:scale-110 group-hover:text-white group-hover:shadow-lg group-hover:-translate-y-1",
    title:
      "text-xl font-black tracking-tight text-text-main transition-colors duration-300 break-words",
    glow: "absolute inset-x-0 -top-px h-px w-2/3 mx-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100",
    bgBlur:
      "absolute -bottom-16 -right-16 h-64 w-64 rounded-full blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-20",
    accentLine:
      "absolute inset-x-10 bottom-0 h-px transition-colors duration-500",
  },
  variants: {
    variant: {
      primary: {
        base: "hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)]",
        iconWrapper:
          "bg-primary/5 text-primary group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]",
        numberBadge: "group-hover:bg-primary",
        title: "group-hover:text-primary",
        glow: "bg-gradient-to-r from-transparent via-primary to-transparent",
        bgBlur: "bg-primary",
        accentLine:
          "bg-gradient-to-r from-transparent via-primary/40 to-transparent",
      },
      electricity: {
        base: "hover:border-electricity-500/50 hover:shadow-[0_20px_50px_rgba(var(--electricity-rgb),0.2)]",
        iconWrapper:
          "bg-electricity-500/5 text-electricity-500 group-hover:bg-electricity-500 group-hover:shadow-[0_0_20px_rgba(var(--electricity-rgb),0.4)]",
        numberBadge: "group-hover:bg-electricity-500",
        title: "group-hover:text-electricity-500",
        glow: "bg-gradient-to-r from-transparent via-electricity-500 to-transparent",
        bgBlur: "bg-electricity-500",
        accentLine:
          "bg-gradient-to-r from-transparent via-electricity-500/40 to-transparent",
      },
      mixed: {
        base: "hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2),0_20px_50px_rgba(var(--electricity-rgb),0.2)]",
        iconWrapper:
          "bg-gradient-to-br from-primary/5 to-electricity-500/5 text-primary group-hover:from-primary group-hover:to-electricity-500 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]",
        numberBadge:
          "group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-electricity-500",
        title: "group-hover:text-primary",
        glow: "bg-gradient-to-r from-transparent via-primary via-electricity-500 to-transparent",
        bgBlur:
          "bg-gradient-to-br from-primary to-electricity-500 group-hover:opacity-30",
        accentLine:
          "bg-gradient-to-r from-transparent via-primary/30 via-electricity-500/30 to-transparent",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
