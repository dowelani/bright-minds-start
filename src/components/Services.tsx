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
      name: "Reading Comprehension Booster",
      subtitle: "Grades 1-4",
      price: "R1,200",
      period: "per month",
      description: "Build strong reading foundations with 2 sessions per week focused on comprehension and fluency",
      features: [
        "2x weekly sessions",
        "Reading fluency practice",
        "Comprehension strategies",
        "Vocabulary building",
        "Progress tracking",
        "Parent communication",
      ],
      accent: "primary",
    },
    {
      name: "Math Confidence Building",
      subtitle: "Grades 4-7",
      price: "R1,200",
      period: "per month",
      description: "Develop mathematical thinking and problem-solving skills with personalized attention",
      features: [
        "2x weekly sessions",
        "Problem-solving techniques",
        "Curriculum aligned",
        "Concept mastery focus",
        "Test preparation",
        "Monthly assessments",
      ],
      accent: "accent",
      featured: true,
    },
    {
      name: "Homework Mastery Program",
      subtitle: "All Grades",
      price: "R2,200",
      period: "per month",
      description: "Complete homework support for busy parents, ensuring your child stays on track",
      features: [
        "Daily homework assistance",
        "All subjects covered",
        "Study skills development",
        "Time management training",
        "Flexible scheduling",
        "Weekly progress reports",
      ],
      accent: "secondary",
    },
  ];

  const additionalServices = [
    {
      name: "Group Tutoring",
      price: "R900",
      period: "per month per student",
      description: "Small groups of 2-3 learners for collaborative learning",
      accent: "yellow",
    },
    {
      name: "Test Prep Crash Course",
      price: "From R800",
      period: "per course",
      description: "Intensive preparation for upcoming tests and exams",
      accent: "accent",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Programs & <span className="bg-gradient-hero bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparent pricing for specialized tutoring programs designed to build strong foundations
          </p>
        </div>

        {/* Main Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative p-8 hover:shadow-large transition-all ${
                pkg.featured ? "border-accent border-2 shadow-medium" : "border-2"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-fun text-secondary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-soft">
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
                className={`w-full ${pkg.featured ? "bg-gradient-fun" : ""}`}
                variant={pkg.featured ? "default" : "outline"}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Additional Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className={`p-6 border-2 bg-${service.accent}-light/30 hover:shadow-medium transition-all`}>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold">{service.name}</h4>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{service.price}</div>
                    <div className="text-xs text-muted-foreground">{service.period}</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button onClick={scrollToContact} variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 text-muted-foreground">
          <p>All programs include free initial assessment • Flexible payment options available</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
