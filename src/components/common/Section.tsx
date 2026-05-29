import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  hScreen?: boolean;
  topOffset?: boolean;
  bottomPadding?: boolean;
  flexLayout?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
  fullHeight = true,
  hScreen = false,
  topOffset = true,
  bottomPadding = true,
  flexLayout = false,
}) => {
  // If hScreen is enabled, it overrides standard height and padding configurations
  const showFullHeight = hScreen ? false : fullHeight;
  const showTopOffset = hScreen ? false : topOffset;
  const showBottomPadding = hScreen ? false : bottomPadding;

  const classes = [
    "relative overflow-hidden w-full transition-colors duration-300",
    showFullHeight ? "min-h-screen" : "",
    hScreen ? "h-screen h-dvh flex flex-col justify-start pt-20 pb-6 md:pb-12 lg:pb-16" : "",
    showTopOffset ? "pt-24" : "",
    showBottomPadding ? "pb-16" : "",
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

