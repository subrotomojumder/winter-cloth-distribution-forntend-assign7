import AboutUs from "@/components/home/AboutUs";
import DonationForm from "@/components/home/DonationForm";
import DonorTestimonials from "@/components/home/DonorTestimonials";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";
import HomeWinterClothes from "@/components/home/HomeWinterClothes";
import WinterTips from "@/components/home/WinterTips";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <HomeWinterClothes />
      <DonorTestimonials />
      <Gallery />
      <AboutUs/>
      <DonationForm/>
      <WinterTips/>
    </div>
  );
};

export default Home;
