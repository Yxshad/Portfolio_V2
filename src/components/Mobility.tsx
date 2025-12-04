import { Card, CardContent } from "@/components/ui/card";
import { Globe2, MapPin } from "lucide-react";
import bgGif from "../img/background/243a1829582f5f7fc30b0337e2468818.gif";
import preuveImage from "../img/Preuve.png";

const experiences = [
  {
    country: "Canada",
    city: "Chicoutimi",
    duration: "9 weeks",
    year: "2027-2028",
    purpose: "Add a videogame dimension to my studies and discover Canadian culture",
  },
  {
    country: "Brussels Free University",
    city: "Brussels",
    duration: "9 weeks",
    year: "2027-2028",
    purpose: "Professional exchange program",
  },
  {
    country: "DBU Ireland",
    city: "Dublin",
    duration: "9 weeks",
    year: "2027-2028",
    purpose: "Discover the Irish culture and improve my English skills",
  },
];

const Mobility = () => {
  return (
    <section
      id="mobility"
      className="py-20 bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgGif})` }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(132,100,166,0.6)' }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">International Experience</h2>
            <p className="text-lg text-muted-foreground text-white">
              Working and learning across borders
            </p>
          </div>
          
          <div className="flex flex-wrap -mx-4 justify-center">
            {experiences.map((exp, index) => (
              <div key={index} className="w-full md:w-1/2 px-4 mb-6">
                <Card
                  className="h-full overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in"
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
                    
                  </div>
                </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <img
            src={preuveImage}
            alt="Proof of experience"
            className="max-w-2xl w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Mobility;
