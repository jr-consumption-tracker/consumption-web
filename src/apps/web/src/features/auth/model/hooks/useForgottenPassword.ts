import { useNavigate } from "@tanstack/react-router";
import { usePasswordResetRequestMutation } from "@web/features/passwordReset";

export function useForgottenPassword() {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isError, error, reset } =
    usePasswordResetRequestMutation();

  const requestPasswordReset = async (email: string): Promise<void> => {
    await mutateAsync(email);
    await navigate({ to: "/forgotten-password-success", replace: true });
  };

  return {
    requestPasswordReset,
    reset,
    isPending,
    isError,
    error,
  };
}
