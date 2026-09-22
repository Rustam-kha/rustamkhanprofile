// src/components/ProjectSlider.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const ProjectSlider = ({ projects = [] }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + projects.length) % projects.length);
  };

  useEffect(() => {
    if (projects.length < 2) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [index, projects.length]);

  if (!projects.length) return null;

  const current = projects[index];

  const variants = {
    enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: (d) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm">
      <div className="relative h-[400px] sm:h-[480px] md:h-[560px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark overlay bottom-up so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-12">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-3">
                  {current.category}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  {current.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-2">
                  {current.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {current.technologies?.slice(0, 4).map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-white/10 text-gray-200 text-[10px] sm:text-xs backdrop-blur-sm border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={current.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-ink rounded-full text-xs sm:text-sm font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all group"
                >
                  <FaExternalLinkAlt size={12} />
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-ink/60 hover:bg-accent/80 backdrop-blur-md text-white border border-white/10 transition-all z-10"
        >
          <FaArrowLeft size={14} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-ink/60 hover:bg-accent/80 backdrop-blur-md text-white border border-white/10 transition-all z-10"
        >
          <FaArrowRight size={14} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;