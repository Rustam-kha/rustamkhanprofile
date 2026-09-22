// src/components/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaRobot,
  FaBrain,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaMicrochip,
  FaStore,
  FaCheck,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiShopify,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";
import ProjectSlider from "./ProjectSlider";
import CTASection from "./CTASection";
import { OpenAIIcon, LangChainIcon, N8nIcon } from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const featuredProjects = [
  {
    id: 1,
    title: "Brookestone Funding",
    category: "WordPress",
    description:
      "Business financing platform with custom WordPress development.",
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
    title: "Daily Dish App",
    category: "MERN",
    description: "Full-stack food delivery platform with real-time tracking.",
    image: "/daily_dish.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://daily-dish-app.vercel.app/",
  },
];

/**
 * Skill categories — each category has its own accent gradient,
 * icon, description, and a list of technologies with levels.
 */
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "Pixel-perfect, accessible interfaces",
    icon: FaLaptopCode,
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    glow: "rgba(34,211,238,0.35)",
    description:
      "Building responsive, high-performance UIs with modern React tooling and design systems.",
    skills: [
      { name: "React.js", icon: FaReact, level: 92, tag: "Expert" },
      { name: "Next.js", icon: SiNextdotjs, level: 82, tag: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 94, tag: "Expert" },
      { name: "TypeScript", icon: SiTypescript, level: 78, tag: "Advanced" },
      { name: "JavaScript", icon: SiJavascript, level: 90, tag: "Expert" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    subtitle: "Scalable services & clean architecture",
    icon: FaServer,
    gradient: "from-emerald-400 via-green-500 to-teal-500",
    glow: "rgba(16,185,129,0.35)",
    description:
      "Designing REST & GraphQL APIs with Node.js, secure auth, and optimized database schemas.",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 88, tag: "Advanced" },
      { name: "Express.js", icon: SiExpress, level: 86, tag: "Advanced" },
      { name: "MongoDB", icon: SiMongodb, level: 82, tag: "Advanced" },
      { name: "GraphQL", icon: SiGraphql, level: 70, tag: "Intermediate" },
      { name: "Databases", icon: FaDatabase, level: 80, tag: "Advanced" },
    ],
  },
  {
    id: "ai",
    title: "Agentic AI & Automation",
    subtitle: "LLMs, agents & intelligent workflows",
    icon: FaMicrochip,
    gradient: "from-purple-400 via-fuchsia-500 to-pink-500",
    glow: "rgba(168,85,247,0.35)",
    description:
      "Building autonomous agents, RAG pipelines, and workflow automations that run without supervision.",
    skills: [
      { name: "OpenAI / GPT", icon: OpenAIIcon, level: 85, tag: "Advanced" },
      { name: "LangChain", icon: LangChainIcon, level: 78, tag: "Advanced" },
      { name: "n8n Automation", icon: N8nIcon, level: 82, tag: "Advanced" },
      { name: "AI Agents", icon: FaRobot, level: 76, tag: "Advanced" },
      { name: "ML / Deep AI", icon: FaBrain, level: 70, tag: "Intermediate" },
    ],
  },
  {
    id: "cms",
    title: "CMS & E-Commerce",
    subtitle: "Sites & stores that convert",
    icon: FaStore,
    gradient: "from-amber-400 via-orange-500 to-red-500",
    glow: "rgba(251,146,60,0.35)",
    description:
      "Custom WordPress themes, WooCommerce stores, and Shopify shops optimized for sales and SEO.",
    skills: [
      { name: "WordPress", icon: FaWordpress, level: 92, tag: "Expert" },
      { name: "Shopify", icon: SiShopify, level: 82, tag: "Advanced" },
      { name: "WooCommerce", icon: FaStore, level: 88, tag: "Advanced" },
      { name: "Elementor", icon: FaCode, level: 90, tag: "Expert" },
      { name: "Custom Themes", icon: FaCode, level: 85, tag: "Advanced" },
    ],
  },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/Rustam-kha", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/rustam-khan-87a7302b6/",
    label: "LinkedIn",
  },
];

/**
 * Single skill row inside a category card
 */
const SkillRow = ({ skill, index, accentColor }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group/skill flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-all"
    >
      <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover/skill:border-accent/50 group-hover/skill:scale-110 transition-all duration-300">
        <Icon className={`text-lg ${accentColor}`} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-sm font-medium text-white truncate">
            {skill.name}
          </span>
          <span className="text-[10px] font-mono text-gray-500 shrink-0">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + index * 0.06 }}
            className="h-full rounded-full bg-gradient-to-r from-accent to-accent/50"
          />
        </div>
      </div>

      <span className="hidden sm:inline-block text-[9px] font-semibold uppercase tracking-wider text-accent/80 bg-accent/10 border border-accent/20 px-1.5 py-0.5 rounded shrink-0">
        {skill.tag}
      </span>
    </motion.div>
  );
};

/**
 * One category card
 */
const SkillCategoryCard = ({ category, index }) => {
  const Icon = category.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="group relative p-5 sm:p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-500"
    >
      {/* Category glow on hover */}
      <div
        className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
        style={{ background: category.glow }}
      />

      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
      />

      {/* Header */}
      <div className="relative flex items-start gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shrink-0`}
        >
          <Icon className="text-ink text-lg" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
            {category.title}
          </h3>
          <p className="text-[11px] text-accent/90 font-mono uppercase tracking-wider mt-0.5">
            {category.subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="relative text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
        {category.description}
      </p>

      {/* Skills */}
      <div className="relative space-y-1">
        {category.skills.map((s, i) => (
          <SkillRow key={i} skill={s} index={i} accentColor="text-accent" />
        ))}
      </div>

      {/* Footer metric */}
      <div className="relative mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
          <FaCheck className="text-accent" size={9} />
          <span>{category.skills.length} core technologies</span>
        </div>
        <div className="text-[10px] font-mono text-accent/70">
          {category.id.toUpperCase()}.STACK
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
  });

  useEffect(() => {
    const targets = [
      { key: "projects", value: 20 },
      { key: "experience", value: 2 },
      { key: "clients", value: 20 },
    ];
    const timers = targets.map(({ key, value }) => {
      let current = 0;
      const step = value / 40;
      const t = setInterval(() => {
        current += step;
        if (current >= value) {
          setStats((prev) => ({ ...prev, [key]: value }));
          clearInterval(t);
        } else {
          setStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 30);
      return t;
    });
    return () => timers.forEach(clearInterval);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 25, stiffness: 250 };
  const x = useSpring(mouseX, springCfg);
  const y = useSpring(mouseY, springCfg);
  const rotateX = useTransform(y, [-300, 300], [12, -12]);
  const rotateY = useTransform(x, [-300, 300], [-12, 12]);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const handler = (e) => {
      const rect = document
        .getElementById("profile-container")
        ?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - (rect.left + rect.width / 2));
      mouseY.set(e.clientY - (rect.top + rect.height / 2));
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm mb-5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-mono text-accent">
                  Available for work
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-4"
              >
                Hi, I'm{" "}
                <span className="text-accent block sm:inline">Rustam Khan</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300 mb-5 h-8"
              >
                <ReactTyped
                  strings={[
                    "Agentic AI Engineer",
                    "MERN Stack Developer",
                    "WordPress Expert",
                    "Shopify Developer",
                    "Full Stack Developer",
                  ]}
                  typeSpeed={55}
                  backSpeed={35}
                  backDelay={1200}
                  loop
                  className="text-accent"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
              >
                I build intelligent AI agents and production-grade web
                applications. Specialized in{" "}
                <span className="text-accent">Agentic AI</span>,{" "}
                <span className="text-accent">MERN stack</span>,{" "}
                <span className="text-accent">WordPress</span>, and{" "}
                <span className="text-accent">Shopify</span> — turning ideas
                into automated, scalable products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 max-w-md mx-auto lg:mx-0"
              >
                {[
                  { label: "Projects", value: stats.projects, suffix: "+" },
                  { label: "Years Exp", value: stats.experience, suffix: "+" },
                  { label: "Clients", value: stats.clients, suffix: "+" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="text-center p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 transition-colors"
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      {s.value}
                      <span className="text-accent">{s.suffix}</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <Link
                  to="/portfolio"
                  className="px-6 sm:px-7 py-3 bg-accent text-ink rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all group"
                >
                  <FaRocket size={14} />
                  View Projects
                  <FaArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 sm:px-7 py-3 border border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white/5 hover:border-accent/50 transition-all"
                >
                  Let's Talk
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="flex gap-3 justify-center lg:justify-start mt-6"
              >
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: profile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div
                id="profile-container"
                style={{ perspective: "1000px" }}
                className="relative"
              >
                <motion.div
                  style={{
                    rotateX: window.innerWidth >= 1024 ? rotateX : 0,
                    rotateY: window.innerWidth >= 1024 ? rotateY : 0,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative"
                >
                  <div className="absolute -inset-4 rounded-full bg-accent/20 blur-3xl animate-pulse" />

                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#6ea8fe_90deg,transparent_180deg,#6ea8fe_270deg,transparent_360deg)]"
                    />
                  </div>

                  <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-ink shadow-2xl">
                    <img
                      src="/RUSTAM_KHAN_UPWORK_PROFILE.png"
                      alt="Rustam Khan"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {[
                    {
                      icon: OpenAIIcon,
                      pos: "-top-3 -right-2 sm:-top-4 sm:-right-4",
                      delay: 0,
                    },
                    {
                      icon: FaReact,
                      pos: "-bottom-3 -left-2 sm:-bottom-4 sm:-left-4",
                      delay: 1,
                    },
                    {
                      icon: FaWordpress,
                      pos: "top-1/2 -right-4 sm:-right-6",
                      delay: 0.5,
                    },
                    {
                      icon: SiShopify,
                      pos: "top-1/3 -left-4 sm:-left-6",
                      delay: 0.8,
                    },
                  ].map(({ icon: Icon, pos, delay }, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 3 + i * 0.4,
                        repeat: Infinity,
                        delay,
                      }}
                      className={`absolute ${pos} p-2.5 sm:p-3 rounded-2xl bg-ink/90 border border-accent/30 backdrop-blur-md shadow-xl`}
                    >
                      <Icon className="text-accent text-base sm:text-xl" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ SKILLS / EXPERTISE ============ */}
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14 sm:mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block text-accent font-semibold text-xs uppercase tracking-[0.25em] mb-3">
              Technical Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              A Stack Built for{" "}
              <span className="text-accent">Modern Products</span>
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full mx-auto mb-5" />
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              From AI agents to full-stack web apps — I bring end-to-end
              capability across frontend, backend, automation, and e-commerce.
            </p>
          </motion.div>

          {/* Category cards grid */}
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {skillCategories.map((c, i) => (
              <SkillCategoryCard key={c.id} category={c} index={i} />
            ))}
          </div>

          {/* Bottom stats strip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-accent/10 via-purple-500/5 to-cyan-500/10 border border-white/10 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "20+", label: "Technologies" },
                { value: "15+", label: "Projects Shipped" },
                { value: "12+", label: "Happy Clients" },
                { value: "100%", label: "On-time Delivery" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-bold text-accent">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              A glimpse of what I've built for clients.
            </p>
          </motion.div>

          <ProjectSlider projects={featuredProjects} />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTASection
        title="Ready to build with AI?"
        subtitle="Let's turn your idea into an intelligent, automated product."
        buttonText="Start a Project"
        buttonLink="/contact"
        variant="gradient"
      />
    </div>
  );
};

export default Home;