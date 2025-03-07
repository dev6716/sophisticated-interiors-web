
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  ctaLink?: string;
  ctaText?: string;
  isHomepage?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  image, 
  ctaLink, 
  ctaText = "View Projects", 
  isHomepage = false 
}: HeroProps) => {
  return (
    <div 
      className="hero-image relative h-[70vh] md:h-[80vh] flex items-center" 
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, ${isHomepage ? '0.6' : '0.4'})), url(${image})` 
      }}
    >
      <div className="container mx-auto px-4 text-white">
        <div className={`max-w-3xl ${isHomepage ? '' : 'text-center mx-auto'}`}>
          <h1 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up`}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {subtitle}
            </p>
          )}
          {ctaLink && (
            <Link
              to={ctaLink}
              className="inline-flex items-center bg-ks-yellow text-ks-darkGray px-6 py-3 font-medium hover:bg-white transition-all duration-300 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {ctaText}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
