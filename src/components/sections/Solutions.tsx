
import { useEffect } from "react";
import SolutionCard from "../ui/SolutionCard";

const Ecosystem = () => { // Renamed component to Ecosystem
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

  const solutions = [
    {
      title: "Aurentia Designs",
      description: "Une esthétique premium pour une marque mémorable. De l'audit de marque aux logos, chartes graphiques, kits sociaux et supports marketing, nos designers créent des éléments visuels distinctifs qui renforcent votre positionnement et amplifient votre présence sur tous les canaux.",
      imageUrl: "/aurentia-design-img.png", // Changed to imageUrl
      to: "/services/designs"
    },
    {
      title: "Aurentia Automation",
      description: "Transformez vos processus manuels en systèmes automatisés sur mesure. Nos solutions N8N personnalisées connectent vos outils existants pour vous permettre de vous concentrer sur ce qui fait grandir votre entreprise.",
      imageUrl: "/aurentia-auto-main-img.png", // Changed to imageUrl
      to: "/services/automation"
    },
    {
      title: "Aurentia Ressources",
      description: "Templates Notion, prompts IA et workflows N8N soigneusement conçus pour transformer votre productivité. Nos outils allient design élégant et fonctionnalités puissantes, sans compétences techniques requises.",
      imageUrl: "/aurentia-ressources.png", // Changed to imageUrl
      to: "/ressources"
    },
    {
      title: "Aurentia App",
      description: "Une idée business, 4 questions, 1 plan d'action complet. Obtenez instantanément votre étude de marché, analyse concurrentielle, définition de cible, business plan etc. pour concrétiser votre vision avec clarté et confiance.",
      imageUrl: "/aurentia-business-idea.png", // Changed to imageUrl
      to: "https://landing.aurentia.fr/"
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-white"> {/* Changed id */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-4">
            L'écosystème Aurentia
          </h2>
          <p className="scroll-reveal text-lg max-w-3xl mx-auto">
            Découvrez l'ensemble de nos solutions intégrées pour propulser votre succès.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[80%] mx-auto items-start"> {/* Changed grid columns for desktop */}
          {solutions.map((solution, index) => (
            <div key={solution.title} className="scroll-reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <SolutionCard
                title={solution.title}
                description={solution.description}
                imageUrl={solution.imageUrl} // Changed to imageUrl
                to={solution.to}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem; // Export renamed component
