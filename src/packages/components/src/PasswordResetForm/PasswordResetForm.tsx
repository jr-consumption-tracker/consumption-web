import { FieldError, Label, TextField } from "@heroui/react";
import { passwordResetSchema } from "@repo/schemas";
import { useForm } from "@tanstack/react-form";

import { Alert } from "../Alert";
import { FormHeading } from "../FormHeading";
import { PasswordInput } from "../PasswordInput";
import { SubmitButton } from "../SubmitButton";

import type { PasswordResetSchemaValues } from "@repo/schemas";

import type { ParseKeys, TFunction } from "i18next";

type ValidationKey = ParseKeys<"validation">;

const errorKey = (error: unknown): ValidationKey =>
  (typeof error === "string"
    ? error
    : (error as { message: string }).message) as ValidationKey;

interface PasswordResetFormProps {
  tPasswordReset: TFunction<"passwordReset">;
  tCommon: TFunction<"common">;
  tValidation: TFunction<"validation">;
  errorMessage?: string;
  isPending: boolean;
  fieldErrors?: Partial<Record<"password" | "confirmPassword", string>>;
  clearFieldError: (field: "password" | "confirmPassword") => void;
  onSubmit: (values: PasswordResetSchemaValues) => void;
}

export const PasswordResetForm = ({
  tPasswordReset,
  tCommon,
  tValidation,
  errorMessage,
  isPending,
  fieldErrors,
  clearFieldError,
  onSubmit,
}: PasswordResetFormProps) => {
  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    validators: { onSubmit: passwordResetSchema },
    onSubmit: ({ value }) => onSubmit(value),
  });

  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{tPasswordReset("passwordReset.heading")}</FormHeading>

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
          name="password"
          validators={{ onChange: passwordResetSchema.shape.password }}
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
              <Label>{tPasswordReset("passwordReset.password")}</Label>
              <PasswordInput
                t={tCommon}
                id="password"
                name="password"
                autoComplete="new-password"
                value={field.state.value}
                onChange={(e) => {
                  clearFieldError("password");
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
          name="confirmPassword"
          validators={{
            onChangeListenTo: ["password"],
            onChange: ({ fieldApi }): ValidationKey | undefined => {
              const result = passwordResetSchema.safeParse(
                fieldApi.form.state.values,
              );
              if (!result.success) {
                const issue = result.error.issues.find(
                  (i) => i.path[0] === "confirmPassword",
                );
                return issue?.message as ValidationKey | undefined;
              }
              return undefined;
            },
          }}
        >
          {(field) => (
            <TextField
              isRequired
              isInvalid={
                (field.state.meta.isTouched &&
                  field.state.meta.errors.length > 0) ||
                !!fieldErrors?.confirmPassword
              }
              validationBehavior="aria"
              onBlur={field.handleBlur}
            >
              <Label>{tPasswordReset("passwordReset.confirmPassword")}</Label>
              <PasswordInput
                t={tCommon}
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="new-password"
                value={field.state.value}
                onChange={(e) => {
                  clearFieldError("confirmPassword");
                  field.handleChange(e.target.value);
                }}
              />
              {field.state.meta.isTouched &&
              field.state.meta.errors.length > 0 ? (
                <FieldError>
                  {tValidation(errorKey(field.state.meta.errors[0]))}
                </FieldError>
              ) : fieldErrors?.confirmPassword ? (
                <FieldError>
                  {tValidation(fieldErrors.confirmPassword as ValidationKey)}
                </FieldError>
              ) : null}
            </TextField>
          )}
        </form.Field>

        <SubmitButton isLoading={isPending} className="mt-2">
          {tPasswordReset("passwordReset.submit")}
        </SubmitButton>
      </form>
    </div>
  );
};
