import "@testing-library/jest-dom";
import { vi } from "vitest";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false, // true dark mode
    media: query,
    onchange: null,
    addListener: vi.fn(), // stare API
    removeListener: vi.fn(),
    addEventListener: vi.fn(), // nowe API
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});
