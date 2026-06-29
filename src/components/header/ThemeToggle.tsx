import React from "react";
import { useThemeStore } from "../../store/themeStore";
import { SunIcon, MoonIcon } from "../common/Icons";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-8 w-14 cursor-pointer items-center justify-between rounded-full p-1 transition-all duration-300 border border-zinc-200 bg-zinc-100 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      {/* Sliding Knob */}
      <div
        className={`absolute h-6 w-6 rounded-full bg-brand-500 shadow-md transition-all duration-300 ease-in-out ${
          theme === "dark" ? "left-[30px]" : "left-1"
        }`}
      />
      <SunIcon
        size={14}
        className={`z-10 ml-1 transition-colors duration-300 ${
          theme === "dark" ? "text-zinc-400" : "text-white"
        }`}
      />
      <MoonIcon
        size={14}
        className={`z-10 mr-1 transition-colors duration-300 ${
          theme === "dark" ? "text-white" : "text-zinc-400"
        }`}
      />
    </button>
  );
};
