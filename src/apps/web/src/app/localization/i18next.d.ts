import "i18next"; // Musí být importováno, aby fungoval declaration merging

import auth from "../../../public/locales/cs/auth.json";
import common from "../../../public/locales/cs/common.json";
import features from "../../../public/locales/cs/features.json";
import home from "../../../public/locales/cs/home.json";

declare module "i18next" {
  // Rozšíření vnitřních typů i18next
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      home: typeof home;
      auth: typeof auth;
      features: typeof features;
    };
  }
}
