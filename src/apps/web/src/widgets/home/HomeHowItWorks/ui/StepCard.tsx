import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@repo/utils";

interface StepCardProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: ReactNode;
  variant?: "amber" | "sage" | "coral";
}

export const StepCard = ({
  number,
  icon: Icon,
  title,
  description,
  variant = "amber",
}: StepCardProps) => {
  const isAmber = variant === "amber";
  const isSage = variant === "sage";
  const isCoral = variant === "coral";

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-3xl border border-border bg-surface-alt p-10 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-3 hover:scale-[1.02] overflow-hidden",
        isAmber && "hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)]",
        isSage && "hover:shadow-[0_20px_50px_rgba(74,122,104,0.25)]",
        isCoral && "hover:shadow-[0_20px_50px_rgba(232,131,111,0.25)]",
      )}
    >
      {/* Large faint step number in the background */}
      <span
        className="pointer-events-none absolute -top-6 right-2 text-[8rem] font-black leading-none text-text-main/5 select-none"
        aria-hidden="true"
      >
        {number}
      </span>

      <dt className="relative flex items-center gap-x-4 text-xl font-bold leading-7 text-text-main">
        <div className="relative shrink-0">
          <div
            className={cn(
              "h-14 w-14 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
              isAmber && "bg-primary/15 text-primary",
              isSage && "bg-sage-mid/15 text-sage-mid",
              isCoral && "bg-coral/15 text-coral",
            )}
          >
            <Icon
              className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
              aria-hidden="true"
            />
          </div>
          <span className="absolute -top-2 -right-2 bg-border text-text-muted text-[10px] font-black rounded-full h-6 w-6 flex items-center justify-center shadow-sm ring-4 ring-surface-alt transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
            {number}
          </span>
        </div>
        <span className="text-xl font-black tracking-tight text-text-main transition-colors duration-300 wrap-break-word">
          {title}
        </span>
      </dt>

      <dd className="relative mt-6 flex flex-auto flex-col text-lg leading-7 text-text-muted">
        <p className="transition-colors duration-300 group-hover:text-text-main">
          {description}
        </p>
      </dd>

      {/* Bottom accent line */}
      <div
        className={cn(
          "absolute inset-x-10 bottom-0 h-px transition-colors duration-500",
          isAmber && "bg-linear-to-r from-transparent via-primary/40 to-transparent",
          isSage && "bg-linear-to-r from-transparent via-sage-mid/40 to-transparent",
          isCoral && "bg-linear-to-r from-transparent via-coral/40 to-transparent",
        )}
      />
    </div>
  );
};

StepCard.displayName = "StepCard";
