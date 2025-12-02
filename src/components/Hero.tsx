import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import elsaImage from "../img/Elsa(ME).jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-subtle relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          
          
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-[rgba(132,100,166,0.30)] text-[rgb(76,29,113)] font-medium text-sm mb-4">
              Welcome to my portfolio
            </span>
          </div>

          <div>
            <img src={elsaImage} alt="Elsa Lavergne" className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[rgb(76,29,113)] to-[rgb(132,100,166)] bg-clip-text text-transparent">
            Elsa Lavergne
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Engineering Student and DevOps Apprentice
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I enjoy coding and creating dynamic react solutions. I also dipped my toe into video game programmation and infrastructure management.
            When I am not coding, I enjoy writing stories and illustrating the various characters in them through digital art.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <span className="px-4 py-2 bg-card rounded-full text-sm shadow-card">🎨 Digital artist</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm shadow-card">🚀 React Enjoyer</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm shadow-card">📚 Writing and Reading Fan</span>
          </div>
          <Button
            size="lg"
            onClick={() => scrollToSection('career')}
            className="group bg-[rgba(132,100,166,0.30)] text-[rgb(76,29,113)]"
          >
            Explore My Journey
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
