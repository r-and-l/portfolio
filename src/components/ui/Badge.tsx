import React from "react";

interface BadgeProps {
  text: string;
  pulse?: boolean;
  variant?: "brand" | "zinc" | "violet" | "blue";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  pulse = false,
  variant = "zinc",
  className = "",
}) => {
  const variantClasses = {
    brand: "border-brand-200/50 bg-brand-100/20 text-brand-600 dark:border-brand-900/30 dark:bg-brand-950/20 dark:text-brand-400",
    zinc: "border-zinc-200 bg-zinc-200/40 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300",
    violet: "border-violet-200/50 bg-violet-100/20 text-violet-600 dark:border-violet-900/30 dark:bg-violet-950/20 dark:text-violet-400",
    blue: "border-blue-200/50 bg-blue-100/20 text-blue-600 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-400",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-zinc-200/60 dark:hover:bg-zinc-900/80 ${variantClasses[variant]} ${className}`}
    >
      {pulse && <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />}
      <span className="text-xs font-semibold tracking-wider uppercase select-none">
        {text}
      </span>
    </div>
  );
};
