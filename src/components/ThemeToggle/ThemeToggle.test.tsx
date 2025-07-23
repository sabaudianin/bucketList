import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./ThemeToggle";

describe("<ThemeToggle", () => {
  const user = userEvent.setup();
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("renders sun emoji on light theme", () => {
    localStorage.setItem("theme", "light");
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveTextContent("☀️");
    expect(document.documentElement.classList.contains("light")).toBe(true);
  });
  it("renders dark emoji when theme is dark", () => {
    localStorage.setItem("theme", "dark");

    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveTextContent("🌙");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("toggle Theme on click", async () => {
    localStorage.setItem("theme", "light");
    render(<ThemeToggle />);
    const btn = screen.getByRole("button");
    await user.click(btn);
    expect(screen.getByRole("button")).toHaveTextContent("🌙");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
