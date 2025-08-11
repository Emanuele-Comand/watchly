import AddToCart from "./AddToCart";
import Counter from "./Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { useState } from "react";
import "../App.css";

const MarketCard = () => {
  const [quantities, setQuantities] = useState({});

  const updateQuantity = (cardId, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [cardId]: newQuantity,
    }));
  };

  const cardsData = [
    {
      id: 1,
      title: "White",
      name: "Watchly White",
      image: "/assets/Colours no bg/smart_watch_realistic-Photoroom.png",
      price: 299,
      type: "watchly",
    },
    {
      id: 2,
      title: "Black",
      name: "Watchly Black",
      image: "/assets/Colours no bg/89361-Photoroom.png",
      price: 299,
      type: "watchly",
    },
    {
      id: 3,
      title: "Gold",
      name: "Watchly Gold",
      image: "/assets/Colours no bg/89362-Photoroom.png",
      price: 299,
      type: "watchly",
    },
    {
      id: 4,
      title: "Pink",
      name: "Watchly Pink",
      image: "/assets/Colours no bg/90970-Photoroom.png",
      price: 299,
      type: "watchly",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Mousewheel]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      allowTouchMove={true}
      simulateTouch={true}
      touchStartPreventDefault={true}
      touchMoveStopPropagation={true}
      mousewheel={true}
      forceToAxis={true}
      sensitivity={1}
      className="w-full swiper-pagination-market swiper-container"
    >
      {cardsData.map((card, index) => {
        const currentQuantity = quantities[card.id] || 1;

        return (
          <SwiperSlide key={card.id}>
            <div className="bg-white flex flex-col items-center justify-center rounded-xl mt-4 sm:mt-6 md:mt-8 p-4 sm:p-8 md:p-16">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-center">
                  {card.title}
                </h2>
                <img
                  className={`mt-4 object-cover ${
                    index === 0
                      ? "w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mt-4 sm:mt-6 md:mt-7"
                      : "w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60"
                  }`}
                  src={card.image}
                  alt={card.title}
                />
                <p className="text-xl sm:text-2xl font-bold text-center">
                  $299
                </p>
                <AddToCart quantity={currentQuantity} product={card} />
              </div>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
              <Counter
                count={currentQuantity}
                setCount={(newCount) => updateQuantity(card.id, newCount)}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MarketCard;
