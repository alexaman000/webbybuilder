"use client";

import { motion } from "framer-motion";
import { Zap, IndianRupee, Palette, Search } from "lucide-react";

export default function WhyChooseMe() {
  const reasons = [
    {
      title: "Fast Delivery",
      description: "Get your website up and running in as little as 48 hours without compromising quality.",
      icon: <Zap size={32} />,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: "Affordable Pricing",
      description: "Premium SaaS-like websites at prices that make sense for growing businesses.",
      icon: <IndianRupee size={32} />,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Custom Design",
      description: "No boring templates. Unique Canva-style designs with glassmorphism and modern UI.",
      icon: <Palette size={32} />,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "SEO Friendly",
      description: "Built with Next.js to ensure lightning-fast performance and top Google rankings.",
      icon: <Search size={32} />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white/30 dark:bg-black/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4"
          >
            Why Choose <span className="text-gradient">Me</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 text-lg max-w-2xl mx-auto"
          >
            I focus on results, not just looks. Here is what you can expect when you work with me.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl text-center flex flex-col items-center justify-center transition-transform hover:shadow-2xl"
            >
              <div
                className={`w-20 h-20 rounded-full ${reason.bg} ${reason.color} flex items-center justify-center mb-6 shadow-inner`}
              >
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
