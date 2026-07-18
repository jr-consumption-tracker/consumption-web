import axios from "axios";
import HttpStatusCodes from "http-status";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useAuthStore } from "@web/features/auth/model/store/authStore";

import type { AuthSession } from "@web/features/auth/model/types/credentials";
import type { Mock } from "vitest";

vi.mock("axios", async (importOriginal) => {
  const actual = await importOriginal<typeof import("axios")>();
  return {
    default: {
      ...actual.default,
      get: vi.fn(),
      create: actual.default.create,
    },
  };
});

vi.mock("@web/features/auth/model/store/authStore", () => ({
  useAuthStore: {
    getState: vi.fn(),
  },
}));

const mockedAxiosGet = axios.get as unknown as Mock;
const mockedGetState = useAuthStore.getState as unknown as Mock;

const buildSession = (accessToken: string): AuthSession => ({
  email: "user@example.com",
  accessToken,
});

describe("refreshSession", () => {
  let setAccessToken: Mock;
  let logout: Mock;

  beforeEach(() => {
    vi.resetModules();
    setAccessToken = vi.fn();
    logout = vi.fn();
    mockedGetState.mockReturnValue({ setAccessToken, logout });
    mockedAxiosGet.mockReset();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("testRefreshSessionConcurrentCallsCollapseIntoSingleRequestSuccess", async () => {
    const { refreshSession } = await import("../axiosMainApi");
    const session = buildSession("token-1");
    let resolveRequest!: (value: { status: number; data: AuthSession }) => void;

    mockedAxiosGet.mockReturnValueOnce(
      new Promise((resolve) => {
        resolveRequest = resolve;
      }),
    );

    const call1 = refreshSession();
    const call2 = refreshSession();
    const call3 = refreshSession();

    resolveRequest({ status: HttpStatusCodes.OK, data: session });

    const [result1, result2, result3] = await Promise.all([
      call1,
      call2,
      call3,
    ]);

    expect(mockedAxiosGet).toHaveBeenCalledTimes(1);
    expect(result1).toEqual(session);
    expect(result2).toEqual(session);
    expect(result3).toEqual(session);
    expect(setAccessToken).toHaveBeenCalledTimes(1);
    expect(setAccessToken).toHaveBeenCalledWith("token-1");
  });

  it("testRefreshSessionLockResetsAfterSuccessAllowingNewRequest", async () => {
    const { refreshSession } = await import("../axiosMainApi");
    const firstSession = buildSession("token-1");
    const secondSession = buildSession("token-2");

    mockedAxiosGet.mockResolvedValueOnce({
      status: HttpStatusCodes.OK,
      data: firstSession,
    });
    mockedAxiosGet.mockResolvedValueOnce({
      status: HttpStatusCodes.OK,
      data: secondSession,
    });

    const firstResult = await refreshSession();
    const secondResult = await refreshSession();

    expect(mockedAxiosGet).toHaveBeenCalledTimes(2);
    expect(firstResult).toEqual(firstSession);
    expect(secondResult).toEqual(secondSession);
  });

  it("testRefreshSessionSuccessSetsAccessToken", async () => {
    const { refreshSession } = await import("../axiosMainApi");
    const session = buildSession("token-abc");

    mockedAxiosGet.mockResolvedValueOnce({
      status: HttpStatusCodes.OK,
      data: session,
    });

    const result = await refreshSession();

    expect(result).toEqual(session);
    expect(setAccessToken).toHaveBeenCalledWith("token-abc");
    expect(logout).not.toHaveBeenCalled();
  });

  it("testRefreshSessionNonOkResponseCallsLogout", async () => {
    const { refreshSession } = await import("../axiosMainApi");

    mockedAxiosGet.mockResolvedValueOnce({
      status: HttpStatusCodes.FORBIDDEN,
      data: null,
    });

    const result = await refreshSession();

    expect(result).toBeNull();
    expect(logout).toHaveBeenCalledTimes(1);
    expect(setAccessToken).not.toHaveBeenCalled();
  });

  it("testRefreshSessionFailureCallsLogout", async () => {
    const { refreshSession } = await import("../axiosMainApi");

    mockedAxiosGet.mockRejectedValueOnce(new Error("network error"));
    vi.spyOn(console, "error").mockImplementation(() => {});

    const result = await refreshSession();

    expect(result).toBeNull();
    expect(logout).toHaveBeenCalledTimes(1);
    expect(setAccessToken).not.toHaveBeenCalled();
  });

  it("testRefreshSessionLockResetsAfterRejectionAllowingNewRequest", async () => {
    const { refreshSession } = await import("../axiosMainApi");
    vi.spyOn(console, "error").mockImplementation(() => {});

    mockedAxiosGet.mockRejectedValueOnce(new Error("network error"));

    const firstResult = await refreshSession();
    expect(firstResult).toBeNull();
    expect(mockedAxiosGet).toHaveBeenCalledTimes(1);

    const session = buildSession("token-recovered");
    mockedAxiosGet.mockResolvedValueOnce({
      status: HttpStatusCodes.OK,
      data: session,
    });

    const secondResult = await refreshSession();

    expect(mockedAxiosGet).toHaveBeenCalledTimes(2);
    expect(secondResult).toEqual(session);
  });

  it("testRefreshSessionConcurrentCallsCollapseIntoSingleRequestFailure", async () => {
    const { refreshSession } = await import("../axiosMainApi");
    vi.spyOn(console, "error").mockImplementation(() => {});

    let rejectRequest!: (reason: Error) => void;
    mockedAxiosGet.mockReturnValueOnce(
      new Promise((_resolve, reject) => {
        rejectRequest = reject;
      }),
    );

    const call1 = refreshSession();
    const call2 = refreshSession();

    rejectRequest(new Error("boom"));

    const [result1, result2] = await Promise.all([call1, call2]);

    expect(mockedAxiosGet).toHaveBeenCalledTimes(1);
    expect(result1).toBeNull();
    expect(result2).toBeNull();
    expect(logout).toHaveBeenCalledTimes(1);
  });
});
