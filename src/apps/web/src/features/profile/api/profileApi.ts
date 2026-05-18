import { mainBaseApi } from "@web/shared/api/mainBaseApi";
import type { User } from "@web/entities/user";

const basePath = "web/users/";

export const profileApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    updateUser: build.mutation<User, Partial<User> & { id: string }>({
      query: ({ id, ...body }) => ({
        url: `${basePath}${id}`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const { useUpdateUserMutation } = profileApi;
