
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="pt-24 bg-aurentia-background">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="scroll-reveal text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            
            <p className="scroll-reveal text-xl mb-10">
              Nous sommes à votre écoute pour discuter de vos projets et besoins.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <div className="scroll-reveal space-y-12">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">contact@aurentia-solutions.fr</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Réseaux sociaux</h3>
                        <div className="flex space-x-4">
                          <a href="#" aria-label="LinkedIn" className="text-aurentia-text hover:text-aurentia-card transition-colors">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="20" 
                              height="20" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                          <a href="#" aria-label="Twitter" className="text-aurentia-text hover:text-aurentia-card transition-colors">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="20" 
                              height="20" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </a>
                          <a href="#" aria-label="Instagram" className="text-aurentia-text hover:text-aurentia-card transition-colors">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="20" 
                              height="20" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Prenez rendez-vous</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Calendrier</h3>
                        <p className="text-gray-600 mb-4">
                          Réservez un créneau dans notre agenda pour discuter de votre projet.
                        </p>
                        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                          <p className="text-gray-500">Prochainement: intégration Calendly</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Chat en direct</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-600 mb-4">
                          Discutez avec nous en temps réel pour obtenir des réponses rapides.
                        </p>
                        <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                          <p className="text-gray-500">Prochainement: chat en direct</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="scroll-reveal">
                  <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-aurentia-card"
                          placeholder="Votre nom"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-aurentia-card"
                          placeholder="votre.email@exemple.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-aurentia-card"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="design">Aurentia Designs</option>
                        <option value="ressources">Aurentia Ressources</option>
                        <option value="automation">Aurentia Automation</option>
                        <option value="business-idea">Aurentia Business Idea</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="presse">Presse</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={8}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-aurentia-card"
                        placeholder="Décrivez votre projet ou votre demande en détail..."
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit"
                        className="bg-aurentia-card text-white hover:bg-opacity-90 px-8 py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-aurentia-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
              Questions fréquentes
            </h2>
            
            <div className="scroll-reveal space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Combien de temps faut-il pour obtenir une réponse ?</h3>
                <p className="text-gray-600">
                  Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrées.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Proposez-vous des devis gratuits ?</h3>
                <p className="text-gray-600">
                  Oui, tous nos devis sont gratuits et sans engagement. Nous prenons le temps d'analyser vos besoins pour vous proposer une solution adaptée.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Travaillez-vous avec des clients internationaux ?</h3>
                <p className="text-gray-600">
                  Oui, nous travaillons avec des clients du monde entier. Nos solutions sont adaptables à tous les marchés et toutes les cultures.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Quels sont vos délais de réalisation ?</h3>
                <p className="text-gray-600">
                  Nos délais varient en fonction de la complexité du projet. Nous établissons toujours un calendrier précis au début de chaque collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Legal Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-16 text-center">
              Informations légales
            </h2>
            
            <div className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-4">Mentions légales</h3>
                <p className="text-gray-600 mb-4">
                  Aurentia Solutions est une entreprise française soumise au droit français.
                </p>
                <Button 
                  variant="outline"
                  className="border-aurentia-card text-aurentia-card hover:bg-aurentia-background"
                  asChild
                >
                  <Link to="/mentions-legales">
                    Consulter les mentions légales
                  </Link>
                </Button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Politique de confidentialité</h3>
                <p className="text-gray-600 mb-4">
                  Nous accordons une importance capitale à la protection de vos données personnelles.
                </p>
                <Button 
                  variant="outline"
                  className="border-aurentia-card text-aurentia-card hover:bg-aurentia-background"
                  asChild
                >
                  <Link to="/confidentialite">
                    Consulter notre politique
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-aurentia-card text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            
            <p className="scroll-reveal text-xl mb-10">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment Aurentia Solutions peut vous aider.
            </p>
            
            <div className="scroll-reveal">
              <Button 
                className="bg-white text-aurentia-card hover:bg-opacity-90"
                size="lg"
                asChild
              >
                <a href="mailto:contact@aurentia-solutions.fr">
                  Envoyer un email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
