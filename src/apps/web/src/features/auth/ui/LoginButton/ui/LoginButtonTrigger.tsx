import { User } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Avatar, Button, PopoverTrigger } from "@heroui/react";
import { cn } from "@repo/utils";

import { useIsAuthenticated, useSelectSession } from "@web/features/auth";

import type { RefObject } from "react";

interface LoginButtonTriggerProps {
  scrolled?: boolean;
  loginTriggerRef: RefObject<HTMLButtonElement | null>;
  loginFlyoutOpen: boolean;
  setLoginFlyoutOpen: (open: boolean) => void;
}

export const LoginButtonTrigger = ({
  scrolled = false,
  loginTriggerRef,
  loginFlyoutOpen,
  setLoginFlyoutOpen,
}: LoginButtonTriggerProps) => {
  const { t } = useTranslation("auth");
  const isAuthenticated = useIsAuthenticated();
  const session = useSelectSession();

  const handlePress = () => {
    setLoginFlyoutOpen(!loginFlyoutOpen);
  };

  if (isAuthenticated) {
    const userName = session?.email ?? "";
    const initials = userName.slice(0, 2).toUpperCase();

    return (
      <PopoverTrigger>
        <Button
          ref={loginTriggerRef}
          isIconOnly
          variant="ghost"
          aria-haspopup="dialog"
          aria-expanded={loginFlyoutOpen}
          aria-label={
            loginFlyoutOpen
              ? t("loginButton.aria.closeLabel")
              : t("loginButton.aria.openLabel")
          }
          data-testid="login-button-trigger"
          onPress={handlePress}
          className="h-11 w-11 rounded-full bg-transparent p-0"
        >
          <Avatar.Root size="lg" className="h-11 w-11">
            <Avatar.Fallback className="bg-primary! font-bold text-text-main! transition-colors! duration-300 hover:bg-primary-dark!">
              {initials}
            </Avatar.Fallback>
          </Avatar.Root>
        </Button>
      </PopoverTrigger>
    );
  }

  return (
    <PopoverTrigger>
      <Button
        ref={loginTriggerRef}
        variant="outline"
        size="lg"
        aria-haspopup="dialog"
        aria-expanded={loginFlyoutOpen}
        aria-label={
          loginFlyoutOpen
            ? t("loginButton.aria.closeLabel")
            : t("loginButton.aria.openLabel")
        }
        aria-describedby="login-button-description"
        data-testid="login-button-trigger"
        onPress={handlePress}
        className={cn(
          "rounded-full border-none bg-primary transition-colors duration-300 hover:bg-primary-dark",
          scrolled ? "h-10 px-5" : "h-12 px-6",
        )}
      >
        <span id="login-button-description" className="sr-only">
          {t("loginButton.aria.description")}
        </span>

        <span className="flex items-center gap-2">
          <User
            className={cn(
              "text-text-main",
              scrolled ? "w-4.25 h-4.25" : "w-4.75 h-4.75",
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              "hidden xl:block uppercase font-bold text-text-main",
              scrolled ? "text-[13px]" : "text-sm",
            )}
          >
            {t("loginButton.label")}
          </span>
        </span>
      </Button>
    </PopoverTrigger>
  );
};

LoginButtonTrigger.displayName = "LoginButtonTrigger";
