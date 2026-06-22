import { useTranslation } from "react-i18next";

import { FormHeading } from "@repo/components";
import { Route } from "@web/app/routes/_auth/registrace-uspech/index";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

const RegisterSuccess = () => {
  const { t: tAuth } = useTranslation("auth");
  const { email } = Route.useSearch();

  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{tAuth("registerSuccessful.heading")}</FormHeading>

      <p className="mb-2 text-sm text-center">
        {email ? (
          <>
            {tAuth("registerSuccessful.info1Before")}{" "}
            <span className="font-bold text-primary text-sm">{email}</span>{" "}
            {tAuth("registerSuccessful.info1After")}
          </>
        ) : (
          tAuth("registerSuccessful.info1")
        )}
      </p>

      <p className="mb-8 text-sm text-center">
        {tAuth("registerSuccessful.info2")}
      </p>

      <div className="w-full flex justify-center">
        <ButtonLink to="/prihlaseni" replace className="w-full">
          {tAuth("registerSuccessful.backToLogin")}
        </ButtonLink>
      </div>
    </div>
  );
};

export default RegisterSuccess;
