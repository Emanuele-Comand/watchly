import BuyBtn from "./BuyBtn";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FirstGLTF from "./FirstGLTF";
import SecondGLTF from "./SecondGLTF";
import DragDropIcon from "./DragDropIcon";
import { motion } from "framer-motion";

const Features = () => {
  // Varianti di animazione per gli elementi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const priceVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -90,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        delay: 0.6,
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  const dragIconVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotate: 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.0,
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex-col items-center text-center py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-6xl font-bold bg-gradient-to-b from-white to-gray-950 text-transparent bg-clip-text"
          variants={titleVariants}
        >
          THIN AND POWERFUL
        </motion.h1>
        <motion.p
          className="text-2xl  text-white font-semibold py-8"
          variants={priceVariants}
        >
          From $299 or $33.25 per month
        </motion.p>
        <motion.div variants={buttonVariants}>
          <BuyBtn />
        </motion.div>
        <motion.p
          className="text-white font-light italic text-lg py-8"
          variants={subtitleVariants}
        >
          Grab the models take a look to Watchly
        </motion.p>
        <motion.div
          className="flex justify-center items-center"
          variants={dragIconVariants}
        >
          <DragDropIcon className="w-30 h-30" />
        </motion.div>
        <div className="grid grid-cols-2 w-full pt-16">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{ height: "400px", paddingLeft: "128px", cursor: "grab" }}
          >
            <OrbitControls
              enablePan={true}
              enableZoom={false}
              enableRotate={true}
            />
            <FirstGLTF />
          </Canvas>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{ height: "400px", cursor: "grab" }}
          >
            <OrbitControls
              enablePan={true}
              enableZoom={false}
              enableRotate={true}
            />
            <SecondGLTF />
          </Canvas>
        </div>
      </motion.div>
    </>
  );
};

export default Features;
