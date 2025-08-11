import brands from "../data/brands.json";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const BrandsBanner = () => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const calculateWidth = () => {
      if (contentRef.current) {
        // Calcola la larghezza di una singola copia includendo il gap
        const totalWidth = contentRef.current.scrollWidth;
        const singleCopyWidth = totalWidth / 2;
        setContentWidth(singleCopyWidth);
      }
    };

    const images = contentRef.current?.querySelectorAll("img");
    if (images && images.length > 0) {
      Promise.all(
        Array.from(images).map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      ).then(calculateWidth);
    } else {
      calculateWidth();
    }
  }, []);

  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 overflow-hidden">
      <motion.div
        ref={contentRef}
        className="flex gap-8 sm:gap-12 md:gap-16 items-center"
        animate={
          contentWidth > 0
            ? {
                x: [0, -contentWidth - 32],
              }
            : {}
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {brands.map((brand, index) => (
          <img
            src={brand.src}
            alt={brand.alt}
            key={`first-${index}`}
            className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto"
          />
        ))}

        {brands.map((brand, index) => (
          <img
            key={`second-${index}`}
            src={brand.src}
            alt={brand.alt}
            className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsBanner;
