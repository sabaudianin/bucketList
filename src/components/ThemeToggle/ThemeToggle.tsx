import React from "react";
import { useTheme } from "../../hooks/useTheme/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};
