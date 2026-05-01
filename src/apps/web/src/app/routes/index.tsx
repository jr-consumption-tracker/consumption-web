import { createFileRoute } from "@tanstack/react-router";
import Home from "@web/pages/Home";

import { PageLayout } from "../layouts/PageLayout";

const HomeRoute = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

export const Route = createFileRoute("/")({
  component: HomeRoute,
});
