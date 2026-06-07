import { useMutation } from "@tanstack/react-query";

import { login, logout, register } from "./authApi";

export function useRegisterMutation() {
  return useMutation({
    mutationFn: register,
  });
}

export function useLoginMutation() {
  return useMutation({
    mutationFn: login,
  });
}

export function useLogoutMutation() {
  return useMutation({
    mutationFn: logout,
  });
}
