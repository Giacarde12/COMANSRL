import React from 'react';
import { TechnicalGrid } from '../components/ui/BlueprintEffects';
import { Hammer, Zap, Home, PaintBucket, Wrench, Building2 } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    title: "Opere edili di costruzione",
    description: "Costruzioni ex novo di edifici civili, commerciali e industriali. Coman cura ogni fase del processo: scavi, fondazioni, strutture in cemento armato, tamponature e finiture.",
    icon: Building2
  },
  {
    title: "Opere di ristrutturazione",
    description: "Ristrutturazioni complete o parziali di edifici residenziali, condominiali e industriali. Particolare attenzione è rivolta alla riqualificazione energetica e al miglioramento estetico e funzionale.",
    icon: Home
  },
  {
    title: "Impianti tecnologici",
    description: "Realizzazione e manutenzione di impianti elettrici civili e industriali, impianti idrico-sanitari, sistemi di climatizzazione e condizionamento.",
    icon: Zap
  },
  {
    title: "Adeguamento norme antincendio",
    description: "Progettazione e realizzazione di sistemi antincendio conformi alle normative vigenti, con materiali certificati e personale specializzato.",
    icon: PaintBucket
  },
  {
    title: "Manutenzioni ordinarie e straordinarie",
    description: "Servizi di manutenzione preventiva e correttiva per edifici pubblici e privati, garantendo continuità e sicurezza operativa.",
    icon: Wrench
  }
];

export const Services: React.FC = () => {
  return (
    <div className="pt-20 bg-brand-black min-h-screen">
      {/* Header */}
      <div className="bg-brand-yellow py-16 relative overflow-hidden">
        <TechnicalGrid className="opacity-10 mix-blend-multiply" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">
            I nostri servizi: dalla costruzione alla manutenzione, con un unico interlocutore
          </h1>
          <p className="text-black/80 font-bold max-w-2xl text-lg">
            Soluzioni integrate per coprire ogni aspetto del ciclo edilizio.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="py-20 relative">
        <TechnicalGrid />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-brand-black p-10 group hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                   <service.icon size={120} className="text-zinc-700 group-hover:text-brand-yellow/10" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-brand-yellow group-hover:text-brand-yellow transition-colors">
                    <service.icon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-yellow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="w-full h-[1px] bg-zinc-800 group-hover:bg-brand-yellow/50 transition-colors"></div>
                  
                  <div className="mt-6 flex items-center text-xs font-mono text-zinc-600 group-hover:text-brand-yellow transition-colors uppercase tracking-widest cursor-pointer">
                    Approfondisci &rarr;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};