import { useGetUserQuery } from "@web/entities/user";

/**
 * useCurrentUser - Feature hook pro ziskani aktualniho uzivatele.
 */
export const useCurrentUser = (userId: string | undefined) => {
  const {
    data: user,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetUserQuery(userId ?? "", {
    skip: !userId,
  });

  const displayName = user?.name ?? user?.email ?? "Uzivatel";

  return {
    user,
    displayName,
    isLoading,
    isError,
    error,
    refetch,
  } as const;
};

