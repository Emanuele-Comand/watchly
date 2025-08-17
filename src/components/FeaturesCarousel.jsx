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
    touchStartPreventDefault: false,
    touchMoveStopPropagation: false,
    mousewheel: {
      enabled: false,
      forceToAxis: true,
      sensitivity: 1,
    },
    breakpoints: {
      640: {
        spaceBetween: 40,
        slidesPerView: 2,
        mousewheel: {
          enabled: false,
        },
      },
      1024: {
        spaceBetween: 160,
        slidesPerView: 3,
        mousewheel: {
          enabled: true,
        },
      },
    },
  };

  return (
    <>
      <div className="px-4 sm:px-6 sm:ml-24 md:px-8 lg:px-24 lg:hidden w-full max-w-6xl mx-auto lg:ml-0 flex justify-center">
        <div style={{ width: "100%", minHeight: "600px" }}>
          <Carousel
            data={featuresData}
            renderCard={renderFeaturesCard}
            swiperConfig={responsiveConfig}
          />
        </div>
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
