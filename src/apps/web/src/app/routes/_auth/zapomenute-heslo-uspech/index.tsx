import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import PasswordResetSuccessful from "@web/pages/auth/PasswordResetSuccess";

function PasswordResetSuccessRoute() {
  const { t } = useTranslation("auth");

  return (
    <AuthLayout
      header={t("passwordResetSuccessRoute.header")}
      description={t("passwordResetSuccessRoute.description")}
    >
      <PasswordResetSuccessful />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_auth/zapomenute-heslo-uspech/")({
  component: PasswordResetSuccessRoute,
});
