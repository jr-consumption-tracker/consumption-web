import reactConfig from "./library.js";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  ...reactConfig,
  {
    ...reactRefresh.configs.vite,
    files: ["**/*.{ts,tsx}"],
  },
];
