import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import AuthLayout from "@web/app/layouts/authLayout";
import Login from "@web/pages/Login";

function LoginRoute() {
  const { t } = useTranslation("auth");

  return (
    <AuthLayout
      header={t("loginRoute.header")}
      description={t("loginRoute.description")}
    >
      <Login />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_auth/login/")({
  component: LoginRoute,
});
