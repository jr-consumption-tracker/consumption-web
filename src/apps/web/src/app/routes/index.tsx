import { createFileRoute } from "@tanstack/react-router";
import Home from "@web/pages/Home";

export const Route = createFileRoute("/")({
  component: Home,
});
