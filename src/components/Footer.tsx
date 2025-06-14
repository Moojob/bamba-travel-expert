import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Plane, GraduationCap, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">BAMBA Travel Expert</h3>
            <p className="text-gray-300 mb-4">
              BAMBA Travel Expert vous accompagne dans votre projet d'études à l'étranger et d'immigration avec un service personnalisé et professionnel.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center justify-center w-14 h-14">
                <img src="/facebook.png" alt="Facebook" className="h-6 w-6 object-contain" />
              </a>
              <a href="#" className="flex items-center justify-center w-14 h-14">
                <img src="/instagram.png" alt="Instagram" className="h-6 w-6 object-contain" />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9">
                <img src="/tiktok.png" alt="TikTok" className="h-7 w-7 object-contain" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              {/* <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li> */}
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Études universitaires
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Visa étudiant
                </Link>
              </li>
              {/* <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Programmes d'échange
                </Link>
              </li> */}
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Logement étudiant
                </Link>
              </li>
              {/* <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Immigration
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-bamba-red mt-1 flex-shrink-0" />
                <span className="text-gray-300">45 Bédard, Québec - Canada</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-bamba-red flex-shrink-0" />
                <a href="tel:+1 819-921-2540" className="text-gray-300 hover:text-white">
                +1 819-921-2540 (CAN) <br /> +221 77 656 25 40 (SEN)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-bamba-red flex-shrink-0" />
                <a href="mailto:infos.bamba.travel.expert@gmail.com
" className="text-gray-300 hover:text-white">
                infos.bamba.travel.expert@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BAMBA Travel Expert. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
