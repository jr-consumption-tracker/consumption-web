import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import VerifyEmailRequestSuccess from "@web/pages/verifyEmail/VerifyEmailRequestSuccess";

function RouteComponent() {
  const { t } = useTranslation("verifyEmail");

  return (
    <AuthLayout
      header={t("verifyEmailRequestSuccessRoute.header")}
      description={t("verifyEmailRequestSuccessRoute.description")}
    >
      <VerifyEmailRequestSuccess />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_verifyEmail/overeni-emailu-zadost-uspech/")({
  component: RouteComponent,
});
