import { I18nextProvider } from "react-i18next";

import { RouterProvider } from "@tanstack/react-router";

import i18n from "./app/localization/i18n";
import { router } from "./app/router/router";
import { ThemeProvider } from "./features/theme/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
