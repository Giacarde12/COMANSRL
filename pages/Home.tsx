import React from 'react';
import { ArrowRight, Box, Settings, ShieldCheck, Ruler } from 'lucide-react';
import { TechnicalGrid, Crosshair, SketchImage } from '../components/ui/BlueprintEffects';

export const Home: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent z-10" />
          <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Costruzione Cantiere" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
          <TechnicalGrid />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
              Costruzioni, Impianti e Ristrutturazioni <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-600">
                con un'unica garanzia: l'esperienza
              </span>
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 max-w-xl font-light border-l border-zinc-700 pl-6">
              Coman S.r.l. è una realtà consolidata nel settore edile e impiantistico, specializzata nella realizzazione di opere civili, industriali e infrastrutturali.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollTo('progetti')}
                className="group relative px-8 py-4 bg-brand-yellow text-black font-bold uppercase tracking-widest overflow-hidden text-left"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Scopri i nostri servizi <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
              </button>
              
              <button 
                onClick={() => scrollTo('chi-siamo')}
                className="group px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest hover:border-brand-yellow hover:text-brand-yellow transition-colors"
              >
                Richiedi un preventivo gratuito
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated geometric decor */}
        <div className="absolute bottom-10 right-10 hidden lg:block animate-pulse">
           <div className="border border-brand-yellow/30 w-32 h-32 relative">
             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-yellow"></div>
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-yellow"></div>
           </div>
        </div>
      </section>

      {/* Chi è Coman Section */}
      <section className="py-24 bg-brand-black relative">
        <TechnicalGrid />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Chi è Coman – Intro</h2>
            <p className="text-zinc-400 text-lg mb-6">
              Coman S.r.l. opera nel settore delle costruzioni e degli impianti, offrendo un servizio completo e integrato. L'azienda nasce dall'unione di diverse competenze professionali e imprese specializzate, per garantire un approccio multidisciplinare in ogni progetto.
            </p>
            <button className="text-brand-yellow uppercase text-xs font-bold tracking-widest hover:text-white transition-colors">
              👉 Scopri di più su chi siamo
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800 relative">
        <TechnicalGrid />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-zinc-800 hover:border-brand-yellow/50 transition-colors group bg-brand-dark/50">
              <Box className="text-brand-yellow mb-6" size={40} strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Strutture alberghiere</h3>
              <p className="text-zinc-400 mb-6 font-light">
                Interventi mirati al comfort, alla funzionalità e all'estetica.
              </p>
              <Crosshair className="bottom-4 right-4" />
            </div>
            
            <div className="p-8 border border-zinc-800 hover:border-brand-yellow/50 transition-colors group bg-brand-dark/50">
              <Settings className="text-brand-yellow mb-6" size={40} strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Industrie farmaceutiche e alimentari</h3>
              <p className="text-zinc-400 mb-6 font-light">
                Lavorazioni conformi agli standard di sicurezza e igiene più elevati.
              </p>
              <Crosshair className="bottom-4 right-4" />
            </div>

            <div className="p-8 border border-zinc-800 hover:border-brand-yellow/50 transition-colors group bg-brand-dark/50">
              <ShieldCheck className="text-brand-yellow mb-6" size={40} strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Settore residenziale e terziario</h3>
              <p className="text-zinc-400 mb-6 font-light">
                Soluzioni per uffici, complessi direzionali, infrastrutture e abitazioni private.
              </p>
              <Crosshair className="bottom-4 right-4" />
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="text-brand-yellow uppercase text-xs font-bold tracking-widest hover:text-white transition-colors">
              👉 Approfondisci i nostri settori di intervento
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-black border-t border-zinc-800 relative">
        <TechnicalGrid />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-2xl mx-auto">
            Cerchi un partner affidabile per i tuoi lavori edili o impiantistici? Coman S.r.l. è pronta a seguirti in ogni fase del progetto.
          </h2>
          <button className="inline-block px-8 py-4 bg-brand-yellow text-black font-bold uppercase tracking-widest hover:bg-yellow-500 transition-colors">
            🔘 Contattaci subito
          </button>
        </div>
      </section>

      {/* Showcase Mini */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Progetti in evidenza</h2>
              <div className="w-20 h-1 bg-brand-yellow"></div>
            </div>
            <button onClick={() => scrollTo('progetti')} className="text-brand-yellow uppercase text-xs font-bold tracking-widest mt-6 md:mt-0 hover:text-white transition-colors">
              Guarda tutte le realizzazioni &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SketchImage 
              src="https://picsum.photos/800/600?random=1" 
              alt="Project 1" 
              overlayText="ROMA"
              className="aspect-video"
            />
            <div className="flex flex-col justify-center pl-0 md:pl-12">
              <Ruler className="text-brand-yellow mb-4" size={32} />
              <h3 className="text-2xl font-bold text-white mb-4">Rifacimento facciate condominiali</h3>
              <p className="text-zinc-400 mb-6">
                Intervento completo di restauro e consolidamento delle facciate, con risultati estetici e strutturali di alto livello.
              </p>
              <ul className="text-sm font-mono text-zinc-500 space-y-2 mb-8">
                <li>&bull; Adeguamento cucina e mensa "Villa San Pietro"</li>
                <li>&bull; Realizzazione platea in cemento armato per abitazione unifamiliare</li>
                <li>&bull; Massetti e coibentazioni</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};