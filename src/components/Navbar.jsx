import BuyBtn from "./BuyBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import UserDropdown from "./UserDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore, useCartStore } from "../stores";

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuthStore();
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-2 sm:py-3 md:py-4">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/assets/Watchly_bianco-removebg-preview.png"
              className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-25 lg:h-25 cursor-pointer"
              onClick={() => {
                window.location.href = "#hero";
              }}
              alt="Watchly Logo"
            />
          </Link>
        </div>
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-15 text-white">
          <a
            className="hover:scale-110 transition-all duration-300"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:scale-110 transition-all duration-300"
            href="#reviews"
          >
            Reviews
          </a>
          <a
            className="hover:scale-110 transition-all duration-300"
            href="#about"
          >
            About us
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-5 lg:gap-5 text-white">
          {isAuthenticated && <BuyBtn />}

          <Link to="/cart" className="relative">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="lg"
              className="hover:scale-110 transition-all duration-300"
            />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-gray-300 transition-colors p-1"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              size="lg"
            />
          </button>

          <div
            className={`relative cursor-pointer ${
              isMobileMenuOpen ? "hidden" : "block"
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <FontAwesomeIcon
                icon={faCircleUser}
                size="lg"
                className="sm:text-xl md:text-2xl lg:text-2xl"
                onMouseEnter={() => setIsUserDropdownOpen(true)}
              />
              {isAuthenticated && user && (
                <span className="hidden xl:block text-sm font-medium">
                  Hi, {user.name}
                </span>
              )}
            </div>
            {isUserDropdownOpen && (
              <div onMouseLeave={() => setIsUserDropdownOpen(false)}>
                <UserDropdown setIsUserDropdownOpen={setIsUserDropdownOpen} />
              </div>
            )}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-700">
          <div className="flex flex-col items-center py-4 sm:py-6 space-y-3 sm:space-y-4 text-white px-4 sm:px-6">
            <a
              className="hover:text-gray-300 transition-colors text-base sm:text-lg font-medium py-2 sm:py-3"
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              className="hover:text-gray-300 transition-colors text-base sm:text-lg font-medium py-2 sm:py-3"
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              className="hover:text-gray-300 transition-colors text-base sm:text-lg font-medium py-2 sm:py-3"
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </a>
            {isAuthenticated && user && (
              <div className="pt-3 sm:pt-4 border-t border-gray-600 w-full text-center">
                <span className="text-sm sm:text-base font-medium">
                  Hi, {user.name}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
