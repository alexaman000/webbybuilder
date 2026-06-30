"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Tech 4K Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-data-network-3112-large.mp4" type="video/mp4" />
      </video>
      
      {/* Heavy Black Overlay to ensure text readability and premium dark aesthetic */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[4px] z-0"></div>
      
      {/* Subtle top glow for premium effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 text-neutral-300 font-medium text-sm shadow-sm backdrop-blur-md"
        >
          <Code size={16} className="text-white" />
          <span className="uppercase tracking-widest text-xs font-bold text-neutral-400">Premium Digital Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight text-white font-outfit"
        >
          We Build <span className="text-gradient">Exceptional</span> <br className="hidden md:block" />
          Digital Experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-2xl text-neutral-400 mb-10 max-w-2xl font-light"
        >
          From strategy to launch &mdash; crafting fast, elegant, and high-converting websites for industry leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
          >
            Start a Project <ArrowRight size={20} />
          </Link>
          <Link
            href="#projects"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
