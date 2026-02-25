import { LoginButton } from "@web/features/auth/components/LoginButton";
import { LanguageSelect } from "@web/features/locale/components/LanguageSelect";
import { MainMenu } from "@web/features/navigation/components/MainMenu";

export const Header = () => {
  return (
    <header>
      <MainMenu />
      <LanguageSelect />
      <LoginButton />
    </header>
  );
};
