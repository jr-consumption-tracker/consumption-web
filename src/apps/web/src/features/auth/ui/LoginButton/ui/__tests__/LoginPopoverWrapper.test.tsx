import { createRef } from "react";

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { LoginPopoverWrapper } from "../LoginPopoverWrapper";

import type { Mock } from "vitest";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

vi.mock("@repo/components", () => ({
  LoginForm: ({ onSubmit }: { onSubmit: () => Promise<void> }) => (
    <button onClick={() => onSubmit()}>submit-login</button>
  ),
}));

vi.mock("@web/shared/ui/TextLink", () => ({
  TextLink: ({ children }: { children: React.ReactNode }) => (
    <span>{children}</span>
  ),
}));

const { handleSubmit, logoutMock, getStateMock } = vi.hoisted(() => ({
  handleSubmit: vi.fn(),
  logoutMock: vi.fn(),
  getStateMock: vi.fn(),
}));

vi.mock("@web/features/auth/model/hooks/useLoginForm", () => ({
  useLoginForm: () => ({
    handleSubmit,
    isPending: false,
    isError: false,
    error: undefined,
    fieldErrors: {},
    clearFieldError: vi.fn(),
    persistLogin: false,
    setPersistLogin: vi.fn(),
  }),
}));

vi.mock("@web/features/auth/model/hooks/useLogout", () => ({
  useLogout: () => ({ logout: logoutMock, isPending: false }),
}));

vi.mock("@web/features/auth", () => ({
  useIsAuthenticated: vi.fn(),
  useSelectSession: vi.fn(),
}));

vi.mock("@web/features/auth/model/store/authStore", () => ({
  useAuthStore: { getState: getStateMock },
}));

import { useIsAuthenticated, useSelectSession } from "@web/features/auth";

const mockedUseIsAuthenticated = useIsAuthenticated as unknown as Mock;
const mockedUseSelectSession = useSelectSession as unknown as Mock;

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

const renderWrapper = (loginFlyoutOpen: boolean) => {
  const setLoginFlyoutOpen = vi.fn();
  const utils = render(
    <LoginPopoverWrapper
      loginFlyoutOpen={loginFlyoutOpen}
      setLoginFlyoutOpen={setLoginFlyoutOpen}
      setLoginFlyoutOpenedByHover={vi.fn()}
      loginTriggerRef={createRef()}
      hoverOpenTimerRef={{ current: null }}
      suppressHoverOpenUntilRef={{ current: 0 }}
      handleMouseEnter={vi.fn()}
      handleMouseLeave={vi.fn()}
      handleFocusIn={vi.fn()}
      handleFocusOut={vi.fn()}
    />,
  );
  return { ...utils, setLoginFlyoutOpen };
};

describe("LoginPopoverWrapper", () => {
  it("testSuccessfulSubmitWhilePopoverOpenClosesPopoverWithoutShowingLoggedInView", async () => {
    const user = userEvent.setup();
    mockedUseIsAuthenticated.mockReturnValue(false);
    mockedUseSelectSession.mockReturnValue(null);

    handleSubmit.mockImplementation(async () => {
      mockedUseIsAuthenticated.mockReturnValue(true);
      getStateMock.mockReturnValue({
        session: { email: "user@example.com", accessToken: "token" },
      });
    });
    getStateMock.mockReturnValue({ session: null });

    const { setLoginFlyoutOpen } = renderWrapper(true);

    expect(screen.getByText("submit-login")).toBeInTheDocument();
    expect(screen.queryByText("loggedIn.greeting")).not.toBeInTheDocument();

    await user.click(screen.getByText("submit-login"));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(setLoginFlyoutOpen).toHaveBeenCalledWith(false);
    expect(screen.queryByText("loggedIn.greeting")).not.toBeInTheDocument();
  });

  it("testReopeningPopoverAfterAuthChangeShowsLoggedInView", () => {
    mockedUseIsAuthenticated.mockReturnValue(true);
    mockedUseSelectSession.mockReturnValue({
      email: "user@example.com",
      accessToken: "token",
    });
    getStateMock.mockReturnValue({
      session: { email: "user@example.com", accessToken: "token" },
    });

    renderWrapper(true);

    expect(screen.getByText("loggedIn.greeting")).toBeInTheDocument();
    expect(screen.queryByText("submit-login")).not.toBeInTheDocument();
  });
});
