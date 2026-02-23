import { createApi } from "@reduxjs/toolkit/query/react";

import { ApiTagsKeys } from "./apiTags";
import baseQueryWithReauth from "./baseQuery/baseQueryWIthReauth";

export const reducerPath = "mainBaseApi";

export const mainBaseApi = createApi({
  reducerPath: reducerPath,
  tagTypes: ApiTagsKeys,
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
