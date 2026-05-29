import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CodeIcon } from "../common/Icons";

interface SkillItem {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation slightly after mount to see it transition
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const skills: SkillItem[] = [
    {
      name: "HTML",
      percentage: 90,
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current text-[#e34f26]">
          <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17 5.75H7.07l.28 3.2H18.2l-.32 3.6-5.88 1.6-5.88-1.6-.4-4.5H2.66l.87 9.8 8.47 2.4 8.47-2.4.92-10.4.11-1.75z" />
        </svg>
      ),
    },
    {
      name: "CSS / SCCS",
      percentage: 85,
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current text-[#1572b6]">
          <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17 5.75H7.07l.28 3.2H18.2l-.32 3.6-5.88 1.6-5.88-1.6-.4-4.5H2.66l.87 9.8 8.47 2.4 8.47-2.4.92-10.4.11-1.75z" />
          <path d="M12 11.25H8.7l.15 1.7h3.15v1.6H9.1l.15 1.7L12 16.7l2.75-.45.15-1.7H12v-1.6h3v-3.3H8.5l-.15-1.7h6.75l-.15 1.7L12 11.25z" opacity="0.3" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      percentage: 75,
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current text-[#f7df1e]">
          <rect width="24" height="24" rx="3" />
          <path d="M1.5 0h21v24h-21z" fill="#f7df1e" />
          <path d="M19.8 15.3c-.6-.9-1.5-1.4-2.7-1.4-1.2 0-2 .6-2 1.5 0 .9.7 1.3 1.9 1.8 1.9.8 3.1 1.7 3.1 3.9 0 2.3-1.8 4-4.5 4-2.5 0-4-1.2-4.7-3l2.2-1.3c.5.9 1.2 1.5 2.4 1.5 1.3 0 2.2-.6 2.2-1.7 0-.9-.6-1.4-1.9-1.9-2.1-.8-3.2-1.9-3.2-3.8 0-2.2 1.8-3.7 4.2-3.7 2.1 0 3.6.9 4.3 2.5l-2.1 1.3zm-11.4 1.7v5.5H5.8v-5.5h2.6zm0-7v2.4H5.8V10h2.6z" fill="#000000" />
        </svg>
      ),
    },
    {
      name: "React",
      percentage: 60,
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-7 w-7 fill-none stroke-current text-[#61dafb]">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Git / GitHub",
      percentage: 70,
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current text-zinc-800 dark:text-zinc-200">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
  ];

  return (
    <div
      id="skills"
      className="scroll-mt-24 h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none hover:shadow-md"
    >
      {/* Card Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors dark:bg-brand-500/10 dark:text-brand-500">
          <CodeIcon size={20} />
        </div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{t("skills.title")}</h2>
      </div>

      {/* Skills list */}
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-4">
            {/* Logo container */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-50 transition-colors dark:bg-zinc-850 dark:bg-zinc-800/40">
              {skill.icon}
            </div>

            {/* Progress and name */}
            <div className="flex-1">
              <div className="mb-1.5 flex items-center justify-between text-sm font-semibold">
                <span className="text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                <span className="text-zinc-600 dark:text-zinc-400">{skill.percentage}%</span>
              </div>

              {/* Progress track */}
              <div className="h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div
                  className="h-full rounded-full bg-brand-500 transition-all duration-1000 ease-out"
                  style={{ width: animated ? `${skill.percentage}%` : "0%" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
