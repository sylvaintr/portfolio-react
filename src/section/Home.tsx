import AboutSection from "./home/AboutSection";
import CVSection from "./home/CVSection";
import HeroSection from "./home/HeroSection";
import ProjetSection from "./home/ProjetSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjetSection />
      <CVSection />
    </>
  );
}
