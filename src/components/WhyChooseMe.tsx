"use client";

import { motion } from "framer-motion";
import { Zap, IndianRupee, Palette, Search } from "lucide-react";

export default function WhyChooseMe() {
  const reasons = [
    {
      title: "Fast Delivery",
      description: "Get your website up and running in as little as 48 hours without compromising quality.",
      icon: <Zap size={32} />,
      color: "text-white",
      bg: "bg-neutral-800",
    },
    {
      title: "Affordable Pricing",
      description: "Premium SaaS-like websites at prices that make sense for growing businesses.",
      icon: <IndianRupee size={32} />,
      color: "text-white",
      bg: "bg-neutral-800",
    },
    {
      title: "Bespoke Design",
      description: "No boring templates. Unique, high-end designs tailored to your brand with sleek UI.",
      icon: <Palette size={32} />,
      color: "text-white",
      bg: "bg-neutral-800",
    },
    {
      title: "SEO Optimized",
      description: "Built with Next.js to ensure lightning-fast performance and top Google rankings.",
      icon: <Search size={32} />,
      color: "text-white",
      bg: "bg-neutral-800",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-white"
          >
            Why Choose <span className="text-white">Us</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto font-light"
          >
            We focus on results, not just aesthetics. Here is what you can expect from our agency.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-8 text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-2"
            >
              <div
                className={`w-20 h-20 rounded-full ${reason.bg} ${reason.color} flex items-center justify-center mb-6 border border-neutral-700`}
              >
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
