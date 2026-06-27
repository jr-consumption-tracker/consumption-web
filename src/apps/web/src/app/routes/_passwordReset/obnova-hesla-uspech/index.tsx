import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import PasswordResetSuccess from "@web/pages/passwordReset/PasswordResetSuccess";

function PasswordResetSuccessRoute() {
  const { t } = useTranslation("passwordReset");

  return (
    <AuthLayout
      header={t("passwordResetSuccessRoute.header")}
      description={t("passwordResetSuccessRoute.description")}
    >
      <PasswordResetSuccess />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_passwordReset/obnova-hesla-uspech/")({
  component: PasswordResetSuccessRoute,
});
