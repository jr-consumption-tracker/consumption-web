import { tv } from "tailwind-variants";

/** Container layout for logo icon + text */
export const logoContainerVariants = tv({
  base: "flex items-center gap-3 group",
  variants: {
    disableHover: {
      true: "",
      false: "group",
    },
  },
  defaultVariants: {
    disableHover: false,
  },
});

/** Link wrapper around the logo */
export const logoLinkVariants = tv({
  base: "",
  variants: {
    disableHover: {
      true: "",
      false: "group",
    },
  },
  defaultVariants: {
    disableHover: false,
  },
});
