import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturesCard = ({ card, onClick }) => {
  return (
    <>
      <div className="py-4 sm:py-8 md:py-16 text-center px-2 sm:px-4">
        <div
          className={`bg-white rounded-xl mx-auto cursor-pointer w-full max-w-[320px] sm:max-w-[368px] ${
            card.useBackground ? "bg-cover bg-center text-white" : ""
          }`}
        >
          <div
            key={card.id}
            onClick={onClick}
            style={
              card.useBackground
                ? {
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${card.image})`,
                    backgroundSize:
                      card.id === "security" ? "120% 120%" : "cover",
                    backgroundPosition:
                      card.id === "security" ? "center center" : "center",
                  }
                : {}
            }
            className={`flex flex-col bg-white rounded-xl p-3 sm:p-4 transition-shadow h-[280px] sm:h-[400px] md:min-h-[572px] bg-cover bg-center ${
              card.id === "security" ? "relative" : ""
            }`}
          >
            <p
              className={`text-xs sm:text-sm ${
                card.useBackground ? "text-white" : "text-gray-600"
              }`}
            >
              {card.subtitle}
            </p>
            <h3
              className={`text-sm sm:text-base md:text-lg font-semibold ${
                card.useBackground ? "text-white" : " text-black"
              } pt-2 sm:pt-4`}
            >
              {card.title}
            </h3>
            {!card.useBackground && (
              <img
                src={card.image}
                className={`w-full h-full object-cover rounded-lg py-4 sm:py-8 md:py-16 
                  ${
                    card.id === "health"
                      ? "w-3/4 h-24 sm:h-32 md:h-40 mx-auto"
                      : ""
                  }`}
              />
            )}
            {card.id === "security" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-4 sm:border-5 border-red-500 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-4 sm:border-5 border-red-500 rounded-full flex items-center justify-center">
                    <div className="bg-red-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 flex items-center justify-center font-bold text-xs sm:text-sm md:text-lg">
                      SOS
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-end justify-end mt-auto">
              <FontAwesomeIcon
                icon={faCirclePlus}
                size="lg"
                className="sm:text-xl md:text-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
