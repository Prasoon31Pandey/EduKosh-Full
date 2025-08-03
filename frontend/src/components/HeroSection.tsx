import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-learning.jpg";
import demoVideo from "@/assets/demo.mp4";
import GetStartedButton from '@/components/GetStartedButton';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState('');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleGetStarted = () => navigate("/signup");

  const handleWatchDemo = () => {
    setIsModalOpen(true);
    setTimeout(() => videoRef.current?.play(), 100);
  };

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsModalOpen(false);
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude.toFixed(3)}, Lng: ${longitude.toFixed(3)}`);
      },
      (error) => {
        alert("Unable to detect location. Please allow location access.");
        console.error(error);
      }
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Next-gen learning platform</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Learn. Teach.{" "}
              <span className="text-transparent bg-gradient-primary bg-clip-text">Focus.</span><br />
              <span className="text-transparent bg-gradient-primary bg-clip-text">Grow Together</span> 🌱
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Join the most lovable learning community where skill-sharing meets productivity.
              Learn from peers, teach what you know, stay focused with plant growth timers, and earn karma while growing together.
            </p>

            {/* Location Input + Detect Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-2">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-64"
              />
              <Button onClick={handleDetectLocation} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm rounded-lg shadow-sm">
                Detect Location
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
              
              <Button variant="floating" size="lg" className="group" onClick={handleWatchDemo}>
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Tags */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Free forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>AI-powered notes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Gamified learning</span>
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-grow bg-gradient-card border border-border/50">
              <img src={heroImage} alt="People learning together" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>

            <div className="absolute -top-4 -right-4 bg-card border border-border/50 rounded-xl p-3 shadow-soft animate-pulse-grow">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">Focus mode active</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card border border-border/50 rounded-xl p-3 shadow-soft animate-pulse-grow" style={{ animationDelay: "1s" }}>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">+50 Karma earned today</span>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-4 relative">
            <button className="absolute top-2 right-2 text-black text-xl" onClick={handleCloseModal}>
              ✕
            </button>
            <video width="100%" height="400" controls ref={videoRef} className="rounded-lg">
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
