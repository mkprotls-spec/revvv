
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hammer } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Présentation', path: '/presentation' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/portfolio' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`p-1.5 rounded-lg transition-transform duration-300 group-hover:rotate-12 ${scrolled ? 'bg-amber-800' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Hammer className="text-white w-6 h-6" />
            </div>
            <div>
              <span className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                MKM <span className="text-amber-600">RÉNOV</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.path 
                    ? 'text-amber-600' 
                    : scrolled ? 'text-slate-600 hover:text-amber-600' : 'text-slate-100 hover:text-amber-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-600 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <a 
              href="tel:0467000000" 
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full border-2 transition-all duration-300 font-bold text-sm ${
                scrolled 
                  ? 'border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-amber-800 shadow-xl shadow-black/10'
              }`}
            >
              <Phone size={14} />
              <span>04 67 00 00 00</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-900' : 'text-white'} hover:text-amber-600 p-2 transition-colors`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 py-8 border-b border-amber-100' : '-translate-y-full opacity-0 overflow-hidden'}`}>
        <div className="px-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-2xl font-serif text-slate-800 hover:text-amber-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:0467000000" 
            className="flex items-center justify-center space-x-3 w-full bg-amber-800 text-white py-4 rounded-2xl font-bold shadow-lg shadow-amber-900/20"
          >
            <Phone size={20} />
            <span>Appeler maintenant</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
