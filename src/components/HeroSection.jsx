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
    <section className="relative min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          loading="eager"
          className="w-full h-full object-cover scale-105"
        />
        {/* Soft tint overlay — keeps background visible but text readable */}
        <div className="absolute inset-0 bg-ink/70" />
        {/* Darker at the bottom for smooth blend into the page */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
        {/* Subtle top vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink to-transparent" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            {badge && (
              <span className="inline-block px-4 py-1.5 bg-accent/15 border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-medium">
                {badge}
              </span>
            )}

            {/* Plain white title — no gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>

            {subtitle && (
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
                {subtitle}
              </h2>
            )}

            {description && (
              <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {description}
              </p>
            )}

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
              <Link
                to={ctaLink}
                className="px-6 sm:px-8 py-3 bg-accent rounded-full text-ink font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                {ctaText}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {ctaLink !== "/contact" && (
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 hover:border-accent/50 transition-all duration-300 text-sm sm:text-base"
                >
                  Contact Me
                </Link>
              )}
            </div>
          </motion.div>

          {/* Right spacer for grid balance */}
          {!reversed && <div className="hidden lg:block" />}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;