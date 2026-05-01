import { useDispatch } from "react-redux";

import { actions } from "./authSlice";

import type { User } from "@web/entities/user";
import type { AuthSession } from "@web/entities/auth";
export const useAuthSlice = () => {
  const dispatch = useDispatch();

  const setCredentials = (user: User, session: AuthSession) => {
    dispatch(actions.setCredentials({ user, session }));
  };

  const setUser = (user: User) => {
    dispatch(actions.setUser(user));
  };

  const setSession = (session: AuthSession) => {
    dispatch(actions.setSession(session));
  };

  const logout = () => {
    dispatch(actions.logout());
  };

  return { setCredentials, setUser, setSession, logout };
};
