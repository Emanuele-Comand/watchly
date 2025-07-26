import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import FeaturesCard from "./FeaturesCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeaturesCarousel = ({ featuresData }) => {
  return (
    <>
      <Swiper spaceBetween={160} slidesPerView={3}>
        {featuresData.map((card) => (
          <SwiperSlide key={card.id}>
            <FeaturesCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturesCarousel;
