import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { LoginPopoverLoggedIn } from "../LoginPopoverLoggedIn";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) =>
      key === "loggedIn.logout" ? "Odhlásit se" : key,
  }),
}));

afterEach(() => {
  cleanup();
});

describe("LoginPopoverLoggedIn", () => {
  it("testClickingLogoutButtonCallsOnLogout", async () => {
    const user = userEvent.setup();
    const onLogout = vi.fn();

    render(
      <LoginPopoverLoggedIn
        email="user@example.com"
        onLogout={onLogout}
        isLoggingOut={false}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Odhlásit se" }));

    expect(onLogout).toHaveBeenCalledTimes(1);
  });

  it("testLogoutButtonDisabledWhileLoggingOutDoesNotCallOnLogout", async () => {
    const user = userEvent.setup();
    const onLogout = vi.fn();

    render(
      <LoginPopoverLoggedIn
        email="user@example.com"
        onLogout={onLogout}
        isLoggingOut={true}
      />,
    );

    const button = screen.getByRole("button", { name: "Odhlásit se" });
    expect(button).toBeDisabled();

    await user.click(button);

    expect(onLogout).not.toHaveBeenCalled();
  });
});
