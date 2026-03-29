"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/918210330277?text=Hello%20WebbyBuilder%20%F0%9F%9A%80%0A%0AI%20saw%20your%20portfolio%20and%20I%20want%20a%20website.%20Please%20contact%20me.";

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 mix-blend-normal isolate"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors animate-pulse"
      >
        <MessageCircle size={32} />
      </Link>
    </motion.div>
  );
}
