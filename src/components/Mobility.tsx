import { Card, CardContent } from "@/components/ui/card";
import { Globe2, MapPin } from "lucide-react";

const experiences = [
  {
    country: "United States",
    city: "San Francisco",
    duration: "6 months",
    year: "2023",
    purpose: "Tech conference and collaborative project with US-based team",
    highlights: "Worked with diverse international team, learned about Silicon Valley startup culture",
  },
  {
    country: "Germany",
    city: "Berlin",
    duration: "3 months",
    year: "2022",
    purpose: "Professional exchange program",
    highlights: "Experienced European tech scene, improved German language skills, worked on IoT projects",
  },
  {
    country: "Japan",
    city: "Tokyo",
    duration: "2 months",
    year: "2021",
    purpose: "International internship",
    highlights: "Learned about Japanese work culture, contributed to mobile app development",
  },
  {
    country: "United Kingdom",
    city: "London",
    duration: "1 month",
    year: "2020",
    purpose: "Training program",
    highlights: "Advanced training in cloud architecture and DevOps practices",
  },
];

const Mobility = () => {
  return (
    <section id="mobility" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">International Experience</h2>
            <p className="text-lg text-muted-foreground">
              Working and learning across borders
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Globe2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.country}</h3>
                      <p className="text-muted-foreground flex items-center gap-1 text-sm">
                        <MapPin className="h-3 w-3" />
                        {exp.city}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary">{exp.year}</p>
                      <p className="text-xs text-muted-foreground">{exp.duration}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Purpose</p>
                      <p className="text-sm text-foreground">{exp.purpose}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Highlights</p>
                      <p className="text-sm text-foreground">{exp.highlights}</p>
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

export default Mobility;
