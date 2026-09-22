// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: FaGithub, href: "https://github.com/Rustam-kha", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rustam-khan-87a7302b6/",
      label: "LinkedIn",
    },
  ];

  const services = [
    "Agentic AI Development",
    "MERN Stack Development",
    "WordPress Development",
    "Shopify Development",
  ];

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Experience", path: "/experience" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-accent text-2xl" />
              <span className="text-lg font-bold text-white">
                Rustam<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full Stack Developer & Agentic AI Engineer building intelligent,
              automated digital products for the modern web.
            </p>
            <div className="flex gap-2 mt-4">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-accent hover:border-accent/50 transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:rmkhan0332@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-accent transition-colors"
                >
                  <FaEnvelope className="text-accent mt-0.5 shrink-0" />
                  <span className="break-all">rmkhan0332@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+923325577359"
                  className="flex items-start gap-3 text-gray-400 hover:text-accent transition-colors"
                >
                  <FaPhone className="text-accent mt-0.5 shrink-0" />
                  <span>+92 332 5577359</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-accent mt-0.5 shrink-0" />
                <span>Bara, District Khyber, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {year} <span className="text-accent">Rustam Khan</span>. All
            rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <span className="text-accent">❤️</span> using React &
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;