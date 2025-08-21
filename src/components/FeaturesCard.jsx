import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturesCard = ({ card, onClick }) => {
  return (
    <>
      <div className="py-8 sm:py-12 md:py-16 text-center">
        <div
          className={`bg-white rounded-xl w-full max-w-[95vw] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[368px] cursor-pointer ${
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
            className={`flex flex-col bg-white rounded-xl p-4 sm:p-4 transition-shadow min-h-[80vh] sm:min-h-[480px] md:min-h-[572px] bg-cover bg-center ${
              card.id === "security" ? "relative" : ""
            }`}
          >
            <p
              className={`text-sm sm:text-sm ${
                card.useBackground ? "text-white" : "text-gray-600"
              }`}
            >
              {card.subtitle}
            </p>
            <h3
              className={`text-lg sm:text-base md:text-lg font-semibold ${
                card.useBackground ? "text-white" : " text-black"
              } pt-2 sm:pt-3 md:pt-4`}
            >
              {card.title}
            </h3>
            {!card.useBackground && (
              <img
                src={card.image}
                className={`rounded-lg py-8 sm:py-12 md:py-16 
                  ${
                    card.id === "health"
                      ? "w-3/4 h-48 sm:h-32 md:h-40 lg:h-64 xl:h-96 mx-auto object-contain"
                      : "w-full h-full object-cover"
                  }`}
              />
            )}
            {card.id === "security" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40 border-4 sm:border-5 border-red-500 rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 sm:w-24 sm:h-24 md:w-32 md:h-32 border-4 sm:border-5 border-red-500 rounded-full flex items-center justify-center">
                    <div className="bg-red-500 text-white rounded-full w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center font-bold text-lg sm:text-base md:text-lg">
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
                className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
