import React from 'react';
import { ShieldAlert, FileCheck, HardHat, Siren } from 'lucide-react';
import { TechnicalGrid } from '../components/ui/BlueprintEffects';

export const Safety: React.FC = () => {
  return (
    <div className="pt-20 bg-brand-black min-h-screen">
       <div className="container mx-auto px-6 py-20">
         <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="flex-1">
              <h1 className="text-5xl font-black text-white mb-6 uppercase">
                Sicurezza <br/><span className="text-brand-yellow">è Priorità</span>
              </h1>
              <p className="text-zinc-400 text-lg">
                La sicurezza non è un optional, è il fondamento del nostro modo di costruire. Progettiamo e realizziamo sistemi antincendio e garantiamo la massima tutela in cantiere.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
               <ShieldAlert size={200} className="text-zinc-800" strokeWidth={0.5} />
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
           {[
             { 
               icon: Siren, 
               title: "Sistemi Antincendio", 
               desc: "Progettazione e installazione di impianti di rilevazione fumi, sprinkler e idranti conformi UNI 9795." 
             },
             { 
               icon: HardHat, 
               title: "Sicurezza Cantiere", 
               desc: "Personale formato, DPI di alto livello e coordinamento della sicurezza in fase di progettazione ed esecuzione." 
             },
             { 
               icon: FileCheck, 
               title: "Certificazioni", 
               desc: "Gestione pratiche CPI (Certificato Prevenzione Incendi) e adeguamenti normativi per enti pubblici e privati." 
             }
           ].map((item, idx) => (
             <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-brand-yellow transition-colors group">
               <item.icon className="text-white mb-6 group-hover:text-brand-yellow transition-colors" size={48} />
               <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
               <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
         </div>
         
         <div className="mt-20 p-12 bg-brand-yellow text-black relative overflow-hidden">
            <TechnicalGrid className="opacity-10 mix-blend-multiply" />
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-black uppercase mb-4">Adeguamento norme antincendio</h2>
              <p className="max-w-2xl mx-auto font-medium">
                Progettazione e realizzazione di sistemi antincendio conformi alle normative vigenti, con materiali certificati e personale specializzato.
              </p>
            </div>
         </div>
       </div>
    </div>
  );
};