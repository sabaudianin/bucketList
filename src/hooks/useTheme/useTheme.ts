import { useEffect } from "react";
import { useThemeStore } from "../../store/ThemeStore/useThemeStore";

export const useTheme = () => {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  return { theme, toggleTheme };
};
