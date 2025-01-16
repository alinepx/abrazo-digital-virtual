import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';
import { Video, Users, Bell, Activity, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: <Video className="w-10 h-10 text-primary" />,
    title: "Telemedicina",
    description: "Consultas médicas online con atención personalizada",
    videoUrl: "https://cdn.gpteng.co/videos/telemedicine.mp4"
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Acompañamiento Social",
    description: "Videollamadas con familiares y voluntarios",
    videoUrl: "https://cdn.gpteng.co/videos/social.mp4"
  },
  {
    icon: <Bell className="w-10 h-10 text-primary" />,
    title: "Asistencia en Emergencias 24/7",
    description: "Botón de ayuda conectado a servicios médicos",
    videoUrl: "https://cdn.gpteng.co/videos/emergency.mp4"
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Actividades Virtuales",
    description: "Yoga, arte, música y lectura en vivo",
    videoUrl: "https://cdn.gpteng.co/videos/activities.mp4"
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-primary" />,
    title: "Pedidos a Domicilio",
    description: "Compra fácil de medicamentos y alimentos",
    videoUrl: "https://cdn.gpteng.co/videos/delivery.mp4"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={service.videoUrl} type="video/mp4" />
                    </video>
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

export default ServicesSection;