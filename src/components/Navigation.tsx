import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold">CCV</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
            <Button className="bg-primary hover:bg-primary/90">
              Acceder
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-black">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#inicio" className="block hover:text-primary transition-colors">Inicio</a>
            <a href="#nosotros" className="block hover:text-primary transition-colors">Nosotros</a>
            <a href="#servicios" className="block hover:text-primary transition-colors">Servicios</a>
            <a href="#contacto" className="block hover:text-primary transition-colors">Contacto</a>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Acceder
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;