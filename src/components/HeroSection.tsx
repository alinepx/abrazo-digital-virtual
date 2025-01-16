import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
          poster="https://cdn.gpteng.co/images/elderly-care-poster.jpg"
        >
          <source 
            src="https://cdn.gpteng.co/videos/elderly-care.mp4" 
            type="video/mp4"
          />
          <source 
            src="https://cdn.gpteng.co/videos/elderly-care.webm" 
            type="video/webm"
          />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-down">
          Centro Cívico Virtual
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl animate-fade-up">
          Conectamos tecnología y amor para cuidar de quienes más nos han dado.
        </p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white animate-fade-up"
        >
          Descubre Nuestros Servicios
        </Button>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;