import { Spinner } from "@heroui/react";
import { cn } from "@repo/utils";

type LoadingSpinnerProps = {
  className?: string;
};

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className={cn("flex justify-center items-center w-full", className)}>
      <Spinner />
    </div>
  );
};
