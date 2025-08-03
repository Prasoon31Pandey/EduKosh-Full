import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeachPage from "./pages/TeachPage";
import SkillsPage from "./pages/SkillsPage";
import CategoryPage from "./pages/CategoryPage";
import PublicProfile from "./pages/PublicProfile";
import Signup from "./pages/SignupPage"; // ✅ Added this line

const queryClient = new QueryClient();

const App = () => (
  <GoogleOAuthProvider clientId="your-client-id">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/teach" element={<TeachPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/public-profile" element={<PublicProfile />} />
          <Route path="/signup" element={<Signup />} /> {/* ✅ Added Signup route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);

export default App;
