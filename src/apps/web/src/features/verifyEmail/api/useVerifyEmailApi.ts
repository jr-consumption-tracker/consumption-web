import { useMutation } from "@tanstack/react-query";

import { verifyEmail } from "./verifyEmailApi";

export function useVerifyEmailMutation() {
  return useMutation({
    mutationFn: verifyEmail,
  });
}
