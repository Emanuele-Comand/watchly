import Container from "./Container";
import animations from "../data/animations.json";
import { motion } from "framer-motion";
import BrandsBanner from "./BrandsBanner";
import ReviewsCarousel from "./ReviewsCarousel";
import reviews from "../data/reviews.json";

const Reviews = () => {
  return (
    <>
      <Container id="reviews">
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
          <motion.h2
            className="text-4xl font-bold text-white pt-16"
            variants={animations.subtitleVariants}
          >
            Our partners
          </motion.h2>
        </motion.div>
      </Container>
      <BrandsBanner />
      <Container>
        <motion.div
          className="flex-col items-center text-center py-16"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl font-bold text-white pt-16"
            variants={animations.subtitleVariants}
          >
            Our customers say
          </motion.h2>
        </motion.div>
      </Container>
      <div className="ml-[140px]">
        <ReviewsCarousel reviewsData={reviews} />
      </div>
    </>
  );
};

export default Reviews;
