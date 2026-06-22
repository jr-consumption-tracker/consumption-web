import { FieldError, Input, Label, TextField } from "@heroui/react";
import { passwordResetSchema } from "@repo/schemas";
import { useForm } from "@tanstack/react-form";

import { Alert } from "../Alert";
import { FormHeading } from "../FormHeading";
import { SubmitButton } from "../SubmitButton";

import type { PasswordResetSchemaValues } from "@repo/schemas";
import type { ReactNode } from "react";
import type { ParseKeys, TFunction } from "i18next";

type ValidationKey = ParseKeys<"validation">;

const errorKey = (error: unknown): ValidationKey =>
  (typeof error === "string"
    ? error
    : (error as { message: string }).message) as ValidationKey;

interface PasswordResetFormProps {
  tAuth: TFunction<"auth">;
  tValidation: TFunction<"validation">;
  errorMessage?: string;
  backToLoginLink?: ReactNode;
  isPending: boolean;
  fieldErrors?: Partial<Record<"email", string>>;
  clearFieldError: (field: "email") => void;
  onSubmit: (values: PasswordResetSchemaValues) => void;
}

export const PasswordResetForm = ({
  tAuth,
  tValidation,
  errorMessage,
  backToLoginLink,
  isPending,
  fieldErrors,
  clearFieldError,
  onSubmit,
}: PasswordResetFormProps) => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: { onSubmit: passwordResetSchema },
    onSubmit: ({ value }) => onSubmit(value),
  });

  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{tAuth("passwordReset.heading")}</FormHeading>

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
          validators={{ onChange: passwordResetSchema.shape.email }}
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
              <Label>{tAuth("passwordReset.email")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                inputMode="email"
                autoFocus
                value={field.state.value}
                onChange={(e) => {
                  clearFieldError("email");
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

        <SubmitButton isLoading={isPending} className="mt-2">
          {tAuth("passwordReset.submit")}
        </SubmitButton>

        {backToLoginLink && (
          <div className="w-full flex justify-center">{backToLoginLink}</div>
        )}
      </form>
    </div>
  );
};
