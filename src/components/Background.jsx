import React from "react";

const Background = ({
  children,
  className = "",
  overlay = false,
  overlayOpacity = "bg-black/50",
  ...props
}) => {
  return (
    <div
      className={`
        min-h-screen 
        bg-black 
        relative 
        bg-responsive
        ${className}
      `
        .trim()
        .replace(/\s+/g, " ")}
      {...props}
    >
      {overlay && (
        <div className={`absolute inset-0 ${overlayOpacity} z-0`}></div>
      )}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default Background;
