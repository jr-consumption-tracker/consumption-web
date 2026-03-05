import { useState } from "react";

import type { MainMenuSpotlight } from "../types/MainMenuSpotlight";

export const useMainMenuSpotlight = (
  containerRef: React.RefObject<HTMLDivElement | null>,
) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [spotlightPos, setSpotlightPos] = useState<MainMenuSpotlight>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleMouseEnter = (
    idx: number,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
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

  return {
    hoveredIdx,
    spotlightPos,
    handleMouseEnter,
    handleMouseLeave,
  };
};
