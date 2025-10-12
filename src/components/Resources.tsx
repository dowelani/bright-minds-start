import { BookOpen, Brain, Heart, Star, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const articles = [
    {
      icon: BookOpen,
      title: "5 Tricks to Help Your Child Love Reading",
      description: "Simple, proven strategies to make reading time enjoyable and build a lifelong love of books.",
      color: "primary",
    },
    {
      icon: Brain,
      title: "Making Math Fun at Home",
      description: "Everyday activities that naturally build mathematical thinking and confidence.",
      color: "secondary",
    },
    {
      icon: Heart,
      title: "Building Academic Confidence",
      description: "How to support your child's emotional wellbeing while helping them succeed in school.",
      color: "accent",
    },
  ];

  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto relative">
          <Sparkles className="absolute -top-8 left-1/3 text-primary animate-float" size={28} />
          <Star className="absolute -top-4 right-1/3 text-yellow animate-pulse-slow" size={24} fill="currentColor" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Free <span className="bg-gradient-warm bg-clip-text text-transparent">Resources</span> for Parents
          </h2>
          <p className="text-xl text-muted-foreground">
            Helpful tips and strategies you can use at home to support your child's learning
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all border-2 group cursor-pointer hover:-translate-y-2"
              >
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${article.color}-light mb-4 group-hover:animate-bounce-slow transition-transform`}>
                    <Icon className={`text-${article.color}`} size={32} />
                  </div>
                  <Star className="absolute -top-2 -right-2 text-yellow opacity-0 group-hover:opacity-100 transition-opacity" size={20} fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.description}</p>
                <Button variant="link" className="p-0 h-auto group-hover:translate-x-2 transition-transform">
                  Read More →
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-soft rounded-lg p-8 border-2 hover:shadow-medium transition-all relative">
          <Star className="absolute top-4 left-4 text-yellow animate-spin-slow" size={24} fill="currentColor" />
          <Star className="absolute top-4 right-4 text-accent animate-float" size={20} fill="currentColor" />
          <Sparkles className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary animate-pulse-slow" size={28} />
          <h3 className="text-2xl font-bold mb-2">Get Weekly Learning Tips</h3>
          <p className="text-muted-foreground mb-6">
            Join our newsletter for practical advice, activity ideas, and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-input focus:border-primary focus:outline-none transition-colors"
            />
            <Button className="bg-gradient-warm hover:scale-105 active:scale-95 transition-transform">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
