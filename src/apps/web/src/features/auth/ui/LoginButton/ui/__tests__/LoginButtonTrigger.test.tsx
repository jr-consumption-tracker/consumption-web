import { createRef } from "react";

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { LoginButtonTrigger } from "../LoginButtonTrigger";

import type { Mock } from "vitest";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

vi.mock("@web/features/auth", () => ({
  useIsAuthenticated: vi.fn(),
  useSelectSession: vi.fn(),
}));

import { useIsAuthenticated, useSelectSession } from "@web/features/auth";

const mockedUseIsAuthenticated = useIsAuthenticated as unknown as Mock;
const mockedUseSelectSession = useSelectSession as unknown as Mock;

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

const renderTrigger = () => {
  const ref = createRef<HTMLButtonElement>();
  return render(
    <LoginButtonTrigger
      loginTriggerRef={ref}
      loginFlyoutOpen={false}
      setLoginFlyoutOpen={vi.fn()}
    />,
  );
};

describe("LoginButtonTrigger", () => {
  it("testRendersAvatarWhenAuthenticated", () => {
    mockedUseIsAuthenticated.mockReturnValue(true);
    mockedUseSelectSession.mockReturnValue({
      email: "user@example.com",
      accessToken: "token",
    });

    renderTrigger();

    expect(screen.getByText("US")).toBeInTheDocument();
    expect(
      screen.queryByText("loginButton.label"),
    ).not.toBeInTheDocument();
  });

  it("testRendersLoginButtonWhenNotAuthenticated", () => {
    mockedUseIsAuthenticated.mockReturnValue(false);
    mockedUseSelectSession.mockReturnValue(null);

    renderTrigger();

    expect(screen.getByText("loginButton.label")).toBeInTheDocument();
    expect(screen.queryByText("US")).not.toBeInTheDocument();
  });
});
