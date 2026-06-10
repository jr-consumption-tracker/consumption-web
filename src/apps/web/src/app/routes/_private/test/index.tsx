import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@web/app/layouts/PageLayout";
import Pricing from "@web/pages/Pricing";

function TestPage() {
  return (
    <PageLayout>
      <Pricing />
    </PageLayout>
  );
}

export const Route = createFileRoute("/_private/test/")({
  component: TestPage,
});
