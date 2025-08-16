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
    <Carousel
      data={featuresData}
      renderCard={renderFeaturesCard}
      swiperConfig={responsiveConfig}
    />
  );
};

export default FeaturesCarousel;
