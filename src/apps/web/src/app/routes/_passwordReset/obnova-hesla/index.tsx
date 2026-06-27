import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import PasswordResetMissingToken from "@web/pages/passwordReset/PasswordResetMissingToken";

function PasswordResetMissingTokenRoute() {
  const { t } = useTranslation("passwordReset");

  return (
    <AuthLayout
      header={t("passwordResetRoute.header")}
      description={t("passwordResetRoute.description")}
    >
      <PasswordResetMissingToken />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_passwordReset/obnova-hesla/")({
  component: PasswordResetMissingTokenRoute,
});
