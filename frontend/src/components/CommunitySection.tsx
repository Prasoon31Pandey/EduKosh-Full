import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Star, MessageCircle, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 Add this at the top
const testimonials = [
  {
    name: "Priya Sharma",
    role: "CS Student",
    content: "The plant growth timer is genius! I've never been this motivated to stay focused during study sessions.",
    rating: 5,
    streak: "21 days"
  },
  {
    name: "Alex Chen",
    role: "Python Teacher",
    content: "Teaching on EduKosh feels natural. The whiteboard tools and karma system make every session engaging.",
    rating: 5,
    streak: "45 days"
  },
  {
    name: "Sarah Johnson",
    role: "Data Science Learner",
    content: "The AI note assistant saved me hours. It summarizes my lecture recordings perfectly and translates everything.",
    rating: 5,
    streak: "12 days"
  }
];

const stats = [
  { label: "Active Learners", value: "25,000+", icon: Users },
  { label: "Skills Taught", value: "500+", icon: Star },
  { label: "Focus Hours", value: "1M+", icon: Zap },
  { label: "Notes Shared", value: "50,000+", icon: MessageCircle }
];

const CommunitySection = () => {
const navigate = useNavigate();
  return (
    <section id="community" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Growing Community</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Join thousands of{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">learners</span>{" "}
            worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a supportive community where everyone grows together through shared knowledge, 
            focus sessions, and meaningful connections.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-grow hover:scale-105 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-6 bg-gradient-card border-border/50 hover:shadow-grow transition-all"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {testimonial.streak} streak
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* CTA */}
<div className="text-center animate-fade-in-up">
  <h3 className="text-2xl font-bold text-foreground mb-4">
    Ready to start your learning journey?
  </h3>
  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
    Join our community today and discover the joy of learning with focus, 
    teaching with purpose, and growing together.
  </p>
  <Button
    variant="hero"
    size="hero"
    className="group"
    onClick={() => navigate("/signup")} // 👈 This enables navigation
  >
    Join EduKosh Free
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Button>
</div>
      </div>
    </section>
  );
};

export default CommunitySection;