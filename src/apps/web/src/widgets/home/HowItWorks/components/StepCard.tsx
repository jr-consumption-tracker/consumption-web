import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { stepCardVariants } from "../styles/stepCardVariants";

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
  const classes = stepCardVariants({ variant });

  return (
    <div className={classes.base()}>
      {/* Visual background elements */}
      <div className={classes.glow()} />
      <div className={classes.bgBlur()} />

      <dt className="flex items-center gap-x-4 text-xl font-bold leading-7 text-text-main">
        <div className="relative shrink-0">
          <div className={classes.iconWrapper()}>
            <Icon
              className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
              aria-hidden="true"
            />
          </div>
          <span className={classes.numberBadge()}>{number}</span>
        </div>
        <span className={classes.title()}>{title}</span>
      </dt>

      <dd className="mt-6 flex flex-auto flex-col text-lg leading-7 text-text-muted">
        <p className="transition-colors duration-300 group-hover:text-text-main">
          {description}
        </p>
      </dd>

      {/* Bottom accent line */}
      <div className={classes.accentLine()} />
    </div>
  );
};

StepCard.displayName = "StepCard";
