// src/components/CTASection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRocket } from "react-icons/fa";

const CTASection = ({
  title = "Ready to build something amazing?",
  subtitle = "Let's bring your ideas to life with cutting-edge AI and web technologies.",
  buttonText = "Let's Talk",
  buttonLink = "/contact",
  variant = "default", // "default" | "gradient"
}) => {
  const isGradient = variant === "gradient";

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative rounded-3xl p-8 sm:p-12 text-center overflow-hidden border ${
            isGradient
              ? "border-accent/30 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent"
              : "border-white/10 bg-white/5 backdrop-blur-xl"
          }`}
        >
          {/* Glow blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="inline-block mb-5"
            >
              <FaRocket className="text-4xl sm:text-5xl text-accent" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
              {subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to={buttonLink}
                className="px-6 sm:px-8 py-3 rounded-full bg-accent text-ink font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                {buttonText}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-6 sm:px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                View My Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;