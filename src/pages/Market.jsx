import Background from "../components/Background";
import { motion } from "framer-motion";
import animations from "../data/animations.json";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import MarketNikeCard from "../components/MarketNikeCard";
import MarketCard from "../components/MarketCard";
import Footer from "../components/Footer";
import SwipeIcons from "../components/SwipeIcons";

const Market = () => {
  return (
    <>
      <Background>
        <Navbar />
        <Container>
          <div className="flex flex-col items-center justify-center pt-20 sm:pt-24 md:pt-32 px-4">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-gray-950 text-transparent bg-clip-text uppercase text-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Purchase your Watchly
            </motion.h1>
            <motion.div
              variants={animations.subtitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mt-2 sm:mt-4">
                You can buy max 20 items at a time
              </p>
            </motion.div>
          </div>
          <MarketNikeCard />
          <motion.div
            variants={animations.subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mt-8 sm:mt-12 md:mt-16 px-4">
              Swipe to choose your Watchly color
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center mt-2 sm:mt-4"
            variants={animations.dragIconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SwipeIcons className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30" />
          </motion.div>
          <MarketCard />
        </Container>
        <Footer />
      </Background>
    </>
  );
};

export default Market;
