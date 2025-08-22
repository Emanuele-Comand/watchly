import { Pagination, Mousewheel } from "swiper/modules";
import Carousel from "./Carousel";
import ReviewsCard from "./ReviewsCard";

const ReviewsCarousel = ({ reviewsData }) => {
  const renderReviewsCard = (review) => <ReviewsCard review={review} />;

  const reviewsSwiperConfig = {
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
      releaseOnEdges: true,
      invert: false,
    },
    speed: 600,
    watchSlidesProgress: true,
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
          sensitivity: 1,
          releaseOnEdges: true,
          invert: false,
        },
      },
    },
  };

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:hidden w-full max-w-6xl mx-auto flex justify-center">
        <div style={{ width: "100%", minHeight: "400px" }}>
          <Carousel
            data={reviewsData}
            renderCard={renderReviewsCard}
            swiperConfig={reviewsSwiperConfig}
          />
        </div>
      </div>

      <div className="hidden lg:block lg:ml-[140px] lg:mr-[140px]">
        <Carousel
          data={reviewsData}
          renderCard={renderReviewsCard}
          swiperConfig={reviewsSwiperConfig}
        />
      </div>
    </>
  );
};

export default ReviewsCarousel;
