import { I18nextProvider } from "react-i18next";

import { createRouter, RouterProvider } from "@tanstack/react-router";

import i18n from "./app/localization/i18n";
import { ThemeProvider } from "./features/theme/providers/ThemeProvider";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  context: { authentication: undefined! },
  defaultNotFoundComponent: () => <div>Global Not Found :(</div>,
  //  routeMasks: [stepsMask],
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
  // interface StaticDataRouteOption {
  //   breadcrumb?: BreadcrumbValue;
  // }
}

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
