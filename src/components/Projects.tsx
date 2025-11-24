import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    when: "2023",
    where: "Tech Innovations Inc.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    description: "Built a full-featured e-commerce platform with real-time inventory management.",
    gained: "Learned about payment integration, complex state management, and scalable architecture.",
    willDoBetter: "Implement more comprehensive testing and improve mobile performance.",
  },
  {
    title: "Social Media Dashboard",
    when: "2022",
    where: "Digital Solutions Co.",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    description: "Created a real-time analytics dashboard for social media management.",
    gained: "Mastered real-time data handling and learned advanced data visualization techniques.",
    willDoBetter: "Add more granular user permissions and optimize data caching strategies.",
  },
  {
    title: "Task Management App",
    when: "2021",
    where: "Personal Project",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    description: "Developed a collaborative task management application with team features.",
    gained: "Gained experience with Firebase and real-time collaboration features.",
    willDoBetter: "Enhance offline functionality and add more integration options.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my work and the lessons learned
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="bg-gradient-primary text-primary-foreground">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-primary-foreground/90 flex items-center gap-4 mt-2">
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
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
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
                      <TrendingUp className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-xs text-muted-foreground uppercase mb-1">What I Gained</p>
                        <p className="text-foreground">{project.gained}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <TrendingUp className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-xs text-muted-foreground uppercase mb-1">Next Time Better</p>
                        <p className="text-foreground">{project.willDoBetter}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
