import baseConfig from "./base.js";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  ...baseConfig,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [reactHooks.configs.flat.recommended],
  },
];
