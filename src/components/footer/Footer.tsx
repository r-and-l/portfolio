import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200/50 py-6 transition-colors duration-300 dark:border-zinc-800/50 text-center">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        &copy; {currentYear} R&L. {t("footer.rights")}{" "}
        <span className="inline-block animate-pulse text-brand-500 dark:text-brand-400">💜</span>
      </p>
    </footer>
  );
};

export default Footer;