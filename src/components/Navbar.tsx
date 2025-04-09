
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Plane, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm border-b py-3"
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.img 
            src="/lovable-uploads/5ddda8bb-1a0f-433f-8fb0-e7922184a460.png" 
            alt="BAMBA Travel Expert" 
            className="h-14"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-600 hover:text-bamba-navy transition-colors">
            Accueil
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium text-gray-600 hover:text-bamba-navy transition-colors">
              Destinations <ChevronDown size={16} className="ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/destinations" className="w-full">Toutes les destinations</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/destinations" className="w-full">Canada</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/destinations" className="w-full">Royaume-Uni</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/destinations" className="w-full">Australie</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/about" className="font-medium text-gray-600 hover:text-bamba-navy transition-colors">
            À propos
          </Link>
          <Link to="/services" className="font-medium text-gray-600 hover:text-bamba-navy transition-colors">
            Nos services
          </Link>
          <Link to="/contact" className="font-medium text-gray-600 hover:text-bamba-navy transition-colors">
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
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bamba-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">
              Destinations
              <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-200">
                <Link
                  to="/destinations"
                  className="block px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:text-bamba-navy hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Toutes les destinations
                </Link>
                <Link
                  to="/destinations"
                  className="block px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:text-bamba-navy hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Canada
                </Link>
                <Link
                  to="/destinations"
                  className="block px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:text-bamba-navy hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Royaume-Uni
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bamba-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bamba-navy hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Nos services
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
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
