import type { RefObject } from "react";

/**
 * LoginButtonProps - Props interface for LoginButton component
 */
export interface LoginButtonProps {
  /** Whether the page is scrolled - reduces button size to match logo. @default false */
  scrolled?: boolean;
  loginFlyoutOpen: boolean;
  setLoginFlyoutOpen: (open: boolean) => void;
  loginFlyoutOpenedByHover: boolean;
  setLoginFlyoutOpenedByHover: (opened: boolean) => void;
  loginTriggerRef: RefObject<HTMLButtonElement | null>;
  hoverOpenTimerRef: RefObject<number | null>;
  hoverCloseTimerRef: RefObject<number | null>;
}
