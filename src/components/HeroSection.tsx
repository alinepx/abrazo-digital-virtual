import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Log para debugging
    console.log('Intentando cargar el video...');
  }, []);

  const handleVideoLoad = () => {
    console.log('Video cargado exitosamente');
    setIsVideoLoaded(true);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Error al cargar el video:', e);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-gray-800">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
          poster="/lovable-uploads/014791a1-37c1-44b2-a8d5-c03f1c3b0f9e.png"
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
      
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
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