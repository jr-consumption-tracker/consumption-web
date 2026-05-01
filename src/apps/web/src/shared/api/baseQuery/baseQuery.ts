import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { AuthAwareState } from "../types/AuthAwareState";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers: Headers, { getState }) => {
    const authorizationHeader = headers.get("Authorization");
    const authState = (getState() as AuthAwareState).auth;

    const accessToken = authState?.session?.accessToken;
    if (!authorizationHeader && accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

export default baseQuery;
