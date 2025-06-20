
import { useState, useEffect } from "react";
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:max-w-[80%]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-4">
              Contactez-nous
            </h2>
            
            <p className="scroll-reveal text-lg">
              Une question ou un projet ? N'hésitez pas à nous contacter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <div className="scroll-reveal space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">contact@aurentia-solutions.fr</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Calendrier</h3>
                  <p className="text-gray-600 mb-2">
                    Planifiez un rendez-vous avec nous.
                  </p>
                  <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center">
                    <p className="text-sm text-gray-500">
                      Prochainement: intégration Calendly
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Chat</h3>
                  <p className="text-gray-600 mb-2">
                    Discutez avec nous en direct.
                  </p>
                  <div className="h-16 bg-gray-100 rounded-md flex items-center justify-center">
                    <p className="text-sm text-gray-500">
                      Prochainement: chat en direct
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="scroll-reveal space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-aurentia-card"
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
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-aurentia-card"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-aurentia-card text-white hover:bg-opacity-90 py-6 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
