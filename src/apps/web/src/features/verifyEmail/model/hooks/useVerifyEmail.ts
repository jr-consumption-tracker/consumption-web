import { useEffect } from "react";

import { useNavigate } from "@tanstack/react-router";

import { useVerifyEmailMutation } from "../../api/useVerifyEmailApi";

export function useVerifyEmail(token: string) {
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useVerifyEmailMutation();

  useEffect(() => {
    mutate(token, {
      onSuccess: () =>
        navigate({ to: "/overeni-emailu-uspech", replace: true }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return {
    isPending,
    isError,
    error,
  };
}
