import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import VerifyEmailSuccess from "@web/pages/verifyEmail/VerifyEmailSuccess";

function VerifyEmailSuccessRoute() {
  const { t } = useTranslation("verifyEmail");

  return (
    <AuthLayout
      header={t("verifyEmailSuccessRoute.header")}
      description={t("verifyEmailSuccessRoute.description")}
    >
      <VerifyEmailSuccess />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_verifyEmail/overeni-emailu-uspech/")({
  component: VerifyEmailSuccessRoute,
});
