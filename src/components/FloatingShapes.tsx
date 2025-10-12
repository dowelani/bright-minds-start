import { Star, Heart, Sparkles, BookOpen } from "lucide-react";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Stars */}
      <Star
        className="absolute top-20 left-10 text-yellow animate-float"
        size={32}
        fill="currentColor"
      />
      <Star
        className="absolute top-40 right-20 text-accent animate-bounce-slow"
        size={24}
        fill="currentColor"
        style={{ animationDelay: "0.5s" }}
      />
      <Star
        className="absolute bottom-32 left-1/4 text-secondary animate-pulse-slow"
        size={28}
        fill="currentColor"
        style={{ animationDelay: "1s" }}
      />
      
      {/* Floating Hearts */}
      <Heart
        className="absolute top-60 right-1/4 text-primary animate-float"
        size={28}
        fill="currentColor"
        style={{ animationDelay: "1.5s" }}
      />
      <Heart
        className="absolute bottom-40 right-10 text-accent animate-bounce-slow"
        size={24}
        fill="currentColor"
        style={{ animationDelay: "2s" }}
      />
      
      {/* Floating Sparkles */}
      <Sparkles
        className="absolute top-1/3 left-1/3 text-yellow animate-spin-slow"
        size={32}
      />
      <Sparkles
        className="absolute bottom-20 left-20 text-cyan animate-pulse-slow"
        size={28}
        style={{ animationDelay: "0.7s" }}
      />
      
      {/* Floating Books */}
      <BookOpen
        className="absolute top-1/2 right-10 text-primary animate-float"
        size={36}
        style={{ animationDelay: "0.3s" }}
      />
    </div>
  );
};

export default FloatingShapes;
