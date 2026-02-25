import { useState, useRef } from "react";

interface MainMenuProps {
  mobile?: boolean;
}

const NAV_LINKS = [
  { href: "#features", label: "Vlastnosti" },
  { href: "#motivation", label: "Proč my?" },
  { href: "#pricing", label: "Ceník" },
];

export const MainMenu = ({ mobile = false }: MainMenuProps) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [spotlightPos, setSpotlightPos] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

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

  if (mobile) {
    return (
      <div className="flex flex-col gap-1">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between px-6 py-5 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
          >
            <span className="text-xl font-bold text-text-muted group-hover:text-text-main transition-colors lowercase tracking-tighter">
              {link.label}
            </span>
            <div className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative flex items-center h-full"
      onMouseLeave={handleMouseLeave}
    >
      {/* Liquid Spotlight Background */}
      <div
        className="absolute h-9 bg-white/10 rounded-full blur-[2px] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none"
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
          className={[
            "relative z-10 px-5 py-2 text-sm font-bold tracking-tight transition-all duration-500",
            hoveredIdx === idx
              ? "text-text-main scale-105"
              : "text-text-muted hover:text-text-main",
          ].join(" ")}
        >
          {link.label}

          {/* Animated dot indicator for active/hover state */}
          <div
            className={[
              "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-500",
              hoveredIdx === idx
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-2 scale-0",
            ].join(" ")}
          />
        </a>
      ))}
    </div>
  );
};
