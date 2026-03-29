"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Globe, User } from "lucide-react";

export default function About() {
  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email Me",
      value: "alexaman000r@gmail.com",
      href: "mailto:alexaman000r@gmail.com",
      color: "bg-red-500/10 text-red-500",
    },
    {
      icon: <Phone size={20} />,
      label: "Call Me",
      value: "+91 8210330277",
      href: "tel:+918210330277",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp",
      value: "+91 8210330277",
      href: "https://wa.me/918210330277?text=Hello%20WebbyBuilder%20%F0%9F%9A%80",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: <Globe size={20} />,
      label: "LinkedIn",
      value: "Aman Raj",
      href: "https://www.linkedin.com/in/aman-raj-51468b383",
      color: "bg-indigo-500/10 text-indigo-500",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-medium text-sm">
              <User size={16} />
              <span>About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit">
              Hi, I am <span className="text-gradient">Aman Raj</span>
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed max-w-lg">
              I am a passionate Full Stack Developer specializing in building high-performance, premium websites that turn visitors into paying clients. My mission is to empower businesses with digital solutions that are fast, aesthetic, and highly converting.
            </p>
            
            <div className="pt-4 grid sm:grid-cols-2 gap-4">
               <div className="glass p-4 rounded-2xl">
                 <h4 className="font-bold text-2xl text-primary mb-1">2+</h4>
                 <p className="text-sm font-medium text-foreground/70">Years Experience</p>
               </div>
               <div className="glass p-4 rounded-2xl">
                 <h4 className="font-bold text-2xl text-primary mb-1">100%</h4>
                 <p className="text-sm font-medium text-foreground/70">Client Satisfaction</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-3xl relative"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-[-1]" />
             <h3 className="text-2xl font-bold mb-8">Let&apos;s Connect</h3>
             
             <div className="space-y-4">
               {contactLinks.map((contact, index) => (
                 <a
                   key={index}
                   href={contact.href}
                   target={contact.label === "LinkedIn" || contact.label === "WhatsApp" ? "_blank" : "_self"}
                   rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 dark:hover:bg-white/10 transition-colors border border-transparent hover:border-glass-border group"
                 >
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${contact.color} group-hover:scale-110 transition-transform`}>
                     {contact.icon}
                   </div>
                   <div>
                     <p className="text-sm text-foreground/60 font-medium mb-0.5">{contact.label}</p>
                     <p className="font-semibold text-foreground">{contact.value}</p>
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
