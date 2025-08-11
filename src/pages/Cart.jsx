import Background from "../components/Background";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartComponent from "../components/CartComponent";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  return (
    <>
      <Background>
        <Navbar />
        <Container>
          <div className="flex items-center justify-center gap-16 pt-40">
            <CartComponent />
            <OrderSummary />
          </div>
        </Container>
      </Background>
    </>
  );
};

export default Cart;
