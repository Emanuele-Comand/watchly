import AddToCart from "./AddToCart";

const MarketNikeCard = () => {
  return (
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
      <AddToCart />
    </div>
  );
};

export default MarketNikeCard;
