import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import FeaturesCard from "./FeaturesCard";
import "swiper/css";
import "swiper/css/pagination";

const FeaturesCarousel = ({ featuresData }) => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, Mousewheel]}
        spaceBetween={160}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        allowTouchMove={true}
        simulateTouch={true}
        touchStartPreventDefault={true}
        touchMoveStopPropagation={true}
        mousewheel={{
          enabled: true,
          forceToAxis: true,
          sensitivity: 1,
        }}
      >
        {featuresData.map((card) => (
          <SwiperSlide key={card.id}>
            <FeaturesCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturesCarousel;
