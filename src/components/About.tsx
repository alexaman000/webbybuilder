"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Globe, User } from "lucide-react";

export default function About() {
  const contactLinks = [
    {
      icon: <Phone size={20} />,
      label: "Aman Raj (Founder)",
      value: "+91 8210330277",
      href: "tel:+918210330277",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: <Phone size={20} />,
      label: "Krishav Raj (Co-Founder)",
      value: "+91 7856959016",
      href: "tel:+917856959016",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp Aman",
      value: "+91 8210330277",
      href: "https://wa.me/918210330277?text=Hello%20WebbyBuilder%20%F0%9F%9A%80",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp Krishav",
      value: "+91 7856959016",
      href: "https://wa.me/917856959016?text=Hello%20WebbyBuilder%20%F0%9F%9A%80",
      color: "bg-emerald-500/10 text-emerald-500",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-neutral-300 font-medium text-sm">
              <User size={16} className="text-white" />
              <span className="uppercase tracking-widest text-xs font-bold text-neutral-400">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">
              Hi, we are <span className="text-gradient">Aman & Krishav</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg font-light">
              We are a passionate team specializing in building high-performance, premium websites that turn visitors into paying clients. Aman Raj (Founder) and Krishav Raj (Co-Founder) are on a mission to empower businesses with digital solutions that are fast, aesthetic, and highly converting.
            </p>
            
            <div className="pt-4 grid sm:grid-cols-2 gap-4">
               <div className="premium-card p-6 rounded-2xl">
                 <h4 className="font-bold text-4xl text-white mb-2">2+</h4>
                 <p className="text-xs font-semibold uppercase tracking-[0.1em] text-neutral-400">Years Experience</p>
               </div>
               <div className="premium-card p-6 rounded-2xl">
                 <h4 className="font-bold text-4xl text-white mb-2">100%</h4>
                 <p className="text-xs font-semibold uppercase tracking-[0.1em] text-neutral-400">Client Satisfaction</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="premium-card p-8 rounded-3xl relative"
          >
             <h3 className="text-2xl font-bold mb-8 text-white">Let&apos;s Connect</h3>
             
             <div className="space-y-4">
               {contactLinks.map((contact, index) => (
                 <a
                   key={index}
                   href={contact.href}
                   target={contact.label === "LinkedIn" || contact.label === "WhatsApp" ? "_blank" : "_self"}
                   rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/20 group"
                 >
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${contact.color} group-hover:scale-110 transition-transform`}>
                     {contact.icon}
                   </div>
                   <div>
                     <p className="text-sm text-neutral-400 font-medium mb-0.5">{contact.label}</p>
                     <p className="font-semibold text-white">{contact.value}</p>
                   </div>
                 </a>
               ))}
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
