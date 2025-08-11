import React from "react";

const Container = ({
  children,
  className = "",
  maxWidth = "max-w-full",
  padding = "px-4 sm:px-8 md:px-16 lg:px-[128px]",
  margin = "mx-4 sm:mx-8 md:mx-16 lg:mx-[128px]",
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
