import FeatureSection from "../Components/Homepage/FeatureSection";
import HeroSection from "../Components/Homepage/HeroSection";
import Navbar from "../Components/Homepage/Navbar";
import CustomerSection from "../Components/Homepage/CustomerSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CustomerSection/>
    </div>
  );
};

export default HomePage;
