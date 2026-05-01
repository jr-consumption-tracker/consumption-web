import { Footer } from "@web/widgets/layout/Footer";
import { Header } from "@web/widgets/layout/Header";

import { BaseLayout } from "./BaseLayout";

import type { ReactNode } from "react";

interface PublicLayoutProps {
  children: ReactNode;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <BaseLayout>
      <Header />
      <main className="pt-24 lg:pt-32">{children}</main>
      <Footer />
    </BaseLayout>
  );
};

PublicLayout.displayName = "PublicLayout";
