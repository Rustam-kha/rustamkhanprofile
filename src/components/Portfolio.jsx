// src/components/Portfolio.jsx
import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
  FaRocket,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      id: "all",
      name: "All Projects",
      icon: <FaRocket className="text-sm" />,
      color: "from-mutedBlue to-purple-400",
    },
    {
      id: "wordpress",
      name: "WordPress",
      icon: "📝",
      color: "from-mutedBlue to-cyan-400",
    },
    {
      id: "mern",
      name: "MERN Stack",
      icon: "⚛️",
      color: "from-mutedBlue to-emerald-400",
    },
    {
      id: "agentic-ai",
      name: "Agentic AI",
      icon: "🤖",
      color: "from-mutedBlue to-emerald-400",
    },
  ];

  const wordpressProjects = [
    {
      id: 1,
      title: "Brookestone Funding",
      category: "wordpress",
      type: "Business Financing",
      description:
        "Business financing platform for New York-based financial services provider.",
      image: "/BrookeStore.png",
      technologies: ["WordPress", "Elementor", "WooCommerce"],
      link: "https://brookestonefunding.com/",
      color: "from-mutedBlue to-cyan-400",
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
      color: "from-gray-600 to-gray-800",
    },
    {
      id: 3,
      title: "MyBlogJournal",
      category: "wordpress",
      type: "Blogging Platform",
      description: "Multi-topic blogging platform.",
      image: "/myblogjournal.png",
      technologies: ["WordPress", "SEO"],
      link: "https://myblogjournal.com/",
      color: "from-mutedBlue to-purple-400",
    },
    {
      id: 4,
      title: "Primal Recovery Centre",
      category: "wordpress",
      type: "Health & Wellness",
      description: "Recovery centre website with booking system.",
      image: "/primalRecovery.png",
      technologies: ["WordPress", "Booking System"],
      link: "https://primalrecovery.net.au/",
      color: "from-mutedBlue to-orange-400",
    },
    {
      id: 5,
      title: "Renovix MEP Contracting",
      category: "wordpress",
      type: "Contracting Services",
      description: "MEP contracting platform for Saudi market.",
      image: "/Renovix.png",
      technologies: ["WordPress", "Elementor"],
      link: "https://renovixmepcontracting.com/",
      color: "from-mutedBlue to-teal-400",
    },
    {
      id: 6,
      title: "Universal Bridge Logistics",
      category: "wordpress",
      type: "Logistics & Shipping",
      description: "Global shipping platform with real-time tracking.",
      image: "/ubl.png",
      technologies: ["WordPress", "WooCommerce"],
      link: "https://ublco.net/",
      color: "from-mutedBlue to-yellow-400",
    },
    {
      id: 11,
      title: "thinkpharmacy",
      category: "wordpress",
      type: "Medicine E-Commerce",
      description: "E-commerce website for pharmacy.",
      image: "/thinkPharmacy.jpg",
      technologies: ["WordPress", "WooCommerce"],
      link: "https://thinkpharmacy.com.au/",
      color: "from-mutedBlue to-rose-400",
    },
    {
      id: 12,
      title: "Duct Cleaning Melbourne",
      category: "wordpress",
      type: "Duct Cleaning",
      description: "Duct cleaning in Melbourne starting from $10 per Duct",
      image: "/stage3.png",
      technologies: ["WordPress", "Elementor"],
      link: "https://www.staging3.mrductcleaning.com.au/",
      color: "from-mutedBlue to-teal-400",
    },
    {
      id: 13,
      title: "Matrix Solar Energy",
      category: "wordpress",
      type: "Duct Cleaning",
      description:
        "Matrix Solar Energy where you smart and efficient batteries,inverters and smart energy storage devices are available.",
      image: "/matrixsolarenergy.png",
      technologies: ["WordPress", "Elementor", "ACF", "Angie", "Custom Coding"],
      link: "https://www.matrixsolarenergy.com/",
      color: "from-mutedBlue to-teal-400",
    },
  ];

  const mernProjects = [
    {
      id: 8,
      title: "Daily Dish App",
      category: "mern",
      type: "Food Delivery",
      description: "Full-stack food delivery platform with real-time tracking.",
      image: "/daily_dish.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://daily-dish-app.vercel.app/",
      github: "https://github.com/Rustam-khan",
      color: "from-mutedBlue to-red-400",
    },
    {
      id: 9,
      title: "Virtual Reality Experience",
      category: "mern",
      type: "VR Application",
      description: "Immersive 3D VR experience with interactive environments.",
      image: "/VirtualVR.png",
      technologies: ["React.js", "Three.js", "WebGL", "Tailwind CSS"],
      link: "https://virtualrbyrmkhan.netlify.app/",
      github: "https://github.com/Rustam-khan",
      color: "from-mutedBlue to-indigo-400",
    },
    {
      id: 10,
      title: "TaskFlow - Todo App",
      category: "mern",
      type: "Productivity",
      description: "Advanced task management with drag-and-drop functionality.",
      image: "/todo_list.png",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
      ],
      link: "https://todo-list-by-rsutamkhan.netlify.app/",
      github: "https://github.com/Rustam-khan",
      color: "from-mutedBlue to-emerald-400",
    },
  ];

  const agenticAIProjects = [
    {
      id: 21,
      title: "Langchain Projects",
      category: "agentic-ai",
      type: "Langchain different projects",
      description:
        "Building intelligent AI agents and autonomous workflows with LangChain, and LLMs to automate tasks and solve real-world problems.",
      image: "/agenntic_ai_projects_by_rustam_khan.png",
      technologies: ["LangChain", "Python", "LLMs"],
      link: "https://github.com/Rustam-kha/langchain-course/",
      github: "https://github.com/Rustam-kha/langchain-course",
      color: "from-mutedRed to-red-400",
    },
  ];

  // Fix: Combine all projects correctly
  const allProjects = [
    ...wordpressProjects,
    ...mernProjects,
    ...agenticAIProjects,
  ];

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  const handleDemoClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div name="Portfolio" className="relative min-h-screen bg-lightWhite py-24">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-mutedBlue/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-mutedBlue/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-mutedBlue/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <FaRocket className="text-5xl text-mutedBlue" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-deepCharcoal">
            My Portfolio
          </h1>
          <div className="w-32 h-1 bg-mutedBlue mx-auto rounded-full mb-6" />
          <p className="text-deepCharcoal/70 text-lg max-w-2xl mx-auto">
            WordPress Expert | MERN Stack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                filter === cat.id
                  ? "text-white bg-mutedBlue shadow-lg shadow-mutedBlue/25"
                  : "bg-white text-deepCharcoal/70 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.icon}
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-mutedBlue/50 transition-all duration-500 shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/60 via-deepCharcoal/30 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}
                    >
                      {project.type}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-deepCharcoal/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDemoClick(project.link)}
                      className="px-6 py-2.5 bg-mutedBlue rounded-full text-white font-semibold flex items-center gap-2"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  <div>
                    <h3 className="text-xl font-bold text-deepCharcoal mb-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-deepCharcoal/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies &&
                      project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-deepCharcoal/70"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-mutedBlue/10 border border-mutedBlue/30 text-mutedBlue font-semibold hover:bg-mutedBlue/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    View Details
                    <FaArrowRight
                      className="group-hover/btn:translate-x-1 transition-transform"
                      size={14}
                    />
                  </button>
                </div>

                <motion.div
                  animate={{
                    width: hoveredCard === project.id ? "100%" : "0%",
                  }}
                  className="absolute bottom-0 left-0 h-0.5 bg-mutedBlue"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deepCharcoal/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-2xl w-full bg-white rounded-2xl border border-gray-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-mutedBlue text-sm">
                    {selectedProject.type}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-deepCharcoal/70 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <h4 className="text-deepCharcoal font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies &&
                    selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-gray-100 text-deepCharcoal/70 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleDemoClick(selectedProject.link)}
                    className="flex-1 py-3 rounded-xl bg-mutedBlue text-white font-semibold flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </button>
                  {selectedProject.github && (
                    <button
                      onClick={() => handleDemoClick(selectedProject.github)}
                      className="flex-1 py-3 rounded-xl bg-gray-100 border border-gray-200 text-deepCharcoal font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </button>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-deepCharcoal/50 hover:bg-deepCharcoal/80 transition-colors text-white text-lg flex items-center justify-center"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;

