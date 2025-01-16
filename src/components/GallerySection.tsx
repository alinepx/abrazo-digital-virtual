import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Conectando generaciones"
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Aprendizaje digital"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Comunidad activa"
  },
  {
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    title: "Experiencias compartidas"
  },
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Innovación tecnológica"
  },
  {
    url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    title: "Momentos especiales"
  }
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Galería de Experiencias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;