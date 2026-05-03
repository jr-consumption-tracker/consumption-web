"use client";

import { User } from "lucide-react";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Button, PopoverTrigger } from "@heroui/react";
import { useTheme } from "@web/shared/theme";

import { loginButtonTriggerStyles } from "./styles/loginButtonTriggerStyles";

import type { RefObject } from "react";

interface LoginButtonTriggerProps {
  scrolled?: boolean;
  loginTriggerRef: RefObject<HTMLButtonElement | null>;
  loginFlyoutOpen: boolean;
  setLoginFlyoutOpen: (open: boolean) => void;
  isHovered: boolean;
}

/**
 * LoginButtonTrigger - Popover trigger button
 *
 * Uses isHovered prop to keep hover effects active even when
 * the popover is open and overlapping the button.
 */
export const LoginButtonTrigger = memo(
  ({
    scrolled = false,
    loginTriggerRef,
    loginFlyoutOpen,
    setLoginFlyoutOpen,
    isHovered,
  }: LoginButtonTriggerProps) => {
    const { theme } = useTheme();
    const { t } = useTranslation("auth");

    const styles = loginButtonTriggerStyles({
      resolvedTheme: theme,
      isHovered,
      scrolled,
    });

    const handlePress = useCallback(() => {
      setLoginFlyoutOpen(!loginFlyoutOpen);
    }, [setLoginFlyoutOpen, loginFlyoutOpen]);

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
          className={styles.button()}
        >
          <span id="login-button-description" className="sr-only">
            {t("loginButton.aria.description")}
          </span>

          <div className={styles.glowLayer1()} />
          <div className={styles.glowLayer2()} />

          {/* Visual content */}
          <span className="relative flex items-center gap-4 z-10">
            <div className="relative" aria-hidden="true">
              <User
                className={`${
                  scrolled ? "w-5 h-5 xl:w-6 xl:h-6" : "w-7 h-7"
                } group-hover:rotate-180 group-hover:scale-125 transition-all duration-500 drop-shadow-lg text-white`}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 border-2 border-white/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300"
                style={{ animationDuration: "2s" }}
                aria-hidden="true"
              />
            </div>
            <span
              className={`hidden xl:block tracking-wider font-black drop-shadow-2xl text-white transition-all duration-500 ${
                scrolled ? "text-base" : "text-lg"
              }`}
              style={{
                textShadow:
                  theme === "dark"
                    ? "0 0 3px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.9)"
                    : "0 0 4px rgba(0,0,0,0.6), 1px 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              PŘIHLÁSIT SE
            </span>
          </span>
        </Button>
      </PopoverTrigger>
    );
  },
);

LoginButtonTrigger.displayName = "LoginButtonTrigger";
