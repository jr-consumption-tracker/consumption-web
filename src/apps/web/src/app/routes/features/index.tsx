import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@web/app/layouts/PageLayout";
import Features from "@web/pages/Features";

function FeaturesPage() {
  return (
    <PageLayout>
      <Features />
    </PageLayout>
  );
}

export const Route = createFileRoute("/features/")({
  component: FeaturesPage,
});
