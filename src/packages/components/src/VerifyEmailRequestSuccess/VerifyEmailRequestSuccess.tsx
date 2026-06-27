import { FormHeading } from "../FormHeading";

import type { TFunction } from "i18next";

type VerifyEmailRequestSuccessProps = {
  tVerifyEmail: TFunction<"verifyEmail">;
  backToLoginLink: React.ReactNode;
};

export const VerifyEmailRequestSuccess = ({
  tVerifyEmail,
  backToLoginLink,
}: VerifyEmailRequestSuccessProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>
        {tVerifyEmail("verifyEmailRequestSuccess.heading")}
      </FormHeading>

      <p className="mb-2 text-sm text-center">
        {tVerifyEmail("verifyEmailRequestSuccess.info1")}
      </p>

      <p className="mb-8 text-sm text-center">
        {tVerifyEmail("verifyEmailRequestSuccess.info2")}
      </p>

      <div className="w-full flex justify-center">{backToLoginLink}</div>
    </div>
  );
};
