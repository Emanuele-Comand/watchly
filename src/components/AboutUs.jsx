import about from "../data/about.json";
import Container from "./Container";
import React from "react";

const AboutUs = () => {
  return (
    <Container id="about">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold bg-gradient-to-b from-white to-gray-950 text-transparent bg-clip-text">
          ABOUT US
        </h1>
        <div className="relative mt-20">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"></div>
          <div className="relative z-10 grid grid-cols-2 grid-row-3 text-white justify-center items-center gap-16 pt-20 p-10">
            {about.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {index === 1 ? (
                    <>
                      <div>
                        <h2 className="text-2xl font-semibold text-center uppercase pb-10">
                          {item.title}
                        </h2>
                        <p>{item.description}</p>
                      </div>
                      <div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-xl"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
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
