import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { Navbar } from "./Navbar";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

let mockUser: null | { id: string } = null;

vi.mock("../../../hooks/user/useUser/useUser", () => ({
  useUser: () => ({ user: mockUser }),
}));

const mockLogoutFn = vi.fn();
vi.mock("../../../hooks/auth/useLogout/useLogout", () => ({
  useLogout: () => mockLogoutFn,
}));

afterEach(() => {
  vi.clearAllMocks();
  mockUser = null;
});

const user = userEvent.setup();

describe("<Navbar />", () => {
  it("does NOT render logout button when user is NOT logged in", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText("BucketList")).toBeInTheDocument();
    expect(screen.queryByText("🔚")).not.toBeInTheDocument();
  });

  it("renders logout button when user IS logged in", async () => {
    mockUser = { id: "abc123" };

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("button")).toHaveTextContent("🔚");

    await user.click(screen.getByRole("button"));
    expect(mockLogoutFn).toHaveBeenCalledTimes(1);
  });
});
