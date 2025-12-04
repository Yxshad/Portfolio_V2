import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
import bgImage from "../img/background/premium_photo-1668708034279-ab8fa3a9e19b.jpeg";

const projects = [
  {
    title: "Dataviz Challenge",
    when: "2023",
    where: "Bayonne's Communities",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
    description: "Built a data analysis website during a month in order to study the development of the agriculture in the Pays-Basque.",
    gained: "Gained project management skills and how to analyze data effectively. We also had to create comprehensive visuals for a specific target audience.",
    willDoBetter: "Need to improve the aesthetic of the website + the dynamism of the app.",
  },
  {
    title: "Nuit de l'Info Project 2023",
    when: "2023",
    where: "Institute of Technology of Bayonne",
    technologies: ["Javascript", "HTML", "CSS", "React", "Hack"],
    description: "Created a learning website about the effect of climate change through a games like a visual novel",
    gained: "Helped to gain experience in project management and game development. Also helped to handle stress in a big group and a short time period.",
    willDoBetter: "The project needed more refinement in some part but it was expected since most of the team wasn't familiar with the different technologies.",
  },
  {
    title: "Nuit de l'Info Project 2024",
    when: "2024",
    where: "Institute of Technology of Bayonne",
    technologies: ["Javascript", "HTML", "CSS", "React", "Hack"],
    description: "Developed a learning website about global warming with the twist of comparing bodyparts to the Earth .",
    gained: "Gained knowledge in teamwork, project management and regarding global warming.",
    willDoBetter: "Went worse overall than the previous year due to half of the team not being developpers and external factors.",
  },
  {
    title: "BTS Play",
    when: "2025",
    where: "Audiovisual H&D of Biarritz",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Apache", "Docker", "Apache"],
    description: "Developed a collaborative task management application with team features.",
    gained: "Gained a huge amount of experience in PHP coding, in Docker, in project management, in SQL and so on.",
    willDoBetter: "This project went extremely well overall but the UI could have been slightly improved.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(132,100,166,0.6)' }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-lg text-white/80">
              A showcase of my personal and professional work and the lessons learned
            </p>
          </div>
          
              <div className="flex flex-wrap -mx-4 justify-center">
                {projects.map((project, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                    <Card
                      className="h-full overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in border-border"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                <CardHeader className="bg-white">
                  <CardTitle className="text-xl text-[rgb(76,29,113)]">{project.title}</CardTitle>
                  <CardDescription className="text-black flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.when}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.where}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-sm text-black">{project.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-[rgb(76,29,113)]">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
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
                        <p className="font-semibold text-xs text-black uppercase mb-1">What I Gained</p>
                        <p className="text-black">{project.gained}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <TrendingUp className="h-4 w-4 text-[rgb(76,29,113)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-xs text-black uppercase mb-1">Next Time Better</p>
                        <p className="text-black">{project.willDoBetter}</p>
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

export default Projects;
