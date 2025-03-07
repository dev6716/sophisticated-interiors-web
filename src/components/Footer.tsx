
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ks-darkGray text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src="/logo.png" alt="KS Design Logo" className="h-10 mb-6" />
            <p className="mb-6 text-sm leading-relaxed">
              Transforming spaces into captivating environments that reflect unique styles.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ksdesign_ahmedabad/" 
                target="_blank" 
                rel="noreferrer"
                className="text-white hover:text-ks-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:samkit@ksdesign.co.in" 
                className="text-white hover:text-ks-yellow transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-ks-yellow transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-ks-yellow transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-ks-yellow transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-ks-yellow transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-ks-yellow transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-ks-yellow transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-ks-yellow" />
                <p className="text-sm">
                  714/ One World West, Besides Bopal Approach BRTS Stand, Iscon Ambali Road, Bopal, Ahmedabad – 380058
                </p>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-ks-yellow" />
                <a href="tel:+919327008774" className="text-sm hover:text-ks-yellow transition-colors">
                  +91 93270 08774
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-ks-yellow" />
                <a href="tel:+918735975757" className="text-sm hover:text-ks-yellow transition-colors">
                  +91 87359 75757
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-ks-yellow" />
                <a href="mailto:samkit@ksdesign.co.in" className="text-sm hover:text-ks-yellow transition-colors">
                  samkit@ksdesign.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} KS Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
