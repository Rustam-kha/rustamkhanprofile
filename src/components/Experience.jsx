// src/components/Experience.jsx
import { motion } from "framer-motion";
import {
  FaCode,
  FaWordpress,
  FaLaptopCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCheckCircle,
  FaTrophy,
  FaRobot,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "CodeAlpha",
      location: "Remote",
      period: "3 Months",
      type: "Internship",
      icon: FaCode,
      points: [
        "Built responsive web apps with React and Node.js",
        "Collaborated on real-world projects with mentors",
        "Delivered 5+ projects with strong reviews",
      ],
    },
    {
      title: "Junior WordPress Developer",
      company: "Logic Lumen System",
      location: "Peshawar, PK",
      period: "Summer Internship",
      type: "Internship",
      icon: FaWordpress,
      points: [
        "Customized themes and plugins for client sites",
        "Worked onsite with senior developers on live projects",
        "Assisted in 3 client deliverables",
      ],
    },
    {
      title: "WordPress & MERN Freelancer",
      company: "Self-Employed",
      location: "Remote",
      period: "2023 - Present",
      type: "Freelance",
      icon: FaLaptopCode,
      points: [
        "Delivered 10+ WordPress and MERN projects",
        "Built custom WooCommerce stores and web apps",
        "Maintained 5-star client satisfaction",
      ],
    },
  ];

  const skills = [
    { name: "Agentic AI / LLM", level: 82 },
    { name: "MERN Stack", level: 88 },
    { name: "WordPress / WooCommerce", level: 90 },
    { name: "Shopify", level: 80 },
    { name: "Next.js", level: 78 },
    { name: "Tailwind CSS", level: 92 },
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
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-6 md:gap-0`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20 z-10">
                    <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    } pl-10 md:pl-0`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 backdrop-blur-sm transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                          <Icon className="text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                            {exp.title}
                          </h3>
                          <p className="text-accent text-sm">{exp.company}</p>
                        </div>
                        <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-accent/15 text-accent text-[10px] font-bold uppercase tracking-wider shrink-0">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1.5">
                          <FaCalendarAlt className="text-accent" size={10} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaMapMarkerAlt className="text-accent" size={10} />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-1.5">
                        {exp.points.map((p, j) => (
                          <li
                            key={j}
                            className="text-sm text-gray-400 flex items-start gap-2"
                          >
                            <FaCheckCircle className="text-accent text-[10px] mt-1 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FaTrophy className="text-accent" />
            Technical Proficiency
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {skills.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                  <span className="text-gray-300">{s.name}</span>
                  <span className="text-accent font-mono">{s.level}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;