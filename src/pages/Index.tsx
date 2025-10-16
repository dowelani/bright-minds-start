import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Enrollment from "@/components/Enrollment";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Enrollment />
      <Testimonials />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
