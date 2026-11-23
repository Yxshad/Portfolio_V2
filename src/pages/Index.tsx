import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CEP from "@/components/CEP";
import Engagement from "@/components/Engagement";
import Contact from "@/components/Contact";
import Inspirations from "@/components/Inspirations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Career />
      <Skills />
      <Projects />
      <CEP />
      <Engagement />
      <Inspirations />
      <Contact />
    </div>
  );
};

export default Index;
