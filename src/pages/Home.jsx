import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Hero from "../components/Hero";
import WatchlyNikeFusionCard from "../components/WatchlyNikeFusionCard";

const Home = () => {
  return (
    <Background>
      <Navbar />
      <Hero />
      <WatchlyNikeFusionCard />
    </Background>
  );
};

export default Home;
