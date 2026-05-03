const NAV_LINKS = [
  { href: "#features", label: "Vlastnosti" },
  { href: "#motivation", label: "Proč my?" },
  { href: "#pricing", label: "Ceník" },
];

export const MainMenuMobile = () => {
  return (
    <div className="flex flex-col gap-1">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="group flex items-center justify-between px-6 py-5 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
        >
          <span className="text-xl font-bold text-text-muted group-hover:text-text-main transition-colors tracking-tighter">
            {link.label}
          </span>
          <div className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
        </a>
      ))}
    </div>
  );
};

MainMenuMobile.displayName = "MainMenuMobile";
