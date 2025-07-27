import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import FeaturesCard from "./FeaturesCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeaturesCarousel = ({ featuresData }) => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Pagination]}
        spaceBetween={160}
        slidesPerView={3}
        pagination={{
          clickable: true,
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
