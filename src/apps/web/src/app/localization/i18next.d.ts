import "i18next"; // Musí být importováno, aby fungoval declaration merging

import auth from "../../../public/locales/cs/auth.json";
import common from "../../../public/locales/cs/common.json";
import features from "../../../public/locales/cs/features.json";
import home from "../../../public/locales/cs/home.json";
import passwordReset from "../../../public/locales/cs/passwordReset.json";
import pricing from "../../../public/locales/cs/pricing.json";
import validation from "../../../public/locales/cs/validation.json";
import verifyEmail from "../../../public/locales/cs/verifyEmail.json";

declare module "i18next" {
  // Rozšíření vnitřních typů i18next
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      auth: typeof auth;
      common: typeof common;
      features: typeof features;
      home: typeof home;
      passwordReset: typeof passwordReset;
      pricing: typeof pricing;
      validation: typeof validation;
      verifyEmail: typeof verifyEmail;
    };
  }
}
