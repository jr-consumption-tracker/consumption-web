import { useRef, useState } from "react";

import { LoginPopoverWrapper } from "./LoginPopoverWrapper";

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
  suppressHoverOpenUntilRef: RefObject<number>;
}

const HOVER_TIMING = {
  OPEN_DELAY: 150,
  CLOSE_DELAY: 1000,
} as const;

export const LoginButton = ({
  scrolled = false,
  loginFlyoutOpen,
  setLoginFlyoutOpen,
  loginFlyoutOpenedByHover,
  setLoginFlyoutOpenedByHover,
  loginTriggerRef,
  hoverOpenTimerRef,
  hoverCloseTimerRef,
  suppressHoverOpenUntilRef,
}: LoginButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [hasFocus, setHasFocus] = useState(false);

  const handleMouseEnter = () => {
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
    if (hoverOpenTimerRef.current) {
      clearTimeout(hoverOpenTimerRef.current);
      hoverOpenTimerRef.current = null;
    }
    if (Date.now() < suppressHoverOpenUntilRef.current) {
      return;
    }
    hoverOpenTimerRef.current = window.setTimeout(() => {
      if (Date.now() < suppressHoverOpenUntilRef.current) return;
      setLoginFlyoutOpen(true);
      setLoginFlyoutOpenedByHover(true);
    }, HOVER_TIMING.OPEN_DELAY);
  };

  const handleMouseLeave = () => {
    if (hoverOpenTimerRef.current) {
      clearTimeout(hoverOpenTimerRef.current);
      hoverOpenTimerRef.current = null;
    }
    if (loginFlyoutOpenedByHover && !hasFocus) {
      hoverCloseTimerRef.current = window.setTimeout(() => {
        setLoginFlyoutOpen(false);
        setLoginFlyoutOpenedByHover(false);
      }, HOVER_TIMING.CLOSE_DELAY);
    }
  };

  const handleFocusIn = () => {
    setHasFocus(true);
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
  };

  const handleFocusOut = () => {
    setHasFocus(false);
    setTimeout(() => {
      if (!hasFocus && loginFlyoutOpenedByHover) {
        setLoginFlyoutOpen(false);
        setLoginFlyoutOpenedByHover(false);
      }
    }, 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
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
        hoverOpenTimerRef={hoverOpenTimerRef}
        suppressHoverOpenUntilRef={suppressHoverOpenUntilRef}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleFocusIn={handleFocusIn}
        handleFocusOut={handleFocusOut}
      />
    </div>
  );
};

LoginButton.displayName = "LoginButton";
