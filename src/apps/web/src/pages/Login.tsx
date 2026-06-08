import { useTranslation } from "react-i18next";

import { LoginForm } from "@repo/components";
import { Link } from "@tanstack/react-router";
import { useLoginForm } from "@web/features/auth/model/hooks/useLoginForm";

const Login = () => {
  const { handleSubmit, isPending } = useLoginForm();
  const { t } = useTranslation("validation");
  const { t: tAuth } = useTranslation("auth");
  const { t: tCommon } = useTranslation("common");

  return (
    <LoginForm
      onSubmit={handleSubmit}
      isLoading={isPending}
      t={t}
      tCommon={tCommon}
      heading={tAuth("login.heading")}
      emailLabel={tAuth("login.email")}
      passwordLabel={tAuth("login.password")}
      submitLabel={tAuth("login.submit")}
      noAccountText={tAuth("login.noAccount")}
      registerLink={
        <Link
          to="/register"
          className="text-primary font-medium hover:underline"
        >
          {tAuth("login.registerLink")}
        </Link>
      }
    />
  );
};

Login.displayName = "Login";

export default Login;
