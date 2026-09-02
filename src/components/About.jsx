// src/components/About.jsx
import { motion } from "framer-motion";
import {
  FaCode,
  FaUser,
  FaAward,
  FaRocket,
  FaLaptopCode,
  FaWordpress,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaBrain,
  FaRobot,
  FaNetworkWired,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { OpenAIIcon, LangChainIcon, N8nIcon } from "./icons";

const About = () => {
  const stats = [
    {
      label: "Projects Completed",
      value: "15+",
      icon: FaCode,
      color: "from-mutedBlue to-blue-400",
    },
    {
      label: "Years Experience",
      value: "1+",
      icon: FaRocket,
      color: "from-mutedBlue to-purple-400",
    },
    {
      label: "Certifications",
      value: "8+",
      icon: FaAward,
      color: "from-mutedBlue to-green-400",
    },
    {
      label: "Happy Clients",
      value: "12+",
      icon: FaUser,
      color: "from-mutedBlue to-orange-400",
    },
  ];

  const skills = [
    { name: "Web Development", level: 90, color: "from-mutedBlue to-blue-400" },
    {
      name: "AI & Automation",
      level: 75,
      color: "from-mutedBlue to-purple-400",
    },
    { name: "WordPress", level: 85, color: "from-mutedBlue to-cyan-400" },
    { name: "MERN Stack", level: 82, color: "from-mutedBlue to-emerald-400" },
    { name: "UI/UX Design", level: 70, color: "from-mutedBlue to-orange-400" },
    {
      name: "Python Development",
      level: 75,
      color: "from-mutedBlue to-yellow-400",
    },
  ];

  const techIcons = [
    { icon: FaReact, label: "React", color: "text-cyan-600" },
    { icon: SiNextdotjs, label: "Next.js", color: "text-deepCharcoal" },
    { icon: FaWordpress, label: "WordPress", color: "text-blue-600" },
    { icon: FaNodeJs, label: "Node.js", color: "text-green-600" },
    { icon: SiMongodb, label: "MongoDB", color: "text-green-700" },
    { icon: FaPython, label: "Python", color: "text-yellow-600" },
    { icon: OpenAIIcon, label: "OpenAI", color: "text-green-500" },
    { icon: N8nIcon, label: "n8n", color: "text-red-500" },
    { icon: LangChainIcon, label: "LangChain", color: "text-orange-500" },
    { icon: FaBrain, label: "AI/ML", color: "text-purple-500" },
    { icon: SiTailwindcss, label: "Tailwind", color: "text-teal-500" },
    { icon: SiDocker, label: "Docker", color: "text-blue-500" },
  ];

  return (
    <div className="py-20 bg-lightWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <span className="text-mutedBlue font-semibold text-sm uppercase tracking-wider">
                  About Me
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-deepCharcoal mt-2">
                  Full Stack Developer &
                  <span className="text-mutedBlue block">
                    AI Automation Expert
                  </span>
                </h2>
                <div className="w-20 h-1 bg-mutedBlue rounded-full mt-4" />
              </div>

              <p className="text-deepCharcoal/70 leading-relaxed">
                I'm a passionate Full Stack Developer and AI Automation Expert
                with a strong foundation in modern web technologies and
                artificial intelligence. With 1+ years of experience, I
                specialize in building scalable web applications and intelligent
                automation solutions.
              </p>

              <p className="text-deepCharcoal/70 leading-relaxed">
                My expertise spans across the MERN stack, WordPress development,
                and cutting-edge AI technologies including OpenAI, LangChain,
                and n8n automation. I'm committed to delivering high-quality
                solutions that leverage the power of AI to solve real-world
                problems.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-6 py-2.5 bg-mutedBlue rounded-full text-white font-semibold hover:shadow-lg hover:shadow-mutedBlue/25 transition-all duration-300"
                >
                  Get in Touch
                </a>
                <a
                  href="/resume"
                  className="px-6 py-2.5 border border-mutedBlue/30 rounded-full text-deepCharcoal font-semibold hover:bg-mutedBlue/10 transition-all duration-300"
                >
                  View Resume
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white rounded-xl border border-gray-200 hover:border-mutedBlue/50 transition-all duration-300"
                  >
                    <div
                      className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-2`}
                    >
                      <stat.icon className="text-white text-lg" />
                    </div>
                    <div className="text-xl font-bold text-deepCharcoal">
                      {stat.value}
                    </div>
                    <div className="text-xs text-deepCharcoal/60">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Tech */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-deepCharcoal mb-6 flex items-center gap-2">
                <FaCode className="text-mutedBlue" />
                Core Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-deepCharcoal/80 mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-deepCharcoal mb-6 flex items-center gap-2">
                <FaLaptopCode className="text-mutedBlue" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techIcons.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, y: -5 }}
                      className="group relative"
                    >
                      <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-mutedBlue/50 transition-all duration-300">
                        <IconComponent
                          className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform`}
                        />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-deepCharcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {tech.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Contact Info Quick */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-deepCharcoal mb-4 flex items-center gap-2">
                <FaUser className="text-mutedBlue" />
                Contact Info
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:rmkhan0332@gmail.com"
                  className="flex items-center gap-3 text-deepCharcoal/70 hover:text-mutedBlue transition-colors text-sm"
                >
                  <FaEnvelope className="text-mutedBlue" />
                  rmkhan0332@gmail.com
                </a>
                <a
                  href="tel:+923325577359"
                  className="flex items-center gap-3 text-deepCharcoal/70 hover:text-mutedBlue transition-colors text-sm"
                >
                  <FaPhone className="text-mutedBlue" />
                  +92 332 5577359
                </a>
                <div className="flex items-start gap-3 text-deepCharcoal/70 text-sm">
                  <FaMapMarkerAlt className="text-mutedBlue mt-1" />
                  <span>
                    Shahlabor Qamber Khel, Bara, District Khyber, Pakistan
                  </span>
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://github.com/Rustam-kha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-deepCharcoal/60 hover:text-mutedBlue hover:border-mutedBlue/50 transition-all"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rustam-khan-87a7302b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-deepCharcoal/60 hover:text-mutedBlue hover:border-mutedBlue/50 transition-all"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;