import { Alert } from "@repo/components";

import type { ReactNode } from "react";

type Props = {
  alertTitle: string;
  description: string;
  link: ReactNode;
};

export const AuthAlertBlock = ({ alertTitle, description, link }: Props) => {
  return (
    <section>
      <div className="w-full">
        <Alert className="mb-8" title={alertTitle} />
        <p className="mb-8 text-sm text-center">{description}</p>
        <div className="f-full flex justify-center">{link}</div>
      </div>
    </section>
  );
};
