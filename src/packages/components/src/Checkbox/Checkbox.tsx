import { useId } from "react";

import { Checkbox as RawCheckbox, Label } from "@heroui/react";

import type { CheckboxProps as RawCheckboxProps } from "@heroui/react";

export interface CheckboxProps extends Exclude<RawCheckboxProps, "id"> {
  label?: string;
}

export const Checkbox = ({ label, ...restProps }: CheckboxProps) => {
  const id = `checkbox${useId()}`;

  return (
    <RawCheckbox id={id} {...restProps}>
      <RawCheckbox.Control>
        <RawCheckbox.Indicator />
      </RawCheckbox.Control>
      <RawCheckbox.Content>
        <Label htmlFor={id}>{label}</Label>
      </RawCheckbox.Content>
    </RawCheckbox>
  );
};
