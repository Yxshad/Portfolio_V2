import { Briefcase } from "lucide-react";

const videoData = [
  {
    link: "https://www.youtube.com/embed/JBjIRBz8YaY",
    title: "Digital Science Student and DevOps Apprentice",
    description: "An elevator speech quickly presenting who I am, what I do, what I used to do and aspire to become, who inspired me on this path...",
  }
];

const Speech = () => {
  return (
    <section id="speech" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Elevator Speech</h2>
            <p className="text-lg text-muted-foreground">
              A quick elevator speech type video
            </p>
          </div>
          
          <div className="relative">

            {/* INSERTION VIDEO ET DESCRIPTION*/}

          <div className="space-y-12 relative">
              {videoData.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Content */}
                  <div className="w-full mt-8">
                    <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
                      <div className="flex justify-center mb-4">
                        <div className="w-full aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={item.link}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Speech;
