import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import ForgottenPassword from "@web/pages/auth/ForgottenPassword";

function ForgottenPasswordRoute() {
  return (
    <AuthLayout header="Forgotten password" description="">
      <ForgottenPassword />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_auth/forgotten-password/")({
  component: ForgottenPasswordRoute,
});
