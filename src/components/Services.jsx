// src/components/Services.jsx
import { motion } from "framer-motion";
import { 
  FaWordpress, 
  FaReact, 
  FaCode, 
  FaRocket, 
  FaRobot, 
  FaBrain,
  FaShoppingCart,
  FaServer,
  FaCloud,
  FaDatabase,
  FaTools,
  FaCogs,
  FaNetworkWired,
  FaPalette,
  FaMobileAlt,
  FaShieldAlt,
  FaChartLine,
  FaSearchDollar,
  FaUserCog,
  FaMagic,
  FaMicrochip,
  FaLaptopCode,
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
import { OpenAIIcon, LangChainIcon, N8nIcon } from "./icons";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "WordPress Development",
      icon: FaWordpress,
      description: "Custom WordPress development, theme customization, WooCommerce solutions, and plugin development with modern design.",
      features: ["Custom Themes", "WooCommerce", "Plugin Development", "Speed Optimization", "SEO Friendly"],
      color: "from-mutedBlue to-cyan-400",
      category: "Web Development"
    },
    {
      id: 2,
      title: "MERN Stack Development",
      icon: FaReact,
      description: "Full-stack web applications using MongoDB, Express.js, React.js, and Node.js with modern architecture.",
      features: ["RESTful APIs", "Real-time Apps", "Database Design", "Authentication", "Microservices"],
      color: "from-mutedBlue to-teal-400",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Shopify Development",
      icon: FaShoppingCart,
      description: "Custom Shopify store development, theme customization, app integration, and e-commerce solutions.",
      features: ["Custom Themes", "App Integration", "Payment Gateway", "SEO Optimization", "Store Setup"],
      color: "from-mutedBlue to-emerald-400",
      category: "E-Commerce"
    },
    {
      id: 4,
      title: "Next.js Development",
      icon: SiNextdotjs,
      description: "SEO-friendly React applications with Next.js, SSR, SSG, and modern web development practices.",
      features: ["SSR/SSG", "API Routes", "Image Optimization", "Performance", "TypeScript"],
      color: "from-mutedBlue to-purple-400",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Wix Development",
      icon: SiWix,
      description: "Custom Wix website development with Velo (Corvid) for advanced functionality and stunning design.",
      features: ["Custom Design", "Velo Coding", "App Integration", "SEO", "Responsive Design"],
      color: "from-mutedBlue to-indigo-400",
      category: "Web Development"
    },
    {
      id: 6,
      title: "n8n Automation",
      icon: N8nIcon,
      description: "Workflow automation with n8n, connecting various APIs and services seamlessly for business efficiency.",
      features: ["API Integration", "Workflow Design", "Data Processing", "Webhooks", "Automation"],
      color: "from-mutedBlue to-orange-400",
      category: "AI & Automation"
    },
    {
      id: 7,
      title: "OpenAI Integration",
      icon: OpenAIIcon,
      description: "Integrate OpenAI APIs for ChatGPT, DALL-E, GPT-4, and other AI capabilities into your applications.",
      features: ["ChatGPT API", "DALL-E Integration", "Fine-tuning", "AI Agents", "Embeddings"],
      color: "from-mutedBlue to-green-400",
      category: "AI & Automation"
    },
    {
      id: 8,
      title: "LangChain Solutions",
      icon: LangChainIcon,
      description: "Build intelligent applications with LangChain framework for LLM orchestration and complex AI workflows.",
      features: ["LLM Apps", "Agent Development", "Memory Management", "Chain Design", "Tools Integration"],
      color: "from-mutedBlue to-yellow-400",
      category: "AI & Automation"
    },
    {
      id: 9,
      title: "Generative AI Development",
      icon: FaBrain,
      description: "Build cutting-edge generative AI applications including content generation, image generation, and text-to-speech solutions.",
      features: ["Content Generation", "Image Generation", "Text-to-Speech", "AI Automation", "Prompt Engineering"],
      color: "from-mutedBlue to-rose-400",
      category: "AI & Automation"
    },
    {
      id: 10,
      title: "AI Agent Development",
      icon: FaRobot,
      description: "Develop intelligent AI agents for automation, customer support, data analysis, and business processes.",
      features: ["Chatbots", "Virtual Assistants", "Task Automation", "Data Analysis", "Decision Making"],
      color: "from-mutedBlue to-pink-400",
      category: "AI & Automation"
    },
    {
      id: 11,
      title: "API Development & Integration",
      icon: FaServer,
      description: "Design and develop RESTful and GraphQL APIs with robust authentication and documentation.",
      features: ["REST APIs", "GraphQL", "Authentication", "Documentation", "Rate Limiting"],
      color: "from-mutedBlue to-purple-400",
      category: "Backend"
    },
    {
      id: 12,
      title: "Database Design & Optimization",
      icon: FaDatabase,
      description: "Efficient database design, optimization, and management for MongoDB, SQL, and NoSQL databases.",
      features: ["MongoDB", "PostgreSQL", "MySQL", "Performance Optimization", "Data Modeling"],
      color: "from-mutedBlue to-blue-400",
      category: "Backend"
    },
    {
      id: 13,
      title: "DevOps & Cloud Services",
      icon: FaCloud,
      description: "Cloud deployment, CI/CD pipelines, and infrastructure management for scalable applications.",
      features: ["AWS", "Vercel", "Netlify", "Docker", "CI/CD"],
      color: "from-mutedBlue to-cyan-400",
      category: "DevOps"
    },
    {
      id: 14,
      title: "UI/UX Design",
      icon: FaPalette,
      description: "Modern, responsive, and user-centric design with Tailwind CSS, Figma, and Adobe XD.",
      features: ["Responsive Design", "Prototyping", "User Research", "Wireframing", "Visual Design"],
      color: "from-mutedBlue to-pink-400",
      category: "Design"
    },
    {
      id: 15,
      title: "Mobile App Development",
      icon: FaMobileAlt,
      description: "Cross-platform mobile applications using React Native and modern mobile development practices.",
      features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support", "App Store"],
      color: "from-mutedBlue to-indigo-400",
      category: "Mobile"
    },
    {
      id: 16,
      title: "E-Commerce Solutions",
      icon: FaShoppingCart,
      description: "Complete e-commerce solutions with payment gateway integration, inventory management, and more.",
      features: ["Payment Gateways", "Inventory Management", "Order Processing", "Customer Accounts", "Analytics"],
      color: "from-mutedBlue to-red-400",
      category: "E-Commerce"
    },
    {
      id: 17,
      title: "SEO & Digital Marketing",
      icon: FaChartLine,
      description: "On-page and off-page SEO optimization, content strategy, and digital marketing solutions.",
      features: ["On-page SEO", "Off-page SEO", "Content Strategy", "Analytics", "Keyword Research"],
      color: "from-mutedBlue to-yellow-400",
      category: "Digital Marketing"
    },
    {
      id: 18,
      title: "Security & Performance Optimization",
      icon: FaShieldAlt,
      description: "Web security implementation, performance optimization, and best practices for modern applications.",
      features: ["Security Audits", "Performance Tuning", "SSL/TLS", "Caching", "Optimization"],
      color: "from-mutedBlue to-purple-400",
      category: "Maintenance"
    },
  ];

  const categories = [...new Set(services.map(s => s.category))];

  return (
    <div className="py-20 bg-lightWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-mutedBlue font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-deepCharcoal mt-2">
            What I <span className="text-mutedBlue">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-mutedBlue mx-auto rounded-full mt-4" />
          <p className="text-deepCharcoal/70 mt-4 max-w-2xl mx-auto">
            Comprehensive web development and AI automation solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-6 border border-gray-200 hover:border-mutedBlue/50 transition-all duration-300 hover:shadow-xl hover:shadow-mutedBlue/10 shadow-sm">
                  <div className="mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${service.color} bg-opacity-20 text-deepCharcoal`}>
                      {service.category}
                    </span>
                  </div>

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>

                  <h3 className="text-xl font-semibold text-deepCharcoal mb-2 group-hover:text-mutedBlue transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-deepCharcoal/70 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-deepCharcoal/70 hover:border-mutedBlue/50 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full py-2 rounded-lg bg-mutedBlue/10 border border-mutedBlue/30 text-mutedBlue font-semibold hover:bg-mutedBlue/20 transition-all duration-300 text-sm"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-mutedBlue/10 border border-gray-200 rounded-3xl text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <div className="flex items-center gap-2">
              <FaMagic className="text-3xl text-mutedBlue" />
              <span className="text-deepCharcoal font-semibold">AI-Powered Solutions</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <FaMicrochip className="text-3xl text-mutedBlue" />
              <span className="text-deepCharcoal font-semibold">Cutting-Edge Technology</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <FaLaptopCode className="text-3xl text-mutedBlue" />
              <span className="text-deepCharcoal font-semibold">Custom Development</span>
            </div>
          </div>
          <p className="text-deepCharcoal/70 mt-4 text-sm">
            All services are backed by modern technologies, best practices, and a commitment to quality
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-mutedBlue rounded-full text-white font-semibold hover:shadow-lg hover:shadow-mutedBlue/25 transition-all duration-300"
          >
            <FaRocket className="text-sm" />
            Get Started with Your Project
            <FaCode className="text-sm" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;