import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { FieldError, Input, Label, TextField } from "@heroui/react";
import {
  Alert,
  Checkbox,
  FormHeading,
  PasswordInput,
  SubmitButton,
} from "@repo/components";
import { Link } from "@tanstack/react-router";
import { registerSchema } from "@web/features/auth";

import { useRegisterForm } from "../../../model/hooks/useRegisterForm";

import type { ParseKeys } from "i18next";
import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

type ValidationKey = ParseKeys<"validation">;
type CommonKey = ParseKeys<"common">;

const errorKey = (error: unknown): ValidationKey =>
  (typeof error === "string"
    ? error
    : (error as { message: string }).message) as ValidationKey;

const registerApiErrorKey = (error: unknown): CommonKey | undefined => {
  if (!isAxiosError<ValidationErrorResponse>(error)) return undefined;

  const generalError = error.response?.data.general?.[0];
  const validationError = error.response?.data.validationError;

  if (!generalError && !validationError) return "errors.registration.general";

  if (generalError) {
    return `errors.registration.${generalError}` as CommonKey;
  }
};

export const RegisterForm = () => {
  const { form, isPending, isError, error, fieldErrors, clearFieldError } =
    useRegisterForm();
  const { t: tValidation } = useTranslation("validation");
  const { t: tAuth } = useTranslation("auth");
  const { t: tCommon } = useTranslation("common");
  const apiErrorKey = isError ? registerApiErrorKey(error) : undefined;

  return (
    <div className="flex flex-col items-center w-full">
      <FormHeading>{tAuth("register.heading")}</FormHeading>

      <Alert
        title={apiErrorKey ? tCommon(apiErrorKey) : undefined}
        className="mb-4"
      />

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
          validators={{ onChange: registerSchema.shape.email }}
        >
          {(field) => (
            <TextField
              isRequired
              isInvalid={
                (field.state.meta.isTouched &&
                  field.state.meta.errors.length > 0) ||
                !!fieldErrors.email
              }
              validationBehavior="aria"
              onBlur={field.handleBlur}
            >
              <Label>{tAuth("register.email")}</Label>
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
              ) : fieldErrors.email ? (
                <FieldError>
                  {tValidation(fieldErrors.email as ValidationKey)}
                </FieldError>
              ) : null}
            </TextField>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{ onChange: registerSchema.shape.password }}
        >
          {(field) => (
            <TextField
              isRequired
              isInvalid={
                (field.state.meta.isTouched &&
                  field.state.meta.errors.length > 0) ||
                !!fieldErrors.password
              }
              validationBehavior="aria"
              onBlur={field.handleBlur}
            >
              <Label>{tAuth("register.password")}</Label>
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
              ) : fieldErrors.password ? (
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
              const result = registerSchema.safeParse(
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
                !!fieldErrors.confirmPassword
              }
              validationBehavior="aria"
              onBlur={field.handleBlur}
            >
              <Label>{tAuth("register.confirmPassword")}</Label>
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
              ) : fieldErrors.confirmPassword ? (
                <FieldError>
                  {tValidation(fieldErrors.confirmPassword as ValidationKey)}
                </FieldError>
              ) : null}
            </TextField>
          )}
        </form.Field>

        <form.Field
          name="termsAgreement"
          validators={{ onChange: registerSchema.shape.termsAgreement }}
        >
          {(field) => (
            <div>
              <Checkbox
                isSelected={field.state.value}
                onChange={(val) => {
                  clearFieldError("termsAgreement");
                  field.handleChange(val);
                }}
                onBlur={field.handleBlur}
                isInvalid={
                  (field.state.meta.isTouched &&
                    field.state.meta.errors.length > 0) ||
                  !!fieldErrors.termsAgreement
                }
                label={tAuth("register.termsAgreement")}
              />
              {field.state.meta.isTouched &&
              field.state.meta.errors.length > 0 ? (
                <p className="px-1 text-xs text-danger">
                  {tValidation(errorKey(field.state.meta.errors[0]))}
                </p>
              ) : fieldErrors.termsAgreement ? (
                <p className="px-1 text-xs text-danger">
                  {tValidation(fieldErrors.termsAgreement as ValidationKey)}
                </p>
              ) : null}
            </div>
          )}
        </form.Field>

        <SubmitButton isLoading={isPending} className="mt-2">
          {tAuth("register.submit")}
        </SubmitButton>

        <p className="text-center text-sm text-default-500">
          {tAuth("register.hasAccount")}{" "}
          <Link
            to="/prihlaseni"
            className="text-primary font-medium hover:underline"
          >
            {tAuth("register.loginLink")}
          </Link>
        </p>
      </form>
    </div>
  );
};
