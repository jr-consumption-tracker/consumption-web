import { useState, useEffect } from "react";
import { LanguageSelect } from "@web/features/locale/components/LanguageSelect";
import { MainMenu } from "@web/features/navigation/components/MainMenu";
import { useTheme } from "@web/features/theme/providers/ThemeProvider";

/* ------------------------------------------------------------------ */
/* Kinetic Controls Module                                             */
/* ------------------------------------------------------------------ */
const ControlModule = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-1.5 px-1.5 py-1.5 rounded-full bg-surface-alt/40 border border-white/10 backdrop-blur-3xl shadow-2xl">
      <LanguageSelect />

      <div className="w-px h-4 bg-white/10 mx-1" />

      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative group flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition-all duration-500"
        aria-label="Téma"
      >
        <div className="relative z-10 transition-transform duration-700 group-hover:rotate-[30deg]">
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-amber-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 5.106a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.591a.75.75 0 010-1.06zM5.106 5.106a.75.75 0 010 1.06L3.515 7.757a.75.75 0 01-1.06-1.06l1.591-1.591a.75.75 0 011.06 0zM21 12a.75.75 0 01-.75.75H18a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM5.106 18.894a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.591a.75.75 0 010-1.06zM18.894 18.894a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 11-1.06-1.06l1.591-1.591a.75.75 0 011.06 0zM3 12a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 12z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-indigo-900"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Kinetic Header                                                      */
/* ------------------------------------------------------------------ */
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[100] flex justify-center p-4 pointer-events-none">
      <header
        className={[
          "relative flex items-center w-full max-w-7xl transition-all duration-700",
          isScrolled ? "justify-center gap-2" : "gap-3",
        ].join(" ")}
      >
        {/* --- Logo Module --- */}
        <div
          className={[
            "pointer-events-auto flex items-center group",
            "h-14 px-4 rounded-[2rem] border border-white/10 bg-surface/40 backdrop-blur-[48px] shadow-2xl transition-all duration-700",
            isScrolled ? "scale-90 opacity-60 hover:opacity-100" : "scale-100",
          ].join(" ")}
        >
          <a href="/" className="flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white overflow-hidden shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 z-10 relative"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              {/* Internal shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            {!isScrolled && (
              <span className="text-sm font-black tracking-widest text-text-main hidden lg:block opacity-80 group-hover:opacity-100 transition-all duration-500 animate-in fade-in zoom-in-95">
                CONSUMPTIONS
              </span>
            )}
          </a>
        </div>

        {/* --- Nav Module --- */}
        <div
          className={[
            "hidden md:flex pointer-events-auto items-center relative",
            "h-14 px-2 rounded-[2rem] border border-white/10 bg-surface/40 backdrop-blur-[48px] shadow-2xl transition-all duration-700",
            isScrolled ? "scale-90 opacity-90" : "flex-1",
          ].join(" ")}
        >
          <nav className="flex items-center w-full justify-center">
            <MainMenu />
          </nav>
        </div>

        {/* --- Control Module --- */}
        <div
          className={[
            "pointer-events-auto flex items-center gap-3",
            "h-14 pl-2 pr-2 rounded-[2rem] border border-white/10 bg-surface/40 backdrop-blur-[48px] shadow-2xl transition-all duration-700",
            isScrolled ? "scale-90" : "scale-100",
          ].join(" ")}
        >
          <ControlModule />

          <div className="hidden lg:block">
            <button className="group relative h-10 px-6 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-[0.15em] transition-all hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)] active:scale-95 overflow-hidden">
              <span className="relative z-10">Začít zdarma</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              {/* Border Beam effect simulation */}
              <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-white/50 transition-colors" />
            </button>
          </div>

          {/* Mobile Toggle inside Control Module */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden h-10 w-10 flex flex-col items-center justify-center gap-1 hover:bg-white/10 rounded-full transition-all"
            aria-label="Menu"
          >
            <span
              className={[
                "h-0.5 bg-text-main transition-all duration-300",
                mobileOpen ? "w-5 translate-y-1.5 rotate-45" : "w-4",
              ].join(" ")}
            />
            <span
              className={[
                "h-0.5 bg-text-main transition-all duration-300",
                mobileOpen ? "opacity-0" : "w-4",
              ].join(" ")}
            />
            <span
              className={[
                "h-0.5 bg-text-main transition-all duration-300",
                mobileOpen ? "w-5 -translate-y-1.5 -rotate-45" : "w-4",
              ].join(" ")}
            />
          </button>
        </div>

        {/* Mobile Drawer (detachable) */}
        <div
          className={[
            "fixed top-24 inset-x-4 p-6 rounded-[2.5rem] border border-white/10 bg-surface/90 backdrop-blur-3xl shadow-3xl pointer-events-auto transition-all duration-500 origin-top md:hidden",
            mobileOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-10 pointer-events-none",
          ].join(" ")}
        >
          <nav className="flex flex-col gap-4">
            <MainMenu mobile />
            <div className="h-px bg-white/5 my-2" />
            <div className="flex items-center justify-between px-4">
              <LanguageSelect />
            </div>
            <button className="w-full py-4 rounded-3xl bg-primary text-white font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40">
              Začít zdarma
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};
