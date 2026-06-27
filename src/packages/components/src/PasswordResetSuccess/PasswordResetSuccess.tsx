import { FormHeading } from "../FormHeading";

import type { TFunction } from "i18next";

type PasswordResetSuccessProps = {
  tPasswordReset: TFunction<"passwordReset">;
  backToLoginLink: React.ReactNode;
};

export const PasswordResetSuccess = ({
  tPasswordReset,
  backToLoginLink,
}: PasswordResetSuccessProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>
        {tPasswordReset("passwordResetSuccess.heading")}
      </FormHeading>

      <p className="mb-8 text-sm text-center">
        {tPasswordReset("passwordResetSuccess.info")}
      </p>

      <div className="w-full flex justify-center">{backToLoginLink}</div>
    </div>
  );
};
