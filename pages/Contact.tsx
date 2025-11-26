import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { TechnicalGrid } from '../components/ui/BlueprintEffects';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-16 uppercase text-center">Contattaci per informazioni o per un preventivo gratuito</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 uppercase border-l-4 border-brand-yellow pl-4">Dati Aziendali</h2>
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="text-brand-yellow shrink-0" />
                <p className="text-zinc-400">
                  Viale Virgilio n. 138<br/>
                  74121 Taranto (TA)<br/>
                  Italia
                </p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Phone className="text-brand-yellow shrink-0" />
                <p className="text-zinc-400">+39 324 0715541</p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Mail className="text-brand-yellow shrink-0" />
                <p className="text-zinc-400">amministrazione@comansrl.it</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-brand-yellow shrink-0" />
                <p className="text-zinc-400">comansrl@pecaruba.it</p>
              </div>
            </div>

            <div className="p-8 bg-zinc-900 border border-zinc-800 relative">
              <TechnicalGrid className="opacity-10" />
              <h3 className="text-white font-bold mb-4 uppercase">Dati Fiscali</h3>
              <ul className="text-sm font-mono text-zinc-500 space-y-2">
                <li>Ragione Sociale: COMAN S.R.L.</li>
                <li>P.IVA / C.F.: 03314250733</li>
                <li>Sede operativa: Via Cristoforo Colombo 191</li>
              </ul>
            </div>
            
            {/* Fake Map Placeholder */}
            <div className="w-full h-64 bg-zinc-800 border border-zinc-700 flex items-center justify-center relative group overflow-hidden">
               <img src="https://picsum.photos/600/300?grayscale" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" alt="Map" />
               <div className="z-10 bg-brand-black p-3 text-white text-xs font-mono border border-zinc-600">
                 MAPPA SEDE
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-zinc-900/50 p-8 md:p-12 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-8 uppercase">Richiedi un preventivo</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Nome e Cognome</label>
                <input type="text" className="w-full bg-brand-black border border-zinc-700 p-4 text-white focus:border-brand-yellow focus:outline-none transition-colors" placeholder="Nome e cognome" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Email</label>
                <input type="email" className="w-full bg-brand-black border border-zinc-700 p-4 text-white focus:border-brand-yellow focus:outline-none transition-colors" placeholder="email@azienda.it" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Telefono</label>
                <input type="tel" className="w-full bg-brand-black border border-zinc-700 p-4 text-white focus:border-brand-yellow focus:outline-none transition-colors" placeholder="+39 123 456 7890" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Messaggio</label>
                <textarea rows={5} className="w-full bg-brand-black border border-zinc-700 p-4 text-white focus:border-brand-yellow focus:outline-none transition-colors resize-none" placeholder="Descrivi il tuo progetto..."></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 bg-brand-black border-zinc-700" />
                <p className="text-xs text-zinc-500">
                  Acconsento al trattamento dei dati personali secondo la Privacy Policy.
                </p>
              </div>

              <button type="submit" className="w-full bg-brand-yellow text-black font-bold uppercase tracking-widest py-4 hover:bg-yellow-500 transition-colors">
                Invia richiesta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};