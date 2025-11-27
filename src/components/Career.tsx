import { Briefcase } from "lucide-react";

const careerData = [
  {
    year: "2025 - Present",
    title: "Digital Science Student and DevOps Apprentice",
    company: "ENSEEIHT",
    description: "I study digital science and computer networks in the ENSEEIHT engineering school. I also have an apprenticeship into the company AG-CARTO.",
  },
  {
    year: "2022-2025",
    title: "",
    company: "Institute of Technology of Bayonne",
    description: "Developed and maintained multiple client projects, focusing on modern web technologies.",
  },
  {
    year: "2019 - 2022",
    title: "High School Student",
    company: "'Sud des Landes' Advanced high school",
    description: "High School Diploma with distinction - Specialized in Mathematics and Numerical science - I took Advanced mathematics and European English as additional courses",
  }
];

const Career = () => {
  return (
    <section id="career" className="py-20 bg-[rgb(132,100,166)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Career Journey</h2>
            <p className="text-lg text-white/80">
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
                        <Briefcase className="h-5 w-5 text-black" />
                        <span className="text-sm font-semibold text-black">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-[rgb(76,29,113)]">{item.title}</h3>
                      <p className="text-black font-medium mb-2">{item.company}</p>
                      <p className="text-sm text-black">{item.description}</p>
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
