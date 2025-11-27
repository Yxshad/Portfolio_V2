import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Engagement from "@/components/Engagement";
import Mobility from "@/components/Mobility";
import Contact from "@/components/Contact";
import Speech from "@/components/Speech";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Career />
      <Skills />
      <Projects />
      <Speech/>
      <Engagement />
      <Mobility />
      <Contact />
    </div>
  );
};

export default Index;
