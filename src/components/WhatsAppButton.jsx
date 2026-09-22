// src/components/WhatsAppButton.jsx
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phone = "923285787717";
  const message = "Hello! I'm interested in your services.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-accent text-ink rounded-full shadow-xl shadow-accent/30"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-xl sm:text-2xl" />
      <span className="hidden sm:inline text-sm font-semibold">Let's Chat</span>
      <span className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full animate-ping" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full" />
    </motion.a>
  );
};

export default WhatsAppButton;