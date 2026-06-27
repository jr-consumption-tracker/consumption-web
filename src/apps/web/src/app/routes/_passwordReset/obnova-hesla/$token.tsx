import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import PasswordReset from "@web/pages/passwordReset/PasswordReset";

function PasswordResteRoute() {
  const { t } = useTranslation("passwordReset");

  return (
    <AuthLayout
      header={t("passwordResetRoute.header")}
      description={t("passwordResetRoute.description")}
    >
      <PasswordReset />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_passwordReset/obnova-hesla/$token")({
  component: PasswordResteRoute,
});
