import HttpStatusCodes from "http-status-codes";

import {
  authSessionExpired,
  authSessionRefreshed,
} from "@web/shared/api/authSessionEvents";
import baseQuery from "./baseQuery";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === HttpStatusCodes.FORBIDDEN) {
    const persistLogin = localStorage.getItem("persist") ?? false;
    const url = `web/auth/refreshToken?persistLogin=${persistLogin}`;
    const refreshResult = await baseQuery(url, api, extraOptions);

    if (refreshResult?.data) {
      const newSession = refreshResult.data as {
        accessToken: string;
        refreshToken?: string;
      };
      api.dispatch(
        authSessionRefreshed({
          accessToken: newSession.accessToken,
          refreshToken: newSession.refreshToken,
        }),
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(authSessionExpired());
    }
  }

  return result;
};

export default baseQueryWithAuth;

