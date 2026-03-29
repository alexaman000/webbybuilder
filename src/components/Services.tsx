"use client";

import { motion } from "framer-motion";
import { Briefcase, ShoppingBag, CalendarCheck, LayoutTemplate, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Landing Pages",
      description: "High-converting single pages tailored for marketing campaigns.",
      icon: <LayoutTemplate className="text-white" size={24} />,
      price: "₹3,999",
      color: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      title: "Business Website Development",
      description: "Professional multi-page websites that build trust and generate leads.",
      icon: <Briefcase className="text-white" size={24} />,
      price: "₹7,999",
      color: "from-purple-500 to-indigo-500",
      delay: 0.1,
    },
    {
      title: "E-commerce Website",
      description: "Fully featured online stores with payment gateways and cart systems.",
      icon: <ShoppingBag className="text-white" size={24} />,
      price: "₹14,999",
      color: "from-pink-500 to-rose-500",
      delay: 0.2,
    },
    {
      title: "Booking System Websites",
      description: "Automated booking solutions for appointments and services.",
      icon: <CalendarCheck className="text-white" size={24} />,
      price: "Custom",
      color: "from-orange-500 to-amber-500",
      delay: 0.3,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
          >
            <Sparkles size={16} />
            <span>My Core Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4"
          >
            Pricing that fits your <span className="text-gradient">Goals</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 text-lg max-w-2xl mx-auto"
          >
            Affordable web solutions without compromising on quality or performance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group cursor-pointer block"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-8 min-h-[4rem]">{service.description}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-end justify-between border-t border-glass-border pt-6">
                <div>
                  <p className="text-sm font-medium text-foreground/50 uppercase tracking-widest mb-1">Starting from</p>
                  <p className="text-3xl font-bold font-outfit text-primary">{service.price}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
