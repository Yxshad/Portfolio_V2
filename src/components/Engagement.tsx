import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import bgImage from "../img/background/aesthetic-dreamy-background-purple-cloudy-sky-vector-glitter-design_53876-156334.avif"

const engagements = [
  {
    organization: "DnD Community Group",
    role: "Player and Organizer",
    period: "2024-Present",
    description: "Player and organizer of different tabletop RPG Games. Help with organization, management of the group and events.",
    impact: "The club contributes to self-confidence and community support. Helps with oral presentation and improvisation for each member. Also contributes to community support and fights isolation for people with difficulties to socialize",
  },
  {
    organization: "L'Abri",
    role: "Occasional Volunteer",
    period: "2025 - Present",
    description: "Feed and help capture wild cats to neuter them and avoid overpopulation.",
    impact: "Helps control the feral cat population, improving community health and animal welfare. Avoids ecological imbalance caused by overpopulation of feral cats. Prevents road accidents caused by wild cats.",
  },
];

const Engagement = () => {
  return (
    <section id="engagement" className="py-20 bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Community Engagement</h2>
            <p className="text-lg text-muted-foreground">
              Giving back to the community through volunteering and mentorship
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-6">
            {engagements.map((engagement, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elegant transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="bg-card">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        <Heart className="h-5 w-5 text-accent" />
                        {engagement.organization}
                      </CardTitle>
                      <CardDescription className="text-base">
                        <span className="font-semibold text-foreground">{engagement.role}</span>
                        <span className="mx-2">•</span>
                        <span>{engagement.period}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">{engagement.description}</p>
                  <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                    <p className="text-sm font-semibold text-accent mb-1">Impact</p>
                    <p className="text-sm text-foreground">{engagement.impact}</p>
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

export default Engagement;
