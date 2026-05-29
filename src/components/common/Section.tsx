import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  topOffset?: boolean;
  bottomPadding?: boolean;
  flexLayout?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
  fullHeight = true,
  topOffset = true,
  bottomPadding = true,
  flexLayout = false,
}) => {
  const classes = [
    "transition-colors duration-300",
    fullHeight ? "min-h-screen" : "",
    topOffset ? "pt-24" : "",
    bottomPadding ? "pb-16" : "",
    flexLayout ? "flex flex-col justify-between" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};
