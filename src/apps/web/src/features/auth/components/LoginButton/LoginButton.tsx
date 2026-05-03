import { useEffect, useRef, useState } from "react";

import { useTheme } from "@web/shared/theme";

import { LoginPopoverWrapper } from "./components/LoginPopoverWrapper/LoginPopoverWrapper";
import { useHoverBehavior } from "./hooks/useHoverBehavior";
import { loginButtonStyles } from "./styles/loginButtonStyles";

import type { RefObject } from "react";

export interface LoginButtonProps {
  scrolled?: boolean;
  loginFlyoutOpen: boolean;
  setLoginFlyoutOpen: (open: boolean) => void;
  loginFlyoutOpenedByHover: boolean;
  setLoginFlyoutOpenedByHover: (opened: boolean) => void;
  loginTriggerRef: RefObject<HTMLButtonElement | null>;
  hoverOpenTimerRef: RefObject<number | null>;
  hoverCloseTimerRef: RefObject<number | null>;
}

/**
 * LoginButton - Login button with hover/click popover orchestrator
 *
 * Coordinates hover behavior and popover wrapper component.
 * Uses DOM mouseenter/mouseleave events to track physical mouse presence,
 * independent of CSS z-index layering, so hover effects persist
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
  const { theme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null!);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseEnter = () => setIsMouseOver(true);
    const handleMouseLeave = () => setIsMouseOver(false);

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const { handleMouseEnter, handleMouseLeave, handleFocusIn, handleFocusOut } =
    useHoverBehavior(
      hoverOpenTimerRef,
      hoverCloseTimerRef,
      setLoginFlyoutOpen,
      setLoginFlyoutOpenedByHover,
      loginFlyoutOpenedByHover,
    );

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

      <div className={styles.glowEffect()} />
    </div>
  );
};

LoginButton.displayName = "LoginButton";
