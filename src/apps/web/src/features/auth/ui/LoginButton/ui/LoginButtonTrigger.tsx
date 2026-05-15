import { User } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button, PopoverTrigger } from "@heroui/react";
import { cn } from "@repo/utils";
import { useTheme } from "@web/shared/lib/theme";

import type { RefObject } from "react";

interface LoginButtonTriggerProps {
  scrolled?: boolean;
  loginTriggerRef: RefObject<HTMLButtonElement | null>;
  loginFlyoutOpen: boolean;
  setLoginFlyoutOpen: (open: boolean) => void;
  isHovered: boolean;
}

export const LoginButtonTrigger = ({
  scrolled = false,
  loginTriggerRef,
  loginFlyoutOpen,
  setLoginFlyoutOpen,
  isHovered,
}: LoginButtonTriggerProps) => {
  const { theme } = useTheme();
  const { t } = useTranslation("auth");

  const handlePress = () => {
    setLoginFlyoutOpen(!loginFlyoutOpen);
  };

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
          "group relative overflow-hidden transition-all duration-500 rounded-2xl border-none shadow-2xl hover:shadow-primary/40 bg-primary",
          isHovered && "scale-105 -translate-y-0.5",
          scrolled ? "h-11 px-6" : "h-14 px-10",
        )}
      >
        <span id="login-button-description" className="sr-only">
          {t("loginButton.aria.description")}
        </span>

        {/* Glow Layers */}
        <div
          className={cn(
            "absolute inset-0 bg-linear-to-br from-primary via-primary-600 to-primary-700 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-90",
          )}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-from),transparent_70%)] from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <span className="relative flex items-center gap-4 z-10">
          <div className="relative" aria-hidden="true">
            <User
              className={cn(
                "group-hover:rotate-180 group-hover:scale-125 transition-all duration-500 drop-shadow-lg text-white",
                scrolled ? "w-5 h-5 xl:w-6 xl:h-6" : "w-7 h-7",
              )}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 border-2 border-white/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300"
              style={{ animationDuration: "2s" }}
              aria-hidden="true"
            />
          </div>
          <span
            className={cn(
              "hidden xl:block tracking-wider font-black drop-shadow-2xl text-white transition-all duration-500",
              scrolled ? "text-base" : "text-lg",
            )}
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
};

LoginButtonTrigger.displayName = "LoginButtonTrigger";
