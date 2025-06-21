import { useState, useEffect, useRef } from "react";
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

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Re-run effect if menu state changes

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
                  <Link to="https://landing.aurentia.fr/">Aurentia <span className="font-bold" style={{ color: '#2e333d' }}>Business IA</span></Link>
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
              ref={buttonRef}
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
        ref={menuRef}
        className={`fixed top-[calc(4rem+20px)] left-1/2 transform -translate-x-1/2 w-[96%] max-w-[80%] rounded-xl shadow-lg bg-white/80 transition-all duration-300 md:hidden z-[60] ${
          isMobileMenuOpen ? "translate-y-0 opacity-100 backdrop-blur-xl" : "-translate-y-full opacity-0 backdrop-blur-none pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            {/* Close button is now in the main header */}
          </div>
          <nav className="flex flex-col space-y-4">
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <Link to="/services/designs" className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                Aurentia <span className="font-bold" style={{ color: '#ff5757' }}>Designs</span>
              </Link>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <Link to="/ressources" className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                Aurentia <span className="font-bold" style={{ color: '#1C4332' }}>Ressources</span>
              </Link>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <Link to="/services/automation" className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                Aurentia <span className="font-bold" style={{ color: '#5942ac' }}>Automation</span>
              </Link>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <Link to="https://landing.aurentia.fr/" className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                Aurentia <span className="font-bold" style={{ color: '#2e333d' }}>Business IA</span>
              </Link>
            </div>
            <Link
              to="/a-propos"
              className="font-codepro text-xl text-aurentia-text hover:opacity-70 transition-opacity text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              À propos
            </Link>
          </nav>
          <div className="mt-auto pt-8">
            <Button className="w-full bg-aurentia-card text-white hover:bg-opacity-90">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Me contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
