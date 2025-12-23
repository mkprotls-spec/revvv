
import React from 'react';
import { ShieldCheck, Heart, Medal, Target } from 'lucide-react';

const Presentation: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif mb-8 text-slate-900 leading-tight">
              Une passion du <span className="text-amber-800 italic underline decoration-amber-200">bois</span> transmise avec excellence
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
              Depuis plus de 15 ans, MKM Rénov s'est imposé comme une référence dans le domaine de la charpente et de la rénovation haut de gamme dans l'Hérault.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Fondée par des passionnés du métier, notre entreprise allie les techniques traditionnelles du compagnonnage à l'innovation technologique pour offrir des structures durables, esthétiques et sécurisées.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1582234372722-50d7ccc30e5a?q=80&w=1000" 
              alt="MKM Renov Atelier" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center space-x-4">
                <Medal className="text-amber-600 w-12 h-12" />
                <div>
                  <p className="font-bold text-lg">Certifié Qualibat RGE</p>
                  <p className="text-sm text-slate-500">Garantie d'excellence environnementale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Nos Valeurs Fondamentales</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: ShieldCheck, 
              title: "Qualité & Rigueur", 
              text: "Chaque projet est traité avec le plus grand soin. Nous n'utilisons que des bois de premier choix et respectons scrupuleusement les normes de sécurité en vigueur." 
            },
            { 
              icon: Heart, 
              title: "Passion du Métier", 
              text: "Le travail du bois est un art. Nous aimons les défis techniques et la satisfaction de voir un monument ou une villa retrouver sa superbe." 
            },
            { 
              icon: Target, 
              title: "Engagement Client", 
              text: "Votre satisfaction est notre seule publicité. Nous vous accompagnons de l'idée initiale jusqu'aux finitions les plus pointues." 
            }
          ].map((val, i) => (
            <div key={i} className="text-center space-y-4 p-8 bg-slate-50 rounded-2xl border border-transparent hover:border-amber-200 transition-all">
              <val.icon size={48} className="mx-auto text-amber-800" />
              <h3 className="text-2xl font-serif text-slate-900">{val.title}</h3>
              <p className="text-slate-600 leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=400" alt="Team member" className="rounded-xl aspect-square object-cover" />
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400" alt="Team member" className="rounded-xl aspect-square object-cover mt-8" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-serif">Une Équipe de Spécialistes</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Notre force réside dans l'alchimie entre nos experts charpentiers, couvreurs et maçons. Chaque membre de MKM Rénov est un artisan qualifié partageant la même vision de l'excellence.
              </p>
              <div className="space-y-4 pt-4 text-amber-500 font-bold">
                <p>✓ Charpentiers Compagnons</p>
                <p>✓ Couvreurs Zingueurs</p>
                <p>✓ Maçons du Patrimoine</p>
                <p>✓ Experts Traitement du Bois</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
