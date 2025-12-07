import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
import bgImage from "../img/background/premium_photo-1668708034279-ab8fa3a9e19b.jpeg";

const inspirations = [
  {
    name: "Jokin Suares",
    job: "Backend Developer",
    technologies: ["Bun", "C#", "React", "NodeJS"],
    description: "Used to be a classmate of mine. We worked on several projects together during our studies and are currently working in the same company.",
    gained: "Extremely good at anything he does in programmation (-except interfaces...), his flawless work inspires me to get better and maybe one day surpass him.",
  },
  {
    name: "Romain Salha",
    job: "Freelance Unity Developer",
    technologies: ["C#", "HTML", "CSS", "React"],
    description: "Met through work opportunities and at an event in my previous formation. We talked a lot there and I asked to interview him for this portfolio.",
    gained: "Through discussions of his opportunity to study in Chicoutimi and his previous work as a dev in Asobo Studio, I was convinced to try and pursue a mobility plan in Canada.",
  },
  {
    name: "Patrick Etcheverry",
    job: "University Lecturer and Researcher",
    technologies: ["Javascript", "HTML", "CSS", "Php", "Linux"],
    description: "Used to teach at my previous formation. I asked for an interview to learn more about his professional experience and research work since it could interest me in the ENSEEIHT.",
    gained: "Conforted me in considering pursuing a doctorate.",
  },
];

const Inspirations = () => {
  return (
    <section
      id="inspirations"
      className="py-20 bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(132,100,166,0.6)' }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Inspirations</h2>
            <p className="text-lg text-white/80">
              A showcase of my personal and professional work and the lessons learned
            </p>
          </div>
          
              <div className="flex flex-wrap -mx-4 justify-center">
                {inspirations.map((inspiration, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                    <Card
                      className="h-full overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in border-border"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                <CardHeader className="bg-white">
                  <CardTitle className="text-xl text-[rgb(76,29,113)]">{inspiration.name}</CardTitle>
                  <CardDescription className="text-black flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {inspiration.job}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-sm text-black">{inspiration.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-[rgb(76,29,113)]">Their favorite technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {inspiration.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <TrendingUp className="h-4 w-4 text-[rgb(76,29,113)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-xs text-black uppercase mb-1">What inspired me</p>
                        <p className="text-black">{inspiration.gained}</p>
                      </div>
                    </div>
                  </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;
