import { useRef } from "react";

import { cn } from "@repo/utils";

import { NAV_LINKS } from "../constants/NavLinks";
import { useMainMenuSpotlight } from "../hooks/useMainMenuSpotlight";

export const MainMenuDesktop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { hoveredIdx, spotlightPos, handleMouseEnter, handleMouseLeave } =
    useMainMenuSpotlight(containerRef);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center h-full"
      onMouseLeave={handleMouseLeave}
    >
      {/* Liquid Spotlight Background */}
      <div
        className="absolute h-9 bg-white/10 rounded-full blur-[2px] transition-all duration-500 ease-out-quint pointer-events-none"
        style={{
          left: spotlightPos.left,
          width: spotlightPos.width,
          opacity: spotlightPos.opacity,
          transform: `scale(${spotlightPos.opacity ? 1 : 0.8})`,
        }}
      >
        {/* Glow core */}
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

          {/* Animated dot indicator for active/hover state */}
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
