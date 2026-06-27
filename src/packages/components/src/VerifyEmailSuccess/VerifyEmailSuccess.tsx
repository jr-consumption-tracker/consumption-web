import { FormHeading } from "../FormHeading";

import type { TFunction } from "i18next";

type VerifyEmailSuccessProps = {
  tVerifyEmail: TFunction<"verifyEmail">;
  backToLoginLink: React.ReactNode;
};

export const VerifyEmailSuccess = ({
  tVerifyEmail,
  backToLoginLink,
}: VerifyEmailSuccessProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{tVerifyEmail("verifyEmailSuccess.heading")}</FormHeading>

      <p className="mb-8 text-sm text-center">
        {tVerifyEmail("verifyEmailSuccess.description")}
      </p>

      <div className="w-full flex justify-center">{backToLoginLink}</div>
    </div>
  );
};
