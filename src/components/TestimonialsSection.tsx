import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "María",
    age: 78,
    text: "Gracias al Centro Cívico Virtual, he recuperado la alegría de compartir momentos.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    name: "Antonio",
    age: 82,
    text: "Las actividades virtuales me mantienen activo y conectado con otros.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    name: "Carmen",
    age: 75,
    text: "La telemedicina me ha facilitado enormemente el seguimiento de mi salud.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.age} años</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-4 -left-2" />
                    <p className="text-gray-600 relative z-10 pl-6">{testimonial.text}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;