
import React from 'react';
import { SERVICES } from '../constants';
import { Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1582234372722-50d7ccc30e5a?q=80&w=1200" 
            alt="Bois de charpente" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Nos Services d'Excellence</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            De la charpente traditionnelle à la rénovation complète, nous mettons notre expertise au service de la pérennité de votre bâti.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                  <img src={service.image} alt={service.title} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-6 left-6 bg-amber-600 text-white p-3 rounded-xl shadow-lg">
                    <Hammer size={24} />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <span className="text-amber-800 font-bold uppercase tracking-widest text-sm">Service {index + 1}</span>
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.longDescription}
                </p>
                {service.price && (
                  <p className="text-xl font-bold text-amber-800">
                    Tarif : {service.price}
                  </p>
                )}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="bg-amber-800 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-900 transition-colors inline-flex items-center space-x-2">
                    <span>Demander un devis</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-serif mb-6 text-amber-900">Besoin d'un service personnalisé ?</h3>
          <p className="text-amber-800 mb-8 max-w-2xl mx-auto">
            Chaque projet est unique. Nous nous déplaçons gratuitement pour étudier votre chantier et vous proposer une solution sur-mesure.
          </p>
          <Link to="/contact" className="border-2 border-amber-800 text-amber-800 px-10 py-4 rounded-full font-bold hover:bg-amber-800 hover:text-white transition-all">
            Nous Contacter
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
