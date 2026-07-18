import { isAxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Popover, PopoverContent } from "@heroui/react";
import { LoginForm } from "@repo/components";
import { cn } from "@repo/utils";
import { useIsAuthenticated, useSelectSession } from "@web/features/auth";
import { useLoginForm } from "@web/features/auth/model/hooks/useLoginForm";
import { useLogout } from "@web/features/auth/model/hooks/useLogout";
import { useAuthStore } from "@web/features/auth/model/store/authStore";
import { TextLink } from "@web/shared/ui/TextLink";

import { LoginButtonTrigger } from "./LoginButtonTrigger";
import { LoginPopoverLoggedIn } from "./LoginPopoverLoggedIn";

import type { RefObject } from "react";
import type { ParseKeys } from "i18next";
import type { LoginSchemaValues } from "@repo/schemas";
import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

type CommonKey = ParseKeys<"common">;

const loginApiErrorKey = (error: unknown): CommonKey | undefined => {
  if (!isAxiosError<ValidationErrorResponse>(error)) return undefined;

  const generalError = error.response?.data.general?.[0];
  const validationError = error.response?.data.validationError;
  const actionError = error.response?.data.action?.[0];

  if (!generalError && !validationError && !actionError)
    return "errors.login.general";

  if (generalError) {
    return `errors.login.${generalError}` as CommonKey;
  }
};

interface LoginPopoverWrapperProps {
  scrolled?: boolean;
  loginFlyoutOpen: boolean;
  setLoginFlyoutOpen: (open: boolean) => void;
  setLoginFlyoutOpenedByHover: (opened: boolean) => void;
  loginTriggerRef: RefObject<HTMLButtonElement | null>;
  hoverOpenTimerRef: RefObject<number | null>;
  suppressHoverOpenUntilRef: RefObject<number>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleFocusIn: () => void;
  handleFocusOut: () => void;
}

const LOGIN_SUCCESS_HOVER_SUPPRESS_MS = 1500;

export const LoginPopoverWrapper = ({
  scrolled = false,
  loginFlyoutOpen,
  setLoginFlyoutOpen,
  setLoginFlyoutOpenedByHover,
  loginTriggerRef,
  hoverOpenTimerRef,
  suppressHoverOpenUntilRef,
  handleMouseEnter,
  handleMouseLeave,
  handleFocusIn,
  handleFocusOut,
}: LoginPopoverWrapperProps) => {
  const isAuthenticated = useIsAuthenticated();
  const session = useSelectSession();
  const { logout, isPending: isLogoutPending } = useLogout();
  const {
    handleSubmit,
    isPending,
    isError,
    error,
    fieldErrors,
    clearFieldError,
    persistLogin,
    setPersistLogin,
  } = useLoginForm();
  const { t: tValidation } = useTranslation("validation");
  const { t: tAuth } = useTranslation("auth");
  const { t: tCommon } = useTranslation("common");
  const apiErrorKey = isError ? loginApiErrorKey(error) : undefined;

  // Freeze which view the popover shows once it's open: a successful login
  // flips isAuthenticated to true while the popover is still technically
  // open (handlePopoverSubmit awaits the login call before closing), so
  // reading useIsAuthenticated() live here would switch the popover to the
  // logged-in view for a frame before it closes. Only pick up a changed
  // auth state the next time the popover is freshly (re)opened (React's
  // "adjusting state during render" pattern: https://react.dev/reference/react/useState#storing-information-from-previous-renders).
  const [prevLoginFlyoutOpen, setPrevLoginFlyoutOpen] =
    useState(loginFlyoutOpen);
  const [displayedIsAuthenticated, setDisplayedIsAuthenticated] =
    useState(isAuthenticated);
  if (loginFlyoutOpen !== prevLoginFlyoutOpen) {
    setPrevLoginFlyoutOpen(loginFlyoutOpen);
    if (loginFlyoutOpen) {
      setDisplayedIsAuthenticated(isAuthenticated);
    }
  }

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen && Date.now() < suppressHoverOpenUntilRef.current) {
      return;
    }
    setLoginFlyoutOpen(isOpen);
    if (isOpen) {
      setLoginFlyoutOpenedByHover(false);
    }
  };

  const handlePopoverSubmit = async (
    values: LoginSchemaValues,
  ): Promise<void> => {
    await handleSubmit(values);
    if (useAuthStore.getState().session) {
      if (hoverOpenTimerRef.current) {
        clearTimeout(hoverOpenTimerRef.current);
        hoverOpenTimerRef.current = null;
      }
      suppressHoverOpenUntilRef.current =
        Date.now() + LOGIN_SUCCESS_HOVER_SUPPRESS_MS;
      setLoginFlyoutOpenedByHover(false);
      setLoginFlyoutOpen(false);
      (document.activeElement as HTMLElement | null)?.blur();
    }
  };

  const handleLogout = async (): Promise<void> => {
    await logout();
    if (hoverOpenTimerRef.current) {
      clearTimeout(hoverOpenTimerRef.current);
      hoverOpenTimerRef.current = null;
    }
    suppressHoverOpenUntilRef.current =
      Date.now() + LOGIN_SUCCESS_HOVER_SUPPRESS_MS;
    setLoginFlyoutOpenedByHover(false);
    setLoginFlyoutOpen(false);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  // isNonModal (below) suppresses React Aria's built-in underlay div, which
  // was intercepting hover/clicks over the trigger, but it also disables
  // React Aria's own outside-click-to-dismiss (isDismissable is hardcoded to
  // !isNonModal inside usePopover, with no prop to override it). Reimplement
  // outside-click-to-dismiss here, exempting the trigger and popover content.
  const popoverContentRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!loginFlyoutOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (loginTriggerRef.current?.contains(target)) return;
      if (popoverContentRef.current?.contains(target)) return;
      setLoginFlyoutOpen(false);
      setLoginFlyoutOpenedByHover(false);
    };

    document.addEventListener("pointerdown", handlePointerDown, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, [loginFlyoutOpen, loginTriggerRef, setLoginFlyoutOpen, setLoginFlyoutOpenedByHover]);

  return (
    <Popover isOpen={loginFlyoutOpen} onOpenChange={handleOpenChange}>
      <LoginButtonTrigger
        scrolled={scrolled}
        loginTriggerRef={loginTriggerRef}
        loginFlyoutOpen={loginFlyoutOpen}
        setLoginFlyoutOpen={setLoginFlyoutOpen}
      />

      <PopoverContent
        ref={popoverContentRef}
        triggerRef={loginTriggerRef}
        isNonModal
        shouldCloseOnInteractOutside={(target) =>
          !loginTriggerRef.current?.contains(target)
        }
        className={cn("z-50 p-0", displayedIsAuthenticated ? "w-72" : "w-100")}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
        >
          <div className="relative overflow-hidden rounded-xl animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="relative bg-surface border border-border shadow-lg">
              <div className="p-6">
                {displayedIsAuthenticated ? (
                  <LoginPopoverLoggedIn
                    email={session?.email}
                    onLogout={handleLogout}
                    isLoggingOut={isLogoutPending}
                  />
                ) : (
                  <LoginForm
                    onSubmit={handlePopoverSubmit}
                    isLoading={isPending}
                    fieldErrors={fieldErrors}
                    clearFieldError={clearFieldError}
                    errorMessage={
                      apiErrorKey ? tCommon(apiErrorKey) : undefined
                    }
                    tAuth={tAuth}
                    tValidation={tValidation}
                    tCommon={tCommon}
                    passwordResetLink={
                      <TextLink to="/zapomenute-heslo" replace>
                        {tAuth("login.forgotPassword")}
                      </TextLink>
                    }
                    registerLink={
                      <TextLink to="/registrace" replace>
                        {tAuth("login.registerLink")}
                      </TextLink>
                    }
                    defaultPersistLogin={persistLogin}
                    onPersistLoginChange={setPersistLogin}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

LoginPopoverWrapper.displayName = "LoginPopoverWrapper";
