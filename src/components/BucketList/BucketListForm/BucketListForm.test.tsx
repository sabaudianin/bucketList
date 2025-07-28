import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { BucketListForm } from "./BucketListForm";

const user = userEvent.setup();

describe("<BucketListForm", () => {
  const setup = () => {
    const onSubmit = vi.fn();
    render(<BucketListForm onSubmit={onSubmit} />);
    return { onSubmit };
  };

  it("render input and button submit", () => {
    setup();
    expect(
      screen.getByPlaceholderText(/Add your new goal here .../i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  it("show error validation when click submit without any value", async () => {
    setup();
    const btn = screen.getByRole("button", { name: /add/i });
    await user.click(btn);
    expect(await screen.findByText(/Title is required/i)).toBeInTheDocument();
  });

  it("submit button is disabled if input is empty ", () => {
    setup();
    const btn = screen.getByRole("button", { name: /add/i });
    expect(btn).toBeDisabled();
  });

  it("submit form and reset form when valid", async () => {
    const { onSubmit } = setup();
    const input = screen.getByPlaceholderText(/Add your new goal here .../i);
    const btn = screen.getByRole("button", { name: /add/i });

    await user.type(input, "input test");
    await waitFor(() => expect(btn).toBeEnabled());

    await user.click(btn);

    expect(onSubmit).toHaveBeenCalledWith({ title: "input test" });
    expect(input).toHaveValue("");
  });
});
