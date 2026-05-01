import { tv } from "tailwind-variants";

/**
 * languageSelectStyles - Language toggle button styling with tailwind-variants
 * Organized into logical slots for better maintainability
 */
export const languageSelectStyles = tv({
  slots: {
    // Main container with hover effects - w-fit is crucial so absolute children don't stretch
    container: "relative group cursor-pointer w-fit",

    // Button base styles
    button:
      "relative overflow-hidden rounded-2xl transition-all duration-300 bg-transparent hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg",

    // Inner gradient overlay
    innerGradient:
      "absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl",

    // Icon container with rotation/animation
    iconContainer:
      "relative z-10 transition-all duration-500 group-hover:rotate-12",

    // Icon styles - starting less prominent (subtle saturation + opacity)
    icon: "w-6 h-6 rounded-full object-cover shadow-sm saturate-[0.6] opacity-70 transition-all duration-300 group-hover:saturate-100 group-hover:opacity-100",

    // Energy wave animation
    energyWave:
      "absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl",

    // Outer glow effect - "Color smudge" around the button
    glowEffect:
      "absolute inset-0 rounded-2xl bg-linear-to-r from-primary/30 to-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl scale-150 pointer-events-none",
  },
});
