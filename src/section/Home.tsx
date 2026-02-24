import AboutSection from "./home/AboutSection";
import CVSection from "./home/CVSection";
import HeroSection from "./home/HeroSection";
import ProjetSection from "./home/ProjetSection";
import ExperienceSection from "./home/ExperienceSection";
import SkillsSection from "./home/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjetSection />
      <ExperienceSection />
      <CVSection />
    </>
  );
}
