import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useLogout } from "./useLogout";

const mockSignOut = vi.fn();
const mockNavigate = vi.fn();
const mockClearUser = vi.fn();
const mockToastSuccess = vi.fn();
const mockToastError = vi.fn();

beforeEach(() => {
  vi.resetAllMocks();
});

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock("../../user/useUser/useUser", () => ({
  useUser: () => ({
    clearUser: mockClearUser,
  }),
}));

vi.mock("sonner", () => ({
  toast: {
    successs: mockToastSuccess,
    error: mockToastError,
  },
}));

describe("hook useLogout", () => {
  it("log out finish successfully", async () => {
    mockSignOut.mockResolvedValueOnce({ error: null });
    const { result } = renderHook(() => useLogout());
    await result.current();

    expect(mockSignOut).toHaveBeenCalledTimes(1);
    expect(mockToastSuccess).toHaveBeenCalledWith("Logged out");
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

  it("handel error if logout not successfully", async () => {
    mockSignOut.mockResolvedValueOnce({ error: new Error("fail") });

    const { result } = renderHook(() => useLogout());

    await result.current();
    expect(mockSignOut).toHaveBeenCalledTimes(1);
    expect(mockToastSuccess).toHaveBeenCalledWith("Logged out");
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
