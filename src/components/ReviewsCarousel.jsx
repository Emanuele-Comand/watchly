import Carousel from "./Carousel";
import ReviewsCard from "./ReviewsCard";

const ReviewsCarousel = ({ reviewsData }) => {
  const renderReviewsCard = (review) => <ReviewsCard review={review} />;

  // Configurazione responsive per il carosello delle reviews
  const reviewsSwiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3,
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
      <div className="px-4 sm:px-6 sm:ml-24 md:px-8 lg:px-24 lg:hidden w-full max-w-6xl mx-auto lg:ml-0 flex justify-center">
        <div style={{ width: "240%", minHeight: "400px" }}>
          <Carousel
            data={reviewsData}
            renderCard={renderReviewsCard}
            swiperConfig={reviewsSwiperConfig}
          />
        </div>
      </div>

      <div className="hidden lg:block lg:ml-[140px]">
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
