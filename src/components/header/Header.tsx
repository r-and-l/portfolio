import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";
import { SunIcon, MoonIcon } from "../common/Icons";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLanguage = i18n.language || "ru";

  const toggleLanguage = () => {
    const newLang = currentLanguage === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "border-b border-zinc-200/40 bg-white/75 backdrop-blur-md dark:border-zinc-850 dark:border-zinc-800/40 dark:bg-zinc-950/75 shadow-sm"
          : "bg-transparent border-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-brand-500 font-extrabold">&lt;{t("logoName")}</span>
          <span
            className={`transition-colors duration-300 ${isScrolled ? "text-zinc-900 dark:text-white" : "text-white"
              }`}
          >
            {" "}{t("logoSurname")}
          </span>
          <span className="text-brand-500 font-extrabold">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-500 ${isScrolled
                  ? "text-zinc-650 dark:text-zinc-300 dark:hover:text-brand-500"
                  : "text-zinc-300 hover:text-white"
                }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className={`cursor-pointer px-2.5 py-1 text-xs font-bold rounded-lg border transition-all duration-300 ${isScrolled
                ? "border-zinc-200 hover:border-brand-500 hover:text-brand-500 text-zinc-600 dark:border-zinc-850 dark:text-zinc-300 dark:hover:border-brand-500 dark:hover:text-brand-500"
                : "border-zinc-800 bg-zinc-900/60 backdrop-blur-sm text-zinc-300 hover:border-white hover:text-white"
              }`}
            aria-label="Toggle language"
          >
            {currentLanguage.toUpperCase()}
          </button>

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative flex h-8 w-14 cursor-pointer items-center justify-between rounded-full p-1 transition-all duration-300 ${isScrolled
                ? "bg-zinc-200 dark:bg-zinc-800"
                : "bg-zinc-900/60 border border-zinc-800/50 backdrop-blur-sm"
              }`}
            aria-label="Toggle theme"
          >
            {/* Sliding Knob */}
            <div
              className={`absolute h-6 w-6 rounded-full bg-brand-500 shadow-md transition-all duration-300 ease-in-out ${theme === "dark" ? "left-[30px]" : "left-1"
                }`}
            />
            {/* Icons */}
            <SunIcon
              size={14}
              className={`z-10 ml-1 transition-colors duration-300 ${theme === "dark" ? "text-zinc-400" : "text-white"
                }`}
            />
            <MoonIcon
              size={14}
              className={`z-10 mr-1 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-zinc-400"
                }`}
            />
          </button>
        </nav>

        {/* Mobile Menu Button, Lang, & Theme Switch */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`cursor-pointer px-2 py-1 text-xxs font-bold rounded-lg border transition-all duration-300 ${isScrolled
                ? "border-zinc-200 hover:border-brand-500 hover:text-brand-500 text-zinc-650 dark:border-zinc-850 dark:text-zinc-300 dark:hover:border-brand-500 dark:hover:text-brand-500"
                : "border-zinc-800 bg-zinc-900/60 backdrop-blur-sm text-zinc-300 hover:border-white hover:text-white"
              }`}
          >
            {currentLanguage.toUpperCase()}
          </button>

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative flex h-8 w-14 cursor-pointer items-center justify-between rounded-full p-1 transition-all duration-300 ${isScrolled
                ? "bg-zinc-200 dark:bg-zinc-800"
                : "bg-zinc-900/60 border border-zinc-800/50 backdrop-blur-sm"
              }`}
            aria-label="Toggle theme"
          >
            <div
              className={`absolute h-6 w-6 rounded-full bg-brand-500 shadow-md transition-all duration-300 ease-in-out ${theme === "dark" ? "left-[30px]" : "left-1"
                }`}
            />
            <SunIcon
              size={14}
              className={`z-10 ml-1 transition-colors duration-300 ${theme === "dark" ? "text-zinc-400" : "text-white"
                }`}
            />
            <MoonIcon
              size={14}
              className={`z-10 mr-1 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-zinc-400"
                }`}
            />
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`rounded p-1 transition-all duration-300 ${isScrolled
                ? "text-zinc-600 hover:bg-zinc-155 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                : "text-zinc-300 hover:bg-zinc-900/40 hover:text-white"
              }`}
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-200/50 bg-white/95 px-6 py-4 shadow-lg transition-colors duration-300 dark:border-zinc-800/50 dark:bg-zinc-950/95 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-600 transition-colors hover:text-brand-500 dark:text-zinc-300 dark:hover:text-brand-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;