"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-primary font-medium text-sm"
        >
          <Code size={16} />
          <span>Full Stack Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-foreground font-outfit"
        >
          I Build <span className="text-gradient">Scroll-Stopping</span> <br className="hidden md:block" />
          Websites for Businesses 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-2xl text-foreground/70 mb-10 max-w-2xl"
        >
          From idea to live website &mdash; fast, affordable & powerful. 
          <br className="hidden md:block" />
          <span className="font-semibold text-primary">Get your website in 48 hours.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full bg-primary text-white font-medium text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
          >
            Get Your Website <ArrowRight size={20} />
          </Link>
          <Link
            href="#projects"
            className="px-8 py-4 rounded-full glass text-foreground font-medium text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
