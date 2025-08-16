import { motion } from "motion/react";
import videoFile from "/assets/0_Apple_Watch_Smartwatch_3840x2160.mp4";

const Hero = () => {
  return (
    <div className="relative w-full" id="hero">
      {/* Video solo per desktop */}
      <div className="hidden lg:block max-h-[720px] mx-auto relative">
        <video
          src={videoFile}
          autoPlay
          muted
          loop
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Immagine statica per mobile e tablet */}
      <div className="lg:hidden w-full h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 md:px-8">
          <img
            src="/assets/Watchly_bianco-removebg-preview.png"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 md:mb-8"
            alt="Watchly Logo"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Welcome to Watchly
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            Discover the future of smartwatches
          </p>
        </div>
      </div>

      {/* Logo overlay per desktop */}
      <motion.div
        className="hidden lg:flex justify-center items-center"
        amount={1}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <img
          src="/assets/Watchly_bianco-removebg-preview.png"
          className="w-80 h-80 mt-48"
          alt="Watchly Logo"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
