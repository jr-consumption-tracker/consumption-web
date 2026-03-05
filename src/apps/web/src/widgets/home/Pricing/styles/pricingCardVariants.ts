import { tv } from "tailwind-variants";

export const pricingCardVariants = tv({
  slots: {
    container:
      "relative flex flex-col rounded-3xl p-8 lg:p-10 transition-all duration-500 group",
    badge:
      "absolute top-0 right-0 bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white rounded-bl-xl",
    title: "text-lg font-bold leading-8 uppercase tracking-widest",
    description: "mt-4 text-sm leading-6 text-text-muted",
    priceContainer: "mt-6 flex items-baseline gap-x-1",
    priceAmount: "text-5xl font-black tracking-tight text-text-main",
    priceInterval: "text-sm font-semibold leading-6 text-text-muted",
    featuresList: "mt-8 space-y-4 text-sm leading-6 grow",
    featureItem: "flex gap-x-3 font-medium",
    featureIcon: "h-6 w-5 flex-none",
    ctaButton:
      "mt-10 flex w-full items-center justify-center rounded-2xl px-6 py-4 text-center text-sm uppercase tracking-widest transition-all duration-300",
  },
  variants: {
    highlighted: {
      true: {
        container:
          "bg-primary/5 ring-2 ring-primary shadow-2xl shadow-primary/20 overflow-hidden scale-[1.02] hover:scale-[1.04] hover:-translate-y-2 hover:shadow-primary/40 hover:bg-primary/10",
        title: "text-primary",
        featuresList: "text-text-main",
        featureItem: "text-primary font-bold",
        ctaButton:
          "bg-primary font-black text-white shadow-xl shadow-primary/40 hover:bg-primary/90 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/60 group-hover:bg-primary/90",
      },
      false: {
        container:
          "bg-surface ring-1 ring-border shadow-sm hover:shadow-xl hover:-translate-y-1 hover:ring-primary/30",
        title: "text-text-main",
        featuresList: "text-text-muted",
        featureItem: "text-primary",
        ctaButton:
          "font-bold text-text-main ring-1 ring-inset ring-border hover:ring-primary hover:text-primary hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-md",
      },
    },
  },
  defaultVariants: {
    highlighted: false,
  },
});
