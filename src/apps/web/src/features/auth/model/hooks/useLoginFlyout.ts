import { useEffect, useRef, useState } from "react";

/**
 * useLoginFlyout - Hook for managing login popover state.
 * Relocated from widgets layer to features/auth to maintain widget purity.
 */
export const useLoginFlyout = () => {
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

  return {
    loginFlyoutOpen,
    setLoginFlyoutOpen,
    loginFlyoutOpenedByHover,
    setLoginFlyoutOpenedByHover,
    loginTriggerRef,
    hoverOpenTimerRef,
    hoverCloseTimerRef,
  };
};
