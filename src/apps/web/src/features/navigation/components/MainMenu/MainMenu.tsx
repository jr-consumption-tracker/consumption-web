interface MainMenuProps {
  mobile?: boolean;
}

const NAV_LINKS = [
  { href: "#features", label: "Vlastnosti" },
  { href: "#motivation", label: "Proč my?" },
  { href: "#pricing", label: "Ceník" },
];

export const MainMenu = ({ mobile = false }: MainMenuProps) => {
  if (mobile) {
    return (
      <div className="flex flex-col gap-2">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group px-6 py-4 rounded-2xl text-lg font-semibold text-text-muted hover:text-text-main hover:bg-white/5 transition-all duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="relative px-5 py-2 text-sm font-semibold text-text-muted hover:text-text-main transition-all duration-300 group"
        >
          {/* Active spotlight effect */}
          <span className="absolute inset-x-2 inset-y-1 bg-primary/0 group-hover:bg-primary/10 rounded-full transition-all duration-300 group-hover:scale-110" />
          <span className="relative z-10">{link.label}</span>
          {/* Animated dot indicator */}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
        </a>
      ))}
    </div>
  );
};
