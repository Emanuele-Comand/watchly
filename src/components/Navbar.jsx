import Container from "./Container";
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
    <Container
      maxWidth="max-w-full"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/80 backdrop-blur-md px-4 md:px-6"
      margin="mx-auto"
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/assets/Watchly_bianco-removebg-preview.png"
            className="w-16 h-16 md:w-25 md:h-25 cursor-pointer"
            onClick={() => {
              window.location.href = "#hero";
            }}
          ></img>
        </Link>
      </div>

      {/* Menu desktop */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8 lg:gap-15 text-white">
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

      {/* Colonna destra - BuyBtn, Cart e UserDropdown */}
      <div className="flex items-center gap-3 md:gap-5 text-white">
        {isAuthenticated && <BuyBtn />}

        {/* Indicatore del carrello */}
        <Link to="/cart" className="relative">
          <FontAwesomeIcon
            icon={faShoppingCart}
            size="lg"
            className="hover:scale-110 transition-all duration-300"
          />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </Link>

        {/* Menu hamburger per mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-gray-300 transition-colors"
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
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faCircleUser}
              size="lg"
              className="md:text-2xl"
              onMouseEnter={() => setIsUserDropdownOpen(true)}
            />
            {isAuthenticated && user && (
              <span className="hidden lg:block text-sm font-medium">
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

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center py-6 space-y-4 text-white">
            <a
              className="hover:text-gray-300 transition-colors text-lg"
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              className="hover:text-gray-300 transition-colors text-lg"
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              className="hover:text-gray-300 transition-colors text-lg"
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </a>
            {isAuthenticated && user && (
              <div className="pt-4 border-t border-gray-600 w-full text-center">
                <span className="text-sm font-medium">Hi, {user.name}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
