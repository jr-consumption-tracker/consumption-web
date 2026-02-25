export const LoginButton = () => {
  return (
    <button className="group relative px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text-main transition-all duration-300">
      <span className="relative z-10">Přihlásit</span>
      {/* Background kinetic wash */}
      <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary/0 group-hover:border-primary/40 transition-all" />
      <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary/0 group-hover:border-primary/40 transition-all" />
    </button>
  );
};
