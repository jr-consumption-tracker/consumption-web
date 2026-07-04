import { FieldError, Input, Label, TextField, Tooltip } from "@heroui/react";
import { loginSchema } from "@repo/schemas";
import { useForm } from "@tanstack/react-form";

import { Alert } from "../Alert";
import { Checkbox } from "../Checkbox";
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
  tAuth: TFunction<"auth">;
  tValidation: TFunction<"validation">;
  tCommon: TFunction<"common">;
  fieldErrors?: Partial<Record<"email" | "password", string>>;
  clearFieldError?: (field: "email" | "password") => void;
  errorMessage?: string;
  defaultPersistLogin?: boolean;
  onPersistLoginChange?: (value: boolean) => void;
  passwordResetLink: React.ReactNode;
};

const LoginForm = ({
  onSubmit,
  isLoading,
  registerLink,
  tAuth,
  tValidation,
  tCommon,
  fieldErrors,
  clearFieldError,
  errorMessage,
  defaultPersistLogin = false,
  onPersistLoginChange,
  passwordResetLink,
}: LoginFormProps) => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      persistLogin: defaultPersistLogin,
    },
    validators: { onSubmit: loginSchema },
    onSubmit: ({ value }) => onSubmit(value),
  });

  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{tAuth("login.heading")}</FormHeading>

      <Alert className="mb-4" title={errorMessage} />

      <form
        noValidate
        className="flex flex-col gap-4 w-full"
        method="post"
        autoComplete="on"
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
              isRequired
              isInvalid={
                (field.state.meta.isTouched &&
                  field.state.meta.errors.length > 0) ||
                !!fieldErrors?.email
              }
              validationBehavior="aria"
              onBlur={field.handleBlur}
            >
              <Label>{tAuth("login.email")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                inputMode="email"
                autoFocus
                value={field.state.value}
                onChange={(e) => {
                  clearFieldError?.("email");
                  field.handleChange(e.target.value);
                }}
              />
              {field.state.meta.isTouched &&
              field.state.meta.errors.length > 0 ? (
                <FieldError>
                  {tValidation(errorKey(field.state.meta.errors[0]))}
                </FieldError>
              ) : fieldErrors?.email ? (
                <FieldError>
                  {tValidation(fieldErrors.email as ValidationKey)}
                </FieldError>
              ) : null}
            </TextField>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{ onChange: loginSchema.shape.password }}
        >
          {(field) => (
            <TextField
              isRequired
              isInvalid={
                (field.state.meta.isTouched &&
                  field.state.meta.errors.length > 0) ||
                !!fieldErrors?.password
              }
              validationBehavior="aria"
              onBlur={field.handleBlur}
            >
              <Label>{tAuth("login.password")}</Label>
              <PasswordInput
                t={tCommon}
                id="password"
                name="password"
                autoComplete="current-password"
                value={field.state.value}
                onChange={(e) => {
                  clearFieldError?.("password");
                  field.handleChange(e.target.value);
                }}
              />
              {field.state.meta.isTouched &&
              field.state.meta.errors.length > 0 ? (
                <FieldError>
                  {tValidation(errorKey(field.state.meta.errors[0]))}
                </FieldError>
              ) : fieldErrors?.password ? (
                <FieldError>
                  {tValidation(fieldErrors.password as ValidationKey)}
                </FieldError>
              ) : null}
            </TextField>
          )}
        </form.Field>

        <form.Field
          name="persistLogin"
          validators={{ onChange: loginSchema.shape.persistLogin }}
        >
          {(field) => (
            <div className="flex items-center justify-between w-full mb-4">
              <Tooltip delay={100}>
                <Tooltip.Trigger>
                  <Checkbox
                    isSelected={field.state.value}
                    onChange={(value) => {
                      field.handleChange(value);
                      onPersistLoginChange?.(value);
                    }}
                    className="whitespace-nowrap"
                    label="Zůstat přihlášený"
                  />
                </Tooltip.Trigger>
                <p className="ml-4 whitespace-nowrap">{passwordResetLink}</p>
                <Tooltip.Content>
                  {tAuth("login.publicComputerWarning")}
                </Tooltip.Content>
              </Tooltip>
            </div>
          )}
        </form.Field>

        <SubmitButton isLoading={isLoading} className="mt-2">
          {tAuth("login.submit")}
        </SubmitButton>

        {registerLink && (
          <p className="text-center text-sm text-default-500">
            {tAuth("login.noAccount")} {registerLink}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
