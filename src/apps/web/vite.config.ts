import path from "path";
import { defineConfig, loadEnv } from "vite";

import tailwindcss from "@tailwindcss/vite";
import tanstackRouter from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig((configEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd(), "") as Record<
    string,
    string
  >;

  return {
    define: {
      __APP_VERSION__: JSON.stringify(env.npm_package_version),
    },
    server: {
      port: 3000,
      https: {
        key: "./certs/devcert.key",
        cert: "./certs/devcert.crt",
      },
    },
    base: env.VITE_PUBLIC_URL || "/",
    plugins: [
      tailwindcss(),
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
        routesDirectory: path.resolve(__dirname, "./src/app/routes"),
      }),
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
    ],
    resolve: {
      alias: {
        "@web": path.resolve(__dirname, "./src"),
      },
    },
  };
});
