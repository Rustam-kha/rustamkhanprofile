// src/components/About.jsx
import { motion } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaAward,
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaBrain,
  FaRobot,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";
import {
  SiReact,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiShopify,
} from "react-icons/si";
import { OpenAIIcon, LangChainIcon, N8nIcon } from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const About = () => {
  const stats = [
    { value: "20+", label: "Projects", icon: FaCode },
    { value: "2+", label: "Years Exp", icon: FaRocket },
    { value: "8+", label: "Certificates", icon: FaAward },
    { value: "12+", label: "Clients", icon: FaUsers },
  ];

  const skills = [
    { name: "Agentic AI & Automation", level: 82 },
    { name: "MERN Stack Development", level: 88 },
    { name: "WordPress Development", level: 90 },
    { name: "Shopify Development", level: 80 },

    { name: "Python & AI", level: 75 },
  ];

  const techStack = [
    { icon: SiReact, label: "React", color: "text-cyan-400" },
    { icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
    { icon: SiExpress, label: "Express", color: "text-gray-300" },
    { icon: FaNodeJs, label: "Node.js", color: "text-green-400" },
    { icon: FaWordpress, label: "WordPress", color: "text-blue-400" },
    { icon: SiShopify, label: "Shopify", color: "text-green-400" },
    { icon: OpenAIIcon, label: "OpenAI", color: "text-emerald-400" },
    { icon: LangChainIcon, label: "LangChain", color: "text-orange-400" },
    { icon: N8nIcon, label: "n8n", color: "text-red-400" },
    { icon: FaBrain, label: "AI/ML", color: "text-purple-400" },
    { icon: FaRobot, label: "Agents", color: "text-pink-400" },
    { icon: SiTailwindcss, label: "Tailwind", color: "text-teal-400" },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div>
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 leading-tight">
                Full Stack Developer &
                <span className="block text-accent">Agentic AI Engineer</span>
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mt-4" />
            </div>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              I'm a passionate Full Stack Developer and Agentic AI Engineer
              building scalable web applications and intelligent automation
              systems. I specialize in the MERN stack, WordPress, Shopify, and
              cutting-edge AI technologies including OpenAI, LangChain, and n8n.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              My focus is on delivering high-quality solutions that leverage AI
              agents and modern web technologies to solve real business problems
              — from intelligent chatbots to fully automated workflows.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="px-6 py-2.5 bg-accent text-ink rounded-full text-sm font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="/resume"
                className="px-6 py-2.5 border border-white/15 rounded-full text-sm text-white font-semibold hover:bg-white/5 hover:border-accent/50 transition-all"
              >
                View Resume
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="group text-center p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 hover:bg-white/[0.06] transition-all"
                >
                  <s.icon className="text-accent text-lg mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="space-y-6"
          >
            {/* Skills */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <FaCode className="text-accent" />
                Core Skills
              </h3>
              <div className="space-y-4">
                {skills.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs sm:text-sm text-gray-300 mb-1.5">
                      <span>{s.name}</span>
                      <span className="text-accent">{s.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-5">Tech Stack</h3>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="group relative p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-accent/50 transition-all cursor-pointer"
                      title={t.label}
                    >
                      <Icon className={`text-xl ${t.color}`} />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Quick contact */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4">
                Quick Contact
              </h3>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:rmkhan0332@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors"
                >
                  <FaEnvelope className="text-accent shrink-0" />
                  <span className="break-all">rmkhan0332@gmail.com</span>
                </a>
                <a
                  href="tel:+923325577359"
                  className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors"
                >
                  <FaPhone className="text-accent shrink-0" />
                  <span>+92 332 5577359</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <FaMapMarkerAlt className="text-accent mt-0.5 shrink-0" />
                  <span>Bara, District Khyber, Pakistan</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <a
                    href="https://github.com/Rustam-kha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
                    aria-label="GitHub"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rustam-khan-87a7302b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;