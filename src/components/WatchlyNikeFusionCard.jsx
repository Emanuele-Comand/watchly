import React from "react";
import { motion } from "framer-motion";
import watchImg from "/assets/Apple_watch_nike-removebg-preview.png";
import Container from "./Container";
import { useState } from "react";
import MoreAbout from "./MoreAbout";

const DotPattern = ({ position = "left" }) => {
  const isLeft = position === "left";

  return (
    <svg
      width="80"
      height="360"
      viewBox="0 0 80 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:block"
    >
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => {
          let adjustedCol;
          if (isLeft) {
            if (col === 0) adjustedCol = 3;
            else if (col === 3) adjustedCol = 0;
            else adjustedCol = col;
          } else {
            adjustedCol = col;
          }

          const x = 28 * adjustedCol + 20;
          return (
            <circle
              key={row * 4 + col}
              cx={x}
              cy={40 * row + 40}
              r="12"
              fill="black"
            />
          );
        })
      )}
    </svg>
  );
};

const WatchlyNikeFusionCard = () => {
  const [isMoreAboutOpen, setIsMoreAboutOpen] = useState(false);

  return (
    <motion.div
      initial={{ width: "100vw" }}
      whileInView={{ width: "calc(100vw - 256px)" }}
      transition={{ duration: 3, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="lg:block"
    >
      <motion.div
        initial={{ borderRadius: "0px" }}
        whileInView={{ borderRadius: "25px" }}
        transition={{ duration: 3, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="bg-white rounded- flex flex-col gap-8 sm:gap-16 md:gap-32 lg:gap-40 md:flex-row items-center py-8 sm:py-12 md:py-16 lg:py-16 justify-center relative overflow-hidden mt-8 lg:mt-0 p-4 lg:p-0 w-full lg:w-auto"
      >
        <div className="absolute left-0 top-0 bottom-0 flex items-center rotate-180 pb-[56px]">
          <DotPattern position="left" />
        </div>
        <div className="flex flex-col items-center justify-center z-10 w-full lg:w-auto">
          <img
            src={watchImg}
            alt="Watchly Nike Fusion"
            className="w-48 h-auto sm:w-56 md:w-64 lg:w-[320px] object-contain"
          />
        </div>
        <div className="flex flex-col justify-center max-w-md lg:max-w-md z-10 text-center lg:text-left w-full lg:w-auto">
          <h2 className="flex items-start justify-center lg:justify-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 mt-4 sm:mt-6 lg:mt-6">
            Watchly Nike Fusion
          </h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="flex justify-center lg:justify-start items-center text-center h-6 sm:h-7 md:h-8 lg:h-8 mt-4 sm:mt-6 md:mt-8 lg:mt-8 mb-4 sm:mb-6 md:mb-8 lg:mb-8 mx-auto lg:mx-0"
          />
          <p className="text-center lg:text-center text-sm sm:text-base md:text-lg lg:text-lg text-black mb-4 sm:mb-6 lg:mb-6">
            Combine Watchly's technological excellence with Nike's sporting
            innovation. Featuring breathable, ultra-lightweight bands, a
            high-visibility always-on display, and the integrated Nike Run Club
            app, the new Watchly Nike Fusion pushes you beyond every limit:
            precise workout tracking, a virtual coach, and weekly challenges to
            outdo yourself. Dynamic design, unbeatable performance. It's time to
            run toward new goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-4 mb-4 justify-center lg:justify-between w-full lg:w-auto">
            <button className="bg-black text-white px-4 sm:px-6 lg:px-6 py-2 rounded-full font-semibold text-sm sm:text-base lg:text-base hover:bg-white hover:text-black border-2 border-black transition cursor-pointer">
              Buy now
            </button>
            <button
              onClick={() => setIsMoreAboutOpen(true)}
              className="flex items-center justify-center lg:justify-start gap-2 border-2 border-black px-4 sm:px-6 lg:px-6 py-2 rounded-full font-semibold text-sm sm:text-base lg:text-base hover:bg-black hover:text-white transition cursor-pointer"
            >
              <span className="text-lg sm:text-xl lg:text-xl">&#8853;</span>{" "}
              More about
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-10 flex items-center">
          <DotPattern />
        </div>
      </motion.div>
      {isMoreAboutOpen && <MoreAbout setIsMoreAboutOpen={setIsMoreAboutOpen} />}
    </motion.div>
  );
};

export default WatchlyNikeFusionCard;
