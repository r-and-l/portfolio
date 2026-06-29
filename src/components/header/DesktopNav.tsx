import React from "react";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

interface NavLink {
  label: string;
  href: string;
}

interface DesktopNavProps {
  links: NavLink[];
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium transition-colors text-zinc-600 hover:text-brand-500 dark:text-zinc-300 dark:hover:text-brand-400"
        >
          {link.label}
        </a>
      ))}
      <LanguageToggle />
      <ThemeToggle />
    </nav>
  );
};
