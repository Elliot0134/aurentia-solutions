import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react"; // Import icons

const ServiceDesigns = () => {
  const pricingSectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ image: '', title: '', description: '' });
  const modalTimerRef = useRef<NodeJS.Timeout | null>(null);

  const openModal = (image: string, title: string, description: string) => {
    setModalContent({ image, title, description });
    setIsModalOpen(true);
    
    // Décalage légèrement la transition pour que le modal soit d'abord rendu
    setTimeout(() => {
      setIsModalVisible(true);
    }, 50);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    
    // Maintient le modal dans le DOM pendant la transition de sortie
    if (modalTimerRef.current) {
      clearTimeout(modalTimerRef.current);
    }
    
    modalTimerRef.current = setTimeout(() => {
      setIsModalOpen(false);
    }, 500); // Correspond à la durée de la transition
  };

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Prevent scrolling when modal is open
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

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

  const steps = [
    {
      number: "01",
      title: "Découverte",
      description: "Nous prenons le temps de comprendre votre entreprise, vos objectifs et votre vision."
    },
    {
      number: "02",
      title: "Stratégie",
      description: "Nous élaborons une stratégie créative qui répond précisément à vos besoins et objectifs."
    },
    {
      number: "03",
      title: "Création",
      description: "Nos designers créent des propositions visuelles uniques et impactantes pour votre marque."
    },
    {
      number: "04",
      title: "Affinement",
      description: "Nous affinons la proposition retenue en fonction de vos retours jusqu'à satisfaction."
    },
    {
      number: "05",
      title: "Livraison",
      description: "Vous recevez l'ensemble des fichiers finalisés, prêts à l'emploi, dans tous les formats nécessaires."
    }
  ];

  const cardsData = [
    {
      title: "IDENTITÉ",
      description: "Révélation totale de l'identité de marque",
      included: [
        "Audit de marque",
        "Création de logos",
        "Charte graphique",
        "Couleurs & typographies",
        "Éléments graphiques",
        "Positionnement de marque",
      ],
      offered: [
        "Analyse complète de votre cible (Croyez-nous, vous allez en apprendre beaucoup)",
        "Document de positionnement (Messages clés, pitch / cible etc.)",
      ],
      color: "design",
    },
    {
      title: "DIGITAL",
      description: "Nous optimisons votre présence numérique",
      included: [
        "Audit présence en ligne",
        "Kit réseaux sociaux",
        "Templates publications",
        "Site web (Landing page)",
        "Stratégie digitale",
        "Création de contenu",
      ],
      offered: [
        "Guide d'utilisation (Quelle stratégie digitale adopter pour votre business ?)",
        "50 idées de publications",
      ],
      color: "digital",
    },
    {
      title: "IMPRIMÉS",
      description: "Nous concevons vos supports physiques",
      included: [
        "Cartes de visite",
        "Flyers & brochures",
        "Supports promotionnels",
        "Solutions digitales intégrées",
      ],
      offered: [
        "Scan & Save (Cartes de contact digital, QR code format vCard)",
        "Suivit nombre de scans",
      ],
      color: "print",
    },
    {
      title: "SITES WEB",
      description: "Nous créons des sites web performants et sur mesure",
      included: [
        "Landing pages optimisées",
        "Sites vitrines",
        "Sites e-commerce",
        "Sites responsives",
        "Intégrations personnalisées",
        "Optimisation SEO",
      ],
      offered: [
        "1 article de blog détaillé",
        "Déploiement et hébergement web",
      ],
      color: "text",
    },
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
                Aurentia <span className='text-aurentia-design'>Design</span>
              </h1>

                <p className="scroll-reveal text-base mb-10">
                  Une esthétique premium pour une marque mémorable. De l'audit de marque aux logos, chartes graphiques, kits sociaux et supports marketing, nos designers créent des éléments visuels distinctifs qui renforcent votre positionnement et amplifient votre présence sur tous les canaux.
                </p>

                <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    variant="design"
                    asChild
                    className="text-base" // Added text-base class
                  >
                    <Link to="https://tally.so/r/w75kW0">
                      Envoyer une demande
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 scroll-reveal">
                <img
                  src="/aurentia-design-img.png"
                  alt="Image Hero Aurentia Design"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="py-20" style={{ backgroundColor: '#ff5757' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
            Révélez votre identité à tous les niveaux
          </h2>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-[90%] mx-auto"> {/* Increased max-width for cards */}
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
              Que proposons-nous ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Adjusted gap */}
              {cardsData.map((card, index) => (
                <div
                  key={card.title}
                  className={`scroll-reveal rounded-lg shadow-lg p-6 flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer border-2 border-solid`} // Added hover effect and cursor and border classes
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                    borderColor: card.title === "IDENTITÉ" ? "#ff5757" :
                                 card.title === "DIGITAL" ? "#5271ff" :
                                 card.title === "IMPRIMÉS" ? "#20683a" :
                                 card.title === "SITES WEB" ? "#2e333d" : "inherit"
                  }} // Added dynamic border color
                  onClick={() => pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' })} // Added click handler
                >
                  {/* Card Header - Fixed height */}
                  <div className="flex items-center mb-4 h-20">
                    <div className="flex flex-col"> {/* Container principal en colonne */}
                      <div className="flex items-center mb-2"> {/* Container pour l'image et le titre */}
                        {/* Image for Card Header */}
                        <img
                          src={card.title === "IDENTITÉ" ? "/img-identite.png" :
                               card.title === "DIGITAL" ? "/img-digital.png" :
                               card.title === "IMPRIMÉS" ? "/img-imprimes.png" :
                               card.title === "SITES WEB" ? "/img-ordi.png" : "/gift-icon.png"} // Utilisation des images correctes
                          alt={`Icone ${card.title}`}
                          className="w-12 h-12 object-contain mr-4" // Adjusted size and added object-contain
                        />
                        <h3 className="text-3xl font-black" style={{
                          color: card.title === "IDENTITÉ" ? "#ff5757" :
                                 card.title === "DIGITAL" ? "#5271ff" :
                                 card.title === "IMPRIMÉS" ? "#20683a" :
                                 card.title === "SITES WEB" ? "#2e333d" : "inherit"
                        }}>{card.title}</h3> {/* Modified colors */}
                      </div>
                      <p className="text-sm text-gray-600">{card.description}</p> {/* Description en dessous */}
                    </div>
                  </div>

                  {/* Trait séparateur gris */}
                  <div className="h-px bg-gray-200 w-full mt-2 mb-4"></div> {/* Reduced top margin */}

                  {/* Included Items - Fixed height */}
                  <div className="mb-6 h-[220px] overflow-y-auto">
                    <h4 className="text-lg font-semibold mb-2">Inclus :</h4>
                    <ul className="space-y-2">
                      {card.included.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-700">
                          <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" style={{
                            color: card.title === "IDENTITÉ" ? "#ff5757" :
                                  card.title === "DIGITAL" ? "#5271ff" :
                                  card.title === "IMPRIMÉS" ? "#20683a" :
                                  card.title === "SITES WEB" ? "#2e333d" : "inherit"
                          }} /> {/* Updated check icon color */}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Offered Items - Removed fixed height and scroll */}
                  <div>
                    {/* Titre avec background coloré */}
                    <div className="flex items-center mb-3 text-white py-2 px-3 rounded-full flex w-full mx-auto justify-center" style={{
                      backgroundColor: card.title === "IDENTITÉ" ? "#ff5757" :
                                       card.title === "DIGITAL" ? "#5271ff" :
                                       card.title === "IMPRIMÉS" ? "#20683a" :
                                       card.title === "SITES WEB" ? "#2e333d" : "inherit"
                    }}>
                      <img src="/gift-box.png" alt="Icone cadeau" className="h-6 w-6 mr-2" /> {/* Image for offered items */}
                      <h4 className="text-sm font-bold">OFFERT DANS CES OFFRES</h4>
                    </div>
                    <ul className="space-y-2 mt-3 pl-1 text-sm">
                      {card.offered.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-lg mr-2">•</span> {/* Bullet point */}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            {/* Add "Nous contacter" button below the cards */}
            <div className="mt-12 text-center">
              <Button
                variant="design"
                asChild
                className="text-lg px-8 py-3"
              >
                <Link to="https://tally.so/r/w75kW0">
                  Envoyer une demande
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-aurentia-background circuit-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
              Notre processus créatif
            </h2>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="scroll-reveal flex items-start gap-8"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl text-white" style={{ backgroundColor: "#ff5757" }}>
                      {step.number}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 bg-aurentia-background" ref={pricingSectionRef}>
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:max-w-[80%] bg-white rounded-3xl p-6" style={{ border: "2px solid #ff5757" }}>
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6 text-center">
              Tarifs
            </h2>

            <p className="scroll-reveal text-lg mb-12 text-center">
              Chaque projet étant unique, nos tarifs sont établis sur mesure en fonction de vos besoins spécifiques.
            </p>

            <div className="scroll-reveal text-center">
              <Button
                variant="design"
                asChild
                className="text-lg px-8 py-3"
              >
                <Link to="https://tally.so/r/w75kW0">
                  Envoyer une demande
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations Section */}
      <section className="py-20 bg-aurentia-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
              Le projet pépite
            </h2>

            <p className="scroll-reveal text-lg mb-12">
              Retrouvez la plus belle création chez Aurentia Design : l'identité globale de Friend'iz
            </p>

            <div className="scroll-reveal grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Site web", image: "Site-temoignage-friendiz.png" },
                { title: "Flyer", image: "Flyer-temoignage-friendiz.png" },
                { title: "Rollup", image: "Rollup-temoignage-friendiz.png" },
                { title: "Produit", image: "Produits-temoignage-friendiz.png" },
                { title: "Catalogue", image: "Catalogue-temoignage-friendiz.png" },
                { title: "Réseaux", image: "Instagram-temoignage-friendiz.png" },
                { title: "Présentoir", image: "Presentoirs-temoignage-friendiz.png" },
                { title: "Shooting", image: "Shooting-temoignage-friendiz.png" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => openModal(`/${item.image}`, item.title, `Description détaillée de la réalisation ${item.title}.`)}
                >
                  {/* Title */}
                  <h3 className="text-lg font-semibold p-4 text-center">{item.title}</h3>
                  {/* Image */}
                  <div className="aspect-square flex items-center justify-center">
                    <img
                      src={`/${item.image}`}
                      alt={`Réalisation ${item.title}`}
                      className="w-full h-full object-cover rounded-b-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 p-4 transition-all duration-500 ease-in-out ${
            isModalVisible ? 'bg-opacity-75 opacity-100' : 'bg-opacity-0 opacity-0'
          }`}
          onClick={closeModal}
          style={{pointerEvents: isModalVisible ? 'auto' : 'none'}}
        >
          <div
            className={`bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative transition-all duration-500 ease-in-out ${
              isModalVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 z-10" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <img
                  src={modalContent.image}
                  alt={modalContent.title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-4 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{modalContent.title}</h3>
                <p className="text-gray-700 text-base">{modalContent.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 text-white" style={{ backgroundColor: "#ff5757" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre identité visuelle ?
            </h2>

            <p className="scroll-reveal text-xl mb-10">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>

            <div className="scroll-reveal flex justify-center">
              <Button
                variant="outline"
                asChild
                className="border-white text-aurentia-design hover:bg-white/10 text-base"
              >
                <Link to="https://tally.so/r/w75kW0">
                  Envoyer une demande
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDesigns;
