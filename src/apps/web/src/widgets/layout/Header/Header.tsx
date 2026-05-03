import { useEffect, useState } from "react";

import { MainMenuDesktop } from "@web/features/navigation";
import { Logo } from "@web/shared/components/Logo";

import { ActionButtons } from "./components/ActionButtons";
import { MobileMenu } from "./components/MobileMenu";
import { MobileToggle } from "./components/MobileToggle";
import { useHeaderMobile } from "./hooks/useHeaderMobile";
import { headerVariants } from "./styles/headerVariants";

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

  const { mobileOpen, toggleMobileMenu } = useHeaderMobile();

  const styles = headerVariants({ scrolled, mobileOpen });

  return (
    <header>
      <div className={styles.header()}>
        <div className={styles.container()}>
          <div className={styles.logoContainer()}>
            <Logo scrolled={scrolled} />
          </div>
          <div className="hidden lg:flex items-center justify-center flex-1">
            <nav className="flex items-center w-full justify-center">
              <MainMenuDesktop />
            </nav>
          </div>
          <div className={styles.rightIconsContainer()}>
            <ActionButtons scrolled={scrolled} />
            <MobileToggle
              mobileOpen={mobileOpen}
              toggleMobileMenu={toggleMobileMenu}
              styles={styles.mobileToggle()}
            />
          </div>
        </div>
        <MobileMenu styles={styles.mobileMenu()} />
      </div>
    </header>
  );
};

Header.displayName = "Header";
