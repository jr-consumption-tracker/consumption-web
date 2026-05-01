"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * useHeaderLogin - Hook for login popover state in Header.
 */
export const useHeaderLogin = () => {
  const [loginFlyoutOpen, setLoginFlyoutOpen] = useState(false);
  const [loginFlyoutOpenedByHover, setLoginFlyoutOpenedByHover] =
    useState(false);
  const loginTriggerRef = useRef<HTMLButtonElement | null>(null);
  const hoverOpenTimerRef = useRef<number | null>(null);
  const hoverCloseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!loginFlyoutOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLoginFlyoutOpen(false);
        loginTriggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [loginFlyoutOpen]);

  return useMemo(
    () => ({
      loginFlyoutOpen,
      setLoginFlyoutOpen,
      loginFlyoutOpenedByHover,
      setLoginFlyoutOpenedByHover,
      loginTriggerRef,
      hoverOpenTimerRef,
      hoverCloseTimerRef,
    }),
    [loginFlyoutOpen, loginFlyoutOpenedByHover],
  );
};

