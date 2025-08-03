import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Timer, 
  Users, 
  Trophy, 
  Brain, 
  Sparkles,
  MessageSquare,
  Target
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Smart Learning Paths",
    description: "Discover curated skill roadmaps like 'Python in 30 Days' created by expert learners in our community.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Timer,
    title: "Focus Mode with Plant Growth",
    description: "Stay focused with beautiful timers that grow virtual plants. Leave early and watch them wilt - gamification that works!",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Brain,
    title: "AI-Powered Note Assistant",
    description: "Upload notes in any format. Our AI summarizes, translates, and converts voice to text automatically.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Users,
    title: "Peer-to-Peer Teaching",
    description: "Schedule live classes, share screens, use whiteboards, and learn directly from your peers in real-time.",
    color: "text-primary-glow",
    bgColor: "bg-primary-glow/10"
  },
  {
    icon: Trophy,
    title: "Karma & Achievements",
    description: "Earn karma points for teaching, learning, and staying focused. Climb leaderboards and unlock certificates.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: MessageSquare,
    title: "Smart Community",
    description: "Connect with learners worldwide, share notes, get motivated with daily tips, and grow together.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  }
];

const FeaturesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? features : features.slice(0, 3);

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need to{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">grow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered note-taking to gamified focus sessions, EduKosh combines the best 
            learning tools with a supportive community that keeps you motivated.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-8 bg-gradient-card border-border/50 hover:shadow-grow hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="text-center mt-16 animate-fade-in-up">
            <Button variant="hero" size="lg" className="group" onClick={() => setShowAll(true)}>
              Explore All Features
              <Target className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
