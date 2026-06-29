import React, { useState } from "react";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  links: NavLink[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Controls Row */}
      <div className="flex items-center gap-3">
        <LanguageToggle className="px-2 py-1 text-xxs" />
        <ThemeToggle />

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded p-1 transition-all duration-300 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
          aria-label="Toggle Mobile Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Drawer */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-zinc-200/50 bg-white/95 px-6 py-4 shadow-lg transition-colors duration-300 dark:border-zinc-800/50 dark:bg-zinc-950/95">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-zinc-600 transition-colors hover:text-brand-500 dark:text-zinc-300 dark:hover:text-brand-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
