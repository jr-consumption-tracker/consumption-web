import { Alert } from "@heroui/react";
import { cn } from "@repo/utils";

import type { AlertProps as RawAlertProps } from "@heroui/react";

interface AlertProps extends Omit<RawAlertProps, "children"> {
  title?: string;
  description?: string;
}

export const FormAlert = ({
  title,
  description,
  status = "danger",
  className,
}: AlertProps) => {
  if (!title) return null;

  return (
    <Alert status={status} className={cn("w-full", className)}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{description}</Alert.Description>
      </Alert.Content>
    </Alert>
  );
};
