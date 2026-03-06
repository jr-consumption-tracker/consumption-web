import { tv } from "tailwind-variants";

export const navbarVariants = tv({
  slots: {
    header:
      "fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-4 pointer-events-none",
    container:
      "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out rounded-full backdrop-blur-xl bg-background/80 shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_rgba(0,0,0,0.4)]",
    logoContainer: "flex items-center",
    desktopNav: "hidden lg:flex items-center justify-center flex-1",
    actionButtons: "hidden lg:flex items-center gap-3",
    mobileToggle:
      "lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1 hover:bg-white/10 rounded-full transition-all",
    mobileMenu:
      "fixed top-24 inset-x-4 p-6 rounded-[2.5rem] border border-white/20 bg-background/90 backdrop-blur-3xl shadow-[0_0_30px_rgba(0,0,0,0.2)] pointer-events-auto transition-all duration-500 origin-top lg:hidden",
  },
  variants: {
    scrolled: {
      true: {
        container:
          "w-[95%] md:w-[90%] lg:w-[85%] max-w-7xl h-14 lg:h-16 px-6 backdrop-blur-xl bg-background/80",
      },
      false: {
        container:
          "w-full max-w-7xl h-16 lg:h-20 px-4 md:px-8 backdrop-blur-xl bg-background/80",
      },
    },
    mobileOpen: {
      true: {
        mobileMenu: "opacity-100 scale-100 translate-y-0",
      },
      false: {
        mobileMenu: "opacity-0 scale-95 -translate-y-10 pointer-events-none",
      },
    },
  },
  defaultVariants: {
    scrolled: false,
    mobileOpen: false,
  },
});
