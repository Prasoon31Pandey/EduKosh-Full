import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";
import { useEffect, useState } from "react";
import { signOutUser, onAuthStateChangedCustom } from "@/lib/auth";
import { User } from "firebase/auth";
import GetStartedButton from "@/components/GetStartedButton"; // ✅ Corrected

const Navigation = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedCustom(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Sprout className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">EduKosh</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#focus-mode" className="text-muted-foreground hover:text-primary transition-colors">
              Focus Mode
            </a>
            <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <img src={user.photoURL || ""} alt="User" className="w-8 h-8 rounded-full" />
                <Button variant="ghost" size="sm" onClick={signOutUser}>
                  Sign Out
                </Button>
              </>
            ) : (
              <GetStartedButton label="Sign In with Google" className="text-sm" />
            )}

            <GetStartedButton label="Get Started" className="text-sm" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
