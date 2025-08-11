import Container from "./Container";
import BuyBtn from "./BuyBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import UserDropdown from "./UserDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore, useCartStore } from "../stores";

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { user, isAuthenticated } = useAuthStore();
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <Container
      maxWidth="max-w-full"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/80 backdrop-blur-md"
      margin="mx-auto"
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/src/assets/Watchly_bianco-removebg-preview.png"
            className="w-25 h-25 cursor-pointer"
            onClick={() => {
              window.location.href = "#hero";
            }}
          ></img>
        </Link>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-15 text-white">
        <a
          className="hover:scale-110 transition-all duration-300"
          href="#features"
        >
          Features
        </a>
        <a
          className="hover:scale-110  transition-all duration-300"
          href="#reviews"
        >
          Reviews
        </a>
        <a
          className="hover:scale-110  transition-all duration-300"
          href="#about"
        >
          About us
        </a>
      </div>

      {/* Colonna destra - BuyBtn, Cart e UserDropdown */}
      <div className="flex items-center gap-5 text-white">
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

        <div className="relative cursor-pointer">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faCircleUser}
              size="2x"
              onMouseEnter={() => setIsUserDropdownOpen(true)}
            />
            {isAuthenticated && user && (
              <span className="text-sm font-medium">Hi, {user.name}</span>
            )}
          </div>
          {isUserDropdownOpen && (
            <div onMouseLeave={() => setIsUserDropdownOpen(false)}>
              <UserDropdown setIsUserDropdownOpen={setIsUserDropdownOpen} />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
