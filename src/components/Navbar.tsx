"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-lg border-white/10 py-4 shadow-sm" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/logo.jpg" 
            alt="WebbyBuilder Logo" 
            className="h-10 w-auto object-contain rounded-lg" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }} 
          />
          <div className="text-xl font-bold tracking-widest uppercase text-white">
            Webby<span className="text-neutral-500 font-light">Builder</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#projects" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#services" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Contact
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl"
        >
          <Link href="#projects" className="block text-lg font-medium text-neutral-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link href="#services" className="block text-lg font-medium text-neutral-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </Link>
          <Link href="#contact" className="block text-lg font-medium text-neutral-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-6 py-3 rounded-xl bg-white text-black font-semibold mt-4"
          >
            Start a Project
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
