import { Alert as RawAlert } from "@heroui/react";
import { cn } from "@repo/utils";

import type { AlertProps as RawAlertProps } from "@heroui/react";

interface AlertProps extends Omit<RawAlertProps, "children"> {
  title?: string;
  description?: string;
}

export const Alert = ({
  title,
  description,
  status = "danger",
  className,
}: AlertProps) => {
  if (!title) return null;

  return (
    <RawAlert status={status} className={cn("w-full", className)}>
      <RawAlert.Indicator />
      <RawAlert.Content>
        <RawAlert.Title>{title}</RawAlert.Title>
        <RawAlert.Description>{description}</RawAlert.Description>
      </RawAlert.Content>
    </RawAlert>
  );
};
