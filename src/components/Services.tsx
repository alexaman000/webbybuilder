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
    <section id="services" className="py-24 relative bg-neutral-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-300 font-medium text-sm mb-6"
          >
            <Sparkles size={16} />
            <span>Core Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-white"
          >
            Digital Solutions for <span className="text-white">Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto font-light"
          >
            Strategic, high-performance web solutions built to elevate your brand and drive results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className="premium-card p-8 group cursor-pointer block hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}
              >
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-neutral-400 mb-8 min-h-[4rem] font-light leading-relaxed">{service.description}</p>
              
              <div className="flex items-end justify-between border-t border-neutral-800 pt-6">
                <div>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-1">Starting at</p>
                  <p className="text-2xl font-bold font-outfit text-white">{service.price}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
