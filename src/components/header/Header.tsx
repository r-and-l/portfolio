"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/20 bg-white/60 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/60 shadow-lg shadow-brand-500/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-brand-500 font-extrabold">&lt;{t("logoName")}</span>
          <span className="transition-colors duration-300 text-zinc-900 dark:text-white">
            {" "}{t("logoSurname")}
          </span>
          <span className="text-brand-500 font-extrabold">/&gt;</span>
        </a>

        {/* Responsive Navigation — CSS controls which variant is visible */}
        <DesktopNav links={navLinks} />
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
};

export default Header;