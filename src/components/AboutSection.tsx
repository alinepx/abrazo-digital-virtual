import React from 'react';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: '2020',
    title: 'Nuestros Inicios',
    description: 'Fundación del Centro Cívico Virtual en el Ensanche de Vallecas.'
  },
  {
    year: '2021',
    title: 'Expansión Digital',
    description: 'Implementación de servicios de telemedicina y actividades virtuales.'
  },
  {
    year: '2022',
    title: 'Crecimiento Comunitario',
    description: 'Alcanzamos más de 1000 usuarios activos en nuestra plataforma.'
  },
  {
    year: '2023',
    title: 'Innovación Continua',
    description: 'Lanzamiento de nuevos servicios y mejoras en la plataforma.'
  }
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestra Historia</h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-center mb-8">
            El Centro Cívico Virtual nació del compromiso de unir tecnología y humanidad para acompañar a nuestros mayores. 
            Desde nuestros inicios en el Ensanche de Vallecas, hemos crecido gracias a la confianza de las familias y la 
            dedicación de un equipo que pone el corazón en cada acción.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary" />
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 px-8">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>
                
                <div className="relative flex items-center justify-center w-8 h-8">
                  <div className="absolute w-4 h-4 bg-primary rounded-full" />
                  <div className="absolute -top-8 text-sm font-bold">{item.year}</div>
                </div>
                
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;