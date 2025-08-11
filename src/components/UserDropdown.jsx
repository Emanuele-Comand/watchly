import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const UserDropdown = ({ setIsUserDropdownOpen }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleAuthClick = (authType) => {
    setIsUserDropdownOpen(false);
    navigate(`/auth?type=${authType}`);
  };

  const handleLogout = () => {
    setIsUserDropdownOpen(false);
    logout();
    navigate("/");
  };

  return (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-28 sm:min-w-32 py-2 z-50">
      {isAuthenticated ? (
        <>
          <div className="px-3 sm:px-4 py-2 border-b border-gray-200">
            <p className="text-xs sm:text-sm text-gray-600">Welcome</p>
            <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">
              {user?.name}
            </p>
          </div>
          <button
            onClick={() => {
              setIsUserDropdownOpen(false);
              navigate("/cart");
            }}
            className="block w-full text-left px-3 sm:px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200 cursor-pointer text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-xs sm:text-sm"
              />
              <span>Cart</span>
            </div>
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-3 sm:px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200 cursor-pointer text-xs sm:text-sm"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => handleAuthClick("signup")}
            className="block w-full text-left px-3 sm:px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200 cursor-pointer text-xs sm:text-sm"
          >
            Sign up
          </button>
          <button
            onClick={() => handleAuthClick("login")}
            className="block w-full text-left px-3 sm:px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200 cursor-pointer text-xs sm:text-sm"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserDropdown;
