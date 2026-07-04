import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_passwordReset")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
