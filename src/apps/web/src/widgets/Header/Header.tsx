import { Logo } from "@web/shared/components/Logo/Logo";

import { ActionButtons } from "./components/ActionButtons";
import { DesktopNav } from "./components/DesktopNav";
import { MobileMenu } from "./components/MobileMenu";
import { MobileToggle } from "./components/MobileToggle";
import { useNavbarMobile } from "./hooks/useNavbarMobile";
import { useNavbarScroll } from "./hooks/useNavbarScroll";
import { navbarVariants } from "./styles/navbarVariants";

export const Header = () => {
  const { scrolled } = useNavbarScroll(20);
  const { mobileOpen, toggleMobileMenu } = useNavbarMobile();

  const styles = navbarVariants({ scrolled, mobileOpen });

  return (
    <header className={styles.header()}>
      <nav className={styles.container()}>
        <Logo scrolled={scrolled} />
        <DesktopNav />
        <ActionButtons />
        <MobileToggle
          mobileOpen={mobileOpen}
          toggleMobileMenu={toggleMobileMenu}
          styles={styles.mobileToggle()}
        />
      </nav>
      <MobileMenu styles={styles.mobileMenu()} />
    </header>
  );
};

Header.displayName = "Header";
