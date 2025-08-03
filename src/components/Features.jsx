import BuyBtn from "./BuyBtn";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FirstGLTF from "./FirstGLTF";
import DragDropIcon from "./DragDropIcon";
import { motion } from "framer-motion";
import FeaturesCarousel from "./FeaturesCarousel";
import featuresData from "../data/featuresCards.json";
import animations from "../data/animations.json";
import Container from "./Container";

const Features = ({ onCardClick }) => {
  return (
    <>
      <Container>
        <motion.div
          className="flex-col items-center text-center py-16"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-5xl font-bold bg-gradient-to-b from-white to-gray-950 text-transparent bg-clip-text"
            variants={animations.titleVariants}
          >
            THIN AND POWERFUL
          </motion.h1>
          <motion.p
            className="text-2xl  text-white font-semibold py-8"
            variants={animations.priceVariants}
          >
            From $299 or $33.25 per month
          </motion.p>
          <motion.div variants={animations.buttonVariants}>
            <BuyBtn />
          </motion.div>
          <motion.p
            className="text-white font-light italic text-lg py-8"
            variants={animations.subtitleVariants}
          >
            Grab the Whatcly model take a look
          </motion.p>
          <motion.div
            className="flex justify-center items-center"
            variants={animations.dragIconVariants}
          >
            <DragDropIcon className="w-30 h-30" />
          </motion.div>
          <div className="w-full pt-16 grid grid-cols-3 justify-items-center items-center">
            <div className="text-white pt-20">
              <p className="text-6xl font-bold uppercase">Super thin</p>
            </div>
            <Canvas
              camera={{ position: [0, 0, 5], fov: 70 }}
              style={{ height: "400px", cursor: "grab" }}
            >
              <OrbitControls
                enablePan={true}
                enableZoom={false}
                enableRotate={true}
              />
              <FirstGLTF />
            </Canvas>
            <div className="text-white pt-20">
              <p className="text-6xl font-bold uppercase">Quality materials</p>
            </div>
          </div>
          <motion.h1
            className="text-5xl font-bold bg-gradient-to-b from-white to-gray-600 text-transparent bg-clip-text text-center pt-16"
            variants={animations.titleVariants}
          >
            DISCOVER WATCHLY
          </motion.h1>
        </motion.div>
      </Container>
      <div className="ml-[140px]">
        <FeaturesCarousel
          featuresData={featuresData}
          onCardClick={onCardClick}
        />
      </div>
    </>
  );
};

export default Features;
