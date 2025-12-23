
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <HelpCircle size={48} className="mx-auto text-amber-800" />
            <h1 className="text-4xl md:text-5xl font-serif">Questions Fréquentes</h1>
            <p className="text-slate-600 text-lg">Retrouvez les réponses aux interrogations les plus courantes sur vos travaux.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                  {openIndex === i ? <ChevronUp className="text-amber-800" /> : <ChevronDown className="text-slate-400" />}
                </button>
                <div className={`transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-amber-800 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-serif mb-4">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-amber-100 mb-8 max-w-xl mx-auto">Posez votre question directement à notre assistant IA en bas à droite ou contactez-nous par téléphone.</p>
            <a href="tel:0467000000" className="inline-block bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-100 transition-colors">
              Appelez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
