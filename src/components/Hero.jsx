import { motion } from "motion/react";
import videoFile from "../assets/0_Apple_Watch_Smartwatch_3840x2160.mp4";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="block max-h-[720px] mx-auto relative">
        <video
          src={videoFile}
          autoPlay
          muted
          loop
          className="w-full h-screen object-cover"
        />
      </div>

      <motion.div
        className="flex justify-center items-center"
        amount={1}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <img
          src="/src/assets/Watchly_bianco-removebg-preview.png"
          className="w-80 h-80 mt-48"
          alt="Watchly Logo"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
