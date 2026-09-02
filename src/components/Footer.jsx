// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaCode,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import {
  N8nIcon,
  OpenAIIcon,
  LangChainIcon,
  ShopifyIcon,
  WixIcon,
  NextjsIcon,
} from "./icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Rustam-kha", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rustam-khan-87a7302b6/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/RustamKhanDev",
      label: "Twitter",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@RustamKhanDev",
      label: "YouTube",
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com/RustamKhanDev",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/RustamKhanDev",
      label: "Instagram",
    },
  ];

  const services = [
    { name: "WordPress Development", icon: FaCode },
    { name: "MERN Stack Development", icon: FaCode },
    { name: "Shopify Development", icon: ShopifyIcon },
    { name: "Next.js Development", icon: NextjsIcon },
    { name: "Wix Development", icon: WixIcon },
    { name: "n8n Automation", icon: N8nIcon },
    { name: "OpenAI Integration", icon: OpenAIIcon },
    { name: "LangChain Solutions", icon: LangChainIcon },
  ];

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Experience", path: "/experience" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <FaCode className="text-mutedBlue text-2xl" />
              </motion.div>
              <span className="text-xl font-bold text-deepCharcoal">
                Rustam Khan
              </span>
            </div>
            <p className="text-deepCharcoal/70 text-sm leading-relaxed">
              Full Stack Developer & AI Automation Expert specializing in
              <span className="text-mutedBlue"> WordPress</span>,
              <span className="text-mutedBlue"> MERN Stack</span>,
              <span className="text-mutedBlue"> Next.js</span>,
              <span className="text-mutedBlue"> OpenAI</span>,
              <span className="text-mutedBlue"> n8n</span>, and
              <span className="text-mutedBlue"> Generative AI</span>. Building
              intelligent, automated digital solutions.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 mt-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-gray-100 border border-gray-200 text-deepCharcoal/60 hover:text-mutedBlue hover:border-mutedBlue/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-deepCharcoal font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-mutedBlue rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-deepCharcoal/70 hover:text-mutedBlue transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-mutedBlue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-deepCharcoal font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-mutedBlue rounded-full"></span>
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <li key={idx}>
                    <Link
                      to="/services"
                      className="text-deepCharcoal/70 hover:text-mutedBlue transition-colors text-sm flex items-center gap-2 group"
                    >
                      <Icon
                        size={12}
                        className="text-mutedBlue opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-deepCharcoal font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-mutedBlue rounded-full"></span>
              Contact Info
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:rmkhan0332@gmail.com"
                className="flex items-center gap-3 text-deepCharcoal/70 hover:text-mutedBlue transition-colors text-sm group"
              >
                <div className="p-2 rounded-lg bg-mutedBlue/10 group-hover:bg-mutedBlue/20 transition-colors">
                  <FaEnvelope className="text-mutedBlue text-sm" />
                </div>
                <span>rmkhan0332@gmail.com</span>
              </a>

              <a
                href="tel:+923325577359"
                className="flex items-center gap-3 text-deepCharcoal/70 hover:text-mutedBlue transition-colors text-sm group"
              >
                <div className="p-2 rounded-lg bg-mutedBlue/10 group-hover:bg-mutedBlue/20 transition-colors">
                  <FaPhone className="text-mutedBlue text-sm" />
                </div>
                <span>+92 332 5577359</span>
              </a>

              <div className="flex items-start gap-3 text-deepCharcoal/70 text-sm group">
                <div className="p-2 rounded-lg bg-mutedBlue/10 group-hover:bg-mutedBlue/20 transition-colors mt-0.5">
                  <FaMapMarkerAlt className="text-mutedBlue text-sm" />
                </div>
                <span>
                  Shahlabor Qamber Khel, Bara, District Khyber, Pakistan
                </span>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-xs text-green-700 font-medium">
                  Available for Freelance & Full-time
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-deepCharcoal/60 text-sm">
            © {currentYear} <span className="text-mutedBlue">Rustam Khan</span>.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="text-gray-300">|</span>
            <span className="text-deepCharcoal/60 flex items-center gap-1">
              <FaCode className="text-mutedBlue text-xs" />
              Built with <span className="text-mutedBlue">❤️</span> using React &
              Tailwind
            </span>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-2">
              <span className="text-deepCharcoal/60">Version</span>
              <span className="px-2 py-0.5 bg-mutedBlue/10 border border-mutedBlue/20 rounded-full text-mutedBlue text-[10px] font-mono">
                v2.0.0
              </span>
            </div>
          </div>

          <div className="flex gap-4 text-xs">
            <Link
              to="/privacy"
              className="text-deepCharcoal/60 hover:text-mutedBlue transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-deepCharcoal/60 hover:text-mutedBlue transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;