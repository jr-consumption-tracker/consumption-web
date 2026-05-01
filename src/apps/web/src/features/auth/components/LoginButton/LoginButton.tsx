import { useRef } from "react";

import { useTheme } from "@web/shared/theme";

import { LoginPopoverWrapper } from "./components/LoginPopoverWrapper/LoginPopoverWrapper";
import { useHoverBehavior } from "./hooks/useHoverBehavior";
import { useIsMouseOver } from "./hooks/useIsMouseOver";
import { loginButtonStyles } from "./styles/loginButtonStyles";

import type { LoginButtonProps } from "./types/LoginButtonProps";
/**
 * LoginButton - Login button with hover/click popover orchestrator
 *
 * Coordinates hover behavior and popover wrapper component.
 * Uses useIsMouseOver hook to track physical mouse presence over the button,
 * independent of CSS z-index layering, ensuring hover effects persist
 * even when a popover is open above the button.
 */
export const LoginButton = ({
  scrolled = false,
  loginFlyoutOpen,
  setLoginFlyoutOpen,
  loginFlyoutOpenedByHover,
  setLoginFlyoutOpenedByHover,
  loginTriggerRef,
  hoverOpenTimerRef,
  hoverCloseTimerRef,
}: LoginButtonProps) => {
  // SSR-safe theme from context
  const { theme } = useTheme();

  // Ref for the outer container to track mouse position independently of popover
  const containerRef = useRef<HTMLDivElement>(null!);

  // Track whether mouse is physically over the container element
  // Uses direct DOM events, not CSS :hover, so it works across z-index layers
  const { isMouseOver } = useIsMouseOver(containerRef);

  // PERFORMANCE: Extract hover behavior to custom hook
  const { handleMouseEnter, handleMouseLeave, handleFocusIn, handleFocusOut } =
    useHoverBehavior(
      hoverOpenTimerRef,
      hoverCloseTimerRef,
      setLoginFlyoutOpen,
      setLoginFlyoutOpenedByHover,
      loginFlyoutOpenedByHover,
    );

  // Get styles from tailwind-variants with theme variant
  const styles = loginButtonStyles({
    resolvedTheme: theme,
    isOpen: loginFlyoutOpen,
    isHovered: isMouseOver,
  });

  return (
    <div
      ref={containerRef}
      className={styles.container()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocusIn}
      onBlur={handleFocusOut}
    >
      <LoginPopoverWrapper
        scrolled={scrolled}
        loginFlyoutOpen={loginFlyoutOpen}
        setLoginFlyoutOpen={setLoginFlyoutOpen}
        setLoginFlyoutOpenedByHover={setLoginFlyoutOpenedByHover}
        loginTriggerRef={loginTriggerRef}
        isHovered={isMouseOver}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleFocusIn={handleFocusIn}
        handleFocusOut={handleFocusOut}
      />

      {/* Subtle glow */}
      <div className={styles.glowEffect()} />
    </div>
  );
};

LoginButton.displayName = "LoginButton";
