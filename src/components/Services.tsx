import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const packages = [
    {
      name: "Homework Support",
      subtitle: "Grades 1-3",
      price: "R250",
      period: "per session",
      description: "Perfect for younger learners who need help with daily homework and foundational skills",
      features: [
        "45-minute sessions",
        "Homework assistance",
        "Reading practice",
        "Basic maths skills",
        "Progress reports",
      ],
      accent: "primary",
    },
    {
      name: "Math Confidence Coaching",
      subtitle: "Grades 4-7",
      price: "R300",
      period: "per session",
      description: "Focused support to build strong mathematical thinking and problem-solving skills",
      features: [
        "60-minute sessions",
        "Curriculum aligned",
        "Problem-solving strategies",
        "Test preparation",
        "Monthly assessments",
      ],
      accent: "secondary",
      featured: true,
    },
    {
      name: "Group Tutoring",
      subtitle: "Max 3 learners",
      price: "R200",
      period: "per student",
      description: "Fun, interactive learning with peers while receiving personalized attention",
      features: [
        "60-minute sessions",
        "Small group dynamics",
        "Collaborative learning",
        "All subjects covered",
        "Flexible scheduling",
      ],
      accent: "accent",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Clear, Transparent <span className="bg-gradient-warm bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the package that works best for your child. All sessions include progress tracking and parent communication.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative p-8 hover:shadow-large transition-all ${
                pkg.featured ? "border-secondary border-2 shadow-medium" : "border-2"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-warm text-secondary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-soft">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.subtitle}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">{pkg.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${pkg.accent}-light flex items-center justify-center mr-3 mt-0.5`}>
                      <Check className={`text-${pkg.accent}`} size={14} />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full ${pkg.featured ? "bg-gradient-warm" : ""}`}
                variant={pkg.featured ? "default" : "outline"}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 text-muted-foreground">
          <p>All packages include a free initial assessment • Flexible payment options available</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
