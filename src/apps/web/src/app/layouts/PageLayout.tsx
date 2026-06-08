import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <div className="flex flex-col">{children}</div>;
};

export default PageLayout;
