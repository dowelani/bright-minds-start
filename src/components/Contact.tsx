import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childGrade: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", childGrade: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'd like to book a free trial session for my child.";
    const whatsappUrl = `https://wa.me/27123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Get <span className="bg-gradient-hero bg-clip-text text-transparent">Started</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Book a free trial session or get in touch to discuss your child's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Parent Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary focus:outline-none transition-colors"
                  placeholder="0123456789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Child's Grade *</label>
                <select
                  required
                  value={formData.childGrade}
                  onChange={(e) => setFormData({ ...formData, childGrade: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select grade</option>
                  {[1, 2, 3, 4, 5, 6, 7].map((grade) => (
                    <option key={grade} value={`Grade ${grade}`}>
                      Grade {grade}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your child's learning needs..."
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-hero">
                <Mail className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-2 hover:shadow-medium transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-light flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-secondary" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2">Quick Response via WhatsApp</h4>
                  <p className="text-muted-foreground mb-4">
                    Get instant answers to your questions and schedule sessions directly
                  </p>
                  <Button onClick={handleWhatsApp} className="bg-gradient-warm w-full">
                    <MessageCircle className="mr-2" size={18} />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">012 345 6789</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">sarah@kidstutor.co.za</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Pretoria East</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary-light border-2 border-primary/20">
              <h4 className="font-bold mb-2 text-lg">Available Times</h4>
              <ul className="space-y-2 text-foreground/90">
                <li>• Monday - Thursday: 3pm - 7pm</li>
                <li>• Friday: 3pm - 6pm</li>
                <li>• Saturday: 9am - 1pm</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
