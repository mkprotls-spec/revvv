
import React from 'react';
import { Hammer, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Hammer className="text-amber-500 w-8 h-8" />
              <span className="text-2xl font-bold tracking-tighter">
                MKM <span className="text-amber-500">RÉNOV</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Spécialistes en charpentes, menuiserie et rénovation de l'habitat dans l'Hérault. Un savoir-faire artisanal au service de vos projets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Accueil</Link></li>
              <li><Link to="/presentation" className="hover:text-amber-500 transition-colors">Notre Entreprise</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Nos Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-amber-500 transition-colors">Réalisations</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Devis Gratuit</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Coordonnées</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-500 shrink-0" size={20} />
                <span>12 Rue des Artisans,<br />34410 Valras-Plage</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-amber-500 shrink-0" size={20} />
                <span>04 67 00 00 00</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-amber-500 shrink-0" size={20} />
                <span>contact@mkm-renov.fr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">Recevez nos conseils et actualités sur la rénovation.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-slate-800 border-none rounded px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded transition-colors">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 MKM Rénov. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500">Mentions Légales</a>
            <a href="#" className="hover:text-amber-500">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
