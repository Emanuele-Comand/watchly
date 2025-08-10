import AddToCart from "./AddToCart";
import Counter from "./Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "../App.css";

const MarketCard = () => {
  const cardsData = [
    {
      id: 1,
      title: "White",
      image: "src/assets/Colours no bg/smart_watch_realistic-Photoroom.png",
    },
    {
      id: 2,
      title: "Black",
      image: "src/assets/Colours no bg/89361-Photoroom.png",
    },
    {
      id: 3,
      title: "Gold",
      image: "src/assets/Colours no bg/89362-Photoroom.png",
    },
    {
      id: 4,
      title: "Pink",
      image: "src/assets/Colours no bg/90970-Photoroom.png",
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
      {cardsData.map((card, index) => (
        <SwiperSlide key={card.id}>
          <div className="bg-white flex flex-col items-center justify-center rounded-xl mt-8 p-16">
            <div>
              <h2 className="text-2xl font-bold text-center">{card.title}</h2>
              <img
                className={`mt-4 object-cover ${
                  index === 0 ? "w-56 h-56 mt-7" : "w-60 h-60"
                }`}
                src={card.image}
                alt={card.title}
              />
              <p className="text-2xl font-bold text-center">$299</p>
              <div className="flex justify-center">
                <AddToCart />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Counter />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MarketCard;
