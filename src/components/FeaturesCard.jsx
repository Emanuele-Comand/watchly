import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturesCard = ({ card, onClick }) => {
  return (
    <>
      <div className="py-16 text-center">
        <div
          className={`bg-white rounded-xl max-w-[368px] cursor-pointer ${
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
            className={`flex flex-col bg-white rounded-xl p-4 transition-shadow min-h-[572px] bg-cover bg-center ${
              card.id === "security" ? "relative" : ""
            }`}
          >
            <p
              className={`text-sm ${
                card.useBackground ? "text-white" : "text-gray-600"
              }`}
            >
              {card.subtitle}
            </p>
            <h3
              className={`text-lg font-semibold ${
                card.useBackground ? "text-white" : " text-black"
              } pt-4`}
            >
              {card.title}
            </h3>
            {!card.useBackground && (
              <img
                src={card.image}
                className={`w-full h-full object-cover rounded-lg py-16 
                  ${card.id === "health" ? "w-3/4 h-40 mx-auto" : ""}`}
              />
            )}
            {card.id === "security" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-5 border-red-500 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 border-5 border-red-500 rounded-full flex items-center justify-center">
                    <div className="bg-red-500 text-white rounded-full w-24 h-24 flex items-center justify-center font-bold text-lg">
                      SOS
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-end justify-end mt-auto">
              <FontAwesomeIcon icon={faCirclePlus} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
