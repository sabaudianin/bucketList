import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = (): {
  theme: Theme;
  toggleTheme: () => void;
} => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme");
    console.log("Theme from localStorage:", stored);
    if (stored === "light" || stored === "dark") return stored;

    const systemPrefersDark = window.matchMedia(
      "prefers-color-scheme:dark"
    ).matches;
    return systemPrefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    console.log("Theme:", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, toggleTheme };
};
