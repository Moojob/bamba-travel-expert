
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-soluetude-600">SoluEtude</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-600 hover:text-soluetude-600 transition-colors">
            Accueil
          </Link>
          <Link to="/about" className="font-medium text-gray-600 hover:text-soluetude-600 transition-colors">
            À propos
          </Link>
          <Link to="/services" className="font-medium text-gray-600 hover:text-soluetude-600 transition-colors">
            Nos services
          </Link>
          <Link to="/contact" className="font-medium text-gray-600 hover:text-soluetude-600 transition-colors">
            Contact
          </Link>
          <Link to="/inscription" className="font-medium text-gray-600 hover:text-soluetude-600 transition-colors">
            Inscription
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-soluetude-600 hover:bg-soluetude-700">
            <Link to="/contact">Prendre rendez-vous</Link>
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
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-soluetude-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-soluetude-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-soluetude-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Nos services
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-soluetude-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/inscription"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-soluetude-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Inscription
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full bg-soluetude-600 hover:bg-soluetude-700">
                <Link to="/contact" onClick={toggleMenu}>Prendre rendez-vous</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
