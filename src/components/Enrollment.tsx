import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Sparkles } from "lucide-react";

const Enrollment = () => {
  const enrollmentSteps = [
    {
      step: 1,
      title: "Choose Your Program",
      description: "Select the tutoring program that best fits your child's needs from our services above."
    },
    {
      step: 2,
      title: "Make Payment",
      description: "Transfer the monthly fee to the banking details below. Use your child's name as reference."
    },
    {
      step: 3,
      title: "Send Proof of Payment",
      description: "WhatsApp or email your proof of payment along with your child's details."
    },
    {
      step: 4,
      title: "Schedule First Session",
      description: "We'll contact you within 24 hours to schedule your child's first session!"
    }
  ];

  return (
    <section id="enrollment" className="py-24 bg-gradient-to-b from-background to-secondary-light/20 relative overflow-hidden">
      {/* Decorative elements */}
      <Star className="absolute top-10 left-10 text-yellow animate-pulse-slow" size={24} fill="currentColor" />
      <Sparkles className="absolute bottom-10 right-10 text-accent animate-float" size={28} />
      <Star className="absolute top-1/2 right-20 text-primary animate-bounce-slow" size={20} fill="currentColor" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How to <span className="bg-gradient-hero bg-clip-text text-transparent">Enroll</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Getting started is easy! Follow these simple steps to enroll your child.
          </p>
        </div>

        {/* Enrollment Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {enrollmentSteps.map((item) => (
            <Card 
              key={item.step} 
              className="p-6 hover:shadow-large transition-all hover:-translate-y-2 border-2 hover:border-primary/50 group"
            >
              <div className="w-16 h-16 bg-gradient-fun rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:animate-bounce-slow shadow-medium">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
              <CheckCircle className="text-primary mt-4 group-hover:scale-110 transition-transform" size={24} />
            </Card>
          ))}
        </div>

        {/* Banking Details */}
        <Card className="max-w-2xl mx-auto p-8 border-2 border-primary/30 bg-gradient-to-br from-background to-primary-light/10 shadow-large">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="text-yellow" size={24} fill="currentColor" />
              <h3 className="text-3xl font-bold">Banking Details</h3>
              <Star className="text-yellow" size={24} fill="currentColor" />
            </div>
            <p className="text-muted-foreground">Use these details to make your payment</p>
          </div>

          <div className="space-y-4 bg-white/50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold text-muted-foreground">Bank:</span>
              <span className="text-lg font-bold">FNB</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold text-muted-foreground">Account Name:</span>
              <span className="text-lg font-bold">Miss L Tutoring</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold text-muted-foreground">Account Number:</span>
              <span className="text-lg font-bold">1234567890</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-muted-foreground">Reference:</span>
              <span className="text-lg font-bold text-accent">Your Child's Name</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-accent-light/20 border-2 border-accent rounded-lg">
            <p className="text-sm text-center">
              <strong>Important:</strong> Please use your child's full name as the payment reference so we can match your payment quickly!
            </p>
          </div>
        </Card>

        {/* Contact Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-lg font-semibold">Send your proof of payment to:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/27123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              📱 WhatsApp: 071 234 5678
            </a>
            <span className="hidden sm:inline text-muted-foreground">or</span>
            <a 
              href="mailto:hello@missltutoring.co.za"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              📧 hello@missltutoring.co.za
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;
