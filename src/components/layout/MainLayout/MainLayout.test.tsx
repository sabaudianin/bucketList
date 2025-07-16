import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MainLayout } from "./MainLayout";

describe("<MainLayout,basic test:", () => {
  it("Render components:Navbar,Footer and childrens", () => {
    render(
      <MainLayout>
        <p>Example testing content.</p>
      </MainLayout>
    );

    expect(screen.getByText("Example testing content.")).toBeInTheDocument();
  });
});
