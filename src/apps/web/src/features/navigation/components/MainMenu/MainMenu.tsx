import type { MainMenuProps } from "./types/MainMenuProps";
import { MainMenuMobile } from "./components/MainMenuMobile";
import { MainMenuDesktop } from "./components/MainMenuDesktop";

/**
 * MainMenu - Pure Orchestrator component.
 * Conditionally renders mobile or desktop navigation components.
 */
export const MainMenu = ({ mobile = false }: MainMenuProps) => {
  if (mobile) {
    return <MainMenuMobile />;
  }

  return <MainMenuDesktop />;
};
