import { cn } from "@repo/utils";

interface LogoTextDecorationProps {
  reversed?: boolean;
  scrolled?: boolean;
}

/**
 * LogoTextDecoration — organic ribbon mark under "Energie".
 * Reads as a leaf/flame silhouette and an upward trend line at once.
 * Width tracks the parent at 110% (left-aligned, overflowing past the
 * right edge) so it reads as a tapering brushstroke rather than a
 * rigid text-width underline. Height is a fixed px value (not a %) so
 * the ribbon keeps its designed thickness at every text size — a
 * percentage height here would resolve against the text line's height,
 * squashing the shape to a sliver.
 * In the scrolled state, height and vertical offset shrink less than
 * the text does (kept legible) and the gap to the text tightens, to
 * recover the vertical space the scrolled header's tighter padding
 * doesn't leave room for.
 */
export const LogoTextDecoration = ({ reversed = false, scrolled = false }: LogoTextDecorationProps) => (
  <svg
    className={cn(
      "absolute left-0 w-[110%]",
      scrolled ? "top-[calc(100%-3px)] h-3" : "top-full h-4",
      reversed ? "text-text-main" : "text-primary",
    )}
    viewBox="0 0 140 22"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M0 18 C 20 20, 35 16, 50 12 C 65 8, 85 10, 100 6 C 112 3, 122 -1, 132 2 C 136 3.3, 138 6, 137 9 C 133 6.5, 128 6, 122 8 C 108 12, 92 9, 78 13 C 62 17.5, 42 16, 24 20 C 15 21.5, 6 21, 0 18 Z"
    />
  </svg>
);
