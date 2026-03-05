import { MainMenu } from "@web/features/navigation/components/MainMenu";

export const DesktopNav = () => {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1">
      <nav className="flex items-center w-full justify-center">
        <MainMenu />
      </nav>
    </div>
  );
};

DesktopNav.displayName = "DesktopNav";
