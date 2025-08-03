import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download, 
  Share2, 
  Award,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Globe
} from "lucide-react";

const resumeHighlights = [
  { label: "Skills Mastered", value: "8", icon: CheckCircle },
  { label: "Teaching Hours", value: "45", icon: Clock },
  { label: "Students Taught", value: "127", icon: Users },
  { label: "Karma Earned", value: "1,850", icon: Star }
];

const certificates = [
  { name: "Python Programming Expert", issuer: "EduKosh", date: "Dec 2024", verified: true },
  { name: "Focus Master (100hr)", issuer: "EduKosh", date: "Nov 2024", verified: true },
  { name: "Community Contributor", issuer: "EduKosh", date: "Oct 2024", verified: true }
];

const ResumeBuilderSection = () => {
  const resumeRef = useRef();

  const handleGeneratePDF = async () => {
    const canvas = await html2canvas(resumeRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("My_Edukosh_Resume.pdf");
  };

  return (
    <section id="resume-builder" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <FileText className="w-4 h-4" />
              <span>Smart Resume Builder</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Turn Your Learning into{" "}
              <span className="text-transparent bg-gradient-primary bg-clip-text">Career Success</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Automatically generate professional resumes that showcase your EduKosh achievements, 
              verified skills, teaching experience, and community contributions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Auto-generated from your EduKosh profile and achievements</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Verified certificates and skill endorsements</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-muted-foreground">Showcase teaching experience and karma ratings</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                <span className="text-muted-foreground">Professional templates optimized for hiring managers</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Your Resume Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {resumeHighlights.map((highlight) => (
                  <div key={highlight.label} className="flex items-center space-x-3">
                    <highlight.icon className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">{highlight.value}</div>
                      <div className="text-sm text-muted-foreground">{highlight.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <Button onClick={handleGeneratePDF} variant="hero" size="lg" className="group">
                <FileText className="w-5 h-5 mr-2" />
                Generate My Resume
              </Button>
              <Button variant="floating" size="lg">
                <Globe className="w-5 h-5 mr-2" />
                View Public Profile
              </Button>
            </div>
          </div>

          {/* Right - Resume Preview */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }} ref={resumeRef}>
            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-grow transition-all">
              <div className="space-y-6">
                <div className="text-center border-b border-border/50 pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-primary-foreground">
                    👨‍💻
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Arjun Sharma</h3>
                  <p className="text-muted-foreground">Full Stack Developer & Programming Mentor</p>
                  <div className="flex items-center justify-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <span>📧 arjun@email.com</span>
                    <span>📱 +91 98765 43210</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    Verified Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "React.js", "Node.js", "Teaching", "Mentoring"].map((skill) => (
                      <span key={skill} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {skill} ✓
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                    Certificates
                  </h4>
                  <div className="space-y-2">
                    {certificates.map((cert) => (
                      <div key={cert.name} className="flex items-center justify-between text-sm">
                        <div>
                          <div className="font-medium text-foreground">{cert.name}</div>
                          <div className="text-muted-foreground">{cert.issuer} • {cert.date}</div>
                        </div>
                        {cert.verified && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-secondary" />
                    Teaching Experience
                  </h4>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">
                      <strong className="text-foreground">Programming Mentor</strong> on EduKosh
                    </p>
                    <p>• Taught 127 students across Python and Web Development</p>
                    <p>• Maintained 4.9/5 teaching rating with 45+ hours delivered</p>
                    <p>• Earned 1,850 karma points for quality instruction</p>
                  </div>
                </div>
              </div>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="floating" className="group">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="soft" className="group">
                <Share2 className="w-4 h-4 mr-2" />
                Share Link
              </Button>
            </div>
            <Card className="p-6 bg-gradient-hero border-border/50 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Resume Performance</h4>
              <p className="text-sm text-muted-foreground mb-4">
                EduKosh-generated resumes get 3x more interview calls
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-bold text-foreground">150+</div>
                  <div className="text-muted-foreground">Profile Views</div>
                </div>
                <div>
                  <div className="font-bold text-foreground">25</div>
                  <div className="text-muted-foreground">Download Today</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilderSection;
