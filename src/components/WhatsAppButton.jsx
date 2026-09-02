// src/components/WhatsAppButton.jsx
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "923285787717";
  const message = "Hello! I'm interested in your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring" }}
      className="fixed bottom-6 right-4 sm:right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-2xl opacity-60 animate-pulse" />

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3 bg-white/90 backdrop-blur-xl border border-white/30 rounded-full shadow-2xl overflow-hidden group"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 opacity-0 group-hover:opacity-100"
          style={{ padding: "2px" }}
        />

        <FaWhatsapp className="text-green-500 text-xl sm:text-2xl group-hover:scale-110 transition-transform" />

        <span className="text-deepCharcoal font-semibold text-xs sm:text-sm hidden sm:inline">
          Let's Connect
        </span>

        <div className="relative">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-ping" />
        </div>
      </motion.a>
    </motion.div>
  );
}

export default WhatsAppButton;