import AddToCart from "./AddToCart";
import Counter from "./Counter";
import { useState } from "react";

const MarketNikeCard = () => {
  const [quantity, setQuantity] = useState(1);

  const nikeProduct = {
    id: "nike-fusion",
    name: "Watchly Nike Fusion",
    price: 399,
    image: "src/assets/Apple_watch_nike-removebg-preview.png",
    type: "nike",
  };

  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center rounded-xl mt-16 p-16">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Watchly Nike Fusion</h2>
          <img
            className="h-84"
            src="src/assets/Apple_watch_nike-removebg-preview.png"
            alt="Watchly Nike Fusion"
          />
        </div>
        <p className="text-4xl font-bold">$399</p>
        <div className="flex justify-center">
          <AddToCart quantity={quantity} product={nikeProduct} />
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Counter count={quantity} setCount={setQuantity} />
      </div>
    </>
  );
};

export default MarketNikeCard;
