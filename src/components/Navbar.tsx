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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.img 
            initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            src="/logo.jpg" 
            alt="WebbyBuilder Logo" 
            className="h-10 w-auto object-contain mix-blend-multiply dark:bg-white dark:rounded-xl dark:p-1 dark:mix-blend-normal" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }} 
          />
          <div className="text-2xl font-black tracking-tight">
            Webby<span className="text-primary">Builder</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#projects" className="font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#services" className="font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 rounded-full bg-primary text-white font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/50"
          >
            Get a Website
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col space-y-4 shadow-xl"
        >
          <Link href="#projects" className="block text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link href="#services" className="block text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </Link>
          <Link href="#contact" className="block text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-lg hover:shadow-primary/50"
          >
            Get a Website
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
