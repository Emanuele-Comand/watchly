import Lottie from "lottie-react";
import dragDropAnimation from "../assets/drag-and-drop.json";

const DragDropIcon = ({
  className = "text-white",
  style = {},
  color = "white",
}) => {
  const colorFilters = {
    white: "brightness(0) invert(1)",
    black: "brightness(0)",
    red: "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
    blue: "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(119%)",
    green:
      "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(90deg) brightness(118%) contrast(119%)",
    yellow:
      "brightness(0) saturate(100%) invert(83%) sepia(31%) saturate(638%) hue-rotate(359deg) brightness(103%) contrast(107%)",
    purple:
      "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(270deg) brightness(104%) contrast(97%)",
  };

  const filterStyle = colorFilters[color]
    ? { filter: colorFilters[color] }
    : {};

  return (
    <Lottie
      animationData={dragDropAnimation}
      loop={true}
      autoplay={true}
      className={className}
      style={{ ...style, ...filterStyle }}
    />
  );
};

export default DragDropIcon;
