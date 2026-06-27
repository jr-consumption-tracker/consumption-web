import { FormHeading } from "../FormHeading";

import type { TFunction } from "i18next";

type ForgottenPasswordSuccessProps = {
  tPasswordReset: TFunction<"passwordReset">;
  backToLoginLink: React.ReactNode;
  backToEmailLink: React.ReactNode;
};

export const ForgottenPasswordSuccess = ({
  tPasswordReset,
  backToLoginLink,
  backToEmailLink,
}: ForgottenPasswordSuccessProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>
        {tPasswordReset("forgottenPasswordSuccess.heading")}
      </FormHeading>

      <p className="mb-2 text-sm text-center">
        {tPasswordReset("forgottenPasswordSuccess.info1")}
      </p>

      <p className="mb-8 text-sm text-center">
        {tPasswordReset("forgottenPasswordSuccess.info2")}
      </p>

      <div className="w-full flex justify-center">{backToLoginLink}</div>
      <div className="w-full flex justify-center mt-2">{backToEmailLink}</div>
    </div>
  );
};
