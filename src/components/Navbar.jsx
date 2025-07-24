import Container from "./Container";
import BuyBtn from "./BuyBtn";

const Navbar = () => {
  return (
    <Container
      maxWidth="max-w-full"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black"
      margin="mx-auto"
    >
      <img
        src="/src/assets/Watchly_bianco-removebg-preview.png"
        className="w-25 h-25 cursor-pointer"
      ></img>
      <div className="flex items-center gap-15 text-white">
        <a className="hover:scale-110 transition-all duration-300" href="/">
          Features
        </a>
        <a className="hover:scale-110  transition-all duration-300" href="/">
          Reviews
        </a>
        <a className="hover:scale-110  transition-all duration-300" href="/">
          About us
        </a>
      </div>
      <BuyBtn />
    </Container>
  );
};

export default Navbar;
