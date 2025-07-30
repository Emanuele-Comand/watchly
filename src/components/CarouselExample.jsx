import FeaturesCarousel from "./FeaturesCarousel";
import ReviewsCarousel from "./ReviewsCarousel";
import featuresCards from "../data/featuresCards.json";
import reviews from "../data/reviews.json";

const CarouselExample = () => {
  const handleFeatureClick = (featureId) => {
    console.log("Feature clicked:", featureId);
  };

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Features Carousel
        </h2>
        <FeaturesCarousel
          featuresData={featuresCards}
          onCardClick={handleFeatureClick}
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Reviews Carousel
        </h2>
        <ReviewsCarousel reviewsData={reviews} />
      </div>
    </div>
  );
};

export default CarouselExample;
