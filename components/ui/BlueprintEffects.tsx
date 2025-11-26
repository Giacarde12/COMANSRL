import React from 'react';

// A technical grid background for sections
export const TechnicalGrid: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none opacity-[0.05] bg-[size:40px_40px] bg-grid-pattern ${className}`} />
);

// Decorative crosshair usually found in blueprints
export const Crosshair: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute w-4 h-4 pointer-events-none ${className}`}>
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-yellow/50 -translate-y-1/2"></div>
    <div className="absolute left-1/2 top-0 h-full w-[1px] bg-brand-yellow/50 -translate-x-1/2"></div>
  </div>
);

// Image wrapper that adds "sketch" and blueprint measurement lines
interface SketchImageProps {
  src: string;
  alt: string;
  className?: string;
  overlayText?: string;
}

export const SketchImage: React.FC<SketchImageProps> = ({ src, alt, className = "", overlayText }) => {
  return (
    <div className={`relative group overflow-hidden border border-zinc-800 ${className}`}>
      {/* Main Image */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
      />
      
      {/* Blueprint Overlay Effects */}
      <div className="absolute inset-0 border-[1px] border-brand-yellow/20 m-2 pointer-events-none">
        {/* Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-brand-yellow"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-brand-yellow"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-brand-yellow"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-brand-yellow"></div>

        {/* Measurement Lines Simulation */}
        <div className="absolute top-1/2 right-4 h-12 w-[1px] bg-brand-yellow/40 group-hover:h-24 transition-all duration-500"></div>
        <div className="absolute top-1/2 right-2 text-[10px] font-mono text-brand-yellow/80 rotate-90 origin-center opacity-0 group-hover:opacity-100 transition-opacity">
          24.5m
        </div>

        <div className="absolute bottom-4 left-1/2 w-12 h-[1px] bg-brand-yellow/40 group-hover:w-24 transition-all duration-500"></div>
      </div>
      
      {/* Technical Data Label */}
      {overlayText && (
         <div className="absolute bottom-0 left-0 bg-brand-yellow text-black font-mono text-xs px-2 py-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {overlayText}
        </div>
      )}

      {/* Scrim */}
      <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
    </div>
  );
};