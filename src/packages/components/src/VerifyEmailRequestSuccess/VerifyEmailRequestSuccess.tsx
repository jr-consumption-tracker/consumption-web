import { FormHeading } from "../FormHeading";

import type { TFunction } from "i18next";

type VerifyEmailRequestSuccessProps = {
  tAuth: TFunction<"auth">;
  backToLoginLink: React.ReactNode;
};

export const VerifyEmailRequestSuccess = ({
  tAuth,
  backToLoginLink,
}: VerifyEmailRequestSuccessProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{tAuth("verifyEmailRequestSuccess.heading")}</FormHeading>

      <p className="mb-2 text-sm text-center">
        {tAuth("verifyEmailRequestSuccess.info1")}
      </p>

      <p className="mb-8 text-sm text-center">
        {tAuth("verifyEmailRequestSuccess.info2")}
      </p>

      <div className="w-full flex justify-center">{backToLoginLink}</div>
    </div>
  );
};
