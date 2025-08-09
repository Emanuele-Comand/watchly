import Container from "./Container";
import BuyBtn from "./BuyBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import UserDropdown from "./UserDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <Container
      maxWidth="max-w-full"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/80 backdrop-blur-md"
      margin="mx-auto"
    >
      <Link to="/">
        <img
          src="/src/assets/Watchly_bianco-removebg-preview.png"
          className="w-25 h-25 cursor-pointer"
          onClick={() => {
            window.location.href = "#hero";
          }}
        ></img>
      </Link>
      <div className="flex items-center gap-15 text-white">
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
      <div className="flex items-center gap-5 text-white cursor-pointer">
        <div className="relative">
          <FontAwesomeIcon
            icon={faCircleUser}
            size="2x"
            onMouseEnter={() => setIsUserDropdownOpen(true)}
          />
          {isUserDropdownOpen && (
            <div onMouseLeave={() => setIsUserDropdownOpen(false)}>
              <UserDropdown setIsUserDropdownOpen={setIsUserDropdownOpen} />
            </div>
          )}
        </div>
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
      </div>
    </Container>
  );
};

export default Navbar;
