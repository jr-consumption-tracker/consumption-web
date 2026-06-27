import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import ForgottenPassword from "@web/pages/passwordReset/ForgottenPassword";

function ForgottenPasswordRoute() {
  const { t } = useTranslation("passwordReset");

  return (
    <AuthLayout
      header={t("forgottenPasswordRoute.header")}
      description={t("forgottenPasswordRoute.description")}
    >
      <ForgottenPassword />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_passwordReset/zapomenute-heslo/")({
  component: ForgottenPasswordRoute,
});
