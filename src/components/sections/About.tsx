
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
    <section className="py-24 bg-[#F8F6F0]">
      <div className="container mx-auto px-4 lg:max-w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="scroll-reveal">
            <div className="relative">
              <img 
                src="/photo-elliot-friendiz.png" 
                alt="Elliot" 
                className="aspect-square object-cover rounded-lg shadow-lg"
              />
              
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
