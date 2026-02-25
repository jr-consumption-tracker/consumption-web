import { createRouter, RouterProvider } from "@tanstack/react-router";

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
  return <RouterProvider router={router} />;
}

export default App;
