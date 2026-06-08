import { FieldError, Input, Label, TextField } from "@heroui/react";
import { loginSchema } from "@repo/schemas";
import { useForm } from "@tanstack/react-form";

import { FormAlert } from "../FormAlert";
import { FormHeading } from "../FormHeading";
import { PasswordInput } from "../PasswordInput";
import { SubmitButton } from "../SubmitButton";

import type { TFunction } from "i18next";
import type { ParseKeys } from "i18next";
import type { LoginSchemaValues } from "@repo/schemas";

type ValidationKey = ParseKeys<"validation">;

const errorKey = (error: unknown): ValidationKey =>
  (typeof error === "string"
    ? error
    : (error as { message: string }).message) as ValidationKey;

type LoginFormProps = {
  onSubmit: (values: LoginSchemaValues) => void;
  isLoading?: boolean;
  registerLink?: React.ReactNode;
  t: TFunction<"validation">;
  tCommon: TFunction<"common">;
  heading: string;
  emailLabel: string;
  passwordLabel: string;
  submitLabel: string;
  noAccountText: string;
};

const LoginForm = ({
  onSubmit,
  isLoading,
  registerLink,
  t,
  tCommon,
  heading,
  emailLabel,
  passwordLabel,
  submitLabel,
  noAccountText,
}: LoginFormProps) => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: { onSubmit: loginSchema },
    onSubmit: ({ value }) => onSubmit(value),
  });

  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{heading}</FormHeading>

      <form.Subscribe selector={(state) => state.errors}>
        {(errors) => (
          <FormAlert
            className="mb-4"
            title={
              errors[0] ? t(String(errors[0]) as ValidationKey) : undefined
            }
          />
        )}
      </form.Subscribe>

      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="email"
          validators={{ onChange: loginSchema.shape.email }}
        >
          {(field) => (
            <TextField
              isInvalid={
                field.state.meta.isTouched && field.state.meta.errors.length > 0
              }
              validationBehavior="aria"
              onBlur={field.handleBlur}
            >
              <Label>{emailLabel}</Label>
              <Input
                type="email"
                autoComplete="email"
                autoFocus
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.isTouched &&
                field.state.meta.errors.length > 0 && (
                  <FieldError>
                    {t(errorKey(field.state.meta.errors[0]))}
                  </FieldError>
                )}
            </TextField>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onChange: loginSchema.shape.password,
          }}
        >
          {(field) => (
            <TextField
              isInvalid={
                field.state.meta.isTouched && field.state.meta.errors.length > 0
              }
              validationBehavior="aria"
              onBlur={field.handleBlur}
            >
              <Label>{passwordLabel}</Label>
              <PasswordInput
                t={tCommon}
                autoComplete="current-password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.isTouched &&
                field.state.meta.errors.length > 0 && (
                  <FieldError>
                    {t(errorKey(field.state.meta.errors[0]))}
                  </FieldError>
                )}
            </TextField>
          )}
        </form.Field>

        <SubmitButton isLoading={isLoading} className="mt-2">
          {submitLabel}
        </SubmitButton>

        {registerLink && (
          <p className="text-center text-sm text-default-500">
            {noAccountText} {registerLink}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
