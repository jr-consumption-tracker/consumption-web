import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@web/pages/Home";

export const Route = createFileRoute("/")({
  component: HomePage,
});
