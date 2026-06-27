import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import ForgottenPasswordSuccess from "@web/pages/passwordReset/ForgottenPasswordSuccess";

function ForgottenPasswordSuccessRoute() {
  const { t } = useTranslation("passwordReset");

  return (
    <AuthLayout
      header={t("forgottenPasswordSuccessRoute.header")}
      description={t("forgottenPasswordSuccessRoute.description")}
    >
      <ForgottenPasswordSuccess />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_passwordReset/zapomenute-heslo-uspech/")({
  component: ForgottenPasswordSuccessRoute,
});
