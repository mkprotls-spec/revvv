
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Contactez MKM Rénov</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Étudions ensemble votre projet. Devis gratuit et intervention rapide dans tout l'Hérault.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-xl text-amber-800">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Téléphone</h4>
                  <p className="text-slate-600">04 67 00 00 00</p>
                  <p className="text-xs text-slate-400 mt-2">Lun - Ven : 8h00 - 18h30</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-xl text-amber-800">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">contact@mkm-renov.fr</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-xl text-amber-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Siège Social</h4>
                  <p className="text-slate-600">12 Rue des Artisans,<br />34410 Valras-Plage</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden">
              {submitted ? (
                <div className="p-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={40} />
                  </div>
                  <h2 className="text-3xl font-serif">Message Envoyé !</h2>
                  <p className="text-slate-600">Merci de nous avoir contactés. Un de nos experts reviendra vers vous sous 48 heures pour discuter de votre projet.</p>
                  <button onClick={() => setSubmitted(false)} className="text-amber-800 font-bold underline">Envoyer un autre message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Nom Complet</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 transition-all" placeholder="Jean Dupont" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Téléphone</label>
                      <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 transition-all" placeholder="06 00 00 00 00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email</label>
                    <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 transition-all" placeholder="jean@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Type de Projet</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 transition-all">
                      <option>Rénovation de charpente</option>
                      <option>Construction neuve</option>
                      <option>Traitement du bois</option>
                      <option>Maçonnerie générale</option>
                      <option>Autre projet</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Votre Message</label>
                    <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 transition-all" placeholder="Dites-nous en plus sur vos besoins..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2">
                    <Send size={20} />
                    <span>Envoyer ma demande</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11613.593441999252!2d3.26622415!3d43.2458444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b11068f4305847%3A0x407882116120150!2sValras-Plage!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
        <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs pointer-events-none">
          <div className="flex items-center space-x-2 text-amber-800 mb-2 font-bold">
            <MapPin size={18} />
            <span>MKM Rénov</span>
          </div>
          <p className="text-sm text-slate-600">Nous intervenons dans un rayon de 50km autour de Valras-Plage (Béziers, Agde, Narbonne...).</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
