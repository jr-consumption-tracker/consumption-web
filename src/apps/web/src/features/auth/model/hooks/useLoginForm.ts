import type { LoginSchemaValues } from "@repo/schemas";
import { useLogin } from "./useLogin";

export const useLoginForm = () => {
  const { login, isPending } = useLogin();

  const handleSubmit = (values: LoginSchemaValues) => login(values);

  return { handleSubmit, isPending };
};
