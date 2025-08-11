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
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-2 sm:py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/assets/Watchly_bianco-removebg-preview.png"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 cursor-pointer"
              onClick={() => {
                window.location.href = "#hero";
              }}
              alt="Watchly Logo"
            />
          </Link>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8 lg:gap-12 xl:gap-15 text-white">
          <a
            className="hover:scale-110 transition-all duration-300 text-sm lg:text-base"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:scale-110 transition-all duration-300 text-sm lg:text-base"
            href="#reviews"
          >
            Reviews
          </a>
          <a
            className="hover:scale-110 transition-all duration-300 text-sm lg:text-base"
            href="#about"
          >
            About us
          </a>
        </div>

        {/* Colonna destra - BuyBtn, Cart e UserDropdown */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-5 text-white">
          {isAuthenticated && <BuyBtn />}

          {/* Indicatore del carrello */}
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

          {/* Menu hamburger per mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-gray-300 transition-colors p-1"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              size="lg"
            />
          </button>

          {/* User dropdown - nascosto su mobile quando menu è aperto */}
          <div
            className={`relative cursor-pointer ${
              isMobileMenuOpen ? "hidden" : "block"
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <FontAwesomeIcon
                icon={faCircleUser}
                size="lg"
                className="md:text-xl lg:text-2xl"
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

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-700">
          <div className="flex flex-col items-center py-4 space-y-3 text-white px-4">
            <a
              className="hover:text-gray-300 transition-colors text-base font-medium py-2"
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              className="hover:text-gray-300 transition-colors text-base font-medium py-2"
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              className="hover:text-gray-300 transition-colors text-base font-medium py-2"
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </a>
            {isAuthenticated && user && (
              <div className="pt-3 border-t border-gray-600 w-full text-center">
                <span className="text-sm font-medium">Hi, {user.name}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
