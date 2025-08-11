import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ count, setCount }) => {
  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-4 text-white text-lg sm:text-2xl md:text-4xl">
      <FontAwesomeIcon
        className="cursor-pointer hover:scale-110 transition-transform"
        icon={faMinus}
        onClick={() => setCount(count > 1 ? count - 1 : 1)}
      />
      <span className="text-sm sm:text-lg md:text-2xl font-bold border border-white rounded-md px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 md:py-2">
        {count}
      </span>
      <FontAwesomeIcon
        className="cursor-pointer hover:scale-110 transition-transform"
        icon={faPlus}
        onClick={() => setCount(count < 20 ? count + 1 : 20)}
      />
    </div>
  );
};

export default Counter;
