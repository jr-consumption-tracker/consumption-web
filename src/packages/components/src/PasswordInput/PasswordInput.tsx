import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Button, InputGroup, Tooltip } from "@heroui/react";

import type { TFunction } from "i18next";
import type { InputGroupInputProps } from "@heroui/react";

type PasswordInputProps = Omit<InputGroupInputProps, "type"> & {
  t: TFunction<"common">;
};

export const PasswordInput = ({ t, ...props }: PasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InputGroup>
      <InputGroup.Input {...props} type={isVisible ? "text" : "password"} />
      <InputGroup.Suffix className="pr-0">
        <Tooltip delay={0}>
          <Button
            isIconOnly
            type="button"
            aria-label={t(
              isVisible ? "passwordInput.hide" : "passwordInput.show",
            )}
            size="sm"
            variant="ghost"
            className="size-10"
            onPress={() => setIsVisible((prev) => !prev)}
          >
            {isVisible ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </Button>
          <Tooltip.Content>
            {t(isVisible ? "passwordInput.hide" : "passwordInput.show")}
          </Tooltip.Content>
        </Tooltip>
      </InputGroup.Suffix>
    </InputGroup>
  );
};
