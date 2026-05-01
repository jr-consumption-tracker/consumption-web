import { Logo } from "@web/shared/components/Logo";

import { ActionButtons } from "./components/ActionButtons";
import { DesktopNav } from "./components/DesktopNav";
import { MobileMenu } from "./components/MobileMenu";
import { MobileToggle } from "./components/MobileToggle";
import { useHeaderMobile } from "./hooks/useHeaderMobile";
import { useHeaderScroll } from "./hooks/useHeaderScroll";
import { headerVariants } from "./styles/headerVariants";

export const Header = () => {
  const { scrolled } = useHeaderScroll(20);
  const { mobileOpen, toggleMobileMenu } = useHeaderMobile();

  const styles = headerVariants({ scrolled, mobileOpen });

  return (
    <header>
      <div className={styles.header()}>
        <div className={styles.container()}>
          <div className={styles.logoContainer()}>
            <Logo scrolled={scrolled} />
          </div>
          <DesktopNav />
          <ActionButtons scrolled={scrolled} />
          <MobileToggle
            mobileOpen={mobileOpen}
            toggleMobileMenu={toggleMobileMenu}
            styles={styles.mobileToggle()}
          />
        </div>
        <MobileMenu styles={styles.mobileMenu()} />
      </div>
    </header>
  );
};

Header.displayName = "Header";
