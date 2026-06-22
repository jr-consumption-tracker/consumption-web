import { useNavigate } from "@tanstack/react-router";

import { useVerifyEmailResendMutation } from "../../api/useVerifyEmailRequestApi";

export function useVerifyEmailRequest() {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isError, error, reset } =
    useVerifyEmailResendMutation();

  const resendVerificationEmail = async (email: string): Promise<void> => {
    await mutateAsync(email);
    await navigate({ to: "/overeni-emailu-zadost-uspech", replace: true });
  };

  return {
    resendVerificationEmail,
    reset,
    isPending,
    isError,
    error,
  };
}
