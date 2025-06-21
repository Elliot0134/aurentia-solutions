
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Resources = () => {
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

  const resourceCategories = [
    {
      title: "Templates Notion",
      description: "Des templates Notion soigneusement conçus pour optimiser votre organisation et votre productivité.",
      items: [
        "Dashboard Business",
        "Gestion de Projet",
        "CRM",
        "Knowledge Base"
      ]
    },
    {
      title: "Prompts IA",
      description: "Des prompts IA optimisés pour tirer le meilleur parti des outils d'intelligence artificielle.",
      items: [
        "Génération de Contenu",
        "Brainstorming",
        "Analyse Concurrentielle",
        "Plan Marketing"
      ]
    },
    {
      title: "Workflows N8N",
      description: "Des workflows N8N prêts à l'emploi pour automatiser vos processus sans codage.",
      items: [
        "Automatisation Email",
        "Synchronisation CRM",
        "Social Media Manager",
        "Collecte de Données"
      ]
    }
  ];

  const featuredProducts = [
    {
      title: "Template Notion - Business Dashboard Pro",
      price: "79€",
      description: "Dashboard Notion complet pour suivre tous les KPIs de votre entreprise en un coup d'œil."
    },
    {
      title: "Pack Prompts IA - Marketing Expert",
      price: "49€",
      description: "50 prompts optimisés pour générer du contenu marketing performant avec ChatGPT."
    },
    {
      title: "Workflow N8N - Omnipresence",
      price: "99€",
      description: "Automatisez la publication de votre contenu sur toutes vos plateformes sociales simultanément."
    }
  ];

  return (
    <div className="pt-24 bg-aurentia-background">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Wrapper for 80% width on desktop */}
          <div className="mx-auto w-full md:max-w-[80%]">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="scroll-reveal text-4xl md:text-5xl font-bold mb-6">
                  Aurentia <span className='text-aurentia-resources'>Ressources</span>
                </h1>

                <p className="scroll-reveal text-base mb-10">
                  Explorez notre collection de templates Notion, prompts IA et workflows N8N conçus pour optimiser votre organisation, booster votre créativité et automatiser vos tâches. Des outils pratiques et prêts à l'emploi pour transformer votre productivité.
                </p>

                <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    variant="resources"
                    asChild
                    className="text-base"
                  >
                    <a href="https://aurentia-ressource.fr/">
                      Accéder au site
                    </a>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 scroll-reveal">
                <img
                  src="/aurentia-ressources.png" // Aurentia Ressources image
                  alt="Image Hero Aurentia Ressources"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Resources Section */}
      <section className="py-20 relative" style={{
        backgroundColor: '#1C4332',
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto w-full md:max-w-[80%]">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Des ressources premium pour entrepreneurs
            </h2>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Wrapper for 80% width on desktop */}
          <div className="mx-auto w-full md:max-w-[80%]">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
              Nos catégories de ressources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {resourceCategories.map((category, index) => (
                <div 
                  key={category.title} 
                  className="scroll-reveal bg-aurentia-background rounded-lg p-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:scale-105 flex flex-col h-full"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Espace pour l'image carrée */}
                  <div className="w-full aspect-square mb-6">
                    {category.title === "Templates Notion" && (
                      <img src="/notion-image-ressource.png" alt="Notion Image Ressource" className="w-full h-full object-cover rounded-lg" />
                    )}
                    {category.title === "Prompts IA" && (
                      <img src="/GPT-image-ressource.png" alt="GPT Image Ressource" className="w-full h-full object-cover rounded-lg" />
                    )}
                    {category.title === "Workflows N8N" && (
                      <img src="/n8n-image-ressource.png" alt="N8N Image Ressource" className="w-full h-full object-cover rounded-lg" />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#1C4332]">{category.title}</h3>
                  
                  <p className="text-gray-600 mb-6 flex-grow">{category.description}</p>
                  
                  <Button 
                    className="w-full mt-auto bg-[#1C4332] text-white hover:bg-opacity-90 text-base"
                    asChild
                  >
                    <a href={
                      category.title === "Templates Notion" ? "https://aurentia-ressource.fr/products/big-template-my-business" :
                      category.title === "Prompts IA" ? "https://aurentia-ressource.fr/products/pack-350-prompts?pr_prod_strat=pinned&pr_rec_id=12bb71b73&pr_rec_pid=9465298321736&pr_ref_pid=9463095853384&pr_seq=uniform" :
                      "https://aurentia-ressource.fr/"
                    }>
                      Voir les ressources
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-aurentia-background">
        <div className="container mx-auto px-4">
          {/* Wrapper for 80% width on desktop */}
          <div className="mx-auto w-full md:max-w-[80%]">
            <div className="max-w-4xl mx-auto">
              <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
                Pourquoi choisir nos ressources ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="scroll-reveal flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1C4332] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                      <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                      <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Design premium</h3>
                    <p className="text-gray-600">Toutes nos ressources sont conçues avec une attention particulière au design pour une expérience utilisateur optimale.</p>
                  </div>
                </div>
                
                <div className="scroll-reveal flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1C4332] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 8l-8 8"></path>
                      <path d="M8 8l8 8"></path>
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Prêt à l'emploi</h3>
                    <p className="text-gray-600">Nos ressources sont immédiatement utilisables, sans compétences techniques requises, pour un gain de temps maximal.</p>
                  </div>
                </div>
                
                <div className="scroll-reveal flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1C4332] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Testés sur le terrain</h3>
                    <p className="text-gray-600">Toutes nos ressources ont été testées et optimisées dans des environnements professionnels réels.</p>
                  </div>
                </div>
                
                <div className="scroll-reveal flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1C4332] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video">
                      <path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tutos vidéo</h3>
                    <p className="text-gray-600">Chaque ressources inclut un tutoriel vidéo expliquant comment utiliser la ressources, dans quelles conditions, avec un exemple d'utilisation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-aurentia-resources text-white">
        <div className="container mx-auto px-4">
          {/* Wrapper for 80% width on desktop */}
          <div className="mx-auto w-full md:max-w-[80%]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
                Prêt à booster votre productivité ?
              </h2>
              
              <p className="scroll-reveal text-xl mb-10">
                Explorez notre boutique de ressources et trouvez les outils parfaits pour votre entreprise.
              </p>
              
              <div className="scroll-reveal">
                <Button 
                  className="bg-white text-aurentia-resources text-base hover:bg-white"
                  asChild
                >
                  <a href="https://aurentia-ressource.fr/">
                    Accéder au site
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
