"use client";

import { motion } from "framer-motion";
import { Briefcase, ShoppingBag, LayoutTemplate, Sparkles, Video, Share2, Target, PenTool, Search } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Landing Pages",
      description: "High-converting single pages tailored for marketing campaigns.",
      icon: <LayoutTemplate className="text-white" size={24} />,
      price: "₹3,999",
      delay: 0,
    },
    {
      title: "Business Website Development",
      description: "Professional multi-page websites that build trust and generate leads.",
      icon: <Briefcase className="text-white" size={24} />,
      price: "₹7,999",
      delay: 0.1,
    },
    {
      title: "E-commerce Website",
      description: "Fully featured online stores with payment gateways and cart systems.",
      icon: <ShoppingBag className="text-white" size={24} />,
      price: "₹14,999",
      delay: 0.2,
    },
    {
      title: "AI Promo Videos & Reels",
      description: "Engaging AI-powered videos. ₹350 per video or ₹3000 for a pack of 10.",
      icon: <Video className="text-white" size={24} />,
      price: "₹350/vid",
      delay: 0.3,
    },
    {
      title: "Social Media Management",
      description: "Grow your online presence with consistent, high-quality social media content.",
      icon: <Share2 className="text-white" size={24} />,
      price: "Custom",
      delay: 0.4,
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns to reach your ideal audience and boost sales.",
      icon: <Target className="text-white" size={24} />,
      price: "Custom",
      delay: 0.5,
    },
    {
      title: "Branding & Graphic Design",
      description: "Create a memorable brand identity with professional logos and graphics.",
      icon: <PenTool className="text-white" size={24} />,
      price: "Custom",
      delay: 0.6,
    },
    {
      title: "SEO & Lead Generation",
      description: "Rank higher on Google and capture high-quality leads for your business.",
      icon: <Search className="text-white" size={24} />,
      price: "Custom",
      delay: 0.7,
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-neutral-300 font-medium text-sm mb-6"
          >
            <Sparkles size={16} className="text-white" />
            <span className="uppercase tracking-widest text-xs font-bold text-neutral-400">Core Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-white"
          >
            Digital Solutions for <span className="text-gradient">Growth</span>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className="premium-card p-6 group cursor-pointer block hover:-translate-y-2 flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500"
              >
                {service.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-neutral-400 mb-6 flex-1 font-light leading-relaxed text-sm">{service.description}</p>
              
              <div className="flex items-end justify-between border-t border-white/[0.08] pt-4 mt-auto">
                <div>
                  <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-1">Starting at</p>
                  <p className="text-xl font-bold font-outfit text-white">{service.price}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
