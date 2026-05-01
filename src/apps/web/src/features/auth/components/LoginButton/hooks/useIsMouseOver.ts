"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * useIsMouseOver - Hook pro sledování, zda je myš fyzicky nad elementem
 *
 * Používá vlastní mouseenter/mouseleave listenery přímo na DOM elementu,
 * což funguje nezávisle na CSS z-index nebo vrstvení popoverů.
 *
 * @param ref - Ref na sledovaný DOM element
 * @returns isMouseOver - boolean indikující, zda je myš nad elementem
 */
export const useIsMouseOver = (
  ref: RefObject<HTMLElement | null>,
): { isMouseOver: boolean } => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseEnter = () => setIsMouseOver(true);
    const handleMouseLeave = () => setIsMouseOver(false);

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  return { isMouseOver };
};
