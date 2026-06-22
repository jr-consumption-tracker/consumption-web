import { FormHeading } from "../FormHeading";

import type { TFunction } from "i18next";

type PasswordResetSuccessProps = {
  tAuth: TFunction<"auth">;
  backToLoginLink: React.ReactNode;
  backToEmailLink: React.ReactNode;
};

export const PasswordResetSuccess = ({
  tAuth,
  backToLoginLink,
  backToEmailLink,
}: PasswordResetSuccessProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{tAuth("passwordResetSuccessful.heading")}</FormHeading>

      <p className="mb-2 text-sm text-center">
        {tAuth("passwordResetSuccessful.info1")}
      </p>

      <p className="mb-8 text-sm text-center">
        {tAuth("passwordResetSuccessful.info2")}
      </p>

      <div className="w-full flex justify-center">{backToLoginLink}</div>
      <div className="w-full flex justify-center mt-2">{backToEmailLink}</div>
    </div>
  );
};
