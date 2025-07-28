import { useState } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Hero from "../components/Hero";
import WatchlyNikeFusionCard from "../components/WatchlyNikeFusionCard";
import Features from "../components/Features";
import FeaturesOverlays from "../components/FeaturesOverlays";
import Reviews from "../components/Reviews";

const Home = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  const openOverlay = (overlayId) => {
    setActiveOverlay(overlayId);
  };

  const closeOverlay = () => {
    setActiveOverlay(null);
  };
  return (
    <Background>
      <Navbar />
      <Hero />
      <div className="flex justify-center">
        <WatchlyNikeFusionCard />
      </div>
      <Features onCardClick={openOverlay} />
      <FeaturesOverlays activeOverlay={activeOverlay} onClose={closeOverlay} />
      <Reviews />
    </Background>
  );
};

export default Home;
