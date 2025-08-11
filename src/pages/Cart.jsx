import Background from "../components/Background";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartComponent from "../components/CartComponent";

const Cart = () => {
  return (
    <>
      <Background>
        <Navbar />
        <Container>
          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-16 pt-20 sm:pt-24 md:pt-32 lg:pt-40">
            <CartComponent />
          </div>
        </Container>
        <Footer />
      </Background>
    </>
  );
};

export default Cart;
