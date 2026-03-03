import type { ReactNode } from "react";
import { cn } from "@repo/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: ReactNode;
}

export const Section = ({
  children,
  className,
  id,
  background,
}: SectionProps) => {
  return (
    <section id={id} className={cn("relative py-20 lg:py-32", className)}>
      {background}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
