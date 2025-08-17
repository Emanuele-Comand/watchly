import { Pagination, Mousewheel } from "swiper/modules";
import Carousel from "./Carousel";
import FeaturesCard from "./FeaturesCard";

const FeaturesCarousel = ({ featuresData, onCardClick }) => {
  const renderFeaturesCard = (card) => (
    <FeaturesCard card={card} onClick={() => onCardClick(card.id)} />
  );

  const responsiveConfig = {
    modules: [Pagination, Mousewheel],
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3,
    },
    allowTouchMove: true,
    simulateTouch: true,
    touchStartPreventDefault: true,
    touchMoveStopPropagation: true,
    mousewheel: {
      enabled: true,
      forceToAxis: true,
      sensitivity: 1,
    },
    breakpoints: {
      640: {
        spaceBetween: 40,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 160,
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 flex justify-center lg:hidden w-full max-w-6xl">
        <Carousel
          data={featuresData}
          renderCard={renderFeaturesCard}
          swiperConfig={responsiveConfig}
        />
      </div>

      <div className="hidden lg:block lg:ml-[140px]">
        <Carousel
          data={featuresData}
          renderCard={renderFeaturesCard}
          swiperConfig={responsiveConfig}
        />
      </div>
    </>
  );
};

export default FeaturesCarousel;
