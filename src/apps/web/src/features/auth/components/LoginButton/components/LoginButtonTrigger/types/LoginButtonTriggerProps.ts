import type { RefObject } from "react";

/**
 * LoginButtonTriggerProps - Props interface for LoginButtonTrigger component
 */
export interface LoginButtonTriggerProps {
  /** Whether the page is scrolled - reduces button size to match logo. @default false */
  scrolled?: boolean;
  loginTriggerRef: RefObject<HTMLButtonElement | null>;
  loginFlyoutOpen: boolean;
  setLoginFlyoutOpen: (open: boolean) => void;
  isHovered: boolean;
}
