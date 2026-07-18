import { useTranslation } from "react-i18next";

import { Button } from "@heroui/react";

interface LoginPopoverLoggedInProps {
  email?: string;
  onLogout: () => void;
  isLoggingOut?: boolean;
}

export const LoginPopoverLoggedIn = ({
  email,
  onLogout,
  isLoggingOut = false,
}: LoginPopoverLoggedInProps) => {
  const { t } = useTranslation("auth");

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-sm text-text-muted">
        {t("loggedIn.greeting")}
        {email ? (
          <>
            {" "}
            <span className="font-semibold text-text-main">{email}</span>
          </>
        ) : null}
      </p>

      <Button
        variant="ghost"
        isDisabled={isLoggingOut}
        onPress={onLogout}
        className="w-full"
      >
        {t("loggedIn.logout")}
      </Button>
    </div>
  );
};

LoginPopoverLoggedIn.displayName = "LoginPopoverLoggedIn";
