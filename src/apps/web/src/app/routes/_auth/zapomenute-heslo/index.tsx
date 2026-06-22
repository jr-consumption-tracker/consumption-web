import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import PasswordReset from "@web/pages/auth/PasswordReset";

function PasswordResetRoute() {
  const { t } = useTranslation("auth");
  return (
    <AuthLayout
      header={t("passwordResetRoute.header")}
      description={t("passwordResetRoute.description")}
    >
      <PasswordReset />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_auth/zapomenute-heslo/")({
  component: PasswordResetRoute,
});
