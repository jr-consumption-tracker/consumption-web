import { cn } from "@repo/utils";

export interface InsightItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  value?: string;
  variant?: "warning" | "success" | "info";
}

/**
 * InsightItem - Komponenta pro zobrazení jedné položky v přehledu náhledů (insights).
 */
export const InsightItem = ({
  icon: Icon,
  title,
  description,
  value,
  variant = "info",
}: InsightItemProps) => {
  const variantStyles = {
    warning: "bg-coral/5 text-coral border-coral/20",
    success: "bg-sage-mid/5 text-sage-mid border-sage-mid/20",
    info: "bg-sage-mid/5 text-sage-mid border-sage-mid/20",
  };

  return (
    <div className="flex items-start gap-4 py-4 border-b border-border last:border-b-0">
      <div
        className={cn(
          "p-2.5 rounded-tl-lg rounded-tr-lg rounded-br-lg border",
          variantStyles[variant],
        )}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-sm font-bold text-text-main truncate">{title}</h4>
          {value && (
            <span
              className={cn(
                "text-xs font-bold px-2 py-0.5 rounded-full border",
                variantStyles[variant],
              )}
            >
              {value}
            </span>
          )}
        </div>
        <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

InsightItem.displayName = "InsightItem";
