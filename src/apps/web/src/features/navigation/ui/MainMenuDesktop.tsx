import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@repo/utils";
import { Link, useRouterState } from "@tanstack/react-router";

import { NAV_LINKS } from "../model/constants/NAV_LINKS";

import type { MouseEvent } from "react";

interface SpotlightState {
  left: number;
  width: number;
  opacity: number;
}

export const MainMenuDesktop = () => {
  const { t } = useTranslation("common");
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const activeSpotlightRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [spotlightPos, setSpotlightPos] = useState<SpotlightState>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const { location } = useRouterState();
  const activeIdx = NAV_LINKS.findIndex((l) => l.href === location.pathname);

  useLayoutEffect(() => {
    const el = activeSpotlightRef.current;
    if (!el) return;

    if (activeIdx >= 0) {
      const linkEl = linkRefs.current[activeIdx];
      const containerEl = containerRef.current;
      if (linkEl && containerEl) {
        const rect = linkEl.getBoundingClientRect();
        const cRect = containerEl.getBoundingClientRect();
        el.style.left = `${rect.left - cRect.left}px`;
        el.style.width = `${rect.width}px`;
        el.style.opacity = "1";
      }
    } else {
      el.style.opacity = "0";
    }
  }, [activeIdx]);

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
      {/* Hover spotlight */}
      <div
        className="absolute h-9 bg-white/10 rounded-full blur-[2px] transition-all duration-500 ease-out-quint pointer-events-none"
        style={{
          left: spotlightPos.left,
          width: spotlightPos.width,
          opacity: spotlightPos.opacity,
          transform: `scale(${spotlightPos.opacity ? 1 : 0.8})`,
        }}
      >
        <div className="absolute inset-0 bg-primary/20 blur-md rounded-full" />
      </div>

      {/* Active spotlight */}
      <div
        ref={activeSpotlightRef}
        className="absolute h-9 bg-white/10 rounded-full blur-[2px] pointer-events-none transition-opacity duration-500"
        style={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-primary/30 blur-md rounded-full" />
      </div>

      {NAV_LINKS.map((link, idx) => {
        const isHighlighted = hoveredIdx === idx || activeIdx === idx;
        return (
          <Link
            key={link.href}
            to={link.href}
            ref={(el) => {
              linkRefs.current[idx] = el;
            }}
            onMouseEnter={(e) =>
              handleMouseEnter(
                idx,
                e as unknown as MouseEvent<HTMLAnchorElement>,
              )
            }
            className={cn(
              "relative z-10 px-5 py-2 text-sm font-bold tracking-tight transition-all duration-500",
              isHighlighted
                ? "text-text-main scale-105"
                : "text-text-muted hover:text-text-main",
            )}
          >
            {t(link.labelKey)}

            <div
              className={cn(
                "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-500",
                isHighlighted
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2 scale-0",
              )}
            />
          </Link>
        );
      })}
    </div>
  );
};

MainMenuDesktop.displayName = "MainMenuDesktop";
