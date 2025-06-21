import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const ServiceAutomation = () => {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [automationIdea, setAutomationIdea] = useState("");
  const [webhookResponse, setWebhookResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const availableTools = [
    "Airtable",
    "Calendly",
    "Excel",
    "Gmail",
    "Google Drive",
    "Hubspot",
    "Instagram",
    "Linkedin",
    "Notion",
    "Paypal",
    "Shopify",
    "Slack",
    "Supabase",
    "Trello",
    "Whatsap",
    "Zoom",
  ];

  const handleToolSelect = (tool: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedTools([...selectedTools, tool]);
    } else {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    }
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

  const benefits = [
    {
      stat: "75%",
      title: "Réduction des tâches manuelles",
      description: "Libérez votre équipe des tâches répétitives et chronophages pour vous concentrer sur des activités à forte valeur ajoutée."
    },
    {
      stat: "45%",
      title: "Gain de productivité",
      description: "Augmentez significativement votre productivité en automatisant les processus clés de votre entreprise."
    },
    {
      stat: "60%",
      title: "Réduction des erreurs",
      description: "Minimisez les erreurs humaines et garantissez une exécution cohérente et précise de vos processus."
    },
    {
      stat: "30%",
      title: "Économies réalisées",
      description: "Réduisez vos coûts opérationnels tout en augmentant votre efficacité et votre capacité de traitement."
    }
  ];

  const automationTypes = [
    {
      title: "Agent Assistant",
      description: "Résume vos réunions, vous propose les tâches clés → envoie tout dans Teams ou par email"
    },
    {
      title: "Agent Commercial",
      description: "Met à jour les fiches prospects, suit les opportunités, qualifie automatiquement les contacts."
    },
    {
      title: "Agent Onboarding",
      description: "Gère tout l'onboarding client : mails, factures, accès, synchronisation CRM."
    },
    {
      title: "Agent Support Automatisé",
      description: "Vos équipes posent une question dans Slack  ? L'agent répond grâce à votre documentation interne."
    },
    {
      title: "Assistant Virtuel",
      description: "Créez un assistant IA (support, conseil, technique, helpdesk) à partir de vos fichiers internes."
    },
    {
      title: "Agent Marketing",
      description: "Génération d'idées -> Rédaction -> plannification -> publication sur les réseaux"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analyse des besoins",
      description: "Nous étudions en détail vos processus actuels pour identifier les opportunités d'automatisation les plus pertinentes."
    },
    {
      number: "02",
      title: "Conception du workflow",
      description: "Nous concevons un workflow N8N optimisé qui répond précisément à vos besoins d'automatisation."
    },
    {
      number: "03",
      title: "Développement",
      description: "Nous développons la solution d'automatisation en intégrant toutes les applications et services nécessaires."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Nous testons rigoureusement la solution et l'optimisons pour garantir un fonctionnement parfait."
    },
    {
      number: "05",
      title: "Déploiement & Formation",
      description: "Nous déployons la solution et formons votre équipe à son utilisation pour une adoption rapide et efficace."
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
                Aurentia <span style={{ color: '#5942ac' }}>Automation</span>
              </h1>

                <p className="scroll-reveal text-base mb-10">
                  Optimisez votre efficacité et libérez votre potentiel grâce à l'automatisation sur mesure. De la gestion des tâches répétitives à l'intégration de systèmes complexes, nous créons des solutions automatisées qui transforment votre façon de travailler.
                </p>

                <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    variant="default" // Utilisation du variant par défaut ou un nouveau si défini pour l'automatisation
                    asChild
                    className="text-base text-white bg-[#5942ac] hover:bg-[#5942ac]/90"
                  >
                    <Link to="https://tally.so/r/wvb9L0">
                      Discuter de mon projet
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 scroll-reveal">
                <img
                  src="/aurentia-auto-main-img.png"
                  alt="Image Hero Aurentia Automation"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Tools Section */}
      <section className="py-20 bg-[#5942ac]">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:max-w-[80%] text-center">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-4 text-white">
              Connectez n'importe quels outils entre eux
            </h2>
            <h3 className="scroll-reveal text-xl mb-12 text-white">
              (Vraiment tous vos outils)
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {/* Images des outils - à remplacer avec les chemins corrects */}
              {availableTools.map((tool, index) => (
                <img
                  key={index}
                  src={`/${tool.replace(/\s/g, '')}-logo.png`}
                  alt={`Logo ${tool}`}
                  className="w-full h-auto object-cover rounded-lg scroll-reveal"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button
                className="bg-white text-[#5942ac] hover:bg-white/90 text-lg font-medium px-8 py-3"
                asChild
              >
                <Link to="https://tally.so/r/wvb9L0">
                  Tester
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:max-w-[80%]"> {/* Added wrapper */}
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
              Les bénéfices de l'automatisation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className="scroll-reveal text-center shadow-md p-6 rounded-lg bg-white"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <span className="text-5xl font-bold" style={{ color: '#5942ac' }}>{benefit.stat}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div> {/* Closed wrapper */}
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-aurentia-background circuit-bg">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:max-w-[80%]"> {/* Added wrapper */}
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
              Exemples concrets d'automatisations
            </h2>
            
            {/* Large Container for Cards */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {automationTypes.map((type, index) => (
                  <div
                    key={type.title}
                    className="scroll-reveal p-6 rounded-lg border border-gray-200 flex items-center" // Added flex and items-center
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <img
                      src={`/${type.title === 'Assistant Virtuel' ? 'agent-chatbot' : type.title === 'Agent Support Automatisé' ? 'agent-support' : type.title === 'Agent Commercial' ? 'agent-crm' : type.title.toLowerCase().replace(/\s/g, '-')}-icon.png`}
                      alt={`${type.title} Icon`}
                      className="w-12 h-12 mr-6 flex-shrink-0"
                    />
                    {/* Container for Title and Description */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> {/* Closed wrapper */}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:max-w-[80%]"> {/* Added wrapper */}
            <div className="max-w-4xl mx-auto">
              <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
                Notre processus d'automatisation
              </h2>
              
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div 
                    key={step.number} 
                    className="scroll-reveal flex items-start gap-8"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 text-white rounded-full flex items-center justify-center font-bold text-2xl" style={{ backgroundColor: '#5942ac' }}>
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
          </div> {/* Closed wrapper */}
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-20 bg-aurentia-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:max-w-[80%]"> {/* Added wrapper */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
                Technologie N8N
              </h2>
              
              <p className="scroll-reveal text-lg mb-12">
                Nous utilisons N8N, une technologie d'automatisation puissante et flexible qui permet de connecter pratiquement n'importe quelle application ou service.
              </p>
              
              <div className="scroll-reveal mb-12">
                <img
                  src="/n8n-technology.png"
                  alt="Aperçu de l'interface N8N"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="scroll-reveal text-left">
                <h3 className="text-2xl font-semibold mb-4">Les avantages de N8N</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg 
                      className="mt-1 mr-3 w-5 h-5 flex-shrink-0" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      style={{ color: '#5942ac' }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Plus de 200 intégrations disponibles avec des applications populaires</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      className="mt-1 mr-3 w-5 h-5 flex-shrink-0" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      style={{ color: '#5942ac' }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Interface visuelle intuitive pour créer des workflows complexes</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      className="mt-1 mr-3 w-5 h-5 flex-shrink-0" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      style={{ color: '#5942ac' }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Possibilité d'hébergement sur vos propres serveurs pour une sécurité maximale</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      className="mt-1 mr-3 w-5 h-5 flex-shrink-0" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      style={{ color: '#5942ac' }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Personnalisation avancée pour s'adapter parfaitement à vos besoins spécifiques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div> {/* Closed wrapper */}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 text-white" style={{ backgroundColor: '#5942ac' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:max-w-[80%]"> {/* Added wrapper */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
                Prêt à automatiser vos processus ?
              </h2>
              
              <p className="scroll-reveal text-xl mb-10">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins d'automatisation et obtenir une proposition sur mesure.
              </p>
              
              <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-[#5942ac] hover:bg-opacity-90"
                  asChild
                >
                  <Link to="https://tally.so/r/wvb9L0">
                    Demander mon agent IA
                  </Link>
                </Button>
                
              </div>
            </div>
          </div> {/* Closed wrapper */}
        </div>
      </section>
    </div>
  );
};

export default ServiceAutomation;
