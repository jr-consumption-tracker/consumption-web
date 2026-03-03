import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@web/routeTree.gen";

export const router = createRouter({
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
}
