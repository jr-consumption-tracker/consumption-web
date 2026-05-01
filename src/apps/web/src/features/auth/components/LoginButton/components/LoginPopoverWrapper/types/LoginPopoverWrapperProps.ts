import type { RefObject } from "react";

/**
 * LoginPopoverWrapperProps - Props interface for LoginPopoverWrapper component
 */
export interface LoginPopoverWrapperProps {
  /** Whether the page is scrolled - reduces button size to match logo. @default false */
  scrolled?: boolean;
  loginFlyoutOpen: boolean;
  setLoginFlyoutOpen: (open: boolean) => void;
  setLoginFlyoutOpenedByHover: (opened: boolean) => void;
  loginTriggerRef: RefObject<HTMLButtonElement | null>;
  isHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleFocusIn: () => void;
  handleFocusOut: () => void;
}
