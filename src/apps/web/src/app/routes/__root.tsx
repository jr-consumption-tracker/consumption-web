import * as React from "react";

import { createRootRoute, Outlet } from "@tanstack/react-router";

import MainLayout from "../layouts/MainLayout";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </React.Fragment>
  );
}
