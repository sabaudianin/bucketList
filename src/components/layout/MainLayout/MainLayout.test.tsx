import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MainLayout } from "./MainLayout";
import { MemoryRouter } from "react-router-dom";

describe("<MainLayout,basic test:", () => {
  it("Render components:Navbar,Footer and childrens", () => {
    render(
      <MemoryRouter>
        <MainLayout>
          <p>Example testing content.</p>
        </MainLayout>
      </MemoryRouter>
    );

    expect(screen.getByText("Example testing content.")).toBeInTheDocument();
  });
});
