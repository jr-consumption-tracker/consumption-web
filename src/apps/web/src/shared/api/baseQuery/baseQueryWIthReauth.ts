import HttpStatusCodes from "http-status-codes";

import { actions } from "@web/features/auth/store/authSlice";

import baseQuery from "./baseQuery";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import type { AuthState } from "@web/features/auth/store/AuthState";
const baseQueryWithReauth: BaseQueryFn<
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const email = (api as any).getState().auth.email;

      api.dispatch(
        actions.setCredentials({
          ...(refreshResult.data as AuthState),
          email: email,
        }),
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(actions.logout());
    }
  }

  return result;
};

export default baseQueryWithReauth;
