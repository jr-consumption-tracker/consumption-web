import { toast } from "@heroui/react";

type ToastVariant = "default" | "success" | "warning" | "danger" | "info";
type ToastOptions = Parameters<typeof toast>[1] & { variant?: ToastVariant };

export const addToast = (message: string, options?: ToastOptions) => {
  const { variant = "default", ...rest } = options ?? {};

  if (variant === "default") return toast(message, rest);

  return toast[variant](message, rest);
};
