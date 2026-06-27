import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import VerifyEmailMissingToken from "@web/pages/verifyEmail/VerifyEmailMissingToken";

function VerifyEmailMissingTokenRoute() {
  const { t } = useTranslation("verifyEmail");

  return (
    <AuthLayout
      header={t("verifyEmailRoute.header")}
      description={t("verifyEmailRoute.description")}
    >
      <VerifyEmailMissingToken />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_verifyEmail/overeni-emailu/")({
  component: VerifyEmailMissingTokenRoute,
});
