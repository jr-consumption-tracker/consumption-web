import { Button, Spinner } from "@heroui/react";
import { cn } from "@repo/utils";

type SubmitButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
};

export const SubmitButton = ({
  children,
  isLoading,
  isDisabled,
  className,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      variant="primary"
      isPending={isLoading}
      isDisabled={isDisabled || isLoading}
      className={cn(
        "w-full [--button-bg:var(--primary)] [--button-bg-hover:var(--primary-dark)] [--button-bg-pressed:var(--primary-dark)] [--button-fg:var(--accent-foreground)]",
        className,
      )}
    >
      {({ isPending }) => (
        <>
          {isPending ? <Spinner color="current" size="sm" /> : null}
          {children}
        </>
      )}
    </Button>
  );
};
