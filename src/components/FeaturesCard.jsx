import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturesCard = ({ card }) => {
  return (
    <>
      <div className="py-16 text-center">
        <div
          className={`bg-white rounded-lg max-w-[368px] cursor-pointer ${
            card.useBackground ? "bg-cover bg-center text-white" : ""
          }`}
        >
          <div
            key={card.id}
            style={
              card.useBackground
                ? {
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${card.image})`,
                  }
                : {}
            }
            className="flex flex-col bg-gray-100 rounded-xl p-4 transition-shadow min-h-[572px] bg-cover bg-center"
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
                className={`w-full h-full object-cover rounded-lg py-16 ${
                  card.id === "health" ? "w-3/4 h-40 mx-auto" : ""
                }`}
              />
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
