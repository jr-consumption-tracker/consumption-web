import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@web/app/layouts/authLayout";
import VerifyEmail from "@web/pages/VerifyEmail";

function VerifyEmailRoute() {
  return (
    <AuthLayout
      header="Verify Your Email"
      description="Please check your email for a verification link."
    >
      <VerifyEmail />
    </AuthLayout>
  );
}

export const Route = createFileRoute("/_auth/verify-email/")({
  component: VerifyEmailRoute,
});
