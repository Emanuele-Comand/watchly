import Carousel from "./Carousel";
import ReviewsCard from "./ReviewsCard";

const ReviewsCarousel = ({ reviewsData }) => {
  const renderReviewsCard = (review) => <ReviewsCard review={review} />;

  // Configurazione specifica per il carosello delle reviews
  const reviewsSwiperConfig = {
    slidesPerView: 3,
    spaceBetween: 160,
  };

  return (
    <Carousel
      data={reviewsData}
      renderCard={renderReviewsCard}
      swiperConfig={reviewsSwiperConfig}
    />
  );
};

export default ReviewsCarousel;
