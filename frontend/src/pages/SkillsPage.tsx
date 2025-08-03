import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, User, MapPin, Clock } from "lucide-react";
import { featuredSkills } from "../components/SkillMarketplaceSection";

const SkillsPage = () => {
  const handleSkillClick = (title: string) => {
    alert(`You selected: ${title}`);
  };

  return (
    <section className="pt-24 pb-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-10 text-center">
          All Trending Skills
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSkills.map((skill, index) => (
            <Card
              key={skill.title}
              className="overflow-hidden bg-gradient-card border-border/50 hover:shadow-grow hover:scale-105 transition-all group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleSkillClick(skill.title)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{skill.image}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{skill.rating}</span>
                  </div>
                </div>
                <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h4>
                <div className="flex items-center space-x-2 mb-3">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{skill.teacher}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{skill.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{skill.level}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">
                      {skill.students} learners
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {skill.karma} karma
                    </span>
                  </div>
                  <Button variant="soft" size="sm">Learn</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
