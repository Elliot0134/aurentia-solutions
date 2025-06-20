
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Badge from "@/components/ui/Badge";

const About = () => {
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

  const timeline = [
    {
      year: "2018",
      title: "Lancement de la marque CBD pour animaux",
      description: "Création et développement d'une marque de produits CBD pour animaux de compagnie, de l'idée initiale à la commercialisation."
    },
    {
      year: "2020",
      title: "Expansion de la marque",
      description: "Développement de la présence en ligne et expansion vers de nouveaux marchés européens."
    },
    {
      year: "2021",
      title: "Mise en place d'automatisations",
      description: "Implémentation de workflows automatisés pour optimiser les opérations et améliorer l'efficacité de l'entreprise."
    },
    {
      year: "2022",
      title: "Sortie réussie",
      description: "Vente de l'entreprise et préparation du projet Aurentia Solutions pour aider d'autres entrepreneurs."
    },
    {
      year: "2023",
      title: "Gagnant du Hackaton IA",
      description: "Reconnaissance pour l'innovation en matière d'intelligence artificielle appliquée au business."
    },
    {
      year: "2024",
      title: "Lancement d'Aurentia Solutions",
      description: "Création d'un écosystème de solutions intégrées pour les entrepreneurs et les entreprises en croissance."
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Nous nous engageons à fournir des solutions de la plus haute qualité, en accordant une attention méticuleuse aux détails et en visant constamment l'amélioration."
    },
    {
      title: "Innovation",
      description: "Nous explorons continuellement de nouvelles approches et technologies pour offrir des solutions innovantes qui répondent aux défis d'aujourd'hui et de demain."
    },
    {
      title: "Simplicité",
      description: "Nous croyons que les meilleures solutions sont souvent les plus simples. Nous concevons nos produits et services pour être intuitifs et faciles à utiliser."
    },
    {
      title: "Impact",
      description: "Nous mesurons notre succès par l'impact positif que nous avons sur nos clients. Chaque solution est conçue pour créer une valeur tangible et durable."
    }
  ];

  return (
    <div className="pt-24 bg-aurentia-background">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="scroll-reveal text-4xl md:text-5xl font-bold mb-6">
              À propos d'Aurentia Solutions
            </h1>
            
            <p className="scroll-reveal text-xl mb-10">
              Notre histoire, nos valeurs et notre vision.
            </p>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
                Elliot, fondateur d'Aurentia Solutions
              </h2>
              
              <div className="scroll-reveal space-y-4">
                <p>
                  Ancien entrepreneur ayant développé une marque de produits CBD pour animaux de A à Z, 
                  Elliot met aujourd'hui ses compétences au service de votre entreprise pour créer une 
                  identité visuelle qui vous démarque et des automatisations qui vous font gagner du temps.
                </p>
                <p>
                  Fort d'une expérience complète en entrepreneuriat, du développement de produit au marketing 
                  en passant par la vente et l'automatisation des processus, Elliot comprend parfaitement les 
                  défis auxquels font face les entrepreneurs modernes.
                </p>
                <p>
                  Sa passion pour le design, l'automatisation et la stratégie business l'a conduit à créer 
                  Aurentia Solutions, un écosystème de solutions intégrées conçues pour aider les entrepreneurs 
                  à transformer leur vision en succès.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-aurentia-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
              Parcours entrepreneurial
            </h2>
            
            <div className="relative border-l-2 border-aurentia-card pl-10 ml-6 md:ml-0">
              {timeline.map((item, index) => (
                <div 
                  key={item.year} 
                  className="scroll-reveal mb-12 relative"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -left-[3.25rem] w-10 h-10 bg-aurentia-card rounded-full flex items-center justify-center text-white font-semibold">
                    {item.year.substring(2)}
                  </div>
                  <div className="absolute -left-16 top-2 text-sm font-semibold">{item.year}</div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Hackaton Section */}
      <section className="py-20 bg-aurentia-card text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
              Gagnant du Hackaton IA
            </h2>
            
            <div className="scroll-reveal mb-10">
              <Badge className="bg-white text-aurentia-card mx-auto">Distinction</Badge>
            </div>
            
            <p className="scroll-reveal text-xl mb-10">
              En 2023, Elliot a remporté le Hackaton IA pour son innovation dans l'application de l'intelligence artificielle 
              aux défis entrepreneuriaux, posant ainsi les bases de ce qui deviendrait Aurentia Business Idea.
            </p>
            
            <div className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Le défi</h3>
                <p>
                  Créer une solution utilisant l'intelligence artificielle pour aider les entrepreneurs à transformer 
                  leurs idées en plans d'action concrets en un temps record.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">La solution</h3>
                <p>
                  Un système intelligent capable d'analyser une idée business et de générer un plan d'affaires complet 
                  en posant seulement quatre questions stratégiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
              Nos valeurs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="scroll-reveal"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-20 bg-aurentia-background circuit-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
              Notre vision
            </h2>
            
            <p className="scroll-reveal text-xl mb-10">
              Nous croyons que chaque entrepreneur mérite des outils et des solutions de qualité pour concrétiser sa vision.
            </p>
            
            <div className="scroll-reveal bg-white p-8 rounded-lg shadow-sm">
              <p className="text-xl italic text-aurentia-card">
                "Notre mission est de démocratiser l'accès à des solutions premium en design, automatisation et stratégie business, 
                permettant à chaque entrepreneur de se concentrer sur ce qui compte vraiment : faire grandir son entreprise."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-aurentia-card text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
              Prêt à collaborer ?
            </h2>
            
            <p className="scroll-reveal text-xl mb-10">
              Découvrez comment nos solutions peuvent transformer votre entreprise.
            </p>
            
            <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-aurentia-card hover:bg-opacity-90"
                asChild
              >
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/">
                  Explorer nos solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
