import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import animations from "../data/animations.json";

const MoreAbout = ({ setIsMoreAboutOpen }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-lg max-w-6xl max-h-[80vh] relative overflow-y-scroll scrollbar-hide p-4 sm:p-8 md:p-12 lg:p-16 mx-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-xl sm:text-2xl cursor-pointer hover:text-gray-600 z-10"
          onClick={() => setIsMoreAboutOpen(false)}
          variants={animations.buttonVariants}
        >
          <FontAwesomeIcon icon={faCircleXmark} className="fa-lg sm:fa-2x" />
        </motion.div>

        <motion.p
          className="text-sm sm:text-base"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          New nike straps
        </motion.p>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-4"
          variants={animations.titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Show your style with the new nike straps
        </motion.h2>

        <motion.div
          className="bg-gray-200 rounded-xl mt-8 sm:mt-12 md:mt-16"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/assets/straps.webp"
            alt="nike straps"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.p
          className="text-base sm:text-lg pt-2 sm:pt-4 font-semibold"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Customize your Wathcly by choosing your straps colors
        </motion.p>

        <motion.p
          className="mt-16 sm:mt-24 md:mt-36 text-sm sm:text-base"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Unique display features
        </motion.p>

        <motion.div
          className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold"
          variants={animations.titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Nike branding
        </motion.div>

        <motion.div
          className="flex justify-center items-center bg-gray-200 p-4 sm:p-6 md:p-8 rounded-xl mt-8 sm:mt-12 md:mt-16"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/assets/unique.avif"
            alt="nike display features"
            className="h-auto max-h-[400px] sm:max-h-[600px] md:max-h-[800px] lg:h-[900px] w-auto object-cover"
          />
        </motion.div>

        <motion.p
          className="text-lg pt-4 font-semibold"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Watchly Nike Fusion comes with unique display features all branded
          with Nike
        </motion.p>

        <motion.p
          className="mt-36"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Your health is a priority
        </motion.p>

        <motion.div
          className="mt-4 text-4xl font-bold"
          variants={animations.titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Fit for your fitness lifestyle
        </motion.div>

        <motion.div
          className="bg-gray-200 p-8 rounded-xl mt-16"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/assets/fit.jpg" alt="fitness image with watchly" />
        </motion.div>

        <motion.p
          className="text-lg pt-4 font-semibold"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Watchly Nike Fusion is designed to fit your fitness lifestyle, with
          features that help you track your progress and stay motivated.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default MoreAbout;
