import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Estamos aquí para ayudarte</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="text-primary w-6 h-6" />
                <p className="text-lg">+34 912 345 678</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="text-primary w-6 h-6" />
                <p className="text-lg">info@centrocivicovirtual.es</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary w-6 h-6" />
                <p className="text-lg">Ensanche de Vallecas - La Gavia, Madrid</p>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7392436124087!2d-3.612345684610321!3d40.37245797937099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422e2f72d9e3ed%3A0x91df0a9b5893d348!2sEnsanche%20de%20Vallecas%2C%20Madrid!5e0!3m2!1ses!2ses!4v1645541234567!5m2!1ses!2ses"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Nombre completo"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Correo electrónico"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Tu mensaje"
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;