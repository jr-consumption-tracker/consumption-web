import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import VerifyEmailRequest from "@web/pages/verifyEmail/VerifyEmailRequest";

function VerifyEmailRequestRoute() {
  const { t } = useTranslation("verifyEmail");
  return (
    <AuthLayout
      header={t("verifyEmailRequestRoute.header")}
      description={t("verifyEmailRequestRoute.description")}
    >
      <VerifyEmailRequest />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_verifyEmail/overeni-emailu-zadost/")({
  component: VerifyEmailRequestRoute,
});
