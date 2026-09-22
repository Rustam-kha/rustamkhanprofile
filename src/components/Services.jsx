// src/components/Services.jsx
import { motion } from "framer-motion";
import {
  FaWordpress,
  FaRobot,
  FaReact,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { SiShopify } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Agentic AI & Automation",
      icon: FaRobot,
      description:
        "Intelligent AI agents, LLM-powered chatbots, and fully automated workflows with OpenAI, LangChain, and n8n.",
      features: [
        "Custom AI Agents",
        "OpenAI / GPT Integration",
        "LangChain Workflows",
        "n8n Automation",
        "RAG Pipelines",
        "Vector Databases",
      ],
      color: "from-emerald-400 to-cyan-400",
    },
    {
      id: 2,
      title: "MERN Stack Development",
      icon: FaReact,
      description:
        "Production-ready full stack web applications with React, Node.js, Express, and MongoDB — fast, scalable, secure.",
      features: [
        "React.js Frontend",
        "Node.js + Express APIs",
        "MongoDB Design",
        "Authentication (JWT)",
        "REST / GraphQL",
        "Deployment & CI/CD",
      ],
      color: "from-cyan-400 to-blue-400",
    },
    {
      id: 3,
      title: "WordPress Development",
      icon: FaWordpress,
      description:
        "Custom WordPress themes, WooCommerce stores, and plugin development built for performance and SEO.",
      features: [
        "Custom Themes",
        "WooCommerce Stores",
        "Plugin Development",
        "Speed Optimization",
        "SEO Setup",
        "Maintenance",
      ],
      color: "from-blue-400 to-indigo-400",
    },
    {
      id: 4,
      title: "Shopify Development",
      icon: SiShopify,
      description:
        "High-converting Shopify stores with custom themes, app integrations, and optimized checkout experiences.",
      features: [
        "Custom Liquid Themes",
        "Store Setup",
        "App Integration",
        "Payment Gateways",
        "Conversion Optimization",
        "Migration Support",
      ],
      color: "from-green-400 to-emerald-400",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            What I Offer
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            End-to-end development and AI automation services for modern
            businesses.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 hover:bg-white/[0.05] backdrop-blur-sm transition-all duration-300 overflow-hidden"
              >
                {/* Glow on hover */}
                <div
                  className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}
                />

                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-ink text-2xl" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {s.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {s.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-gray-400"
                      >
                        <FaCheck className="text-accent text-[10px] mt-1 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all mt-auto"
                  >
                    Get Started
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;