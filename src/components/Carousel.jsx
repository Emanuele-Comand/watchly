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
  // Configurazione di default per Swiper
  const defaultConfig = {
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
      768: {
        spaceBetween: 80,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 120,
        slidesPerView: 3,
      },
      1280: {
        spaceBetween: 160,
        slidesPerView: 3,
      },
    },
  };

  // Unisce la configurazione di default con quella personalizzata
  const finalConfig = { ...defaultConfig, ...swiperConfig };

  return (
    <div className={className}>
      <Swiper {...finalConfig}>
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderCard(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
