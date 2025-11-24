import { Briefcase } from "lucide-react";

const careerData = [
  {
    year: "2023 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    description: "Developed and maintained multiple client projects, focusing on modern web technologies.",
  },
  {
    year: "2019 - 2021",
    title: "Junior Developer",
    company: "StartUp Ventures",
    description: "Started my professional journey, learning and contributing to various web development projects.",
  },
  {
    year: "2015 - 2019",
    title: "Computer Science Degree",
    company: "University Name",
    description: "Bachelor's degree in Computer Science with focus on software engineering and web technologies.",
  },
];

const Career = () => {
  return (
    <section id="career" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Career Journey</h2>
            <p className="text-lg text-muted-foreground">
              My professional path and educational background
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-12">
              {careerData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <span className="text-sm font-semibold text-primary">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground font-medium mb-2">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
