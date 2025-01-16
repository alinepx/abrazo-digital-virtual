import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Centro Cívico Virtual</h3>
            <p className="text-sm">
              Conectando tecnología y amor para cuidar de quienes más nos han dado.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2">
              <li>Telemedicina</li>
              <li>Acompañamiento Social</li>
              <li>Asistencia 24/7</li>
              <li>Actividades Virtuales</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <p className="text-sm">
              Ensanche de Vallecas - La Gavia<br />
              Villa de Vallecas, Madrid<br />
              Tel: +34 912 345 678<br />
              Email: info@centrocivicovirtual.es
            </p>
          </div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="flex items-center justify-center text-sm">
            Hecho con 
            <Heart className="w-4 h-4 mx-1 text-primary" />
            por Centro Cívico Virtual © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;