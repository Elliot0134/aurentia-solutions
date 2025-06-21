
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Badge from "@/components/ui/Badge";
import { Card } from "@/components/ui/card";

interface TimelineButton {
  text: string;
  link: string;
}

interface TimelineItem {
  images: string[];
  title: string;
  subtitle: string;
  text: string;
  button?: TimelineButton;
}

interface TimelineData {
  [key: string]: TimelineItem;
}

const About = () => {
  const [activeYear, setActiveYear] = useState<keyof TimelineData>('2022');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const formatTextWithLineBreaks = (text: string) => {
    return text.split('\n\n').map((paragraph, pIdx) => (
      <p key={pIdx} className={pIdx > 0 ? "mt-4" : ""}>
        {paragraph.split('\n').map((line, lIdx) => (
          <span key={lIdx}>
            {line}
            {lIdx < paragraph.split('\n').length - 1 && <br />}
          </span>
        ))}
      </p>
    ));
  };

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

  const timelineData: TimelineData = {
    '2022': {
      images: ["/xfive-1-elliot-page.png", "/xfive-2-elliot-page.png", "/xfive-3-elliot-page.png"],
      title: "XFIVE Records",
      subtitle: "Studio d'enregistrement et production musicale",
      text: "En 2022, j'ai co-fondé XFIVE Records avec un ami d'enfance, un projet né de notre passion commune pour la musique que nous partagions depuis des années. Cette aventure entrepreneuriale était l'aboutissement naturel de notre collaboration musicale et de notre envie de créer quelque chose ensemble.\n\nJ'ai pris en charge la conception et la construction physique du studio d'enregistrement, en gérant le projet de A à Z. Mon rôle s'étendait également au développement de la stratégie marketing, à l'accompagnement personnalisé des clients et à la gestion de notre portefeuille d'artistes.\n\nCette expérience m'a permis de développer des compétences techniques pointues tout en apprenant à transformer une passion partagée en véritable entreprise. XFIVE Records a été une aventure formidable qui a posé les bases de ma vision entrepreneuriale centrée sur l'accompagnement et la création de valeur."
    },
    '2023-24': {
      images: ["/friendiz-1-elliot-page.png", "/friendiz-2-elliot-page.png", "/friendiz-3-elliot-page.png"],
      title: "Frend'iz",
      subtitle: "Marque de CBD thérapeutique pour animaux de compagnie",
      text: "Entre 2023 et 2024, j'ai lancé Frend'iz, une marque spécialisée dans les produits CBD destinés au bien-être des animaux de compagnie. Cette aventure m'a amené à explorer le secteur du bien-être animal, en développant une gamme de produits naturels pour améliorer la qualité de vie des chiens et chats. \n\nJ'ai géré tous les aspects de cette entreprise, de la conception des produits à la stratégie marketing, en passant par la conformité réglementaire, développement commercial etc. \n\nFrend'iz m'a appris l'importance de la recherche de marché, la rigueur et l'organisation qu'il faut avoir pour lancer un grand projet, et de la création d'une marque authentique dans un secteur de niche.",
      button: {
        text: "Visiter le site Frend'iz",
        link: "https://www.friendiz.fr/"
      }
    },
    '2025': {
      images: ["/aurentia-1-elliot-page.png", "/aurentia-2-elliot-page.png", "/aurentia-3-elliot-page.png", "/aurentia-4-elliot-page.png"],
      title: "Aurentia Solutions",
      subtitle: "Écosystème de services numériques pour entrepreneurs",
      text: "En 2025, je lance Aurentia Solutions, un écosystème complet de services numériques conçu pour accompagner les entrepreneurs dans leur transformation digitale. \n\nCette plateforme regroupe plusieurs services complémentaires : des solutions de design et d'automatisation, Aurentia Resource qui propose des templates optimisés pour Notion, Airtable etc. , et Aurentia Business AI, un logiciel intelligent d'aide à la création d'entreprise. \n\nCette initiative représente la synthèse de toutes mes expériences précédentes, combinant créativité, technologie et accompagnement entrepreneurial pour offrir une solution globale aux besoins des entreprises modernes."
    }
  };

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
        <div className="container md:w-4/5 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="scroll-reveal">
              <div className="relative">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative shadow-lg max-w-sm mx-auto">
                  <img 
                    src="/photo-elliot.png" 
                    alt="Elliot" 
                    className="w-full h-full object-cover"
                  />
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
            
            <div className="flex justify-center space-x-4 mb-8">
              <Button 
                variant={activeYear === '2022' ? 'default' : 'outline'} 
                onClick={() => setActiveYear('2022')}
              >
                2022
              </Button>
              <Button 
                variant={activeYear === '2023-24' ? 'default' : 'outline'} 
                onClick={() => setActiveYear('2023-24')}
              >
                2023-24
              </Button>
              <Button 
                variant={activeYear === '2025' ? 'default' : 'outline'} 
                onClick={() => setActiveYear('2025')}
              >
                2025
              </Button>
            </div>

            <div className="scroll-reveal mb-12">
              <div className="flex justify-start gap-2 mb-4">
                {timelineData[activeYear as keyof typeof timelineData].images.map((imgSrc, idx) => (
                  <div 
                    key={idx} 
                    className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative shadow-lg w-1/3 max-w-[150px] cursor-pointer"
                    onClick={() => setEnlargedImage(imgSrc)}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`Image ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">{timelineData[activeYear as keyof typeof timelineData].title}</h3>
                <h4 className="text-lg font-medium text-gray-700 mb-2">{timelineData[activeYear as keyof typeof timelineData].subtitle}</h4>
                <hr className="my-4 border-gray-300" />
                <p className="text-gray-600">{formatTextWithLineBreaks(timelineData[activeYear as keyof typeof timelineData].text)}</p>
                {timelineData[activeYear as keyof typeof timelineData].button && (
                  <Button asChild className="mt-4">
                    <a href={timelineData[activeYear as keyof typeof timelineData].button?.link} target="_blank" rel="noopener noreferrer">
                      {timelineData[activeYear as keyof typeof timelineData].button?.text}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          onClick={() => setEnlargedImage(null)}
          style={{ opacity: enlargedImage ? 1 : 0 }}
        >
          <div 
            className="relative max-w-3xl max-h-full overflow-auto transition-transform duration-300" 
            onClick={(e) => e.stopPropagation()}
            style={{ transform: enlargedImage ? 'scale(1)' : 'scale(0.95)' }}
          >
            <img src={enlargedImage} alt="Enlarged" className="w-full h-auto object-contain" />
            <button 
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setEnlargedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      
      {/* Hackaton IA Section */}
      <section className="py-20 bg-aurentia-card text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
              Hackathon IA
            </h2>
            
            <div className="scroll-reveal mb-10">
              <Badge className="bg-white text-aurentia-card mx-auto">Projet</Badge>
            </div>
            
            <p className="scroll-reveal text-xl mb-10">
              Découvrez notre projet primé lors du Hackathon IA, une solution innovante pour le réemploi des matériaux de construction.
            </p>
            
            <div className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column: Challenge and Solution */}
              <div className="flex flex-col gap-8">
                <div className="bg-white bg-opacity-10 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Le défi</h3>
                  <p>
                    Le client a une entreprise de réemploi des matériaux lors de la destruction de bâtiments. Il a besoin de générer des rapports d'analyses des bâtiments et cela prend aux collaborateurs de 3 à 5 jours.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
                </div>

                <div className="bg-white bg-opacity-10 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">La solution</h3>
                  <p>
                    Une app tout en 1 permettant de générer des rapports d'analyses en quelques minutes, avec possibilité de chatter avec les rapports, projets, etc. + créer des posts et articles de blog selon le projet choisi.
                  </p>
                </div>
              </div>

              {/* Right Column: LinkedIn Post */}
              <div className="flex justify-center">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7331637013185466368?collapsed=1" height="543" width="504" frameBorder="0" allowFullScreen={true} title="Post intégré"></iframe>
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
              Mes valeurs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="scroll-reveal bg-[#f5f5f4] p-6 rounded-lg shadow-sm border-none"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-extrabold mb-4 text-[#2E333D]">{value.title}</h3>
                  <hr className="my-2 border-gray-300" />
                  <p className="text-gray-600 mt-4">{value.description}</p>
                </Card>
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
              Ma vision
            </h2>
            
            <p className="scroll-reveal text-xl mb-10">
              Je crois que chaque entrepreneur mérite des outils et des solutions de qualité pour concrétiser sa vision.
            </p>
            
            <div className="scroll-reveal bg-white p-8 rounded-lg shadow-sm">
              <p className="text-xl italic text-aurentia-card">
                "La mission d'aurentia est de démocratiser l'accès à des solutions premium en design, automatisation et stratégie business, 
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
              Découvrez comment Aurentia transformer votre entreprise.
            </p>
            
            <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-aurentia-card hover:bg-[#2E333D] hover:text-white hover:border-white"
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
