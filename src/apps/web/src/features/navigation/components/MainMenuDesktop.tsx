import { useRef, useState } from "react";
import type { MouseEvent } from "react";

import { cn } from "@repo/utils";

interface SpotlightState {
  left: number;
  width: number;
  opacity: number;
}

const NAV_LINKS = [
  { href: "#features", label: "Vlastnosti" },
  { href: "#motivation", label: "Proč my?" },
  { href: "#pricing", label: "Ceník" },
];

export const MainMenuDesktop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [spotlightPos, setSpotlightPos] = useState<SpotlightState>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleMouseEnter = (idx: number, e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (containerRect) {
      setHoveredIdx(idx);
      setSpotlightPos({
        left: rect.left - containerRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    setSpotlightPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center h-full"
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute h-9 bg-white/10 rounded-full blur-[2px] transition-all duration-500 ease-out-quint pointer-events-none"
        style={{
          left: spotlightPos.left,
          width: spotlightPos.width,
          opacity: spotlightPos.opacity,
          transform: `scale(${spotlightPos.opacity ? 1 : 0.8})`,
        }}
      >
        <div className="absolute inset-0 bg-primary/20 blur-md rounded-full animate-pulse" />
      </div>

      {NAV_LINKS.map((link, idx) => (
        <a
          key={link.href}
          href={link.href}
          onMouseEnter={(e) => handleMouseEnter(idx, e)}
          className={cn(
            "relative z-10 px-5 py-2 text-sm font-bold tracking-tight transition-all duration-500",
            hoveredIdx === idx
              ? "text-text-main scale-105"
              : "text-text-muted hover:text-text-main",
          )}
        >
          {link.label}

          <div
            className={cn(
              "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-500",
              hoveredIdx === idx
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-2 scale-0",
            )}
          />
        </a>
      ))}
    </div>
  );
};

MainMenuDesktop.displayName = "MainMenuDesktop";
