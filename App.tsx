import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Sectors } from './pages/Sectors';
import { Projects } from './pages/Projects';
import { Safety } from './pages/Safety';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black font-sans selection:bg-brand-yellow selection:text-black">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        
        <section id="chi-siamo">
          <About />
        </section>
        
        <section id="settori">
          <Sectors />
        </section>

        <section id="servizi">
          <Services />
        </section>

        <section id="sicurezza">
          <Safety />
        </section>

        <section id="progetti">
          <Projects />
        </section>

        <section id="contatti">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;