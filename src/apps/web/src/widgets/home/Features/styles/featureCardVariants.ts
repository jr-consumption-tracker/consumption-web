import { tv } from "tailwind-variants";

/**
 * FeatureCard styles defined using tailwind-variants
 */
export const featureCardVariants = tv({
  slots: {
    container:
      "group relative flex flex-col rounded-3xl border border-white/10 dark:border-primary/20 bg-primary-dark/80 dark:bg-primary-dark p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/50 backdrop-blur-xl group-hover:backdrop-blur-2xl overflow-hidden text-left",
    glow: "absolute -inset-px rounded-3xl border opacity-0 transition-opacity duration-500 group-hover:opacity-100",
    blurBlob:
      "absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl transition-all duration-700 opacity-10 group-hover:opacity-40 group-hover:scale-150 group-hover:blur-3xl",
    iconWrapper:
      "relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110",
    icon: "h-7 w-7",
    content: "relative flex flex-auto flex-col z-10 text-left",
    title:
      "text-xl font-black tracking-tight text-white dark:text-black group-hover:text-white dark:group-hover:text-black transition-colors duration-300",
    description:
      "mt-4 text-base leading-7 text-white/70 dark:text-black/80 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black",
    accentBar:
      "absolute inset-x-0 bottom-0 h-1.5 w-0 transition-all duration-700 ease-out group-hover:w-full",
    premiumBadge: "absolute top-4 right-4 z-20",
    premiumSpan:
      "inline-flex items-center rounded-full bg-white/10 dark:bg-primary-950/30 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white dark:text-black ring-1 ring-inset ring-white/10 dark:ring-black/20 backdrop-blur-md shadow-sm",
  },
  variants: {
    accentColor: {
      blue: {
        glow: "border-primary-300/40",
        blurBlob: "bg-primary",
        iconWrapper:
          "bg-primary/20 dark:bg-primary/10 text-white dark:text-black group-hover:bg-primary dark:group-hover:bg-primary-light group-hover:text-white dark:group-hover:text-black group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]",
        accentBar: "bg-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]",
      },
      yellow: {
        glow: "border-electricity-500/50",
        blurBlob: "bg-electricity-500",
        iconWrapper:
          "bg-electricity-500/10 text-electricity-500 group-hover:bg-electricity-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(var(--electricity-rgb),0.4)]",
        accentBar:
          "bg-electricity-500 shadow-[0_0_20px_rgba(var(--electricity-rgb),0.6)]",
      },
    },
  },
  defaultVariants: {
    accentColor: "blue",
  },
});
