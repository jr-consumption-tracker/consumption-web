"use client";

import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Button, PopoverTrigger } from "@heroui/react";
import { useTheme } from "@web/shared/theme";

import { LoginButtonContent } from "../LoginButtonContent";
import { useButtonTriggerState } from "./hooks/useButtonTriggerState";
import { loginButtonTriggerStyles } from "./styles/loginButtonTriggerStyles";

import type { LoginButtonTriggerProps } from "./types/LoginButtonTriggerProps";

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

    // Get styles from tailwind-variants with theme variant and hover state
    const styles = loginButtonTriggerStyles({
      resolvedTheme: theme,
      isHovered,
      scrolled,
    });

    // PERFORMANCE: Extract button trigger logic to custom hook
    const { handlePress } = useButtonTriggerState(
      loginFlyoutOpen,
      setLoginFlyoutOpen,
    );

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
          {/* Hidden description for screen readers */}
          <span id="login-button-description" className="sr-only">
            {t("loginButton.aria.description")}
          </span>
          {/* Neon glow layers */}
          <div className={styles.glowLayer1()} />
          <div className={styles.glowLayer2()} />

          <LoginButtonContent scrolled={scrolled} />
        </Button>
      </PopoverTrigger>
    );
  },
);

LoginButtonTrigger.displayName = "LoginButtonTrigger";
