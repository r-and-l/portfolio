import React from "react";

interface LinkProps {
  href: string;
  text: string;
  Icon: React.ComponentType<{ size?: number }>;
}

const Link = ({ href, text, Icon }: LinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3.5 group text-zinc-700 transition-colors hover:text-brand-600 dark:text-zinc-300 dark:hover:text-brand-400"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-450 shadow-sm transition-colors dark:bg-zinc-850 group-hover:bg-brand-500/10 group-hover:text-brand-500">
        <Icon size={16} />
      </div>
      <span className="text-sm font-medium">{text}</span>
    </a>
  );
};

export default Link;