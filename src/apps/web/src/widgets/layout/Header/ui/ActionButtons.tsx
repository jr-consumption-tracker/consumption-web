import { LoginButton, useLoginFlyout } from "@web/features/auth";
import { LanguageSelect } from "@web/features/locale";
import { ThemeSelect } from "@web/features/theme";

interface ActionButtonsProps {
  scrolled: boolean;
}

/**
 * ActionButtons - Group of global actions in the header (Theme, Language, Login).
 * Uses useLoginFlyout from features/auth for flyout state.
 */
export const ActionButtons = ({ scrolled }: ActionButtonsProps) => {
  const loginState = useLoginFlyout();

  return (
    <div className="flex items-center gap-2">
      <div className="hidden lg:flex items-center gap-2">
        <ThemeSelect />
        <LanguageSelect />
      </div>

      <LoginButton
        scrolled={scrolled}
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
