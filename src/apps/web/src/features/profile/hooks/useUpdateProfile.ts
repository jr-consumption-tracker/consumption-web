import { useCallback } from "react";

import { useUpdateUserMutation } from "@web/entities/user";

import type { User } from "@web/entities/user";

/**
 * useUpdateProfile - Feature hook pro aktualizaci profilu.
 */
export const useUpdateProfile = (userId: string) => {
  const [rawUpdate, { isLoading, isError, error }] = useUpdateUserMutation();

  const updateProfile = useCallback(
    async (data: Partial<Pick<User, "name" | "avatarUrl">>) => {
      try {
        const result = await rawUpdate({
          id: userId,
          ...data,
        }).unwrap();

        console.info("[Profile] Profile updated");

        return result;
      } catch (err) {
        console.error("[Profile] Profile update failed:", err);
        throw err;
      }
    },
    [rawUpdate, userId],
  );

  return {
    updateProfile,
    isLoading,
    isError,
    error,
  };
};

