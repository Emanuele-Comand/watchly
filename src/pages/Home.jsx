import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Hero from "../components/Hero";
import WatchlyNikeFusionCard from "../components/WatchlyNikeFusionCard";
import Features from "../components/Features";

const Home = () => {
  return (
    <Background>
      <Navbar />
      <Hero />
      <div className="flex justify-center">
        <WatchlyNikeFusionCard />
      </div>
      <Features />
    </Background>
  );
};

export default Home;
