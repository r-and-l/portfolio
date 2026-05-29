import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "right",
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all select-none active:scale-98";

  const sizeStyles = {
    sm: "px-4 py-2.5 text-xs",
    md: "px-6 py-3.5 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-brand-600 text-white shadow-lg shadow-brand-600/30 hover:bg-brand-500 hover:shadow-brand-500/40 disabled:bg-zinc-300 dark:disabled:bg-zinc-800 disabled:text-zinc-400 dark:disabled:text-zinc-500 disabled:cursor-not-allowed disabled:shadow-none dark:shadow-none",
    secondary:
      "border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
    ghost:
      "bg-brand-50 text-brand-600 hover:bg-brand-100/80 dark:bg-brand-500/10 dark:text-brand-400 dark:hover:bg-brand-500/20 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const classes = [
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        className={classes}
        style={disabled ? { pointerEvents: "none" } : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
