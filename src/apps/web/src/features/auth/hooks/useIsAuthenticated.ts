import { useSelector } from "react-redux";

import { selectIsAuthenticated } from "../store/authSelectors";

export const useIsAuthenticated = () => {
  return useSelector(selectIsAuthenticated);
};

