import "i18next"; // Musí být importováno, aby fungoval declaration merging

import common from "../../../public/locales/cs/common.json";
import home from "../../../public/locales/cs/home.json";
import auth from "../../../public/locales/cs/auth.json";

declare module "i18next" {
  // Rozšíření vnitřních typů i18next
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      home: typeof home;
      auth: typeof auth;
    };
  }
}
