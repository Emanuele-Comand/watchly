import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({
  data,
  renderCard,
  swiperConfig = {},
  className = "swiper-container",
}) => {
  const defaultConfig = {
    modules: [Pagination, Mousewheel],
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      clickable: true,
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
  };

  const finalConfig = { ...defaultConfig, ...swiperConfig };

  return (
    <div
      className={`${className} flex justify-center items-center ml-32 mx-auto lg:mx-0`}
    >
      <Swiper {...finalConfig}>
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderCard(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
