import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import i18n from "../localization/i18n";
import { store } from "../store/store";
import { ThemeProvider } from "@web/shared/theme";

import type { ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
};

