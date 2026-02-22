import reactConfig from "./library.js";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  ...reactConfig,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [reactRefresh.configs.vite],
  },
];
