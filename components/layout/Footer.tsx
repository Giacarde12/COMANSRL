import React from 'react';
import { Hammer, MapPin, Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';
import { TechnicalGrid } from '../ui/BlueprintEffects';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Chi Siamo', id: 'chi-siamo' },
    { label: 'Progetti', id: 'progetti' },
    { label: 'Servizi', id: 'servizi' },
    { label: 'Sicurezza', id: 'sicurezza' },
    { label: 'Contatti', id: 'contatti' },
  ];

  return (
    <footer className="relative bg-zinc-900 text-zinc-300 pt-20 pb-10 border-t border-brand-yellow/20 overflow-hidden">
      <TechnicalGrid className="opacity-[0.03]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-yellow text-black p-2 rounded-sm">
                <Hammer size={20} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none text-white">
                  COMAN <span className="text-brand-yellow">SRL</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Coman S.r.l. opera nel settore delle costruzioni e degli impianti, offrendo un servizio completo e integrato con competenze professionali dedicate.
            </p>
          </div>

          {/* Contacts */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-2 border-brand-yellow pl-3">
              Contatti
            </h3>
            <ul className="space-y-4 text-sm font-mono">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-yellow mt-1 shrink-0" />
                <span>Viale Virgilio n. 138<br/>74121 Taranto (TA)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-yellow shrink-0" />
                <span>+39 324 0715541</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-yellow shrink-0" />
                <span>amministrazione@comansrl.it</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-yellow shrink-0" />
                <span>comansrl@pecaruba.it</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-2 border-brand-yellow pl-3">
              Esplora
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-brand-yellow transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-zinc-600 group-hover:bg-brand-yellow rounded-full"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="space-y-6">
             <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-2 border-brand-yellow pl-3">
              Social
            </h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-black transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono">
          <p>&copy; {new Date().getFullYear()} COMAN SRL. P.IVA 03314250733. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};