import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lisa M.",
      role: "Parent of Grade 3 Student",
      content: "Miss L has been amazing with my daughter's reading comprehension. Her confidence has grown so much, and she actually looks forward to tutoring sessions now! The progress has been incredible.",
      rating: 5,
    },
    {
      name: "David & Emma K.",
      role: "Parents of Grade 5 Student",
      content: "Our son was struggling with maths and dreading homework time. Within just a few weeks with Miss L, we saw a complete turnaround. His grades improved and he's much happier at school.",
      rating: 5,
    },
    {
      name: "Thandi N.",
      role: "Parent of Grade 2 Student",
      content: "What I love most is how patient and encouraging Miss L is. She makes learning fun, and my daughter has gained so much confidence. Best investment we've made in her education!",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Parent of Grade 6 Student",
      content: "The Math Confidence Building program has been life-changing. Miss L really takes time to understand my son's learning style and adapts her methods. His test scores have improved significantly.",
      rating: 5,
    },
  ];

  const childFeedback = [
    { name: "Sophie", grade: "Grade 3", quote: "Miss L makes reading fun! I love our sessions." },
    { name: "Liam", grade: "Grade 5", quote: "Maths isn't scary anymore. Miss L explains things really well!" },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="bg-gradient-hero bg-clip-text text-transparent">Parents Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real feedback from families who've seen their children thrive
          </p>
        </div>

        {/* Parent Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all border-2 hover:-translate-y-1 group">
              <div className="flex items-center mb-4 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="text-secondary fill-secondary group-hover:animate-bounce-slow" 
                    size={18} 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <Quote className="text-primary/20 mb-2" size={32} />
              <p className="text-foreground/90 mb-4 italic">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Child Feedback */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">From the Kids</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {childFeedback.map((feedback, index) => (
              <Card key={index} className="p-6 bg-primary-light border-2 border-primary/20 hover:shadow-medium transition-all hover:-translate-y-1 group">
                <p className="text-lg text-foreground/90 italic mb-3">"{feedback.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold group-hover:animate-bounce-slow">
                    {feedback.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{feedback.name}</p>
                    <p className="text-sm text-muted-foreground">{feedback.grade}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
