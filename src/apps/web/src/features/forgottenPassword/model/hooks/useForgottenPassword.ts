import { useNavigate } from "@tanstack/react-router";

import { usePasswordResetRequestMutation } from "../../api/usePasswordResetApi";

export function useForgottenPassword() {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isError, error, reset } =
    usePasswordResetRequestMutation();

  const requestPasswordReset = async (email: string): Promise<void> => {
    await mutateAsync(email);
    await navigate({ to: "/zapomenute-heslo-uspech", replace: true });
  };

  return {
    requestPasswordReset,
    reset,
    isPending,
    isError,
    error,
  };
}
