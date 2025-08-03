import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  GraduationCap,
  User,
  MapPin,
  Clock,
  Star,
  Search,
  Filter,
  ChefHat,
  Code,
  Palette,
  Music,
  Camera,
  Wrench
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const skillCategories = [
  { icon: Code, name: "Programming", count: "1,200+", color: "text-blue-500" },
  { icon: ChefHat, name: "Cooking", count: "850+", color: "text-orange-500" },
  { icon: Palette, name: "Design", count: "630+", color: "text-purple-500" },
  { icon: Music, name: "Music", count: "420+", color: "text-green-500" },
  { icon: Camera, name: "Photography", count: "380+", color: "text-pink-500" },
  { icon: Wrench, name: "DIY & Crafts", count: "290+", color: "text-yellow-600" }
];

export const featuredSkills = [
  {
    title: "Learn Python in 30 Days",
    teacher: "Rahul Verma",
    level: "Beginner",
    karma: 150,
    rating: 4.9,
    students: 324,
    location: "Online",
    image: "👨‍💻"
  },
  {
    title: "Master Tailoring Basics",
    teacher: "Priya Singh",
    level: "Intermediate",
    karma: 200,
    rating: 4.8,
    students: 156,
    location: "Delhi",
    image: "🧵"
  },
  {
    title: "Yoga for Beginners",
    teacher: "Anita Sharma",
    level: "Beginner",
    karma: 100,
    rating: 4.9,
    students: 289,
    location: "Mumbai",
    image: "🧘‍♀️"
  }
];

const SkillMarketplaceSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSkills, setFilteredSkills] = useState(featuredSkills);

  const handleFilter = () => {
    const filtered = featuredSkills.filter(skill =>
      skill.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSkills(filtered);
  };

  return (
    <section id="skill-marketplace" className="pt-24 pb-0 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Skill Marketplace</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Learn Any Skill or{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Teach What You Know
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From coding to cooking, tailoring to yoga - discover practical skills taught by real people
            in your community or teach your expertise to earn karma.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="What do you want to learn or teach today?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-20 py-4 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button
                variant="default"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={handleFilter}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.name}
              className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-grow hover:scale-105 transition-all cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
            >
              <category.icon
                className={`w-8 h-8 mx-auto mb-3 ${category.color} group-hover:scale-110 transition-transform`}
              />
              <h3 className="font-semibold text-foreground mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">{category.count} skills</p>
            </Card>
          ))}
        </div>

        {/* Featured Skills */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground">Trending Skills</h3>
            {/* ✅ View All Button Updated */}
            <Button variant="outline" onClick={() => navigate("/skills")}>
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill, index) => (
              <Card
                key={skill.title}
                className="overflow-hidden bg-gradient-card border-border/50 hover:shadow-grow hover:scale-105 transition-all group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
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
                    <span className="text-sm text-muted-foreground">
                      {skill.teacher}
                    </span>
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

        {/* Final CTA */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 animate-fade-in-up mb-0">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Share Your Knowledge, Earn Karma
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a skill to share? Create your first lesson and start earning karma points
            while helping others grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate("/teach")}>
              Start Teaching
            </Button>
            <Button variant="floating" size="lg" onClick={() => navigate("/skills")}>
              Browse More Skills
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillMarketplaceSection;
