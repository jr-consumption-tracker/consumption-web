import { ButtonRoot } from "@heroui/react";
import { cn } from "@repo/utils";

type SubmitButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
};

export const SubmitButton = ({ children, isLoading, className }: SubmitButtonProps) => {
  return (
    <ButtonRoot
      type="submit"
      variant="primary"
      isDisabled={isLoading}
      className={cn("w-full", className)}
    >
      {children}
    </ButtonRoot>
  );
};
