import { act } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { useAuthStore } from "../authStore";

import type { AuthSession } from "../../types/credentials";

const PERSIST_LOGIN_KEY = "persistLoginWeb";
const AUTH_STORAGE_KEY = "auth-storage";

const session: AuthSession = {
  email: "user@example.com",
  accessToken: "token-123",
};

const setPersistLogin = (enabled: boolean): void => {
  localStorage.setItem(PERSIST_LOGIN_KEY, JSON.stringify(enabled));
};

const flushPersistMiddleware = async (): Promise<void> => {
  await act(async () => {
    await Promise.resolve();
  });
};

describe("authStore dynamic storage", () => {
  beforeEach(async () => {
    localStorage.clear();
    sessionStorage.clear();
    act(() => {
      useAuthStore.setState({ session: null });
    });
    await flushPersistMiddleware();
    localStorage.clear();
    sessionStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it("testSetSessionPersistsToLocalStorageWhenPersistLoginEnabled", async () => {
    setPersistLogin(true);

    act(() => {
      useAuthStore.getState().setSession(session);
    });
    await flushPersistMiddleware();

    expect(localStorage.getItem(AUTH_STORAGE_KEY)).not.toBeNull();
    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();
  });

  it("testSetSessionPersistsToSessionStorageWhenPersistLoginDisabled", async () => {
    setPersistLogin(false);

    act(() => {
      useAuthStore.getState().setSession(session);
    });
    await flushPersistMiddleware();

    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).not.toBeNull();
    expect(localStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();
  });

  it("testStorageBackendIsReEvaluatedPerCallNotCachedAtStoreCreation", async () => {
    setPersistLogin(false);
    act(() => {
      useAuthStore.getState().setSession(session);
    });
    await flushPersistMiddleware();

    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).not.toBeNull();
    expect(localStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();

    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setPersistLogin(true);

    act(() => {
      useAuthStore.getState().setAccessToken("token-456");
    });
    await flushPersistMiddleware();

    expect(localStorage.getItem(AUTH_STORAGE_KEY)).not.toBeNull();
    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();
  });

  it("testLogoutClearsBothLocalStorageAndSessionStorageWhenLocalStorageWasActive", async () => {
    setPersistLogin(true);
    act(() => {
      useAuthStore.getState().setSession(session);
    });
    await flushPersistMiddleware();
    expect(localStorage.getItem(AUTH_STORAGE_KEY)).not.toBeNull();

    act(() => {
      useAuthStore.getState().logout();
    });

    expect(localStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();
    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();
    expect(useAuthStore.getState().session).toBeNull();
  });

  it("testLogoutClearsBothLocalStorageAndSessionStorageWhenSessionStorageWasActive", async () => {
    setPersistLogin(false);
    act(() => {
      useAuthStore.getState().setSession(session);
    });
    await flushPersistMiddleware();
    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).not.toBeNull();

    act(() => {
      useAuthStore.getState().logout();
    });

    expect(localStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();
    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();
    expect(useAuthStore.getState().session).toBeNull();
  });
});
