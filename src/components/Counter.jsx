import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  return (
    <div className="flex items-center gap-4 text-white text-4xl">
      <FontAwesomeIcon icon={faMinus} />
      <span className="text-2xl font-bold border border-white rounded-md px-4 py-2">
        1
      </span>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

export default Counter;
