import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo - increased height from h-16 to h-20 */}
        <Link to="/" className="flex items-center gap-2">
          <img src="logo_bamba-removebg-preview.png" alt="BAMBA Travel Expert" className="h-20" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-bamba-navy hover:text-bamba-dark-navy transition-colors">
            Accueil
          </Link>
          <Link to="/services" className="font-medium text-bamba-navy hover:text-bamba-dark-navy transition-colors">
            Nos services
          </Link>
          <Link to="/destinations" className="font-medium text-bamba-navy hover:text-bamba-dark-navy transition-colors">
            Destinations
          </Link>
          <Link to="/contact" className="font-medium text-bamba-navy hover:text-bamba-dark-navy transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-bamba-navy hover:bg-opacity-90">
            <Link to="/contact">
              <Plane size={18} className="mr-2" />
              Prendre rendez-vous
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bamba-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bamba-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Nos services
            </Link>
            <Link
              to="/destinations"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bamba-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bamba-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full bg-bamba-navy hover:bg-opacity-90">
                <Link to="/contact" onClick={toggleMenu}>
                  <Plane size={18} className="mr-2" />
                  Prendre rendez-vous
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
