// src/components/Portfolio.jsx
import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

const wordpressProjects = [
  {
    id: 1,
    title: "Brookestone Funding",
    category: "wordpress",
    type: "Business Financing",
    description:
      "Business financing platform for a New York-based financial services provider.",
    image: "/BrookeStore.png",
    technologies: ["WordPress", "Elementor", "WooCommerce"],
    link: "https://brookestonefunding.com/",
  },
  {
    id: 2,
    title: "HawkEye Guardians",
    category: "wordpress",
    type: "Security Solutions",
    description: "Security surveillance platform with real-time monitoring.",
    image: "/HawkEye_Guardians.png",
    technologies: ["WordPress", "Elementor"],
    link: "https://hawkeyeguardians.com/",
  },
  {
    id: 3,
    title: "Primal Recovery Centre",
    category: "wordpress",
    type: "Health & Wellness",
    description: "Recovery centre website with an integrated booking system.",
    image: "/primalRecovery.png",
    technologies: ["WordPress", "Booking System"],
    link: "https://primalrecovery.net.au/",
  },
  {
    id: 4,
    title: "Universal Bridge Logistics",
    category: "wordpress",
    type: "Logistics",
    description: "Global shipping platform with real-time tracking.",
    image: "/ubl.png",
    technologies: ["WordPress", "WooCommerce"],
    link: "https://ublco.net/",
  },
  {
    id: 5,
    title: "Renovix MEP Contracting",
    category: "wordpress",
    type: "Contracting",
    description: "MEP contracting platform targeting the Saudi market.",
    image: "/Renovix.png",
    technologies: ["WordPress", "Elementor"],
    link: "https://renovixmepcontracting.com/",
  },
  {
    id: 6,
    title: "Think Pharmacy",
    category: "wordpress",
    type: "E-Commerce",
    description: "Online pharmacy store with full WooCommerce checkout.",
    image: "/thinkPharmacy.jpg",
    technologies: ["WordPress", "WooCommerce"],
    link: "https://thinkpharmacy.com.au/",
  },
];

const mernProjects = [
  {
    id: 8,
    title: "Daily Dish App",
    category: "mern",
    type: "Food Delivery",
    description:
      "Full-stack food delivery platform with real-time order tracking.",
    image: "/daily_dish.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://daily-dish-app.vercel.app/",
    github: "https://github.com/Rustam-kha",
  },
  {
    id: 9,
    title: "Virtual Reality Experience",
    category: "mern",
    type: "VR Application",
    description: "Immersive 3D VR experience with interactive environments.",
    image: "/VirtualVR.png",
    technologies: ["React", "Three.js", "WebGL", "Tailwind"],
    link: "https://virtualrbyrmkhan.netlify.app/",
    github: "https://github.com/Rustam-kha",
  },
  {
    id: 10,
    title: "TaskFlow - Todo App",
    category: "mern",
    type: "Productivity",
    description:
      "Advanced task management with drag-and-drop and persistent storage.",
    image: "/todo_list.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://todo-list-by-rsutamkhan.netlify.app/",
    github: "https://github.com/Rustam-kha",
  },
];

const allProjects = [...wordpressProjects, ...mernProjects];

const filters = [
  { id: "all", label: "All" },
  { id: "wordpress", label: "WordPress" },
  { id: "mern", label: "MERN Stack" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  const open = (link) => window.open(link, "_blank", "noopener,noreferrer");

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Selected Work
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Real projects built with WordPress, WooCommerce, and the MERN stack.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === f.id
                  ? "bg-accent text-ink shadow-lg shadow-accent/30"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-accent/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-accent/40 backdrop-blur-sm transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-accent/90 text-ink text-[10px] font-bold uppercase tracking-wider">
                  {p.type}
                </span>

                {/* Hover overlay with button */}
                <div className="absolute inset-0 flex items-center justify-center bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => open(p.link)}
                    className="px-5 py-2.5 bg-accent text-ink rounded-full text-xs font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.technologies.slice(0, 4).map((t, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelected(p)}
                  className="mt-auto w-full py-2 rounded-xl bg-accent/10 border border-accent/30 text-accent text-xs font-semibold hover:bg-accent/20 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  View Details
                  <FaArrowRight
                    size={10}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/90 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-ink/95 border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-ink/70 hover:bg-accent/80 text-white flex items-center justify-center transition-colors"
              >
                <FaTimes size={14} />
              </button>

              <div className="h-48 overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-t from-ink to-transparent" />
              </div>

              <div className="p-6 -mt-12 relative">
                <span className="inline-block px-2.5 py-1 rounded-full bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider mb-3">
                  {selected.type}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {selected.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {selected.description}
                </p>

                <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {selected.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => open(selected.link)}
                    className="flex-1 py-2.5 rounded-xl bg-accent text-ink text-sm font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </button>
                  {selected.github && (
                    <button
                      onClick={() => open(selected.github)}
                      className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;