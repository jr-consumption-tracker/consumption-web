import { useAppDispatch } from "@web/app/store/hooks";

import { actions } from "./authSlice";

import type { AuthState } from "./AuthState";

export const useAuthSlice = () => {
  const dispatch = useAppDispatch();

  const setCredentials = (credentials: AuthState) => {
    dispatch(actions.setCredentials(credentials));
  };

  return { setCredentials };
};
