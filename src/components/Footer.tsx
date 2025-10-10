import { Facebook, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-3">
              Miss L Tutoring Services
            </h3>
            <p className="text-muted-foreground text-sm">
              Building strong foundations in reading and maths for Grades 1-7 through specialized tutoring programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["home", "about", "services", "testimonials"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-muted-foreground hover:text-primary transition-colors capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-3">Programs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Reading Comprehension (Gr 1-4)</li>
              <li>Math Confidence (Gr 4-7)</li>
              <li>Homework Mastery Program</li>
              <li>Group Tutoring</li>
              <li>Test Prep Crash Course</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3">Get in Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <p>Contact for details</p>
              <p>info@missltutoring.co.za</p>
              <p>Online & Home Visits Available</p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Miss L Tutoring Services. Made with <Heart className="text-primary fill-primary" size={14} /> for learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
