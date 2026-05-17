import { mainBaseApi } from "@web/shared/api/mainBaseApi";

import type { User } from "../model/user";

const basePath = "web/users/";

export const userApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, string>({
      query: (id) => `${basePath}${id}`,
    }),
    updateUser: build.mutation<User, Partial<User> & { id: string }>({
      query: ({ id, ...body }) => ({
        url: `${basePath}${id}`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
