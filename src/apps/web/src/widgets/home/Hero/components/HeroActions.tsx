import { memo } from "react";

/**
 * HeroActions - Call-to-action tlačítka
 */
export const HeroActions = memo(() => {
  return (
    <div className="mt-12 flex items-center justify-center gap-x-8">
      <button className="rounded-full bg-primary px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-primary/40 transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-primary/60 active:scale-95">
        Začít zdarma
      </button>
      <button className="text-xl font-bold leading-6 text-text-main transition-all hover:text-primary group">
        Více informací{" "}
        <span
          className="inline-block transition-transform group-hover:translate-x-2"
          aria-hidden="true"
        >
          →
        </span>
      </button>
    </div>
  );
});

HeroActions.displayName = "HeroActions";
