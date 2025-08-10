import { Link } from "react-router-dom";
import Background from "../components/Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <>
      <Background>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-2xl border border-white/30 w-1/2 h-1/2 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
            <h1 className="text-6xl font-bold text-white">404</h1>
            <p className="text-lg text-white flex items-center gap-2">
              It seems that you are lost <span className="text-4xl">😞</span>
            </p>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition-colors bg-black rounded-lg p-2"
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" /> Go to home
            </Link>
          </div>
        </div>
      </Background>
    </>
  );
};

export default NotFound;
