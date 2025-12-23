
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'charpente' | 'renovation' | 'maconnerie'>('all');

  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal">
            <span className="text-amber-800 font-black uppercase text-xs tracking-[0.3em] mb-4 block">Notre Galerie d'Artisanat</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-10 text-slate-900">Le Savoir-Faire <br/><span className="italic underline decoration-amber-200 underline-offset-8">en Images</span></h1>
            <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Explorez une sélection rigoureuse de nos projets les plus emblématiques à travers l'Hérault.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-24 reveal" style={{ transitionDelay: '200ms' }}>
            {(['all', 'charpente', 'renovation', 'maconnerie'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-amber-800 text-white shadow-2xl shadow-amber-900/40 -translate-y-1' 
                    : 'bg-slate-100 text-slate-500 hover:bg-white hover:text-amber-800 border border-transparent hover:border-amber-200'
                }`}
              >
                {cat === 'all' ? 'Tout voir' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, i) => (
              <div key={project.id} className="reveal group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={project.imageAfter} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-800 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                          <ArrowUpRight size={24} />
                      </div>
                  </div>
                  <div className="absolute bottom-6 left-6 flex space-x-2">
                    <span className="bg-amber-800/90 backdrop-blur-sm text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 text-left flex-1 flex flex-col bg-slate-50/30">
                  <h3 className="text-2xl font-serif mb-4 text-slate-900 transition-colors group-hover:text-amber-800">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 font-light italic">
                    {project.description}
                  </p>
                  <div className="pt-8 border-t border-slate-200 flex justify-between items-center">
                    <button className="text-amber-800 font-black text-[10px] uppercase tracking-widest hover:underline">Découvrir le projet</button>
                    <span className="text-slate-300 font-serif text-sm italic">#0{i+1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Before/After Transition Style */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-24 reveal">
             <h2 className="text-4xl md:text-7xl font-serif mb-6 italic">Le Mirage de la <span className="text-amber-500">Mutation</span></h2>
             <p className="text-slate-400 font-light tracking-[0.2em] uppercase text-xs">Un héritage restauré, une vision sublimée</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 reveal">
              <div className="relative rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl border border-white/5">
                <img src={PROJECTS[0].imageBefore} alt="Avant" className="w-full h-[450px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity">
                    <span className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-full font-black uppercase tracking-[0.4em] text-xs">L'Origine</span>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-white/40">Survolez pour voir l'impact</div>
              </div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-2 border-amber-600/50">
                <img src={PROJECTS[0].imageAfter} alt="Après" className="w-full h-[450px] object-cover scale-105" />
                <div className="absolute top-8 left-8 bg-amber-600 text-white px-6 py-2 text-[10px] font-black rounded-full uppercase tracking-widest">Le Résultat</div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-12 reveal" style={{ transitionDelay: '300ms' }}>
              <div className="space-y-6">
                  <h3 className="text-5xl md:text-6xl font-serif leading-tight">{PROJECTS[0].title}</h3>
                  <div className="w-20 h-1 bg-amber-600"></div>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed font-light italic">
                "Nous avons relevé le défi de conserver l'ossature tricentenaire en y intégrant un confort thermique de pointe. Une prouesse qui allie respect de l'histoire et modernité absolue."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                {[
                    { label: "Isolation", val: "Bio-sourcée" },
                    { label: "Traitement", val: "Céramique" },
                    { label: "Temps de travail", val: "4 Mois" },
                    { label: "Équipe", val: "6 Experts" }
                ].map((spec, i) => (
                    <div key={i} className="border-l border-amber-600/30 pl-6">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-1">{spec.label}</p>
                        <p className="text-xl font-serif text-amber-500">{spec.val}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
