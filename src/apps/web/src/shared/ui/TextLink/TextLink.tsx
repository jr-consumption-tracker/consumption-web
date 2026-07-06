import { cn } from "@repo/utils";
import { createLink } from "@tanstack/react-router";

import type { AnchorHTMLAttributes, ComponentProps } from "react";
import type { CreateLinkProps } from "@tanstack/react-router";

const sizeClassName = {
  sm: "text-sm",
  base: "text-base",
} as const;

type AnchorProps = CreateLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    size?: keyof typeof sizeClassName;
    fullWidth?: boolean;
  };

const Anchor = ({
  size = "sm",
  fullWidth = false,
  className,
  ...props
}: AnchorProps) => (
  <a
    className={cn(
      "inline-block py-1 text-primary hover:underline rounded-sm outline-none focus-visible:focus-ring",
      sizeClassName[size],
      fullWidth && "w-full text-center",
      className,
    )}
    {...props}
  />
);

const TanstackTextLinkComponent = createLink(Anchor);

export const TextLink = (
  props: ComponentProps<typeof TanstackTextLinkComponent>,
) => <TanstackTextLinkComponent preload="intent" {...props} />;
