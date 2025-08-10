import { useNavigate } from "react-router-dom";

const BuyBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/market");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-black text-white border border-white px-5 py-1 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
    >
      Buy Now
    </button>
  );
};

export default BuyBtn;
