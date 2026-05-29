import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { UserIcon, ArrowRightIcon } from "../common/Icons";
import { Button } from "../ui/Button";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none hover:shadow-md"
    >
      {/* Card Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors dark:bg-brand-500/10 dark:text-brand-500">
          <UserIcon size={20} />
        </div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{t("about.title")}</h2>
      </div>

      {/* Narrative content */}
      <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
        <p className="leading-relaxed">
          {t("about.p1")}
        </p>
        <p className="leading-relaxed">
          {t("about.p2")}
        </p>

        {/* Interactive expanded detail */}
        {isExpanded && (
          <div className="mt-4 space-y-3 border-t border-zinc-100 pt-4 dark:border-zinc-800/60 animate-fadeIn">
            <p className="text-sm leading-relaxed">
              {t("about.expandTitle")}
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Vite / React
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Next.js / SSR
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                REST APIs
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Git & GitHub
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {t("about.expandP")}
            </p>
          </div>
        )}
      </div>

      {/* Button */}
      <div className="mt-8">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="ghost"
          size="sm"
          icon={
            <ArrowRightIcon
              className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          }
          className="group"
        >
          {isExpanded ? t("about.btnLess") : t("about.btnMore")}
        </Button>
      </div>
    </div>
  );
};

export default About;