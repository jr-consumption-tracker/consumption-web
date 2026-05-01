import { LoginButton } from "@web/features/auth";
import { LanguageSelect } from "@web/features/locale";
import { ThemeSelect } from "@web/features/theme";

import { useHeaderLogin } from "../hooks/useHeaderLogin";

export const ActionButtons = () => {
  const loginState = useHeaderLogin();

  return (
    <div className="flex items-center gap-2">
      <ThemeSelect />
      <LanguageSelect />

      <LoginButton
        loginFlyoutOpen={loginState.loginFlyoutOpen}
        setLoginFlyoutOpen={loginState.setLoginFlyoutOpen}
        loginFlyoutOpenedByHover={loginState.loginFlyoutOpenedByHover}
        setLoginFlyoutOpenedByHover={loginState.setLoginFlyoutOpenedByHover}
        loginTriggerRef={loginState.loginTriggerRef}
        hoverOpenTimerRef={loginState.hoverOpenTimerRef}
        hoverCloseTimerRef={loginState.hoverCloseTimerRef}
      />
    </div>
  );
};

ActionButtons.displayName = "ActionButtons";
