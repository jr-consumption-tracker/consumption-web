import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import VerifyEmail from "@web/pages/auth/VerifyEmail";

function VerifyEmailRoute() {
  const { t } = useTranslation("auth");

  return (
    <AuthLayout
      header={t("verifyEmailRoute.header")}
      description={t("verifyEmailRoute.description")}
    >
      <VerifyEmail />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_auth/overeni-emailu/$token")({
  component: VerifyEmailRoute,
});
