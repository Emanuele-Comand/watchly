import { motion } from "motion/react";
import animations from "../data/animations";
import about from "../data/about.json";

import Container from "./Container";
const AboutUs = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center w-full">
        <motion.h1
          className="text-5xl font-bold bg-gradient-to-b from-white to-gray-950 text-transparent bg-clip-text"
          variants={animations.titleVariants}
        >
          ABOUT US
        </motion.h1>
        <div className="relative mt-20">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl"></div>
          <div className="relative z-10 grid grid-cols-2 grid-row-3 text-white justify-center items-center gap-16 pt-20 p-10">
            {about.map((item, index) => {
              return (
                <>
                  {index === 1 ? (
                    <>
                      <div>
                        <h2 className="text-2xl font-semibold text-center uppercase pb-10">
                          {item.title}
                        </h2>
                        <p>{item.description}</p>
                      </div>
                      <div key={index}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-xl"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div key={index}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-center uppercase pb-10">
                          {item.title}
                        </h2>
                        <p>{item.description}</p>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
