import { useNavigate } from "react-router-dom";

const UserDropdown = ({ setIsUserDropdownOpen }) => {
  const navigate = useNavigate();

  const handleAuthClick = (authType) => {
    setIsUserDropdownOpen(false);
    navigate(`/auth?type=${authType}`);
  };

  return (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-32 py-2 z-50">
      <button
        onClick={() => handleAuthClick("signup")}
        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
      >
        Sign up
      </button>
      <button
        onClick={() => handleAuthClick("login")}
        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
      >
        Login
      </button>
    </div>
  );
};

export default UserDropdown;
