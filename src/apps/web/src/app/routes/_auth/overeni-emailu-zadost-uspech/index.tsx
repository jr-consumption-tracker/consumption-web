import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import VerifyEmailRequestSuccess from "@web/pages/auth/VerifyEmailRequestSuccess";

function RouteComponent() {
  const { t } = useTranslation("auth");

  return (
    <AuthLayout
      header={t("verifyEmailRequestSuccessRoute.header")}
      description={t("verifyEmailRequestSuccessRoute.description")}
    >
      <VerifyEmailRequestSuccess />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_auth/overeni-emailu-zadost-uspech/")({
  component: RouteComponent,
});
