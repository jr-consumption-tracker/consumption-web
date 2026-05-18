export type LogoSize = "sm" | "md" | "lg" | "xl";
export type LogoVariant = "default" | "light" | "dark";

export interface LogoProps {
  /** Whether the page is scrolled — affects logo size and animations. */
  scrolled?: boolean;
  /** Whether to show the text part of the logo. */
  showText?: boolean;
  /** URL to link to when logo is clicked. If not provided, logo won't be a link. */
  to?: string;
  /** Additional CSS classes to apply to the logo container. */
  className?: string;
  /** Size variant of the logo. */
  size?: LogoSize;
  /** Whether to disable hover effects and animations. */
  disableHover?: boolean;
  /** Color variant for different themes. */
  variant?: LogoVariant;
}
