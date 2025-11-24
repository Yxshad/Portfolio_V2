import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Passionate about building elegant solutions to complex problems. 
            When I'm not coding, you'll find me exploring new technologies, 
            contributing to open-source projects, and enjoying outdoor adventures.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <span className="px-4 py-2 bg-card rounded-full text-sm shadow-card">🎨 Design Enthusiast</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm shadow-card">🚀 Tech Explorer</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm shadow-card">📚 Lifelong Learner</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm shadow-card">🌍 Travel Lover</span>
          </div>
          <Button
            size="lg"
            onClick={() => scrollToSection('career')}
            className="group"
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
