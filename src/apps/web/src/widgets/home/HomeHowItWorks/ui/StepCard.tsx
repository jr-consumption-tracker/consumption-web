import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@repo/utils";

interface StepCardProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: ReactNode;
  variant?: "primary" | "electricity" | "mixed";
}

export const StepCard = ({
  number,
  icon: Icon,
  title,
  description,
  variant = "primary",
}: StepCardProps) => {
  const isPrimary = variant === "primary";
  const isElectricity = variant === "electricity";
  const isMixed = variant === "mixed";

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-3xl border border-border bg-surface p-10 transition-all duration-500 cubic-bezier(.16,1,.3,1) hover:-translate-y-3 hover:scale-[1.02] overflow-hidden",
        isPrimary &&
          "hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)]",
        isElectricity &&
          "hover:border-electricity-500/50 hover:shadow-[0_20px_50px_rgba(var(--electricity-rgb),0.2)]",
        isMixed &&
          "hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2),0_20px_50px_rgba(var(--electricity-rgb),0.2)]",
      )}
    >
      {/* Visual background elements */}
      <div
        className={cn(
          "absolute inset-x-0 -top-px h-px w-2/3 mx-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          isPrimary &&
            "bg-linear-to-r from-transparent via-primary to-transparent",
          isElectricity &&
            "bg-linear-to-r from-transparent via-electricity-500 to-transparent",
          isMixed &&
            "bg-linear-to-r from-transparent via-primary via-electricity-500 to-transparent",
        )}
      />
      <div
        className={cn(
          "absolute -bottom-16 -right-16 h-64 w-64 rounded-full blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-20",
          isPrimary && "bg-primary",
          isElectricity && "bg-electricity-500",
          isMixed &&
            "bg-linear-to-br from-primary to-electricity-500 group-hover:opacity-30",
        )}
      />

      <dt className="flex items-center gap-x-4 text-xl font-bold leading-7 text-text-main">
        <div className="relative shrink-0">
          <div
            className={cn(
              "h-14 w-14 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:text-white",
              isPrimary &&
                "bg-primary/5 text-primary group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]",
              isElectricity &&
                "bg-electricity-500/5 text-electricity-500 group-hover:bg-electricity-500 group-hover:shadow-[0_0_20px_rgba(var(--electricity-rgb),0.4)]",
              isMixed &&
                "bg-linear-to-br from-primary/5 to-electricity-500/5 text-primary group-hover:from-primary group-hover:to-electricity-500 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]",
            )}
          >
            <Icon
              className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
              aria-hidden="true"
            />
          </div>
          <span
            className={cn(
              "absolute -top-2 -right-2 bg-border text-text-muted text-[10px] font-black rounded-full h-6 w-6 flex items-center justify-center shadow-sm ring-4 ring-surface transition-all duration-500 group-hover:scale-110 group-hover:text-white group-hover:shadow-lg group-hover:-translate-y-1",
              isPrimary && "group-hover:bg-primary",
              isElectricity && "group-hover:bg-electricity-500",
              isMixed &&
                "group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-electricity-500",
            )}
          >
            {number}
          </span>
        </div>
        <span
          className={cn(
            "text-xl font-black tracking-tight text-text-main transition-colors duration-300 wrap-break-word",
            isPrimary && "group-hover:text-primary",
            isElectricity && "group-hover:text-electricity-500",
            isMixed && "group-hover:text-primary",
          )}
        >
          {title}
        </span>
      </dt>

      <dd className="mt-6 flex flex-auto flex-col text-lg leading-7 text-text-muted">
        <p className="transition-colors duration-300 group-hover:text-text-main">
          {description}
        </p>
      </dd>

      {/* Bottom accent line */}
      <div
        className={cn(
          "absolute inset-x-10 bottom-0 h-px transition-colors duration-500",
          isPrimary &&
            "bg-linear-to-r from-transparent via-primary/40 to-transparent",
          isElectricity &&
            "bg-linear-to-r from-transparent via-electricity-500/40 to-transparent",
          isMixed &&
            "bg-linear-to-r from-transparent via-primary/30 via-electricity-500/30 to-transparent",
        )}
      />
    </div>
  );
};

StepCard.displayName = "StepCard";
