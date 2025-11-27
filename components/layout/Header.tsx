import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: 'home' },
  { label: 'Chi Siamo', path: 'chi-siamo' },
  { label: 'Settori', path: 'settori' },
  { label: 'Servizi', path: 'servizi' },
  { label: 'Sicurezza', path: 'sicurezza' },
  { label: 'Progetti', path: 'progetti' },
  { label: 'Contatti', path: 'contatti' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle Header Background on Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active Section Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
        threshold: 0
      }
    );

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.path);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b bg-brand-black border-zinc-800 py-3`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-3 group">
          <img 
            src="/LOGO COMAN 2.jpg" 
            alt="COMAN SRL Logo" 
            className="h-16 object-contain group-hover:opacity-80 transition-opacity"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.path}
              href={`#${item.path}`}
              onClick={(e) => scrollToSection(e, item.path)}
              className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:text-brand-yellow ${
                activeSection === item.path 
                  ? 'text-brand-yellow border-b-2 border-brand-yellow pb-1' 
                  : 'text-zinc-300'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contatti"
            onClick={(e) => scrollToSection(e, 'contatti')}
            className="ml-4 px-5 py-2 border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black font-bold uppercase text-xs tracking-widest transition-all"
          >
            Richiedi Preventivo
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white hover:text-brand-yellow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-black z-40 transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '80px' }}>
         <div className="flex flex-col p-8 gap-6 border-t border-zinc-800">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={(e) => scrollToSection(e, item.path)}
                className={`text-2xl font-bold uppercase tracking-wider ${
                  activeSection === item.path ? 'text-brand-yellow' : 'text-zinc-500'
                }`}
              >
                {item.label}
              </a>
            ))}
         </div>
         {/* Decor elements */}
         <div className="absolute bottom-10 left-8 right-8 text-zinc-600 font-mono text-xs">
           <div className="w-full h-[1px] bg-zinc-800 mb-4"></div>
           <div>COMAN SRL CONSTRUCTION</div>
           <div>P.IVA 03314250733</div>
         </div>
      </div>
    </header>
  );
};