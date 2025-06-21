
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Simple parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const background = heroRef.current.querySelector('.hero-background') as HTMLElement;
      const content = heroRef.current.querySelector('.hero-content') as HTMLElement;
      
      if (background && content) {
        background.style.transform = `translateY(${scrollY * 0.15}px)`;
        content.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for fade-in animation
  useEffect(() => {
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
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg"
      style={{ paddingTop: '80px' }}
    >
      <div className="hero-background absolute inset-0 opacity-50" />
      
      <div className="container mx-auto px-4 py-20 z-10 hero-content lg:max-w-[80%]">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contenu textuel (gauche sur desktop, bas sur mobile) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="scroll-reveal text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Aurentia Solutions
              <div className="border-b border-gray-300 pb-4 mb-6"></div>
              <span className="block text-xl md:text-2xl font-medium mt-2">
                Excellence en Design, Automation et Stratégie Business
              </span>
            </h1>

            <p className="scroll-reveal text-base md:text-lg max-w-3xl md:max-w-none mx-auto md:mx-0 mb-12">
              Des solutions intégrées pour transformer votre vision en réussite entrepreneuriale
            </p>

            <div className="scroll-reveal flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button
                className="bg-aurentia-card text-white hover:bg-opacity-90 px-8 py-6 text-base"
                asChild
              >
                <Link to="/saas/business-idea">
                  Découvrir
                </Link>
              </Button>
          </div>
          </div>

          {/* Placeholder image (droite sur desktop, haut sur mobile) */}
          <div className="w-2/3 mx-auto md:w-1/3 flex justify-center md:justify-end order-first md:order-last">
            <div className="scroll-reveal w-full max-w-sm md:max-w-md lg:max-w-lg aspect-square bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
              {/* Utilisation d'un placeholder SVG ou d'une image temporaire */}
              <img
                src="/photo-elliot.png" // Assurez-vous que ce fichier existe dans le dossier public
                alt="Placeholder Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
