
import { useEffect } from "react";
import Badge from "../ui/Badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:max-w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="scroll-reveal">
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative shadow-lg">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center bg-aurentia-card bg-opacity-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-aurentia-card opacity-40"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4">
                <Badge>Gagnant du Hackaton IA</Badge>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
              À propos d'Elliot
            </h2>
            
            <div className="scroll-reveal space-y-4 text-lg mb-8">
              <p>
                Ancien entrepreneur ayant développé une marque de produits CBD pour animaux de A à Z, 
                Elliot met aujourd'hui ses compétences au service de votre entreprise pour créer une 
                identité visuelle qui vous démarque et des automatisations qui vous font gagner du temps.
              </p>
              <p>
                Fort de son expérience entrepreneuriale et de sa vision stratégique, Elliot comprend 
                parfaitement les défis auxquels font face les entreprises modernes.
              </p>
            </div>

            <div className="scroll-reveal flex space-x-4">
              <Button 
                className="bg-aurentia-card text-white hover:bg-opacity-90 text-base"
                asChild
              >
                <Link to="/a-propos">
                  En savoir plus
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-aurentia-card text-aurentia-card hover:bg-aurentia-background text-base"
                asChild
              >
                <Link to="/contact">
                  Me contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
