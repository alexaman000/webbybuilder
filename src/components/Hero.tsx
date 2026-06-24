"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Premium Minimal Grid Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Subtle top glow instead of colorful blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 mb-8 text-neutral-300 font-medium text-sm shadow-sm backdrop-blur-md"
        >
          <Code size={16} />
          <span>Premium Digital Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight text-white font-outfit"
        >
          We Build <span className="text-white">Exceptional</span> <br className="hidden md:block" />
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
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            Start a Project <ArrowRight size={20} />
          </Link>
          <Link
            href="#projects"
            className="px-8 py-4 rounded-full border border-neutral-700 text-white font-medium text-lg hover:bg-neutral-800 transition-colors flex items-center justify-center"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
