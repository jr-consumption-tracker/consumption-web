import { FieldError, Input, Label, TextField } from "@heroui/react";
import { forgottenPasswordSchema } from "@repo/schemas";
import { useForm } from "@tanstack/react-form";

import { FormAlert } from "../FormAlert";
import { FormHeading } from "../FormHeading";
import { SubmitButton } from "../SubmitButton";

import type { ForgottenPasswordSchemaValues } from "@repo/schemas";
import type { ReactNode } from "react";
import type { ParseKeys, TFunction } from "i18next";

type ValidationKey = ParseKeys<"validation">;

const errorKey = (error: unknown): ValidationKey =>
  (typeof error === "string"
    ? error
    : (error as { message: string }).message) as ValidationKey;

interface ForgottenPasswordFormProps {
  tAuth: TFunction<"auth">;
  tValidation: TFunction<"validation">;
  errorMessage?: string;
  backToLoginLink?: ReactNode;
  isPending: boolean;
  fieldErrors?: Partial<Record<"email", string>>;
  clearFieldError: (field: "email") => void;
  onSubmit: (values: ForgottenPasswordSchemaValues) => void;
}

export const ForgottenPasswordForm = ({
  tAuth,
  tValidation,
  errorMessage,
  backToLoginLink,
  isPending,
  fieldErrors,
  clearFieldError,
  onSubmit,
}: ForgottenPasswordFormProps) => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: { onSubmit: forgottenPasswordSchema },
    onSubmit: ({ value }) => onSubmit(value),
  });

  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{tAuth("forgottenPassword.heading")}</FormHeading>

      <FormAlert className="mb-4" title={errorMessage} />

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
          validators={{ onChange: forgottenPasswordSchema.shape.email }}
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
              <Label>{tAuth("forgottenPassword.email")}</Label>
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
          {tAuth("forgottenPassword.submit")}
        </SubmitButton>

        {backToLoginLink && (
          <div className="w-full flex justify-center">{backToLoginLink}</div>
        )}
      </form>
    </div>
  );
};
