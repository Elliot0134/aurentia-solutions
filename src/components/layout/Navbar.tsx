import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[96%] max-w-[80%] rounded-xl shadow-lg overflow-x-hidden md:overflow-visible ${
          isScrolled
            ? "bg-white/80 backdrop-filter backdrop-blur-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-codepro font-bold text-2xl">
            Aurentia<span className="text-aurentia-card">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu onOpenChange={setIsSolutionsMenuOpen}>
              <DropdownMenuTrigger className="font-codepro text-aurentia-text hover:opacity-70 transition-opacity flex items-center">
                Nos solutions <span className={`ml-1 transition-transform duration-300 ${isSolutionsMenuOpen ? 'rotate-180' : 'rotate-0'}`}><ChevronDown size={16} /></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/services/designs">Aurentia <span className="font-bold" style={{ color: '#ff5757' }}>Designs</span></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/ressources">Aurentia <span className="font-bold" style={{ color: '#1C4332' }}>Ressources</span></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/services/automation">Aurentia <span className="font-bold" style={{ color: '#5942ac' }}>Automation</span></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/saas/business-idea">Aurentia <span className="font-bold" style={{ color: '#2e333d' }}>Business Idea</span></Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/a-propos"
              className="font-codepro text-aurentia-text hover:opacity-70 transition-opacity"
            >
              À propos
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Button asChild className="bg-aurentia-card text-white hover:bg-opacity-90">
              <Link to="/contact">Me contacter</Link>
            </Button>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-aurentia-text"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[calc(4rem+20px)] left-1/2 transform -translate-x-1/2 w-[96%] max-w-[80%] rounded-b-xl shadow-lg bg-white/80 backdrop-filter backdrop-blur-xl transition-transform duration-300 md:hidden z-[60] ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            {/* Close button is now in the main header */}
          </div>
          <nav className="flex flex-col space-y-4">
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <Link to="/services/designs" className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                Aurentia Designs
              </Link>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <Link to="/ressources" className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                Aurentia Ressources
              </Link>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <Link to="/services/automation" className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                Aurentia Automation
              </Link>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <Link to="/saas/business-idea" className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                Aurentia Business Idea
              </Link>
            </div>
            <Link
              to="/a-propos"
              className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              À propos
            </Link>
             <Link
              to="/contact"
              className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-auto pt-8">
            <Button className="w-full bg-aurentia-card text-white hover:bg-opacity-90">
              <Link to="/saas/business-idea" onClick={() => setIsMobileMenuOpen(false)}>
                Découvrir Aurentia Business Idea
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
