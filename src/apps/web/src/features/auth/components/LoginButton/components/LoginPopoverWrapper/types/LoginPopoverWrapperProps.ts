import type { RefObject } from "react";

/**
 * LoginPopoverWrapperProps - Props interface for LoginPopoverWrapper component
 */
export interface LoginPopoverWrapperProps {
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
