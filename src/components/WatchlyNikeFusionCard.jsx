import React from "react";
import { motion } from "framer-motion";
import watchImg from "/src/assets/Apple_watch_nike-removebg-preview.png";
import Container from "./Container";

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

const WatchlyNikeFusionCard = () => (
  <motion.div
    initial={{ width: "100vw" }}
    whileInView={{ width: "calc(100vw - 256px)" }}
    transition={{ duration: 3, ease: "easeInOut" }}
    viewport={{ once: true, amount: 0.4 }}
  >
    <motion.div
      initial={{ borderRadius: "0px" }}
      whileInView={{ borderRadius: "25px" }}
      transition={{ duration: 3, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="bg-white rounded- flex flex-col gap-40 md:flex-row items-center py-16 justify-center relative overflow-hidden"
    >
      {/* Colonna sinistra: pattern di pallini */}
      <div className="absolute left-0 top-0 bottom-0 flex items-center rotate-180 pb-[56px]">
        <DotPattern position="left" />
      </div>
      {/* Colonna centrale: immagine */}
      <div className="flex flex-col items-center justify-center z-10">
        <img
          src={watchImg}
          alt="Watchly Nike Fusion"
          className="w-[320px] h-auto object-contain"
        />
      </div>
      {/* Colonna destra: testo e bottoni */}
      <div className="flex flex-col justify-center max-w-md z-10">
        <h2 className="flex items-start text-5xl font-bold mb-2 mt-6">
          Watchly Nike Fusion
        </h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt="Nike Logo"
          className="flex justify-center items-center text-center h-8 mt-8 mb-8"
        />
        <p className="text-center text-lg text-black mb-6">
          Combine Watchly's technological excellence with Nike's sporting
          innovation. Featuring breathable, ultra-lightweight bands, a
          high-visibility always-on display, and the integrated Nike Run Club
          app, the new Watchly Nike Fusion pushes you beyond every limit:
          precise workout tracking, a virtual coach, and weekly challenges to
          outdo yourself. Dynamic design, unbeatable performance. It's time to
          run toward new goals.
        </p>
        <div className="flex gap-4 mb-4 justify-between">
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold text-base hover:bg-white hover:text-black border-2 border-black transition cursor-pointer">
            Buy now
          </button>
          <button className="flex items-center gap-2 border-2 border-black px-6 py-2 rounded-full font-semibold text-base hover:bg-black hover:text-white transition cursor-pointer">
            <span className="text-xl">&#8853;</span> More about
          </button>
        </div>
      </div>
      {/* Colonna destra: pattern di pallini ribaltato */}
      <div className="absolute right-0 top-0 bottom-10 flex items-center">
        <DotPattern />
      </div>
    </motion.div>
  </motion.div>
);

export default WatchlyNikeFusionCard;
