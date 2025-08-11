import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ count, setCount }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 text-white text-2xl sm:text-3xl md:text-4xl">
      <FontAwesomeIcon
        className="cursor-pointer hover:scale-110 transition-transform"
        icon={faMinus}
        onClick={() => setCount(count > 1 ? count - 1 : 1)}
      />
      <span className="text-lg sm:text-xl md:text-2xl font-bold border border-white rounded-md px-2 sm:px-3 md:px-4 py-1 sm:py-2">
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
