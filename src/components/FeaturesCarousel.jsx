import Carousel from "./Carousel";
import FeaturesCard from "./FeaturesCard";

const FeaturesCarousel = ({ featuresData, onCardClick }) => {
  const renderFeaturesCard = (card) => (
    <FeaturesCard card={card} onClick={() => onCardClick(card.id)} />
  );

  return <Carousel data={featuresData} renderCard={renderFeaturesCard} />;
};

export default FeaturesCarousel;
