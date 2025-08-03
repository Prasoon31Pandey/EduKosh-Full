import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Sparkles, 
  TrendingUp, 
  User,
  FileText,
  MessageSquare,
  Target,
  Award,
  Lightbulb,
  BookOpen
} from "lucide-react";

const aiSuggestions = [
  {
    type: "Next Skill",
    icon: TrendingUp,
    title: "Learn Data Visualization",
    description: "Based on your Python progress, data viz would complement your skills perfectly",
    confidence: "95% match",
    action: "Explore Courses",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    type: "Nearby Mentor",
    icon: User,
    title: "Connect with Ravi Kumar",
    description: "Expert in React.js, 2.3km away, available for weekend sessions",
    confidence: "Perfect match",
    action: "Send Message",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    type: "Resume Gap",
    icon: FileText,
    title: "Add Project Management",
    description: "Your profile could benefit from PM skills - high demand in your field",
    confidence: "85% boost",
    action: "Find Classes", 
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    type: "Study Buddy",
    icon: MessageSquare,
    title: "Study Group Available",
    description: "3 people learning UI/UX design in your area - join their study sessions",
    confidence: "Great fit",
    action: "Join Group",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  }
];

const smartFeatures = [
  {
    icon: Target,
    title: "Skill Path Recommendations",
    description: "AI analyzes your learning history and career goals to suggest the optimal next steps."
  },
  {
    icon: User,
    title: "Smart Mentor Matching",
    description: "Get matched with teachers who fit your learning style, schedule, and location."
  },
  {
    icon: Award,
    title: "Resume Enhancement Tips",
    description: "AI identifies skill gaps and suggests specific courses to boost your career profile."
  },
  {
    icon: Lightbulb,
    title: "Personalized Motivation",
    description: "Receive tailored encouragement and study tips based on your focus patterns."
  }
];

const AISuggestionsSection = () => {
  return (
    <section id="ai-suggestions" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Insights</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Personal{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">Learning Assistant</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI analyzes your learning patterns, goals, and local community to provide 
            personalized recommendations that accelerate your growth journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - AI Suggestions */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Smart Recommendations</h3>
            </div>

            {aiSuggestions.map((suggestion, index) => (
              <Card 
                key={suggestion.title}
                className="p-6 bg-gradient-card border-border/50 hover:shadow-grow transition-all group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${suggestion.bgColor} dark:${suggestion.bgColor.replace('50', '900/20')}`}>
                    <suggestion.icon className={`w-6 h-6 ${suggestion.color}`} />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                          {suggestion.type}
                        </div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {suggestion.title}
                        </h4>
                      </div>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {suggestion.confidence}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {suggestion.description}
                    </p>
                    
                    <Button variant="soft" size="sm" className="group-hover:scale-105 transition-transform">
                      {suggestion.action}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right - Smart Features */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">How AI Helps You Learn</h3>
              
              {smartFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Chat Demo */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">AI Learning Assistant</h4>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-muted-foreground">
                    "Hi! I noticed you completed the Python basics course. Would you like me to 
                    suggest your next learning path based on current job market trends?"
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 ml-8">
                  <p className="text-foreground">Yes, that would be helpful!</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-muted-foreground">
                    "Great! Based on your location and interests, I recommend learning Data 
                    Visualization next. There are 3 mentors nearby who can help. Shall I connect you?"
                  </p>
                </div>
              </div>
              
              <Button variant="soft" size="sm" className="mt-4">
                <MessageSquare className="w-4 h-4 mr-2" />
                Start AI Chat
              </Button>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center bg-gradient-card border-border/50">
                <div className="text-2xl font-bold text-foreground">97%</div>
                <div className="text-sm text-muted-foreground">Recommendation Accuracy</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-card border-border/50">
                <div className="text-2xl font-bold text-foreground">2.5x</div>
                <div className="text-sm text-muted-foreground">Faster Skill Discovery</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISuggestionsSection;