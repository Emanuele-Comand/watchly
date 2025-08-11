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
        className="bg-white rounded-lg max-w-6xl max-h-[80vh] relative overflow-y-scroll scrollbar-hide p-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-4 right-4 text-2xl cursor-pointer hover:text-gray-600"
          onClick={() => setIsMoreAboutOpen(false)}
          variants={animations.buttonVariants}
        >
          <FontAwesomeIcon icon={faCircleXmark} className="fa-2x" />
        </motion.div>

        <motion.p
          className=""
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          New nike straps
        </motion.p>

        <motion.h2
          className="text-4xl font-bold mt-4"
          variants={animations.titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Show your style with the new nike straps
        </motion.h2>

        <motion.div
          className="bg-gray-200 rounded-xl mt-16"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/assets/straps.webp" alt="nike straps" />
        </motion.div>

        <motion.p
          className="text-lg pt-4 font-semibold"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Customize your Wathcly by choosing your straps colors
        </motion.p>

        <motion.p
          className="mt-36"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Unique display features
        </motion.p>

        <motion.div
          className="mt-4 text-4xl font-bold"
          variants={animations.titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Nike branding
        </motion.div>

        <motion.div
          className="flex justify-center items-center bg-gray-200 p-8 rounded-xl mt-16"
          variants={animations.subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/assets/unique.avif"
            alt="nike display features"
            className="h-[900px] w-auto object-cover"
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
