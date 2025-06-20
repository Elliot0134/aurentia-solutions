
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
                    <a href="#featured">
                      Découvrir nos ressources
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="text-base"
                  >
                    <Link to="/contact">
                      Nous contacter
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 scroll-reveal">
                <img
                  src="/placeholder.svg" // Placeholder image
                  alt="Image Hero Aurentia Ressources"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Video Project Section */}
      <section className="py-20 relative" style={{
        backgroundColor: '#1C4332',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23f6f5f7' fill-opacity='0.02' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E")`
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto w-full md:max-w-[80%]">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Le plus grand projet IA en vidéo
            </h2>
            <div className="max-w-3xl mx-auto">
              <iframe
                className="w-full aspect-video rounded-lg shadow-md"
                src="https://www.youtube.com/embed/nVBp6p78iPo?si=dxXrESES4uz-i89S"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  className="text-[#5942ac] bg-white hover:bg-white/90 text-lg font-medium px-8 py-3"
                >
                  <Link to="/contact">
                    Je participe au projet
                  </Link>
                </Button>
              </div>
            </div>
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
                  <h3 className="text-2xl font-semibold mb-4 text-[#1C4332]">{category.title}</h3>
                  
                  {/* Espace pour l'image carrée */}
                  <div className="w-full aspect-square bg-gray-200 mb-6">
                    {/* L'image ira ici */}
                  </div>
                  
                  <p className="text-gray-600 mb-6 flex-grow">{category.description}</p>
                  
                  <Button 
                    className="w-full mt-auto bg-[#1C4332] text-white hover:bg-opacity-90 text-base"
                  >
                    Voir les ressources
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
                >
                  Accéder à la boutique
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
