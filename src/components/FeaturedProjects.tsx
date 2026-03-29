"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, Calendar, Bell, Clock, Target } from "lucide-react";
import Image from "next/image";

export default function FeaturedProjects() {
  const projects = [
    {
      id: "astrologer",
      title: "Astrology Booking & E-commerce Website",
      category: "I build business websites",
      description: "A premium business platform with online booking system, payment integration, and product selling capabilities.",
      features: [
        { icon: <Calendar size={16} />, text: "Online booking system" },
        { icon: <ShoppingCart size={16} />, text: "E-commerce & Product selling" },
        { icon: <Target size={16} />, text: "Business automation" },
      ],
      link: "https://suryavardhanguruji.in",
      // Since we don't have images, we will use a gradient placeholder using styling
      gradient: "from-purple-600 via-indigo-500 to-blue-500",
      highlight: true,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 text-lg max-w-2xl mx-auto"
          >
            Look at some of the awesome projects I&apos;ve built to solve real-world problems and boost business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 max-w-3xl mx-auto gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden glass hover:shadow-2xl transition-all duration-500"
            >
              <div 
                className={`h-64 md:h-80 w-full bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-full h-full glass rounded-xl flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-700 hover:animate-pulse-glow"
                >
                  <span className="text-3xl md:text-5xl font-bold text-white/80 select-none px-4 text-center leading-tight tracking-tight shadow-xl">
                    {project.title.split('-')[0]}
                  </span>
                </motion.div>
              </div>

              <div className="p-8">
                <div className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/80 mb-6">{project.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                        {feature.icon}
                      </div>
                      <span className="font-medium">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:scale-105 transition-transform w-full shadow-lg"
                >
                  View Live Website <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
