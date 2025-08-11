import { useState } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Hero from "../components/Hero";
import WatchlyNikeFusionCard from "../components/WatchlyNikeFusionCard";
import Features from "../components/Features";
import FeaturesOverlays from "../components/FeaturesOverlays";
import Reviews from "../components/Reviews";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

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
      <div className="flex justify-center px-4 sm:px-6 md:px-8">
        <WatchlyNikeFusionCard />
      </div>
      <Features onCardClick={openOverlay} />
      <FeaturesOverlays activeOverlay={activeOverlay} onClose={closeOverlay} />
      <Reviews />
      <AboutUs />
      <Footer />
    </Background>
  );
};

export default Home;
