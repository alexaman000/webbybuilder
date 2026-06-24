"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const articles = [
    {
      title: "How to Build a High-Converting Landing Page",
      excerpt: "Learn the secrets behind building a landing page that actually converts visitors into leads.",
      date: "Aug 12, 2026",
      readTime: "5 min read",
      category: "Web Design",
      slug: "high-converting-landing-page",
    },
    {
      title: "Why Your Small Business Needs a Custom Website",
      excerpt: "Stop using cheap templates. Here is why a custom built website will skyrocket your revenue.",
      date: "Sep 05, 2026",
      readTime: "7 min read",
      category: "Business",
      slug: "custom-website-for-small-business",
    },
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 mb-6 text-neutral-800 font-medium text-sm"
            >
              <BookOpen size={16} className="text-[#d4af37]" />
              <span className="uppercase tracking-widest text-xs font-bold text-neutral-600">Resources</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-outfit text-neutral-900"
            >
              Latest from the <span className="text-gradient">Blog</span>
            </motion.h2>
          </div>
          
          <Link
            href="#"
            className="group flex items-center gap-2 font-medium text-[#d4af37] hover:text-[#c5a059] transition-colors mt-6 md:mt-0"
          >
            Read All Articles 
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Link key={index} href={`/blog/${article.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-8 group h-full hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase bg-[#d4af37]/5">
                    {article.category}
                  </span>
                  <span className="text-neutral-500 text-sm font-medium">
                    {article.date} · {article.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 group-hover:text-[#d4af37] transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed font-light">
                  {article.excerpt}
                </p>
                <div className="flex items-center mt-auto pt-4 text-sm font-bold text-neutral-900 group-hover:text-[#d4af37] transition-colors">
                  Read Article <ArrowUpRight size={16} className="ml-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
