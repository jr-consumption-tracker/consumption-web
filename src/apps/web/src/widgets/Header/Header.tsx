import { useState, useEffect } from "react";
import { LoginButton } from "@web/features/auth/components/LoginButton";
import { LanguageSelect } from "@web/features/locale/components/LanguageSelect";
import { MainMenu } from "@web/features/navigation/components/MainMenu";
import { useTheme } from "@web/features/theme/providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-surface-alt/40 border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-xl overflow-hidden"
      aria-label="Přepnout téma"
    >
      <div className="relative h-5 w-5 transition-transform duration-700 ease-in-out group-hover:rotate-12">
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 5.106a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.591a.75.75 0 010-1.06zM5.106 5.106a.75.75 0 010 1.06L3.515 7.757a.75.75 0 01-1.06-1.06l1.591-1.591a.75.75 0 011.06 0zM21 12a.75.75 0 01-.75.75H18a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM5.106 18.894a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.591a.75.75 0 010-1.06zM18.894 18.894a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 11-1.06-1.06l1.591-1.591a.75.75 0 011.06 0zM3 12a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 12z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full text-indigo-900 drop-shadow-[0_0_8px_rgba(49,46,129,0.3)]"
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
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

const HeaderCta = () => (
  <button className="group relative px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] active:scale-95 overflow-hidden">
    <span className="relative z-10">Začít zdarma</span>
    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
  </button>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[100] px-4 py-4 pointer-events-none">
      <header
        className={[
          "mx-auto max-w-7xl h-16 pointer-events-auto",
          "rounded-3xl border border-white/10 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          "bg-surface/60 backdrop-blur-[32px] backdrop-saturate-150",
          isScrolled
            ? "max-w-4xl translate-y-2 border-white/20 bg-surface/80"
            : "max-w-6xl",
        ].join(" ")}
      >
        <div className="flex h-full items-center justify-between px-6 gap-2">
          {/* Logo Section */}
          <a href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-brand-800 text-white shadow-lg transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
            </div>
            <span className="text-xl font-black tracking-tighter text-text-main group-hover:text-primary transition-colors duration-300 lg:block hidden">
              CONSUMPTIONS
            </span>
          </a>

          {/* Navigation Section - Centered */}
          <nav className="hidden md:flex items-center bg-surface-alt/20 rounded-full border border-white/5 px-1.5 py-1 backdrop-blur-sm self-center">
            <MainMenu />
          </nav>

          {/* Action Section */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2">
              <LanguageSelect />
              <ThemeToggle />
            </div>
            <div className="w-px h-6 bg-white/10 hidden lg:block" />
            <LoginButton />
            <HeaderCta />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden h-10 w-10 flex items-center justify-center rounded-full bg-surface-alt/40 border border-white/5 transition-all text-text-main"
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={[
            "absolute top-[calc(100%+0.5rem)] left-0 right-0 p-4 transition-all duration-500 origin-top",
            mobileOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none",
          ].join(" ")}
        >
          <div className="bg-surface/90 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden p-6 flex flex-col gap-4">
            <MainMenu mobile />
            <div className="h-px bg-white/5 my-2" />
            <div className="flex items-center justify-between px-2">
              <LanguageSelect />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
