import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1500;

const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useCountUpOnView = (target: number) => {
  const ref = useRef<HTMLDivElement>(null!);
  const [value, setValue] = useState(() =>
    prefersReducedMotion() ? target : 0,
  );
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        observer.disconnect();

        const startTime = performance.now();

        const step = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / DURATION_MS, 1);
          setValue(Math.round(easeOutQuad(progress) * target));

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target]);

  return { ref, value };
};
