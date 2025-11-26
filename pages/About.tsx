import React from 'react';
import { TechnicalGrid, SketchImage } from '../components/ui/BlueprintEffects';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20 bg-brand-black min-h-screen">
      {/* Hero */}
      <div className="relative py-24 border-b border-zinc-800 bg-zinc-900/50">
        <TechnicalGrid />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Esperienza, competenza e affidabilità in un'unica realtà</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Coman S.r.l. nasce dalla comprovata esperienza maturata nel campo delle lavorazioni edili e impiantistiche.
          </p>
        </div>
      </div>

      {/* Story & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-brand-yellow block"></span>
                  Chi Siamo
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Nel corso degli anni ha integrato competenze di diverse aziende e professionisti del settore, creando un'unica struttura in grado di gestire progetti complessi in modo coordinato ed efficiente. L'obiettivo è offrire un servizio completo, dalla progettazione all'esecuzione, garantendo qualità, sicurezza e rispetto dei tempi di consegna.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-brand-yellow block"></span>
                  Mission
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Realizzare opere di qualità che durano nel tempo, con un approccio tecnico, sicuro e orientato alla soddisfazione del cliente.
                </p>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-brand-yellow block"></span>
                  Valori
                </h2>
                <ul className="text-zinc-400 leading-relaxed mb-6 space-y-2">
                  <li><strong>Professionalità</strong> – Team tecnico qualificato e costantemente aggiornato.</li>
                  <li><strong>Affidabilità</strong> – Rispetto dei tempi, chiarezza contrattuale, risultati verificabili.</li>
                  <li><strong>Innovazione</strong> – Soluzioni tecniche e impiantistiche all'avanguardia.</li>
                  <li><strong>Sicurezza</strong> – Ogni cantiere opera nel pieno rispetto delle normative vigenti.</li>
                </ul>
              </div>
            </div>

            <div className="relative">
               <SketchImage 
                  src="https://picsum.photos/800/1000?random=2" 
                  alt="Team al lavoro" 
                  className="w-full h-[600px] object-cover"
                  overlayText="TEAM ESECUTIVO - CANTIERE A"
               />
               <div className="absolute -bottom-6 -left-6 bg-brand-yellow p-8 hidden md:block w-64">
                 <p className="text-black font-bold text-lg leading-tight">
                   "La qualità non è mai casuale; è sempre il risultato di uno sforzo intelligente."
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Philosophy Grid */}
      <section className="py-20 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
        <TechnicalGrid className="opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Direzione tecnica", text: "Team qualificato per la gestione coordinata dei progetti." },
              { icon: Target, title: "Responsabile lavori", text: "Supervisione operativa in cantiere e controllo della qualità." },
              { icon: TrendingUp, title: "Ufficio amministrativo", text: "Gestione documentale, contratti e amministrazione aziendale." },
              { icon: Award, title: "Operai specializzati", text: "Professionisti qualificati per ogni tipo di intervento." },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-brand-black border border-zinc-800 hover:border-brand-yellow transition-colors group">
                <item.icon className="text-zinc-600 group-hover:text-brand-yellow mb-4 transition-colors" size={32} />
                <h3 className="text-white font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};