import React from "react";
import frame4Image from "/assets/Frame 4.png";

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
        ${className}
      `
        .trim()
        .replace(/\s+/g, " ")}
      style={{
        backgroundImage: `url(${frame4Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
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
