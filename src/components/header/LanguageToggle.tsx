import React from "react";
import { useLanguageStore } from "../../store/languageStore";

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <button
      onClick={toggleLanguage}
      className={`cursor-pointer px-2.5 py-1 text-xs font-bold rounded-lg border transition-all duration-300
        border-zinc-200 hover:border-brand-500 hover:text-brand-500 text-zinc-600
        dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-brand-500 dark:hover:text-brand-500
        bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm ${className}`}
      aria-label="Toggle language"
    >
      {language.toUpperCase()}
    </button>
  );
};
