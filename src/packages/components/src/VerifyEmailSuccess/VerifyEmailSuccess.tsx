import { FormHeading } from "../FormHeading";

import type { TFunction } from "i18next";

type VerifyEmailSuccessProps = {
  tAuth: TFunction<"auth">;
  backToLoginLink: React.ReactNode;
};

export const VerifyEmailSuccess = ({
  tAuth,
  backToLoginLink,
}: VerifyEmailSuccessProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{tAuth("verifyEmailSuccess.heading")}</FormHeading>

      <p className="mb-8 text-sm text-center">
        {tAuth("verifyEmailSuccess.description")}
      </p>

      <div className="w-full flex justify-center">{backToLoginLink}</div>
    </div>
  );
};
