"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function SmartForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    budget: "",
    requirement: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, email, businessType, budget, requirement } = formData;
    
    const message = `Hello WebbyBuilder 🚀

I saw your portfolio and I want a website.

Here are my details:

Name: ${name}
Phone: ${phone}
Email: ${email}
Business Type: ${businessType}
Budget: ${budget}

Requirement:
${requirement}

Please contact me.`;

    const whatsappUrl = `https://wa.me/918210330277?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-neutral-900"
          >
            Start Your <span className="text-gradient">Project</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 text-lg max-w-2xl mx-auto font-light"
          >
            Fill out the form below and I&apos;ll get back to you instantly via WhatsApp.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-12 relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-neutral-900 placeholder:text-neutral-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Phone</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full bg-transparent border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-neutral-900 placeholder:text-neutral-400"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full bg-transparent border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-neutral-900 placeholder:text-neutral-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Business Type</label>
                <select
                  required
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-neutral-900 appearance-none"
                >
                  <option value="" disabled className="text-black">Select Business Type</option>
                  <option className="text-black" value="E-commerce">E-commerce</option>
                  <option className="text-black" value="Agency">Agency</option>
                  <option className="text-black" value="Astrology/Consultation">Astrology / Consultation</option>
                  <option className="text-black" value="Startup">Startup / SaaS</option>
                  <option className="text-black" value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">Budget</label>
              <select
                required
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-transparent border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-neutral-900 appearance-none"
              >
                <option value="" disabled className="text-black">Select your Budget scope</option>
                <option className="text-black" value="₹3,999 - Landing Page">₹3,999 - Landing Page</option>
                <option className="text-black" value="₹7,999 - Business Website">₹7,999 - Business Website</option>
                <option className="text-black" value="₹14,999+ - E-commerce / Custom">₹14,999+ - E-commerce / Custom</option>
                <option className="text-black" value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">Requirement</label>
              <textarea
                required
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Tell me a bit about your project..."
                rows={4}
                className="w-full bg-transparent border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-neutral-900 resize-none placeholder:text-neutral-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#d4af37] text-white font-semibold text-lg hover:bg-[#c5a059] shadow-lg shadow-[#d4af37]/20 transition-colors flex items-center justify-center gap-2"
            >
              Submit & Open WhatsApp <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
