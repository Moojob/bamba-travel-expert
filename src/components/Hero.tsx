
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  children?: ReactNode;
}

const Hero = ({
  title,
  subtitle,
  image,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  children,
}: HeroProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bamba-navy/90 to-bamba-navy/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">{subtitle}</p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-bamba-navy hover:bg-gray-100">
              <Link to={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Button asChild size="lg" variant="outline" className="bg-bamba-navy text-white border-white hover:bg-bamba-navy/80">
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
          
          {children && <div className="mt-12">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default Hero;
