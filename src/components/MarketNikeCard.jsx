import AddToCart from "./AddToCart";
import Counter from "./Counter";
import { useState } from "react";

const MarketNikeCard = () => {
  const [quantity, setQuantity] = useState(1);

  const nikeProduct = {
    id: "nike-fusion",
    name: "Watchly Nike Fusion",
    price: 399,
    image: "/assets/Apple_watch_nike-removebg-preview.png",
    type: "nike",
  };

  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center rounded-xl mt-8 sm:mt-12 md:mt-16 p-4 sm:p-8 md:p-16">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Watchly Nike Fusion
          </h2>
          <img
            className="h-60 sm:h-72 md:h-84 w-auto"
            src="/assets/Apple_watch_nike-removebg-preview.png"
            alt="Watchly Nike Fusion"
          />
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">$399</p>
        <div className="flex justify-center">
          <AddToCart quantity={quantity} product={nikeProduct} />
        </div>
      </div>
      <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
        <Counter count={quantity} setCount={setQuantity} />
      </div>
    </>
  );
};

export default MarketNikeCard;
