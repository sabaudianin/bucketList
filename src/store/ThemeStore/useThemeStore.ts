import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: ((): Theme => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return stored ?? (prefersDark ? "dark" : "light");
  })(),

  setTheme: (theme) => {
    set({ theme });
    const root = document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  },

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      const root = document.documentElement;
      root.classList.remove(state.theme);
      root.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));
