
import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Ecosystem from "@/components/sections/Solutions"; // Updated import
import About from "@/components/sections/About";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="bg-aurentia-background">
      <Hero />
      <Ecosystem /> {/* Updated component usage */}
      <About />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default Index;
