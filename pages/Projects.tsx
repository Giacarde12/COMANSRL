import React from 'react';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { TechnicalGrid } from '../components/ui/BlueprintEffects';

const PROJECTS = [
  {
    id: 1,
    title: "Rifacimento facciate condominiali",
    location: "Roma",
    desc: "Intervento completo di restauro e consolidamento delle facciate, con risultati estetici e strutturali di alto livello.",
    before: "/asset/disegno.png",
    after: "/asset/intera.png"
  },
  {
    id: 2,
    title: "Villa San Pietro – Adeguamento cucina e mensa",
    location: "Taranto",
    desc: "Adeguamento e manutenzione straordinaria di cucina e mensa aziendale, con impianti rinnovati e finiture moderne.",
    before: "/asset/gialladisegno.jpeg",
    after: "/asset/gialla.jpg"
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="pt-20 bg-brand-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">Alcuni dei nostri lavori più rappresentativi</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Ogni progetto è una dimostrazione della nostra expertise e dedizione alla qualità.
          </p>
        </div>
      </div>

      <section className="py-20 relative">
        <TechnicalGrid />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-24">
            {PROJECTS.map((project) => (
              <div key={project.id} className="flex flex-col xl:flex-row gap-12 bg-zinc-900/30 border border-zinc-800 p-6 md:p-12">
                <div className="w-full xl:w-2/3 h-[400px] md:h-[500px]">
                   <BeforeAfterSlider 
                     beforeImage={project.before} 
                     afterImage={project.after} 
                   />
                </div>
                
                <div className="w-full xl:w-1/3 flex flex-col justify-center">
                  <div className="text-brand-yellow font-mono text-xs mb-2">PROJECT #{project.id.toString().padStart(3, '0')}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm mb-6">
                    <span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
                    {project.location}
                  </div>
                  
                  <p className="text-zinc-400 mb-8 border-l-2 border-zinc-700 pl-4 py-2">
                    {project.desc}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-zinc-800 pb-2">
                       <span className="text-zinc-500 text-sm uppercase">Anno</span>
                       <span className="text-white font-mono">2023</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-800 pb-2">
                       <span className="text-zinc-500 text-sm uppercase">Cliente</span>
                       <span className="text-white font-mono">Privato</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-800 pb-2">
                       <span className="text-zinc-500 text-sm uppercase">Servizio</span>
                       <span className="text-white font-mono">Ristrutturazione</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="mt-24 bg-zinc-900/30 border border-zinc-800 p-6 md:p-12">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Timelapse cantiere</h2>
                <p className="text-zinc-400">Guarda il progetto realizzarsi in pochi minuti</p>
              </div>
              <div className="w-full h-[400px] md:h-[600px] bg-black border border-zinc-700 overflow-hidden flex items-center justify-center">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/asset/TIMELAPSE.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
