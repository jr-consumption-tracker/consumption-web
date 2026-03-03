import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import { RouterProvider } from "@tanstack/react-router";

import i18n from "./app/localization/i18n";
import { router } from "./app/router/router";
import { store } from "./app/store/store";
import { ThemeProvider } from "./features/theme/providers/ThemeProvider";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
