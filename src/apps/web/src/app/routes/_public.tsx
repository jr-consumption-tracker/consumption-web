import { createFileRoute, Outlet } from "@tanstack/react-router";

import PublicLayout from "../layouts/PublicLayout";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
}
