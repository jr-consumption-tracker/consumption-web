import { createApi } from "@reduxjs/toolkit/query/react";

import { ApiTagsKeys } from "./apiTags";
import baseQueryWithAuth from "./baseQuery/baseQueryWithAuth";

export const reducerPath = "mainBaseApi";

export const mainBaseApi = createApi({
  reducerPath: reducerPath,
  tagTypes: ApiTagsKeys,
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
});
