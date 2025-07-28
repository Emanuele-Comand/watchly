import Container from "./Container";
import animations from "../data/animations.json";
import { motion } from "framer-motion";
import BrandsBanner from "./BrandsBanner";

const Reviews = () => {
  return (
    <>
      <Container>
        <motion.div
          className="flex-col items-center text-center py-16"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-5xl font-bold bg-gradient-to-b from-white to-gray-950 text-transparent bg-clip-text"
            variants={animations.titleVariants}
          >
            WHAT THEY SAY ABOUT WATCHLY
          </motion.h1>
          <motion.h2 className="text-4xl font-bold text-white pt-16">
            Our partners
          </motion.h2>
        </motion.div>
      </Container>
      <BrandsBanner />
    </>
  );
};

export default Reviews;
