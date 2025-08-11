import about from "../data/about.json";
import Container from "./Container";
import React from "react";

const AboutUs = () => {
  return (
    <Container id="about">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-gray-950 text-transparent bg-clip-text text-center">
          ABOUT US
        </h1>
        <div className="relative mt-10 sm:mt-16 md:mt-20">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 text-white justify-center items-center gap-8 sm:gap-12 md:gap-16 pt-10 sm:pt-16 md:pt-20 p-4 sm:p-6 md:p-10">
            {about.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {index === 1 ? (
                    <>
                      <div className="order-2 lg:order-1">
                        <h2 className="text-xl sm:text-2xl font-semibold text-center uppercase pb-4 sm:pb-6 md:pb-10">
                          {item.title}
                        </h2>
                        <p className="text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                      <div className="order-1 lg:order-2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-xl w-full h-auto"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-xl w-full h-auto"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-center uppercase pb-4 sm:pb-6 md:pb-10">
                          {item.title}
                        </h2>
                        <p className="text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
