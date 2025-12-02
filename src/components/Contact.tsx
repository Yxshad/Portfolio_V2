import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Wish to contact me?</h2>
          <p className="text-lg mb-12 text-primary-foreground/90">
            I'm always open to discussing new collaborations or just having a chat about tech!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-block p-4 rounded-full bg-primary-foreground/10">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:e.lavergne@outlook.com" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center justify-center gap-1"
                >
                  e.lavergne@outlook.com
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-block p-4 rounded-full bg-primary-foreground/10">
                  <Linkedin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/elsa-lavergne-a98826263/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center justify-center gap-1"
                >
                  Elsa Lavergne
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-block p-4 rounded-full bg-primary-foreground/10">
                  <Github className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">GitHub</h3>
                <a 
                  href="https://github.com/Yxshad" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center justify-center gap-1"
                >
                  @Yxshad
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          </div>
          
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.location.href = 'mailto:e.lavergne@outlook.com'}
            className="group"
          >
            Get In Touch
            <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-20">
        <div className="text-center text-sm text-primary-foreground/70">
          <p>© 2025 Elsa Lavergne - It was definitely built </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
