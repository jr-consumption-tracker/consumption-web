import { useEffect, useRef, useState } from "react";

import { cn } from "@repo/utils";

import { LoginPopoverWrapper } from "./ui/LoginPopoverWrapper";

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
}: LoginButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleEnter = () => setIsMouseOver(true);
    const handleLeave = () => setIsMouseOver(false);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
    hoverOpenTimerRef.current = window.setTimeout(() => {
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
      className={cn(
        "relative transition-transform duration-300",
        loginFlyoutOpen ? "scale-110!" : "",
        isMouseOver ? "scale-110" : "",
      )}
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
      <div
        className={cn(
          "absolute inset-0 rounded-2xl transition-opacity duration-300 blur-xl scale-110 bg-primary/20",
          isMouseOver ? "opacity-60" : "opacity-0",
        )}
      />
    </div>
  );
};

LoginButton.displayName = "LoginButton";
