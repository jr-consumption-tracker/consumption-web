import { useId } from "react";

import { Checkbox as RawCheckbox, Label } from "@heroui/react";
import { cn } from "@repo/utils";

import type { CheckboxProps as RawCheckboxProps } from "@heroui/react";

export interface CheckboxProps extends Exclude<RawCheckboxProps, "id"> {
  label?: string;
}

export const Checkbox = ({ label, className, ...restProps }: CheckboxProps) => {
  const id = `checkbox${useId()}`;

  return (
    <RawCheckbox
      id={id}
      className={cn(
        "[--accent:var(--primary)] [--accent-hover:var(--primary-dark)]",
        className,
      )}
      {...restProps}
    >
      <RawCheckbox.Control className="size-4 m-1">
        <RawCheckbox.Indicator />
      </RawCheckbox.Control>
      <RawCheckbox.Content>
        <Label htmlFor={id}>{label}</Label>
      </RawCheckbox.Content>
    </RawCheckbox>
  );
};
