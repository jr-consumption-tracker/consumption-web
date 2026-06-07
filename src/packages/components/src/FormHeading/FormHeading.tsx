import { cn } from "@repo/utils";

type FormHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export const FormHeading = ({ children, className }: FormHeadingProps) => {
  return (
    <h3 className={cn("text-3xl mb-7 text-center", className)}>{children}</h3>
  );
};
