import { useScroll } from "motion/react";
import { useRef, useEffect, useState } from "react";
import videoFile from "../assets/0_Apple_Watch_Smartwatch_3840x2160.mp4";

const Hero = () => {
  const containerRef = useRef(null);
  const [currentWidth, setCurrentWidth] = useState("100vw");
  const [currentMargin, setCurrentMargin] = useState("0px");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Aggiorna i valori quando cambia lo scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Calcola la larghezza da 100vw a 1280px
      const viewportWidth = window.innerWidth;
      const targetWidth = 1280;
      const width = viewportWidth - latest * (viewportWidth - targetWidth);
      const margin = latest === 0 ? "0px" : "auto";

      setCurrentWidth(`${width}px`);
      setCurrentMargin(margin);
    });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className="block max-h-[720px] mx-auto relative"
        style={{
          width: currentWidth,
          marginLeft: currentMargin,
          marginRight: currentMargin,
        }}
      >
        <video
          src={videoFile}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/src/assets/Watchly_bianco-removebg-preview.png"
          className="w-80 h-80"
          alt="Watchly Logo"
        />
      </div>
    </div>
  );
};

export default Hero;
