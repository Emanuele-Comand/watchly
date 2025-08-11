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
    spaceBetween: 16,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    allowTouchMove: true,
    simulateTouch: true,
    touchStartPreventDefault: false,
    touchMoveStopPropagation: false,
    mousewheel: {
      enabled: false, // Disabilitato su mobile
      forceToAxis: true,
      sensitivity: 1,
    },
    breakpoints: {
      640: {
        spaceBetween: 24,
        slidesPerView: 1,
        mousewheel: {
          enabled: true,
        },
      },
      768: {
        spaceBetween: 32,
        slidesPerView: 2,
        mousewheel: {
          enabled: true,
        },
      },
      1024: {
        spaceBetween: 40,
        slidesPerView: 2,
        mousewheel: {
          enabled: true,
        },
      },
      1280: {
        spaceBetween: 60,
        slidesPerView: 3,
        mousewheel: {
          enabled: true,
        },
      },
    },
  };

  // Unisce la configurazione di default con quella personalizzata
  const finalConfig = { ...defaultConfig, ...swiperConfig };

  return (
    <div className={`${className} w-full`}>
      <Swiper {...finalConfig}>
        {data.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            {renderCard(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
