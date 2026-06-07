import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@web/app/layouts/PageLayout";
import Pricing from "@web/pages/Pricing";

function PricingPage() {
  return (
    <PageLayout>
      <Pricing />
    </PageLayout>
  );
}

export const Route = createFileRoute("/pricing/")({
  component: PricingPage,
});
