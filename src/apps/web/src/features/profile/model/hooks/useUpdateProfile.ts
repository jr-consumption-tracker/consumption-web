import { useUpdateUserMutation } from "../../api/profileApi";

import type { User } from "@web/entities/user";

/**
 * useUpdateProfile - Feature hook pro aktualizaci profilu.
 */
export const useUpdateProfile = (userId: string) => {
  const [rawUpdate, { isLoading, isError, error }] = useUpdateUserMutation();

  const updateProfile = async (
    data: Partial<Pick<User, "name" | "avatarUrl">>,
  ) => {
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
  };

  return {
    updateProfile,
    isLoading,
    isError,
    error,
  };
};
