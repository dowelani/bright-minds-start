import { Heart, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

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
      icon: Users,
      title: "Personal Approach",
      description: "Every child is unique, and I tailor my teaching to their individual needs",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-hero bg-clip-text text-transparent">Sarah</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Your Partner in Your Child's Learning Journey
            </p>
          </div>

          {/* Story */}
          <div className="prose prose-lg max-w-none mb-12 text-foreground/90 space-y-4">
            <p className="text-lg leading-relaxed">
              As a former primary school teacher with over 5 years of experience, I understand the challenges 
              children face in maths and reading. I've watched countless students transform from frustrated 
              learners into confident, enthusiastic kids who actually enjoy their schoolwork.
            </p>
            <p className="text-lg leading-relaxed">
              My journey into tutoring began when I noticed that some children just need a little extra support 
              and a different approach to truly shine. I decided to create a warm, encouraging space where kids 
              can learn at their own pace, ask questions without fear, and build the foundation they need for 
              academic success.
            </p>
            <p className="text-lg leading-relaxed">
              As a parent myself, I know how important it is to trust someone with your child's education. 
              That's why I focus not just on academic improvement, but on building your child's confidence 
              and love for learning.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-medium transition-all border-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
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
