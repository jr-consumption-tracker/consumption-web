import { useState } from "react";

export const useNavbarMobile = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const closeMobileMenu = () => setMobileOpen(false);

  return {
    mobileOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};
