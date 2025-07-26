import React from "react";

const Container = ({
  children,
  className = "",
  maxWidth = "max-w-full",
  padding = "px-[128px]",
  margin = "mx-[128px]",
  background = "",
  rounded = "",
  shadow = "",
  ...props
}) => {
  return (
    <div
      className={`
        ${maxWidth} 
        ${padding} 
        ${margin} 
        ${background} 
        ${rounded} 
        ${shadow} 
        ${className}
      `
        .trim()
        .replace(/\s+/g, " ")}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
