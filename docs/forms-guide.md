# Forms Guide

## Stack

- **TanStack Form** — form state management
- **Zod** — validation schemas
- **HeroUI** — input components

## Structure

Every form consists of two files:

```
features/<name>/
├── model/hooks/use<Name>Form.ts   ← form state + validation + submit
└── ui/<Name>Form/
    ├── index.ts
    └── ui/<Name>Form.tsx          ← pure UI, renders fields
```

## Form hook pattern

```ts
import { useForm } from "@tanstack/react-form"
import { zodValidator } from "@tanstack/zod-form-adapter"
import { z } from "zod"

const schema = z.object({
  email: z.string().email("Neplatný email"),
  password: z.string().min(8, "Heslo musí mít alespoň 8 znaků"),
})

export function useExampleForm() {
  const { submit, isLoading } = useExampleAction()

  const form = useForm({
    defaultValues: { email: "", password: "" },
    validatorAdapter: zodValidator(),
    validators: { onSubmit: schema },
    onSubmit: ({ value }) => submit(value),
  })

  return { form, isLoading }
}
```

## Field pattern (HeroUI Input)

```tsx
<form.Field name="email">
  {(field) => (
    <Input
      label="Email"
      type="email"
      value={field.state.value}
      onValueChange={field.handleChange}
      onBlur={field.handleBlur}
      isInvalid={field.state.meta.errors.length > 0}
      errorMessage={field.state.meta.errors[0]?.message}
    />
  )}
</form.Field>
```

## Submit pattern

```tsx
<form
  onSubmit={(e) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }}
>
```

## Rules

- Zod schema inline in the hook (move to `entities` only if shared across 2+ places — Rule of 3)
- Form hook handles submit + loading state, UI component only renders
- Use `field.state.meta.errors[0]?.message` for error messages — always optional chain
- `isInvalid` only when field has been touched: `field.state.meta.isTouched && errors.length > 0`
- No default values other than empty strings / false for checkboxes
