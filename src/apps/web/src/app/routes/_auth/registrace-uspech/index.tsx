import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import { registerSuccessSearchSchema } from "@web/features/auth/model/schemas/registerSuccessSearchSchema";
import AuthLayout from "@web/app/layouts/authLayout";
import RegisterSuccess from "@web/pages/auth/RegisterSuccess";

function RegisterSuccessRoute() {
  const { t } = useTranslation("auth");

  return (
    <AuthLayout
      header={t("registerSuccessRoute.header")}
      description={t("registerSuccessRoute.description")}
    >
      <RegisterSuccess />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_auth/registrace-uspech/")({
  validateSearch: registerSuccessSearchSchema,
  component: RegisterSuccessRoute,
});
