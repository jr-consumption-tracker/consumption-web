import { Popover, PopoverContent } from "@heroui/react";

import { LoginButtonTrigger } from "./LoginButtonTrigger";

import type { RefObject } from "react";

interface LoginPopoverWrapperProps {
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

export const LoginPopoverWrapper = ({
  scrolled = false,
  loginFlyoutOpen,
  setLoginFlyoutOpen,
  setLoginFlyoutOpenedByHover,
  loginTriggerRef,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  handleFocusIn,
  handleFocusOut,
}: LoginPopoverWrapperProps) => {
  const handleOpenChange = (isOpen: boolean) => {
    setLoginFlyoutOpen(isOpen);
    if (isOpen) {
      setLoginFlyoutOpenedByHover(false);
    }
  };

  return (
    <Popover isOpen={loginFlyoutOpen} onOpenChange={handleOpenChange}>
      <LoginButtonTrigger
        scrolled={scrolled}
        loginTriggerRef={loginTriggerRef}
        loginFlyoutOpen={loginFlyoutOpen}
        setLoginFlyoutOpen={setLoginFlyoutOpen}
        isHovered={isHovered}
      />

      <PopoverContent className="z-50 w-80 p-0">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
        >
          <div className="relative overflow-hidden rounded-xl animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="relative backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border border-white/40 dark:border-slate-700/60 shadow-lg">
              <div className="flex flex-col items-center justify-center py-12 px-8 text-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-linear-to-br from-purple-400/30 to-blue-400/30 dark:from-purple-500/20 dark:to-blue-500/20 animate-pulse" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Přihlášení se připravuje...
                </p>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

LoginPopoverWrapper.displayName = "LoginPopoverWrapper";
