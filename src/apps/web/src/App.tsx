import { I18nextProvider } from "react-i18next";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import { queryClient } from "./app/config/queryClient";
import i18n from "./app/localization/i18n";
import { ToastProvider } from "./app/providers/ToatProvider";
import { router } from "./app/router/router";
import { ThemeProvider } from "./shared/lib/theme";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <ToastProvider />
          <RouterProvider router={router} />
        </I18nextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
