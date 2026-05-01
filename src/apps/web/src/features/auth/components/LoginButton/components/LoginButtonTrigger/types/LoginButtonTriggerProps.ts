import type { RefObject } from "react";

/**
 * LoginButtonTriggerProps - Props interface for LoginButtonTrigger component
 */
export interface LoginButtonTriggerProps {
  loginTriggerRef: RefObject<HTMLButtonElement | null>;
  loginFlyoutOpen: boolean;
  setLoginFlyoutOpen: (open: boolean) => void;
  isHovered: boolean;
}
