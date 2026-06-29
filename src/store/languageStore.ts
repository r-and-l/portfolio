import { create } from "zustand";
import { persist } from "zustand/middleware";
import i18n from "../i18n";

type Language = "ru" | "en";

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: (i18n.language as Language) || "ru",

      setLanguage: (lang) => {
        i18n.changeLanguage(lang);
        set({ language: lang });
      },

      toggleLanguage: () => {
        const next = get().language === "ru" ? "en" : "ru";
        i18n.changeLanguage(next);
        set({ language: next });
      },
    }),
    {
      name: "lang", // ключ в localStorage
    }
  )
);
