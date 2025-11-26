import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, className = "" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
     if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden cursor-crosshair select-none group border border-zinc-700 ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After Renovation" 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-brand-yellow text-black font-mono text-xs px-2 py-1 font-bold z-10">
        DOPO
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden border-r-2 border-brand-yellow bg-zinc-900"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before Renovation" 
          className="absolute top-0 left-0 max-w-none h-full object-cover"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
        />
        <div className="absolute top-4 left-4 bg-black/80 text-brand-yellow font-mono text-xs px-2 py-1 font-bold z-10 border border-brand-yellow">
          PRIMA
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-brand-yellow pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-yellow p-1 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.5)]">
          <ChevronsLeftRight size={16} className="text-black" />
        </div>
      </div>
      
      {/* Technical Overlay */}
      <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 m-4"></div>
    </div>
  );
};