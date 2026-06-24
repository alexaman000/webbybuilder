"use client";

import { motion } from "framer-motion";
import { Layout } from "lucide-react";

export default function BonusTemplates() {
  const templates = [
    {
      name: "Astrology Platform",
      category: "E-Commerce / Booking",
      gradient: "from-orange-400 to-red-500",
      link: "https://suryavardhanguruji.in",
    },
    {
      name: "Modern Agency",
      category: "Corporate / Agency",
      gradient: "from-blue-500 to-indigo-600",
      link: "https://cuberto.com",
    },
    {
      name: "SaaS Dashboard",
      category: "SaaS / Tech",
      gradient: "from-emerald-400 to-teal-500",
      link: "https://linear.app",
    },
  ];

  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 mb-6 text-neutral-800 font-medium text-sm"
            >
              <Layout size={16} className="text-[#d4af37]" />
              <span className="uppercase tracking-widest text-xs font-bold text-neutral-600">Free Previews</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-outfit text-neutral-900"
            >
              See Live Demo <span className="text-gradient">Templates</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 max-w-sm mt-6 md:mt-0 md:text-right font-light"
          >
            Hover over these mockups to see the premium quality of our pre-built layouts. Click to explore live previews!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.a
              key={index}
              href={template.link}
              target={template.link !== "#" ? "_blank" : "_self"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="block group cursor-pointer relative rounded-2xl overflow-hidden shadow-lg h-72 md:h-96"
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${template.gradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}
              >
                {/* Simulated UI layout */}
                <div className="w-3/4 h-2/3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 p-4 flex flex-col gap-3 group-hover:scale-95 transition-transform duration-500 shadow-2xl relative">
                  <div className="w-1/2 h-4 bg-white/40 rounded-full" />
                  <div className="w-3/4 h-3 bg-white/30 rounded-full" />
                  <div className="w-full h-3 bg-white/20 rounded-full mt-1" />
                  <div className="w-full flex-1 bg-white/10 rounded-md mt-2 flex items-center justify-center border border-white/20">
                     <span className="text-white font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-4 py-2 bg-black/40 rounded-full text-xs">View Demo</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent p-6 pt-20 translate-y-4 group-hover:translate-y-0 transition-transform hidden md:block">
                <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-[0.1em] mb-1 block">
                  {template.category}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 leading-tight">
                  {template.name}
                </h3>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 bg-white/80 backdrop-blur-md p-6 md:hidden">
                <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-[0.1em] mb-1 block">
                  {template.category}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                  {template.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
