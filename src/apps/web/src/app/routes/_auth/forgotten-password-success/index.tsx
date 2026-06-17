import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import ForgottenPasswordSuccessful from "@web/pages/auth/ForgottenPasswordSuccessful";

function ForgottenPasswordSuccessRoute() {
  const { t } = useTranslation("auth");

  return (
    <AuthLayout
      header={t("forgottenPasswordSuccessRoute.header")}
      description={t("forgottenPasswordSuccessRoute.description")}
    >
      <ForgottenPasswordSuccessful />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_auth/forgotten-password-success/")({
  component: ForgottenPasswordSuccessRoute,
});
