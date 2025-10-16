import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, ClipboardCheck, Users, Trophy, Star } from "lucide-react";
import readingKids from "@/assets/reading-kids.jpg";
import mathKids from "@/assets/math-kids.jpg";
import homeworkKids from "@/assets/homework-kids.jpg";

const Services = () => {

  const services = [
    {
      icon: BookOpen,
      title: "Reading Comprehension Booster",
      grade: "Grades 1-4",
      description: "Build strong reading foundations with engaging stories, phonics, and comprehension strategies that make reading fun!",
      features: [
        "2x weekly sessions",
        "Reading fluency practice",
        "Comprehension strategies",
        "Vocabulary building",
        "Progress tracking",
        "Parent communication"
      ],
      price: "R1,200/month",
      sessions: "2 sessions per week",
      image: readingKids,
      color: "primary"
    },
    {
      icon: Calculator,
      title: "Math Confidence Building",
      grade: "Grades 4-7",
      description: "Transform math anxiety into confidence with personalized attention and fun problem-solving techniques!",
      features: [
        "2x weekly sessions",
        "Problem-solving techniques",
        "Curriculum aligned",
        "Concept mastery focus",
        "Test preparation",
        "Monthly assessments"
      ],
      price: "R1,200/month",
      sessions: "2 sessions per week",
      image: mathKids,
      color: "secondary",
      featured: true
    },
    {
      icon: ClipboardCheck,
      title: "Homework Mastery Program",
      grade: "All Grades",
      description: "Supporting busy parents by ensuring homework gets done correctly while building independent study skills!",
      features: [
        "Daily homework assistance",
        "All subjects covered",
        "Study skills development",
        "Time management training",
        "Flexible scheduling",
        "Weekly progress reports"
      ],
      price: "R2,200/month",
      sessions: "Flexible scheduling",
      image: homeworkKids,
      color: "accent"
    }
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

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`overflow-hidden hover:shadow-large transition-all border-2 hover:border-primary/50 hover:-translate-y-2 group ${
                  service.featured ? "ring-2 ring-accent shadow-medium" : ""
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-fun text-secondary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-medium animate-bounce-slow">
                      ⭐ Most Popular ⭐
                    </span>
                  </div>
                )}
                
                {/* Cartoon Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-medium group-hover:animate-bounce-slow">
                      <Icon className={`text-${service.color}`} size={24} />
                    </div>
                  </div>
                  {/* Decorative stars */}
                  <Star className="absolute top-4 left-4 text-yellow animate-pulse-slow" size={20} fill="currentColor" />
                  <Star className="absolute bottom-4 right-16 text-yellow animate-float" size={16} fill="currentColor" style={{ animationDelay: "0.5s" }} />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-secondary font-semibold mb-3 inline-flex items-center gap-1">
                    <Trophy size={16} />
                    {service.grade}
                  </p>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Star className="text-yellow mt-1 flex-shrink-0" size={16} fill="currentColor" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4 mb-4">
                    <p className="text-2xl font-bold text-primary mb-1">{service.price}</p>
                    <p className="text-sm text-muted-foreground">{service.sessions}</p>
                  </div>
                  <Link to="/enrollment" className="w-full">
                    <Button 
                      className={`w-full hover:scale-105 active:scale-95 transition-transform ${
                        service.featured ? "bg-gradient-fun" : ""
                      }`}
                      variant={service.featured ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
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
                <Link to="/enrollment" className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
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
