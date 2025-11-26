import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Plus, Minus } from 'lucide-react';

const SECTORS_LIST = [
  {
    title: "Strutture alberghiere",
    description: "Interventi mirati al comfort, alla funzionalità e all'estetica."
  },
  {
    title: "Industrie farmaceutiche",
    description: "Lavorazioni conformi agli standard di sicurezza e igiene più elevati."
  },
  {
    title: "Industrie alimentari",
    description: "Soluzioni edilizie e impiantistiche per ambienti produttivi controllati."
  },
  {
    title: "Settore terziario e infrastrutture",
    description: "Costruzioni e manutenzioni per uffici, complessi direzionali e opere pubbliche."
  },
  {
    title: "Residenziale",
    description: "Dalle abitazioni private ai condomìni, con attenzione ai dettagli e all'efficienza energetica."
  },
  {
    title: "Locali commerciali",
    description: "Realizzazione di negozi e spazi retail su misura per il cliente."
  },
  {
    title: "Strutture sanitarie",
    description: "Realizzazione e ristrutturazione di ambienti sanitari nel rispetto delle normative vigenti."
  }
];

export const Sectors: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSector = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-brand-yellow text-black flex flex-col justify-center py-20 overflow-hidden">
      
      {/* Intense Blueprint Grid Effect (Black on Yellow) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[size:50px_50px] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]" />
      
      {/* Technical Decor Lines */}
      <div className="absolute top-0 left-10 h-full w-[1px] bg-black/10 hidden md:block" />
      <div className="absolute top-0 right-10 h-full w-[1px] bg-black/10 hidden md:block" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold tracking-widest uppercase opacity-70">
               <span className="w-4 h-[2px] bg-black"></span>
               // 03. Core Business
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Settori di intervento
            </h1>
          </div>
          <div className="mt-6 md:mt-0 max-w-sm">
            <p className="font-mono text-sm md:text-base leading-relaxed border-l-2 border-black pl-4 font-medium">
              Grazie alla versatilità del nostro team e alle competenze integrate, Coman S.r.l. interviene in diversi ambiti, adattando le proprie soluzioni alle esigenze specifiche di ogni cliente.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="border-t-2 border-black">
          {SECTORS_LIST.map((sector, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-black/20 overflow-hidden group transition-colors duration-300 hover:bg-black/5"
              >
                <button 
                  onClick={() => toggleSector(idx)}
                  className="w-full py-8 md:py-12 flex justify-between items-center text-left focus:outline-none"
                >
                  <h2 className="text-2xl md:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                    {sector.title}
                  </h2>
                  <div className={`
                    w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 border-black
                    transition-all duration-300 transform 
                    ${isOpen ? 'bg-black text-brand-yellow rotate-90' : 'bg-transparent text-black hover:bg-black hover:text-brand-yellow -rotate-45 md:rotate-0'}
                  `}>
                    <ArrowRight size={24} strokeWidth={2.5} />
                  </div>
                </button>

                <div 
                  className={`
                    transition-all duration-500 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-60 opacity-100 mb-8' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="md:w-2/3 lg:w-1/2">
                    <p className="text-lg md:text-xl font-medium leading-relaxed font-mono">
                      {sector.description}
                    </p>
                    
                    {/* Technical details filler for aesthetics */}
                    <div className="mt-4 flex gap-4 opacity-50 text-[10px] font-mono tracking-widest uppercase">
                      <span>Ref. 0{idx + 1}</span>
                      <span>// Spec_V2.0</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Footer Technical Marker */}
        <div className="mt-12 flex justify-between font-mono text-xs font-bold uppercase tracking-widest opacity-40">
           <span>COMAN_ENG_SYS</span>
           <span>SCROLL_DOWN [ V ]</span>
        </div>

      </div>
    </div>
  );
};