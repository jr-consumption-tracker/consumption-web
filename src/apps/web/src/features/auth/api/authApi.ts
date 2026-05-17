import { mainBaseApi } from "@web/shared/api/mainBaseApi";

import type { AuthSession } from "@web/entities/auth";
import type { LoginCredentials } from "@web/entities/auth";
import type { RegisterData } from "@web/entities/auth";

const basePath = "web/auth/";

export const authApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthSession, LoginCredentials>({
      query: (body) => ({
        url: `${basePath}login`,
        method: "POST",
        body,
      }),
    }),
    register: build.mutation<AuthSession, RegisterData>({
      query: (body) => ({
        url: `${basePath}register`,
        method: "POST",
        body,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: `${basePath}logout`,
        method: "POST",
      }),
    }),
    refreshToken: build.mutation<AuthSession, { refreshToken: string }>({
      query: ({ refreshToken }) => ({
        url: `${basePath}refreshToken`,
        method: "POST",
        body: { refreshToken },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
} = authApi;
