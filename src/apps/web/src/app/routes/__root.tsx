import * as React from "react";

import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import PublicLayout from "../layouts/PublicLayout";

import type { AuthState } from "@web/features/auth";

export const Route = createRootRouteWithContext<{ authentication: AuthState }>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <PublicLayout>
        <Outlet />
      </PublicLayout>
    </React.Fragment>
  );
}
