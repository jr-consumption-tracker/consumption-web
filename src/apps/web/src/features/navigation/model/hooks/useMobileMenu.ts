import { useEffect, useState } from "react";

/**
 * useMobileMenu - Hook for managing mobile menu state.
 * Relocated from widgets layer to features/navigation to maintain widget purity.
 */
export const useMobileMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return {
    mobileOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};
