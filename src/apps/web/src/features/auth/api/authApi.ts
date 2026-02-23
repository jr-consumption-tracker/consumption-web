import { mainBaseApi } from "@web/shared/api/mainBaseApi";

const basePath = "web/auth/";

export const authApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<string, FormData>({
      query: (body) => ({
        url: `${basePath}register`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
