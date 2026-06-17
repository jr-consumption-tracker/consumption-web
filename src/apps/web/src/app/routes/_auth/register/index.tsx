import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import Register from "@web/pages/auth/Register";

function RegisterRoute() {
  const { t } = useTranslation("auth");

  return (
    <AuthLayout
      header={t("registerRoute.header")}
      description={t("registerRoute.description")}
    >
      <Register />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_auth/register/")({
  component: RegisterRoute,
});
