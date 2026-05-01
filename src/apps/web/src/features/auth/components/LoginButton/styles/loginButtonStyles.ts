import { tv } from "tailwind-variants";

/**
 * loginButtonStyles - Login button styling with tailwind-variants
 * Organized into logical slots for better maintainability
 *
 * Uses isHovered variant (from JS tracking) instead of group-hover
 * so hover effects persist even when a popover overlaps the button.
 */
export const loginButtonStyles = tv({
  slots: {
    // Main container - no group-hover, handled via isHovered variant
    container: "relative transition-transform duration-300",

    // Subtle glow effect - controlled by isHovered variant
    glowEffect:
      "absolute inset-0 rounded-2xl transition-opacity duration-300 blur-xl scale-110",
  },
  variants: {
    resolvedTheme: {
      dark: {
        glowEffect: "bg-primary/20",
      },
      light: {
        glowEffect: "bg-primary/20",
      },
    },
    isOpen: {
      true: {
        // Additional scale when popup is open (on top of hover scale)
        container: "!scale-110",
      },
      false: {
        container: "",
      },
    },
    isHovered: {
      true: {
        container: "scale-110",
        glowEffect: "opacity-60",
      },
      false: {
        container: "",
        glowEffect: "opacity-0",
      },
    },
  },
});
