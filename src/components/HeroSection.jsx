// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = ({
  title,
  subtitle,
  description,
  image,
  ctaText = "Get Started",
  ctaLink = "/contact",
  badge = null,
  reversed = false,
}) => {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-lightWhite">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Light overlay for text readability, less dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/40" />
        {/* Subtle dark gradient from bottom for depth (shadow bottom to upper) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? "md:flex-row-reverse" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {badge && (
              <span className="inline-block px-4 py-1.5 bg-mutedBlue/20 border border-mutedBlue/30 rounded-full text-mutedBlue text-sm font-medium">
                {badge}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deepCharcoal">
              {title}
            </h1>

            {subtitle && (
              <h2 className="text-xl md:text-2xl text-deepCharcoal/80 font-medium">
                {subtitle}
              </h2>
            )}

            <p className="text-deepCharcoal/70 text-lg max-w-lg leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to={ctaLink}
                className="px-8 py-3 bg-mutedBlue rounded-full text-white font-semibold hover:shadow-lg hover:shadow-mutedBlue/25 transition-all duration-300 flex items-center gap-2 group"
              >
                {ctaText}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {ctaLink !== "/contact" && (
                <Link
                  to="/contact"
                  className="px-8 py-3 border border-mutedBlue/30 rounded-full text-deepCharcoal font-semibold hover:bg-mutedBlue/10 transition-all duration-300"
                >
                  Contact Me
                </Link>
              )}
            </div>
          </motion.div>

          {/* Optional right side content */}
          {!reversed && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            />
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-mutedBlue/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-mutedBlue rounded-full mt-2 animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;