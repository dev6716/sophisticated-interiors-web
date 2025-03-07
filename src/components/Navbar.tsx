
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/bcc4cf11-3dea-4606-ba58-ffd3041fc226.png" 
              alt="KS Design Logo" 
              className="h-12" 
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="font-medium hover:text-ks-yellow transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium hover:text-ks-yellow transition-colors">
              About
            </Link>
            <Link to="/projects" className="font-medium hover:text-ks-yellow transition-colors">
              Projects
            </Link>
            <Link to="/gallery" className="font-medium hover:text-ks-yellow transition-colors">
              Gallery
            </Link>
            <Link to="/services" className="font-medium hover:text-ks-yellow transition-colors">
              Services
            </Link>
            <Link to="/contact" className="font-medium hover:text-ks-yellow transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col px-4 py-6 space-y-4">
              <Link to="/" className="font-medium py-2 hover:text-ks-yellow transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="font-medium py-2 hover:text-ks-yellow transition-colors" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/projects" className="font-medium py-2 hover:text-ks-yellow transition-colors" onClick={toggleMenu}>
                Projects
              </Link>
              <Link to="/gallery" className="font-medium py-2 hover:text-ks-yellow transition-colors" onClick={toggleMenu}>
                Gallery
              </Link>
              <Link to="/services" className="font-medium py-2 hover:text-ks-yellow transition-colors" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/contact" className="font-medium py-2 hover:text-ks-yellow transition-colors" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
