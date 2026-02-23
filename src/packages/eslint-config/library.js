import baseConfig from "./base.js";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  ...baseConfig,
  {
    ...reactHooks.configs.flat.recommended,
    files: ["**/*.{ts,tsx}"],
  },
];
