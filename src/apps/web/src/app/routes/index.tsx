import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@web/pages/HomePage";

export const Route = createFileRoute("/")({
  component: HomePage,
});
