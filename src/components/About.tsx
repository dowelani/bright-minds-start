import { Heart, Award, Target, Smile, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import mascotOwl from "@/assets/mascot-owl.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Teaching",
      description: "I genuinely love seeing children discover their potential and grow in confidence",
    },
    {
      icon: Award,
      title: "Proven Methods",
      description: "Using evidence-based techniques that make learning engaging and effective",
    },
    {
      icon: Smile,
      title: "Personal Approach",
      description: "Every child is unique, and I tailor my teaching to their individual needs",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with Mascot */}
          <div className="text-center mb-12 relative">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img 
                  src={mascotOwl} 
                  alt="Miss L Mascot - Wise Owl" 
                  className="w-32 h-32 rounded-full shadow-large animate-float"
                />
                <Star className="absolute -top-2 -right-2 text-yellow animate-spin-slow" size={24} fill="currentColor" />
                <Star className="absolute -bottom-2 -left-2 text-yellow animate-pulse-slow" size={20} fill="currentColor" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet <span className="bg-gradient-hero bg-clip-text text-transparent">Miss L</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Your Partner in Your Child's Learning Journey
            </p>
          </div>

          {/* Story */}
          <div className="prose prose-lg max-w-none mb-12 text-foreground/90 space-y-4">
            <p className="text-lg leading-relaxed">
              At Miss L Tutoring Services, I specialize in building strong foundations in reading and mathematics 
              for primary school learners. With years of experience working with Grades 1-7, I've developed targeted 
              programs that address the specific challenges children face at different learning stages.
            </p>
            <p className="text-lg leading-relaxed">
              My approach focuses on three core areas: Reading Comprehension for early readers (Grades 1-4), 
              Math Confidence Building for intermediate learners (Grades 4-7), and a comprehensive Homework Mastery 
              Program for busy parents who want their children to develop strong study habits.
            </p>
            <p className="text-lg leading-relaxed">
              I believe every child can excel when given the right support and encouragement. My personalized 
              tutoring sessions are designed to make learning enjoyable while building the confidence and skills 
              your child needs to succeed academically. Whether through one-on-one sessions or small group 
              tutoring, I create a warm, supportive environment where children feel safe to ask questions and grow.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-medium transition-all border-2 hover:-translate-y-1 group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-4 group-hover:animate-bounce-slow">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
                    {value.title}
                    <Star className="text-yellow opacity-0 group-hover:opacity-100 transition-opacity" size={16} fill="currentColor" />
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
