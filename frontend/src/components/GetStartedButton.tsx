// components/GetStartedButton.tsx
import { Button } from "@/components/ui/button";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface GetStartedButtonProps {
  label?: string;
  className?: string;
  showArrow?: boolean;
  variant?: "default" | "hero"; // optional variant prop
  size?: "default" | "hero";    // optional size prop
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  label = "Get Started",
  className = "",
  showArrow = false,
  variant = "default",
  size = "default",
}) => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("✅ Logged in as:", user.displayName);
      navigate("/"); // Change this path if needed
    } catch (error) {
      console.error("❌ Google Sign-In Error:", error);
    }
  };

  return (
    <Button
      onClick={handleGoogleLogin}
      variant={variant}
      size={size}
      className={`flex items-center gap-2 ${className}`}
    >
      {label}
      {showArrow && (
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      )}
    </Button>
  );
};

export default GetStartedButton;
<section className="text-center py-16 bg-[#FAFCFB]">
  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
    Ready to start your learning journey?
  </h2>
  <p className="text-gray-600 mb-8 max-w-xl mx-auto">
    Join our community today and discover the joy of learning with focus,
    teaching with purpose, and growing together.
  </p>

  <GetStartedButton
    label="Join EduKosh Free"
    variant="hero"
    size="hero"
    className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-xl group"
    showArrow
  />
</section>
