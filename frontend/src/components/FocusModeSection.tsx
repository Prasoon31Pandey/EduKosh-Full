import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, TrendingUp, Award, Play, Pause, Square, RotateCcw, TreePine, Crown } from "lucide-react";

const plantStages = [
  { time: 15, emoji: "🌱", name: "Seedling", karma: 10 },
  { time: 30, emoji: "🌿", name: "Sprout", karma: 25 },
  { time: 45, emoji: "🪴", name: "Young Plant", karma: 50 },
  { time: 60, emoji: "🌳", name: "Mighty Tree", karma: 100, bonus: "+50 bonus!" }
];

const FocusModeSection = () => {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [treesGrown, setTreesGrown] = useState(3);
  const [karma, setKarma] = useState(1250);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isFocusMode && !isPaused) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isFocusMode, isPaused]);

  const handleStart = () => {
    setIsFocusMode(true);
    setIsPaused(false);
    setSeconds(0);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsFocusMode(false);
    setIsPaused(false);
    setTreesGrown((prev) => prev + 1); // add a tree after stop
    setKarma((prev) => prev + 50); // reward
  };

  const handleReset = () => {
    setIsFocusMode(false);
    setIsPaused(false);
    setSeconds(0);
  };

  const currentStage =
    plantStages.find((stage) => seconds / 60 < stage.time) || plantStages[plantStages.length - 1];

  return (
    <section id="focus-mode" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Section */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Timer className="w-4 h-4" />
              <span>Focus Mode with Plant Evolution</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Watch Your{" "}
              <span className="text-transparent bg-gradient-primary bg-clip-text">
                Garden Grow
              </span>{" "}
              as You Learn
            </h2>

            <p className="text-xl text-muted-foreground">
              Use Focus Mode to grow trees, earn karma, and track your study time.
            </p>

            {!isFocusMode ? (
              <Button onClick={handleStart} variant="hero" size="lg" className="group">
                <Play className="w-5 h-5 mr-2" />
                Start Growing Your Garden
              </Button>
            ) : (
              <div className="flex gap-4">
                {!isPaused ? (
                  <Button onClick={handlePause} className="bg-yellow-500 hover:bg-yellow-600">
                    <Pause className="w-4 h-4 mr-2" /> Pause
                  </Button>
                ) : (
                  <Button onClick={handleResume} className="bg-green-500 hover:bg-green-600">
                    <Play className="w-4 h-4 mr-2" /> Resume
                  </Button>
                )}
                <Button onClick={handleStop} className="bg-red-500 hover:bg-red-600">
                  <Square className="w-4 h-4 mr-2" /> Stop
                </Button>
                <Button onClick={handleReset} className="bg-gray-500 hover:bg-gray-600">
                  <RotateCcw className="w-4 h-4 mr-2" /> Reset
                </Button>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Card className="p-8 bg-gradient-card border-border/50 text-center">
              <div className="flex items-center justify-between mb-6">
                <Timer className="w-6 h-6 text-primary" />
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                  {isFocusMode ? (isPaused ? "Paused" : "Active") : "Not Started"}
                </span>
              </div>
              <div className="space-y-4">
                <div className="text-6xl">{currentStage.emoji}</div>
                <div className="text-3xl font-bold text-foreground">
                  {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, "0")}
                </div>
                <div className="text-muted-foreground">{currentStage.name}</div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-gradient-primary h-3 rounded-full transition-all"
                    style={{ width: `${(seconds / 60) * (100 / 60)}%` }}
                  ></div>
                </div>
                <div className="text-sm text-primary font-medium">+{karma} karma</div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-gradient-card border-border/50 text-center">
                <TrendingUp className="w-5 h-5 text-secondary mx-auto mb-2" />
                <div className="text-xl font-bold text-foreground">4.5h</div>
                <div className="text-sm text-muted-foreground">Today's Focus</div>
              </Card>

              <Card className="p-4 bg-gradient-card border-border/50 text-center">
                <Award className="w-5 h-5 text-accent mx-auto mb-2" />
                <div className="text-xl font-bold text-foreground">12🔥</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </Card>

              <Card className="p-4 bg-gradient-card border-border/50 text-center">
                <TreePine className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold text-foreground">{treesGrown}🌳</div>
                <div className="text-sm text-muted-foreground">Trees Grown</div>
              </Card>

              <Card className="p-4 bg-gradient-card border-border/50 text-center">
                <Crown className="w-5 h-5 text-primary-glow mx-auto mb-2" />
                <div className="text-xl font-bold text-foreground">{karma}</div>
                <div className="text-sm text-muted-foreground">Total Karma</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusModeSection;
