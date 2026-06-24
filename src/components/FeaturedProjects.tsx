"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, Calendar, Bell, Clock, Target, BookOpen, GraduationCap, Users, Trophy, Activity, MapPin, Dumbbell, Flame, CheckCircle, Building2, Wrench, Shield } from "lucide-react";
import Image from "next/image";

export default function FeaturedProjects() {
  const projects = [
    {
      id: "astrologer",
      title: "Astrology Booking & E-commerce Website",
      category: "I build business websites",
      description: "A premium business platform with online booking system, payment integration, and product selling capabilities.",
      features: [
        { icon: <Calendar size={16} />, text: "Online booking system" },
        { icon: <ShoppingCart size={16} />, text: "E-commerce & Product selling" },
        { icon: <Target size={16} />, text: "Business automation" },
      ],
      link: "https://suryavardhanguruji.in",
      // Since we don't have images, we will use a gradient placeholder using styling
      gradient: "from-purple-600 via-indigo-500 to-blue-500",
      highlight: true,
    },
    {
      id: "prakash-institute",
      title: "Prakash Institute Ranchi - EdTech Platform",
      category: "I build educational platforms",
      description: "A professional and high-converting coaching institute website with interactive course catalogs, student success showcases, and a streamlined enquiry system.",
      features: [
        { icon: <BookOpen size={16} />, text: "Interactive course directory (IIT-JEE, NEET)" },
        { icon: <GraduationCap size={16} />, text: "Student success & Achievers showcase" },
        { icon: <Users size={16} />, text: "Faculty profiling & Enquiry automation" },
      ],
      link: "https://prakashinstituteranchi.online",
      gradient: "from-blue-600 via-cyan-500 to-teal-500",
      highlight: false,
    },
    {
      id: "downtown-sports",
      title: "Downtown Sports - Athletic Complex & Booking",
      category: "I build sports platforms",
      description: "A dynamic sports complex website featuring automated court booking, membership management, and real-time event schedules.",
      features: [
        { icon: <Trophy size={16} />, text: "Tournament registration & brackets" },
        { icon: <MapPin size={16} />, text: "Facility mapping & court booking" },
        { icon: <Activity size={16} />, text: "Real-time schedules & updates" },
      ],
      link: "https://downtownsports.online",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      highlight: false,
    },
    {
      id: "ashutosh-fitness",
      title: "Ashutosh Fitness - Personal Training & Coaching",
      category: "I build fitness platforms",
      description: "A comprehensive fitness coaching platform offering personalized workout plans, diet tracking, and client progress monitoring.",
      features: [
        { icon: <Dumbbell size={16} />, text: "Customized workout regimens" },
        { icon: <Flame size={16} />, text: "Calorie & nutrition tracking" },
        { icon: <CheckCircle size={16} />, text: "Client progress dashboards" },
      ],
      link: "https://ashutoshfitness.online",
      gradient: "from-orange-500 via-red-500 to-rose-500",
      highlight: false,
    },
    {
      id: "rudra-engineers",
      title: "Rudra Engineers - Industrial & Engineering Services",
      category: "I build corporate platforms",
      description: "A robust corporate website for an engineering firm, featuring a comprehensive service catalog, project portfolios, and B2B inquiry generation.",
      features: [
        { icon: <Building2 size={16} />, text: "Corporate service catalog" },
        { icon: <Wrench size={16} />, text: "Industrial project portfolio" },
        { icon: <Shield size={16} />, text: "B2B lead generation system" },
      ],
      link: "https://rudraengineers.online",
      gradient: "from-slate-600 via-gray-500 to-zinc-500",
      highlight: false,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-neutral-900"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 text-lg max-w-2xl mx-auto"
          >
            Look at some of the awesome projects I&apos;ve built to solve real-world problems and boost business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 max-w-3xl mx-auto gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden premium-card"
            >
              <div 
                className={`h-64 md:h-80 w-full bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 w-full h-full bg-black/20 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-500"
                >
                  <span className="text-3xl md:text-5xl font-bold text-white select-none px-4 text-center leading-tight tracking-tight shadow-xl">
                    {project.title.split('-')[0]}
                  </span>
                </motion.div>
              </div>

              <div className="p-8 bg-white">
                <div className="text-[#d4af37] font-semibold text-xs mb-3 uppercase tracking-[0.2em]">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-900">{project.title}</h3>
                <p className="text-neutral-600 mb-6 font-light leading-relaxed">{project.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-700 font-light">
                      <div className="p-1.5 rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                        {feature.icon}
                      </div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#d4af37] text-white font-semibold hover:bg-[#c5a059] transition-colors shadow-lg shadow-[#d4af37]/20 w-full"
                >
                  View Live Website <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
