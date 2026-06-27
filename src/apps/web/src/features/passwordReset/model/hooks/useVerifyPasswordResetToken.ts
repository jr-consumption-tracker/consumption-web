import { useEffect } from "react";

import { useVerifyTokenMutation } from "../../api/usePasswordResetApi";

export function useVerifyPasswordResetToken(token: string) {
  const { mutate, isPending, isError, error } = useVerifyTokenMutation();

  useEffect(() => {
    mutate(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return {
    isPending,
    isError,
    error,
  };
}
