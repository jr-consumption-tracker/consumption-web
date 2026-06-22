import path from "path";
import { defineConfig, loadEnv } from "vite";

import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import tanstackRouter from "@tanstack/router-plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig((configEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd(), "") as Record<
    string,
    string
  >;
  const isProduction = configEnv.mode === "production";

  return {
    define: {
      __APP_VERSION__: JSON.stringify(env.npm_package_version),
    },
    server: {
      port: 3002,
      https: {
        key: "./certs/devcert.key",
        cert: "./certs/devcert.crt",
      },
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    preview: {
      port: 3002,
      https: {
        key: "./certs/devcert.key",
        cert: "./certs/devcert.crt",
      },
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
        },
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
      react(),
      babel({
        presets: [reactCompilerPreset()],
      }),
    ],
    resolve: {
      alias: {
        "@web": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: "es2022",
      minify: "esbuild",
      cssCodeSplit: true,
      sourcemap: !isProduction,
    },
  };
});
