import Background from "../components/Background";
import { motion } from "framer-motion";
import animations from "../data/animations.json";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import MarketNikeCard from "../components/MarketNikeCard";
import MarketCard from "../components/MarketCard";
import Footer from "../components/Footer";

const Market = () => {
  return (
    <>
      <Background>
        <Navbar />
        <Container>
          <div className="flex flex-col items-center justify-center pt-32">
            <motion.h1
              className="text-5xl font-bold bg-gradient-to-b from-white to-gray-950 text-transparent bg-clip-text uppercase"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Purchase your Watchly
            </motion.h1>
          </div>
          <MarketNikeCard />
          <MarketCard />
        </Container>
        <Footer />
      </Background>
    </>
  );
};

export default Market;
