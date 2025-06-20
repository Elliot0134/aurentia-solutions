
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et slogan */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="font-codepro font-bold text-2xl">
              Aurentia<span className="text-aurentia-card">.</span>
            </Link>
            <p className="mt-4 text-sm text-aurentia-text">
              Des solutions intégrées pour transformer votre vision en réussite entrepreneuriale.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-codepro font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/designs" className="text-aurentia-text hover:opacity-70 transition-opacity text-sm">
                  Aurentia Designs
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="text-aurentia-text hover:opacity-70 transition-opacity text-sm">
                  Aurentia Ressources
                </Link>
              </li>
              <li>
                <Link to="/services/automation" className="text-aurentia-text hover:opacity-70 transition-opacity text-sm">
                  Aurentia Automation
                </Link>
              </li>
              <li>
                <Link to="/saas/business-idea" className="text-aurentia-text hover:opacity-70 transition-opacity text-sm">
                  Aurentia Business Idea
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-codepro font-semibold text-lg mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/a-propos" className="text-aurentia-text hover:opacity-70 transition-opacity text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-aurentia-text hover:opacity-70 transition-opacity text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-aurentia-text hover:opacity-70 transition-opacity text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-aurentia-text hover:opacity-70 transition-opacity text-sm">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-codepro font-semibold text-lg mb-4">Contact</h4>
            <p className="text-sm text-aurentia-text mb-2">contact@aurentia-solutions.fr</p>
            <div className="flex space-x-4 mt-4">
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

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-aurentia-text">
          <p>&copy; {currentYear} Aurentia Solutions. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
