import * as React from "react";

import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import type { AuthState } from "@web/features/auth";

export const Route = createRootRouteWithContext<{
  authentication: AuthState;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
