import { useEffect, useState } from "react";

import { cn } from "@repo/utils";
import { MainMenuDesktop, useMobileMenu } from "@web/features/navigation";
import { Logo } from "@web/shared/components/Logo";

import { ActionButtons } from "./ActionButtons";
import { MobileMenu } from "./MobileMenu";
import { MobileToggle } from "./MobileToggle";

/**
 * Header - The main site navigation and branding header.
 * Pure UI composition block that uses features for behavioral logic.
 */
export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { mobileOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500">
      <div
        className={cn(
          "relative transition-all duration-500 py-4",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-2"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0 transition-transform duration-500 hover:scale-105">
            <Logo scrolled={scrolled} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <nav className="flex items-center justify-center w-full">
              <MainMenuDesktop />
            </nav>
          </div>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <ActionButtons scrolled={scrolled} />
            <MobileToggle
              mobileOpen={mobileOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <MobileMenu isOpen={mobileOpen} />
      </div>
    </header>
  );
};

Header.displayName = "Header";
