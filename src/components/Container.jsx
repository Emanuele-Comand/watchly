import React from "react";

const Container = ({
  children,
  className = "",
  maxWidth = "max-w-full",
  padding = "px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[128px]",
  margin = "mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-[128px]",
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
