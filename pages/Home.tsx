
import React from 'react';
import { Hammer, CheckCircle2, Star, ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000" 
            alt="Charpente en construction" 
            className="w-full h-full object-cover animate-hero-zoom scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-black rounded-full mb-8 tracking-[0.2em] uppercase shadow-xl shadow-amber-900/30">
              Artisan Charpentier dans l'Hérault
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 max-w-4xl leading-[1.1] drop-shadow-2xl">
              L'Art de la <span className="text-amber-500 italic">Structure</span> & de la Rénovation
            </h1>
            <p className="text-xl text-slate-100 mb-12 max-w-2xl font-light leading-relaxed opacity-90">
              MKM Rénov fusionne savoir-faire ancestral et techniques modernes pour des ouvrages d'exception qui traversent les âges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
              <Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-full font-black flex items-center justify-center space-x-3 transition-all group shadow-2xl shadow-amber-900/40 hover:-translate-y-1">
                <span>Estimation Gratuite</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/portfolio" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/40 px-10 py-5 rounded-full font-black flex items-center justify-center transition-all hover:border-white shadow-2xl">
                Nos Projets
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
            <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative reveal">
              <div className="overflow-hidden rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                  <img 
                    src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000" 
                    alt="Travail du bois" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
              </div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-50 rounded-full mix-blend-multiply -z-10 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 bg-amber-800 text-white p-10 rounded-3xl shadow-2xl z-20 hidden sm:block hover:scale-105 transition-transform duration-300">
                <span className="block text-6xl font-serif mb-1">15+</span>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">Ans de Savoir-Faire</span>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <h2 className="text-4xl md:text-6xl font-serif mb-10 text-slate-900 leading-[1.15]">
                L'âme du bois, <br/><span className="text-amber-800 italic">l'exigence du maître</span>
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg font-light">
                Basé à Valras-Plage, MKM Rénov intervient dans tout l'Hérault pour magnifier vos structures. Nous ne nous contentons pas de rénover ; nous redonnons une âme à vos charpentes avec une précision chirurgicale.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                    "Normes DTU strictes",
                    "Garantie Décennale",
                    "Matériaux Éco-sourcés",
                    "Nettoyage de chantier"
                ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-slate-800 font-bold group">
                        <div className="bg-amber-100 p-1 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                            <CheckCircle2 size={18} />
                        </div>
                        <span className="text-sm tracking-tight">{item}</span>
                    </div>
                ))}
              </div>
              <Link to="/presentation" className="inline-flex items-center space-x-3 text-amber-900 font-black group">
                <span className="border-b-2 border-amber-800 pb-1">Notre philosophie</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Expertises Signature</h2>
          <div className="w-20 h-1.5 bg-amber-600 mx-auto mb-10 rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            Des solutions techniques de pointe pour sublimer chaque m² de votre patrimoine.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.slice(0, 3).map((service, i) => (
            <div key={service.id} className="reveal group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-4" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="relative h-72 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif">{service.title}</h3>
                </div>
              </div>
              <div className="p-10">
                <p className="text-slate-500 mb-8 line-clamp-3 font-light leading-relaxed italic">
                  "{service.description}"
                </p>
                <Link to="/services" className="inline-flex items-center space-x-2 text-amber-800 font-black hover:text-amber-600 transition-colors uppercase text-xs tracking-[0.2em]">
                  <span>Explorer l'expertise</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats with Glassmorphism */}
      <section className="py-32 bg-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full w-full">
                {[...Array(48)].map((_, i) => <div key={i} className="border border-white/10 h-32"></div>)}
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { icon: Shield, val: "10 Ans", label: "Assurance Décennale" },
            { icon: Clock, val: "100%", label: "Délais Maîtrisés" },
            { icon: Users, val: "500+", label: "Chantiers Livrés" },
            { icon: Hammer, val: "Orfèvre", label: "Label Qualité" }
          ].map((stat, i) => (
            <div key={i} className="reveal space-y-4 group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-20 h-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                    <stat.icon size={32} className="text-amber-500" />
                </div>
                <h4 className="text-3xl md:text-4xl font-serif text-white">{stat.val}</h4>
                <p className="text-amber-200/60 font-black uppercase text-[10px] tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* High-end Testimonials */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 italic text-slate-900">Paroles d'Exception</h2>
            <div className="w-20 h-1.5 bg-amber-800 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="reveal bg-slate-50/50 p-12 rounded-[2.5rem] border border-slate-100 relative hover-glow group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="absolute -top-6 left-12 w-12 h-12 bg-amber-800 rounded-2xl flex items-center justify-center text-white text-2xl font-serif group-hover:-rotate-6 transition-transform">
                    “
                </div>
                <div className="flex text-amber-500 mb-8 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < t.rating ? "currentColor" : "none"} className="group-hover:scale-125 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-slate-700 mb-10 italic leading-relaxed font-light text-lg font-serif">
                    {t.comment}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold text-sm">
                      {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-sm tracking-tight">{t.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white px-4">
          <div className="max-w-7xl mx-auto reveal bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-tight">Prêt à transformer <br/><span className="text-amber-500 italic">votre habitat ?</span></h2>
                  <Link to="/contact" className="inline-flex bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 rounded-full font-black text-lg transition-all hover:scale-105 shadow-2xl shadow-amber-900/50">
                      Discutons de votre projet
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
