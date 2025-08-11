import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ count, setCount }) => {
  return (
    <div className="flex items-center gap-4 text-white text-4xl">
      <FontAwesomeIcon
        className="cursor-pointer"
        icon={faMinus}
        onClick={() => setCount(count > 1 ? count - 1 : 1)}
      />
      <span className="text-2xl font-bold border border-white rounded-md px-4 py-2">
        {count}
      </span>
      <FontAwesomeIcon
        className="cursor-pointer"
        icon={faPlus}
        onClick={() => setCount(count < 20 ? count + 1 : 20)}
      />
    </div>
  );
};

export default Counter;
