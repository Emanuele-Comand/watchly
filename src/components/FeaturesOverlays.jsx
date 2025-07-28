import featuresOverlays from "../data/featuresOverlays.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const FeaturesOverlays = ({ activeOverlay, onClose }) => {
  if (!activeOverlay) return null;

  const overlayData = featuresOverlays.find(
    (overlay) => overlay.id === activeOverlay
  );

  if (!overlayData) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-xl max-h-md relative overflow-hidden">
        <FontAwesomeIcon
          icon={faCircleXmark}
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl cursor-pointer text-red-500 hover:text-red-700 transition-colors"
          size="2x"
        />
        <img
          src={overlayData.image}
          alt={overlayData.id}
          className="w-full h-[420px] object-cover"
        />
        {overlayData.id === "security" && (
          <div className="absolute top-35 left-56 w-40 h-40 border-5 border-red-500 rounded-full flex items-center justify-center">
            <div className="border-5 border-red-500 rounded-full w-32 h-32 flex items-center justify-center">
              <div className="text-white font-bold w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
                SOS
              </div>
            </div>
          </div>
        )}
        <div className="text-center p-6">{overlayData.description}</div>
      </div>
    </div>
  );
};

export default FeaturesOverlays;
