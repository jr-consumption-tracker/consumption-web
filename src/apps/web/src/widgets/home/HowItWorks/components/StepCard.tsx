import type { ReactNode, ComponentType, SVGProps } from "react";

interface StepCardProps {
  number: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: ReactNode;
}

export const StepCard = ({
  number,
  icon: Icon,
  title,
  description,
}: StepCardProps) => {
  return (
    <div className="group relative flex flex-col rounded-3xl border border-border bg-surface p-10 transition-all duration-500 cubic-bezier(.16,1,.3,1) hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.15)] hover:-translate-y-3 hover:scale-[1.02]">
      {/* Subtle background glow on hover */}
      <div className="absolute inset-x-0 -top-px h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <dt className="flex items-center gap-x-4 text-xl font-bold leading-7 text-text-main">
        <div className="relative shrink-0">
          <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]">
            <Icon
              className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
              aria-hidden="true"
            />
          </div>
          <span className="absolute -top-2 -right-2 bg-border text-text-muted text-[10px] font-black rounded-full h-6 w-6 flex items-center justify-center shadow-sm ring-4 ring-surface transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:-translate-y-1">
            {number}
          </span>
        </div>
        <span className="text-xl font-bold tracking-tight text-text-main transition-colors duration-300 group-hover:text-primary break-words">
          {title}
        </span>
      </dt>

      <dd className="mt-6 flex flex-auto flex-col text-lg leading-7 text-text-muted">
        <p className="transition-colors duration-300 group-hover:text-text-main">
          {description}
        </p>
      </dd>

      {/* Bottom accent line */}
      <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
};

StepCard.displayName = "StepCard";
