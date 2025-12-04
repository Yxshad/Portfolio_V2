import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "Chef", "Linux"],
  },
  {
    title: "Soft Skills",
    skills: ["Team Leadership", "Problem Solving", "Communication", "Agile/Scrum", "Mentoring"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(76,29,113)]">Skills & Technologies</h2>
            <p className="text-lg text-black/80">
              Tools and technologies I work with
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-[rgb(76,29,113)]">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-2 px-4 hover:bg-[rgb(132,100,166)] hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
