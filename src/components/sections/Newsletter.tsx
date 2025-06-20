
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inscription réussie",
        description: "Merci de vous être inscrit à notre newsletter !",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-aurentia-background circuit-bg">
      <div className="container mx-auto px-4 lg:max-w-[80%]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="scroll-reveal text-3xl md:text-4xl font-bold mb-6">
            Restez informé de nos dernières innovations
          </h2>
          
          <p className="scroll-reveal text-lg mb-10">
            Inscrivez-vous à notre newsletter pour recevoir des conseils exclusifs, des ressources gratuites et les dernières actualités d'Aurentia Solutions.
          </p>
          
          <form onSubmit={handleSubmit} className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-grow px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-aurentia-card"
            />
            
            <Button 
              type="submit"
              className="bg-aurentia-card text-white hover:bg-opacity-90 px-8 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Inscription..." : "S'inscrire"}
            </Button>
          </form>
          
          <p className="scroll-reveal text-sm text-gray-500 mt-4">
            Nous respectons votre vie privée. Aucun spam, jamais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
