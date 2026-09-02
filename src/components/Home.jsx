// src/components/Home.jsx
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaJava,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaBrain,
  FaNetworkWired,
  FaHeart,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiWix,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectSlider from "./ProjectSlider";
import CTASection from "./CTASection";
import { OpenAIIcon, LangChainIcon, N8nIcon } from "./icons";

function Home() {
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
  });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const featuredProjects = [
    {
      id: 1,
      title: "Brookestone Funding",
      category: "WordPress",
      description: "Business financing platform with custom WordPress development.",
      image: "/BrookeStore.png",
      technologies: ["WordPress", "Elementor", "WooCommerce"],
      link: "https://brookestonefunding.com/",
    },
    {
      id: 2,
      title: "HawkEye Guardians",
      category: "WordPress",
      description: "Security surveillance platform with real-time monitoring.",
      image: "/HawkEye_Guardians.png",
      technologies: ["WordPress", "Elementor"],
      link: "https://hawkeyeguardians.com/",
    },
    {
      id: 3,
      title: "Primal Recovery Centre",
      category: "WordPress",
      description: "Recovery centre website with integrated booking system.",
      image: "/primalRecovery.png",
      technologies: ["WordPress", "Booking System"],
      link: "https://primalrecovery.net.au/",
    },
    {
      id: 4,
      title: "Universal Bridge Logistics",
      category: "WordPress",
      description: "Global shipping platform with real-time tracking.",
      image: "/ubl.png",
      technologies: ["WordPress", "WooCommerce"],
      link: "https://ublco.net/",
    },
  ];

  useEffect(() => {
    const counters = [
      { key: "projects", target: 15, duration: 2000 },
      { key: "experience", target: 1, duration: 2000 },
      { key: "clients", target: 12, duration: 2000 },
    ];

    counters.forEach(({ key, target, duration }) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setStats((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setStats((prev) => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document
        .getElementById("profile-container")
        ?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    if (window.innerWidth >= 1024) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const frontendSkills = [
    { icon: FaHtml5, name: "HTML5", color: "text-orange-500", level: 95 },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", level: 90 },
    { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-500", level: 88 },
    { icon: RiReactjsLine, name: "React.js", color: "text-cyan-600", level: 85 },
    { icon: SiNextdotjs, name: "Next.js", color: "text-deepCharcoal", level: 80 },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600", level: 90 },
    { icon: RiTailwindCssFill, name: "Tailwind", color: "text-teal-500", level: 92 },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", level: 75 },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500", level: 85 },
    { icon: SiExpress, name: "Express.js", color: "text-gray-500", level: 82 },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600", level: 80 },
    { icon: FaDatabase, name: "SQL", color: "text-blue-400", level: 78 },
    { icon: FaPython, name: "Python", color: "text-yellow-400", level: 75 },
    { icon: FaJava, name: "Java", color: "text-red-500", level: 70 },
    { icon: SiGraphql, name: "GraphQL", color: "text-pink-500", level: 72 },
    { icon: SiDocker, name: "Docker", color: "text-blue-500", level: 68 },
  ];

  const otherSkills = [
    { icon: FaWordpress, name: "WordPress", color: "text-blue-600", level: 90 },
    { icon: SiWix, name: "Wix", color: "text-cyan-500", level: 85 },
    { icon: FaHeart, name: "AI/ML", color: "text-purple-400", level: 70 },
    { icon: OpenAIIcon, name: "OpenAI", color: "text-green-500", level: 75 },
    { icon: LangChainIcon, name: "LangChain", color: "text-orange-500", level: 68 },
    { icon: N8nIcon, name: "n8n", color: "text-red-500", level: 72 },
    { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-500", level: 60 },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Rustam-kha",
      color: "hover:text-deepCharcoal",
      bg: "hover:bg-gray-200",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rustam-khan-87a7302b6/",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-50",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-lightWhite">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-mutedBlue/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-mutedBlue/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-mutedBlue/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>

        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-mutedBlue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:30px_30px_sm:40px_40px_md:50px_50px] opacity-30" />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-mutedBlue/20 border border-mutedBlue/30 backdrop-blur-sm mb-4 sm:mb-6"
            >
              <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 sm:h-2 w-1.5 sm:w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-mutedBlue">
                ✨ Available for Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4"
            >
              <span className="text-deepCharcoal text-base sm:text-lg lg:text-2xl block">
                Hello, I'm
              </span>
              <span className="text-mutedBlue text-3xl sm:text-5xl lg:text-7xl">
                Rustam Khan
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-xl lg:text-3xl text-deepCharcoal/80 mb-4 sm:mb-6"
            >
              <ReactTyped
                strings={[
                  "MERN Stack Developer 🚀",
                  "Next.js Expert ⚛️",
                  "WordPress Developer 📝",
                  "Wix Specialist 🎨",
                  "Python Developer 🐍",
                  "AI & LLM Engineer 🤖",
                  "Generative AI Expert 🧠",
                  "n8n Automation Specialist ⚡",
                  "LangChain Developer 🔗",
                  "Full Stack Developer 💻",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1000}
                loop={true}
                className="text-mutedBlue font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-deepCharcoal/70 leading-relaxed mb-6 sm:mb-8 max-w-xl text-sm sm:text-base lg:text-lg"
            >
              Full Stack Developer & AI Automation Expert with{" "}
              <span className="text-mutedBlue font-semibold">1+ years</span> of
              experience building scalable web applications. Specialized in{" "}
              <span className="text-mutedBlue">MERN stack</span>,{" "}
              <span className="text-mutedBlue">Next.js</span>,{" "}
              <span className="text-mutedBlue">WordPress</span>, and
              <span className="text-mutedBlue"> AI/ML</span> solutions. Expert
              in <span className="text-mutedBlue">Generative AI</span>,
              <span className="text-mutedBlue"> n8n automation</span>, and{" "}
              <span className="text-mutedBlue">LangChain</span> for building
              intelligent, automated systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8"
            >
              {[
                {
                  label: "Projects",
                  value: stats.projects,
                  suffix: "+",
                  icon: FaCode,
                  gradient: "from-mutedBlue to-blue-400",
                },
                {
                  label: "Experience",
                  value: stats.experience,
                  suffix: " yr",
                  icon: FaRocket,
                  gradient: "from-mutedBlue to-purple-400",
                },
                {
                  label: "Clients",
                  value: stats.clients,
                  suffix: "+",
                  icon: FaDatabase,
                  gradient: "from-mutedBlue to-emerald-400",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative group"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${stat.gradient.split(" ")[1]}, ${stat.gradient.split(" ")[3]})`,
                    }}
                  />
                  <div className="relative text-center p-2 sm:p-4 rounded-2xl bg-white border border-gray-200 group-hover:border-mutedBlue/50 transition-all duration-300 shadow-sm">
                    <stat.icon className="text-mutedBlue text-base sm:text-xl mx-auto mb-1 sm:mb-2 opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-110" />
                    <div className="text-xl sm:text-3xl font-bold text-deepCharcoal">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-[10px] sm:text-sm text-deepCharcoal/60 mt-0.5 sm:mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8"
            >
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-4 sm:px-8 py-2.5 sm:py-3 rounded-full bg-mutedBlue text-white font-semibold shadow-lg shadow-mutedBlue/25 hover:shadow-mutedBlue/50 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group text-sm sm:text-base"
                >
                  <FaRocket className="group-hover:rotate-12 transition-transform text-sm sm:text-base" />
                  <span>View Projects</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-4 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-mutedBlue/50 text-mutedBlue font-semibold hover:bg-mutedBlue/10 hover:border-mutedBlue transition-all duration-300 text-sm sm:text-base"
                >
                  Let's Talk
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-2 sm:gap-3"
            >
              {socialLinks.map(({ icon: Icon, href, color, bg }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 sm:p-3 rounded-xl bg-white border border-gray-200 text-deepCharcoal/60 ${color} ${bg} transition-all duration-300 shadow-sm`}
                >
                  <Icon size={16} className="sm:text-[20px]" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div
              id="profile-container"
              className="relative perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                style={{
                  rotateX: window.innerWidth >= 1024 ? rotateX : 0,
                  rotateY: window.innerWidth >= 1024 ? rotateY : 0,
                  transition: "transform 0.1s ease-out",
                }}
                className="relative"
              >
                <div className="absolute -inset-2 sm:-inset-4 rounded-full bg-gradient-to-r from-mutedBlue via-blue-400 to-purple-400 blur-xl sm:blur-2xl opacity-60 animate-pulse" />

                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-full bg-gradient-to-r from-mutedBlue via-blue-400 to-purple-400"
                    style={{ padding: "2px sm:3px" }}
                  />
                </div>

                <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="/RUSTAM_KHAN_UPWORK_PROFILE.png"
                    alt="Rustam Khan"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/30 via-transparent to-transparent" />
                </div>

                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 sm:-top-5 -right-2 sm:-right-5 p-2 sm:p-3 rounded-2xl bg-gradient-to-br from-mutedBlue to-blue-400 shadow-lg"
                >
                  <RiReactjsLine className="text-white text-lg sm:text-2xl" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-2 sm:-bottom-5 -left-2 sm:-left-5 p-2 sm:p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 shadow-lg"
                >
                  <OpenAIIcon className="text-white text-lg sm:text-2xl" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-1/2 -right-4 sm:-right-8 p-2 sm:p-3 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 shadow-lg"
                >
                  <FaNetworkWired className="text-white text-lg sm:text-2xl" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, delay: 0.8 }}
                  className="absolute top-1/3 -left-4 sm:-left-8 p-2 sm:p-3 rounded-2xl bg-gradient-to-br from-orange-400 to-red-400 shadow-lg"
                >
                  <LangChainIcon className="text-white text-lg sm:text-2xl" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, delay: 1.2 }}
                  className="absolute top-2/3 -right-3 sm:-right-6 p-2 sm:p-3 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 shadow-lg"
                >
                  <FaBrain className="text-white text-lg sm:text-2xl" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 md:mt-28"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-2 sm:mb-3"
            >
              <FaCode className="text-2xl sm:text-4xl text-mutedBlue" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deepCharcoal">
              Tech Stack & Expertise
            </h2>
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-mutedBlue mx-auto mt-3 sm:mt-4 rounded-full" />
            <p className="text-deepCharcoal/70 mt-3 sm:mt-4 text-sm sm:text-base">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          {/* Frontend Skills */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-base sm:text-xl font-semibold text-mutedBlue mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
              <span className="w-8 sm:w-12 h-px bg-mutedBlue"></span>
              Frontend Development
              <span className="w-8 sm:w-12 h-px bg-mutedBlue"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {frontendSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03, type: "spring" }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="group relative"
                >
                  <div className="p-2.5 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-mutedBlue/50 transition-all duration-300 shadow-sm">
                    <skill.icon
                      className={`text-2xl sm:text-4xl md:text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-[8px] sm:text-xs text-deepCharcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-sm">
                      {skill.name} • {skill.level}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-base sm:text-xl font-semibold text-mutedBlue mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
              <span className="w-8 sm:w-12 h-px bg-mutedBlue"></span>
              Backend & Database
              <span className="w-8 sm:w-12 h-px bg-mutedBlue"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {backendSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03, type: "spring" }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="group relative"
                >
                  <div className="p-2.5 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-mutedBlue/50 transition-all duration-300 shadow-sm">
                    <skill.icon
                      className={`text-2xl sm:text-4xl md:text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-[8px] sm:text-xs text-deepCharcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-sm">
                      {skill.name} • {skill.level}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI & Automation Skills */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-base sm:text-xl font-semibold text-mutedBlue mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
              <span className="w-8 sm:w-12 h-px bg-mutedBlue"></span>
              AI & Automation
              <span className="w-8 sm:w-12 h-px bg-mutedBlue"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {[
                {
                  icon: OpenAIIcon,
                  name: "OpenAI",
                  color: "text-green-500",
                  level: 75,
                },
                {
                  icon: N8nIcon,
                  name: "n8n",
                  color: "text-red-500",
                  level: 72,
                },
                {
                  icon: LangChainIcon,
                  name: "LangChain",
                  color: "text-orange-500",
                  level: 68,
                },
                {
                  icon: FaBrain,
                  name: "Generative AI",
                  color: "text-purple-500",
                  level: 70,
                },
                {
                  icon: FaHeart,
                  name: "AI/ML",
                  color: "text-pink-500",
                  level: 65,
                },
                {
                  icon: FaPython,
                  name: "Python AI",
                  color: "text-yellow-500",
                  level: 75,
                },
              ].map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03, type: "spring" }}
                    whileHover={{ scale: 1.15, y: -8 }}
                    className="group relative"
                  >
                    <div className="p-2.5 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-mutedBlue/50 transition-all duration-300 shadow-sm">
                      <IconComponent
                        className={`text-2xl sm:text-4xl md:text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-[8px] sm:text-xs text-deepCharcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-sm">
                        {skill.name} • {skill.level}%
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-base sm:text-xl font-semibold text-mutedBlue mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
              <span className="w-8 sm:w-12 h-px bg-mutedBlue"></span>
              CMS & Emerging Tech
              <span className="w-8 sm:w-12 h-px bg-mutedBlue"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {otherSkills.map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03, type: "spring" }}
                    whileHover={{ scale: 1.15, y: -8 }}
                    className="group relative"
                  >
                    <div className="p-2.5 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-mutedBlue/50 transition-all duration-300 shadow-sm">
                      <IconComponent
                        className={`text-2xl sm:text-4xl md:text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-[8px] sm:text-xs text-deepCharcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-sm">
                        {skill.name} • {skill.level}%
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Projects Slider Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-mutedBlue font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-deepCharcoal mt-2">
              Featured{" "}
              <span className="text-mutedBlue">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-mutedBlue mx-auto rounded-full mt-4" />
            <p className="text-deepCharcoal/70 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my expertise in
              web development and AI automation
            </p>
          </motion.div>

          <ProjectSlider projects={featuredProjects} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Dream Project?"
        subtitle="Let's collaborate and create something amazing together with cutting-edge technology and AI automation."
        buttonText="Get Started Now"
        buttonLink="/contact"
        variant="gradient"
      />
    </div>
  );
}

export default Home;