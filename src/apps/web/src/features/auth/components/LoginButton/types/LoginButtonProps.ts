import type { RefObject } from "react";

/**
 * LoginButtonProps - Props interface for LoginButton component
 */
export interface LoginButtonProps {
  loginFlyoutOpen: boolean;
  setLoginFlyoutOpen: (open: boolean) => void;
  loginFlyoutOpenedByHover: boolean;
  setLoginFlyoutOpenedByHover: (opened: boolean) => void;
  loginTriggerRef: RefObject<HTMLButtonElement | null>;
  hoverOpenTimerRef: RefObject<number | null>;
  hoverCloseTimerRef: RefObject<number | null>;
}

