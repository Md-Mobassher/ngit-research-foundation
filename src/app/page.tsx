import Intro from "./home/Intro";
import Governance from "./home/Governance";
import BannerSection from "./home/BannerSection";
import "swiper/css";

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <BannerSection />
      <Intro />
      <Governance />
    </div>
  );
};

export default HomePage;
